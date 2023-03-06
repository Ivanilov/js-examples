const createElementWithParams = (name, params = null) => {
    const el = document.createElement(name);
    if (params) {
      Object.entries(params).forEach(param => {
        el[param[0]] = param[1];
      });
    }
    
    return el;
};

export { createElementWithParams };