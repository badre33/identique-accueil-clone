
interface CacheOptions {
  ttl?: number; // Time to live in milliseconds
  maxSize?: number; // Maximum number of items in cache
}

class CacheManager {
  private cache = new Map<string, { data: any; timestamp: number; ttl: number }>();
  private maxSize: number;

  constructor(maxSize = 50) {
    this.maxSize = maxSize;
  }

  set(key: string, data: any, ttl = 300000) { // Default 5 minutes
    // Remove oldest items if cache is full
    if (this.cache.size >= this.maxSize) {
      const firstKey = this.cache.keys().next().value;
      this.cache.delete(firstKey);
    }

    this.cache.set(key, {
      data,
      timestamp: Date.now(),
      ttl
    });
  }

  get(key: string) {
    const item = this.cache.get(key);
    
    if (!item) return null;
    
    // Check if item has expired
    if (Date.now() - item.timestamp > item.ttl) {
      this.cache.delete(key);
      return null;
    }
    
    return item.data;
  }

  clear() {
    this.cache.clear();
  }

  delete(key: string) {
    this.cache.delete(key);
  }
}

const cacheManager = new CacheManager();

export const useCache = () => {
  const setCache = (key: string, data: any, options?: CacheOptions) => {
    cacheManager.set(key, data, options?.ttl);
  };

  const getCache = (key: string) => {
    return cacheManager.get(key);
  };

  const clearCache = () => {
    cacheManager.clear();
  };

  const deleteCache = (key: string) => {
    cacheManager.delete(key);
  };

  return {
    setCache,
    getCache,
    clearCache,
    deleteCache
  };
};
