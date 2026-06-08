// Local database using IndexedDB
export class BEHDatabase {
  constructor() {
    this.db = null;
  }

  async init() {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open("BEH", 1);

      request.onerror = () => reject(request.error);
      
      request.onsuccess = () => {
        this.db = request.result;
        console.log("✅ Database initialized");
        resolve();
      };

      request.onupgradeneeded = (event) => {
        const db = event.target.result;
        const stores = ["messages", "memory", "reflections", "tasks", "notes"];
        
        for (const store of stores) {
          if (!db.objectStoreNames.contains(store)) {
            if (store === "memory") {
              db.createObjectStore(store, { keyPath: "type" });
            } else {
              db.createObjectStore(store, { keyPath: "id", autoIncrement: true });
            }
          }
        }
      };
    });
  }

  async addMessage(message) {
    const tx = this.db.transaction("messages", "readwrite");
    return new Promise((resolve) => {
      const req = tx.objectStore("messages").add({
        ...message,
        timestamp: Date.now()
      });
      req.onsuccess = () => resolve(req.result);
    });
  }

  async getMessages(limit = 50) {
    const tx = this.db.transaction("messages", "readonly");
    return new Promise((resolve) => {
      const req = tx.objectStore("messages").getAll();
      req.onsuccess = () => {
        const messages = req.result.slice(-limit);
        resolve(messages);
      };
    });
  }

  async setMemory(type, data) {
    const tx = this.db.transaction("memory", "readwrite");
    return new Promise((resolve) => {
      const req = tx.objectStore("memory").put({ type, data });
      req.onsuccess = () => resolve();
    });
  }

  async getMemory(type) {
    const tx = this.db.transaction("memory", "readonly");
    return new Promise((resolve) => {
      const req = tx.objectStore("memory").get(type);
      req.onsuccess = () => {
        const result = req.result?.data || null;
        resolve(result);
      };
    });
  }

  async getAllMemory() {
    const tx = this.db.transaction("memory", "readonly");
    return new Promise((resolve) => {
      const req = tx.objectStore("memory").getAll();
      req.onsuccess = () => {
        const result = {};
        req.result.forEach(item => {
          result[item.type] = item.data;
        });
        resolve(result);
      };
    });
  }

  // Reset all data
  async resetAll() {
    const stores = ["messages", "memory", "reflections", "tasks", "notes"];
    const tx = this.db.transaction(stores, "readwrite");
    
    return new Promise((resolve, reject) => {
      for (const store of stores) {
        tx.objectStore(store).clear();
      }
      
      tx.oncomplete = () => {
        console.log("✅ All data cleared");
        resolve();
      };
      
      tx.onerror = () => {
        reject(tx.error);
      };
    });
  }

  // Delete entire database
  async deleteDatabase() {
    return new Promise((resolve, reject) => {
      const deleteRequest = indexedDB.deleteDatabase("BEH");
      
      deleteRequest.onsuccess = () => {
        console.log("✅ Database deleted");
        resolve();
      };
      
      deleteRequest.onerror = () => {
        reject(deleteRequest.error);
      };
    });
  }
}

export const db = new BEHDatabase();
