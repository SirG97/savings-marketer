export const getModelType = (modelString) => {
    const modelMap = {
      "App\\Models\\SuperAdmin": "super admin",
      "App\\Models\\Admin": "manager",
      "App\\Models\\Auditor": "auditor",
      "App\\Models\\Marketer": "marketer"
    };
  
    return modelMap[modelString] || "Unknown model";
}

export const getModelColor = (modelString) => {
    const modelMap = {
      "App\\Models\\SuperAdmin": "error",
      "App\\Models\\Admin": "warning",
      "App\\Models\\Auditor": "unknown",
      "App\\Models\\Marketer": "primary",
      "paid": "success",
      "pending": "unknown",
      "due": "warning",
      "approved": "primary",
      "rejected": "error",
      "overdue": "error",
      "loan_debit": "error",
      "loan_credit": "success"
      
    };
  
    return modelMap[modelString] || "unknown";
}

export const getPaymentMethod = (modelString) => {
  const modelMap = {
    "cash": "error",
    "bank": "primary"

  };

  return modelMap[modelString] || "unknown";
}

export const getStatusColor = (modelString) => {
  const modelMap = {
    "cash": "error",
    "bank": "primary"
  };

  return modelMap[modelString] || "unknown";
}


export const getStatusText = (modelString) => {
  const modelMap = {
    "cash": "error",
    "bank": "primary"
  };

  return modelMap[modelString] || "unknown";
}