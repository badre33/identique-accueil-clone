
import { ChevronRight, Home } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  const breadcrumbNameMap: { [key: string]: string } = {
    'branding': 'Branding',
    'evenementiel': 'Événementiel',
    'personal-branding': 'Personal Branding',
    'content-digital': 'Content Digital',
    'marketing-digital': 'Marketing Digital',
    'conseil-strategique': 'Conseil Stratégique',
    'inside-link': 'Inside Link',
    'collaborations': 'Collaborations',
  };

  if (pathnames.length === 0) return null;

  return (
    <nav className="bg-gray-50 border-b border-gray-200 py-3 px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <ol className="flex items-center space-x-2 text-sm">
          <li>
            <Link 
              to="/" 
              className="flex items-center text-gray-600 hover:text-black transition-colors"
            >
              <Home className="w-4 h-4 mr-1" />
              Accueil
            </Link>
          </li>
          
          {pathnames.map((name, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
            const isLast = index === pathnames.length - 1;
            const displayName = breadcrumbNameMap[name] || name;

            return (
              <li key={name} className="flex items-center">
                <ChevronRight className="w-4 h-4 text-gray-400 mx-2" />
                {isLast ? (
                  <span className="text-black font-medium">{displayName}</span>
                ) : (
                  <Link 
                    to={routeTo}
                    className="text-gray-600 hover:text-black transition-colors"
                  >
                    {displayName}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
};
