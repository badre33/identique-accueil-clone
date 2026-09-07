import type { AttributionData } from "@/lib/tracking";

const HUBSPOT_PORTAL_ID = "149257234";
const HUBSPOT_FORM_ID = "e0f0b94e-c2f0-405e-a974-9d98f344070b";
const HUBSPOT_SUBMISSION_URL = `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${HUBSPOT_FORM_ID}`;

interface HubSpotLead {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  summary: string;
  attribution: AttributionData;
}

const splitName = (fullName: string) => {
  const parts = fullName.trim().split(/\s+/).filter(Boolean);
  return {
    firstname: parts[0] || "",
    lastname: parts.slice(1).join(" "),
  };
};

const attributionLines = (attribution: AttributionData) =>
  Object.entries(attribution)
    .filter(([, value]) => Boolean(value))
    .map(([key, value]) => `${key}: ${value}`)
    .join("\n");

export const submitLeadToHubSpot = async (lead: HubSpotLead) => {
  const { firstname, lastname } = splitName(lead.fullName);
  const attribution = attributionLines(lead.attribution);
  const controller = new AbortController();
  const timeout = window.setTimeout(() => controller.abort(), 8000);

  try {
    const response = await fetch(HUBSPOT_SUBMISSION_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      signal: controller.signal,
      body: JSON.stringify({
        submittedAt: Date.now(),
        fields: [
          { objectTypeId: "0-1", name: "email", value: lead.email },
          { objectTypeId: "0-1", name: "firstname", value: firstname },
          { objectTypeId: "0-1", name: "lastname", value: lastname },
          { objectTypeId: "0-1", name: "phone", value: lead.phone },
          { objectTypeId: "0-1", name: "company", value: lead.company },
          {
            objectTypeId: "0-1",
            name: "message",
            value: attribution ? `${lead.summary}\n\nAttribution :\n${attribution}` : lead.summary,
          },
        ],
        context: {
          pageUri: window.location.href,
          pageName: document.title,
        },
        legalConsentOptions: {
          consent: {
            consentToProcess: true,
            text: "La personne a accepté que Link Agency utilise ses informations pour étudier sa demande et lui répondre.",
            communications: [],
          },
        },
      }),
    });

    return { ok: response.ok, status: response.status };
  } catch {
    return { ok: false, status: 0 };
  } finally {
    window.clearTimeout(timeout);
  }
};

