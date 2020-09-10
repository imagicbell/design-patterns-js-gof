/**
 * The singleton pattern ensures only one instance can be created. 
 * It can be applied to the senarios like global managers, databases, etc.
 */

class Manager {
  constructor() {
    if (typeof Manager.instance === 'object') {
      return Manager.instance;
    }
    Manager.instance = this;
    return this;
  }
}

export default Manager;