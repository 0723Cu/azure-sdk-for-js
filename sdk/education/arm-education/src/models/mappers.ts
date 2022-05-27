/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";

export const OperationListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "OperationListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Operation"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Operation: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Operation",
    modelProperties: {
      name: {
        serializedName: "name",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      isDataAction: {
        serializedName: "isDataAction",
        readOnly: true,
        type: {
          name: "Boolean"
        }
      },
      display: {
        serializedName: "display",
        type: {
          name: "Composite",
          className: "OperationDisplay"
        }
      },
      origin: {
        serializedName: "origin",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      actionType: {
        serializedName: "actionType",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const OperationDisplay: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "OperationDisplay",
    modelProperties: {
      provider: {
        serializedName: "provider",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      resource: {
        serializedName: "resource",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      operation: {
        serializedName: "operation",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      description: {
        serializedName: "description",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ErrorResponseBody: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ErrorResponseBody",
    modelProperties: {
      error: {
        serializedName: "error",
        type: {
          name: "Composite",
          className: "ErrorResponse"
        }
      }
    }
  }
};

export const ErrorResponse: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ErrorResponse",
    modelProperties: {
      code: {
        serializedName: "code",
        type: {
          name: "String"
        }
      },
      message: {
        serializedName: "message",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const GrantListResponse: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GrantListResponse",
    modelProperties: {
      value: {
        serializedName: "value",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "GrantDetails"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Amount: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Amount",
    modelProperties: {
      currency: {
        serializedName: "currency",
        type: {
          name: "String"
        }
      },
      value: {
        serializedName: "value",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const Resource: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Resource",
    modelProperties: {
      id: {
        serializedName: "id",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      type: {
        serializedName: "type",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      systemData: {
        serializedName: "systemData",
        type: {
          name: "Composite",
          className: "SystemData"
        }
      }
    }
  }
};

export const SystemData: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SystemData",
    modelProperties: {
      createdBy: {
        serializedName: "createdBy",
        type: {
          name: "String"
        }
      },
      createdByType: {
        serializedName: "createdByType",
        type: {
          name: "String"
        }
      },
      createdAt: {
        serializedName: "createdAt",
        type: {
          name: "DateTime"
        }
      },
      lastModifiedBy: {
        serializedName: "lastModifiedBy",
        type: {
          name: "String"
        }
      },
      lastModifiedByType: {
        serializedName: "lastModifiedByType",
        type: {
          name: "String"
        }
      },
      lastModifiedAt: {
        serializedName: "lastModifiedAt",
        type: {
          name: "DateTime"
        }
      }
    }
  }
};

export const LabListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "LabListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "LabDetails"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const InviteCodeGenerateRequest: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "InviteCodeGenerateRequest",
    modelProperties: {
      maxStudentCount: {
        serializedName: "maxStudentCount",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const JoinRequestList: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "JoinRequestList",
    modelProperties: {
      value: {
        serializedName: "value",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "JoinRequestDetails"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const RedeemRequest: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RedeemRequest",
    modelProperties: {
      redeemCode: {
        serializedName: "redeemCode",
        required: true,
        type: {
          name: "String"
        }
      },
      firstName: {
        serializedName: "firstName",
        required: true,
        type: {
          name: "String"
        }
      },
      lastName: {
        serializedName: "lastName",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const StudentListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "StudentListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "StudentDetails"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const StudentLabListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "StudentLabListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "StudentLabDetails"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const GrantDetails: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GrantDetails",
    modelProperties: {
      ...Resource.type.modelProperties,
      offerCap: {
        serializedName: "properties.offerCap",
        type: {
          name: "Composite",
          className: "Amount"
        }
      },
      effectiveDate: {
        serializedName: "properties.effectiveDate",
        readOnly: true,
        type: {
          name: "DateTime"
        }
      },
      offerType: {
        serializedName: "properties.offerType",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      expirationDate: {
        serializedName: "properties.expirationDate",
        readOnly: true,
        type: {
          name: "DateTime"
        }
      },
      status: {
        serializedName: "properties.status",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      allocatedBudget: {
        serializedName: "properties.allocatedBudget",
        type: {
          name: "Composite",
          className: "Amount"
        }
      }
    }
  }
};

export const LabDetails: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "LabDetails",
    modelProperties: {
      ...Resource.type.modelProperties,
      displayName: {
        serializedName: "properties.displayName",
        type: {
          name: "String"
        }
      },
      budgetPerStudent: {
        serializedName: "properties.budgetPerStudent",
        type: {
          name: "Composite",
          className: "Amount"
        }
      },
      description: {
        serializedName: "properties.description",
        type: {
          name: "String"
        }
      },
      expirationDate: {
        serializedName: "properties.expirationDate",
        type: {
          name: "DateTime"
        }
      },
      effectiveDate: {
        serializedName: "properties.effectiveDate",
        readOnly: true,
        type: {
          name: "DateTime"
        }
      },
      status: {
        serializedName: "properties.status",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      maxStudentCount: {
        serializedName: "properties.maxStudentCount",
        readOnly: true,
        type: {
          name: "Number"
        }
      },
      invitationCode: {
        serializedName: "properties.invitationCode",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      currencyPropertiesTotalAllocatedBudgetCurrency: {
        serializedName: "properties.totalAllocatedBudget.currency",
        type: {
          name: "String"
        }
      },
      valuePropertiesTotalAllocatedBudgetValue: {
        serializedName: "properties.totalAllocatedBudget.value",
        type: {
          name: "Number"
        }
      },
      currencyPropertiesTotalBudgetCurrency: {
        serializedName: "properties.totalBudget.currency",
        type: {
          name: "String"
        }
      },
      valuePropertiesTotalBudgetValue: {
        serializedName: "properties.totalBudget.value",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const JoinRequestDetails: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "JoinRequestDetails",
    modelProperties: {
      ...Resource.type.modelProperties,
      firstName: {
        serializedName: "properties.firstName",
        type: {
          name: "String"
        }
      },
      lastName: {
        serializedName: "properties.lastName",
        type: {
          name: "String"
        }
      },
      email: {
        serializedName: "properties.email",
        type: {
          name: "String"
        }
      },
      status: {
        serializedName: "properties.status",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const StudentDetails: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "StudentDetails",
    modelProperties: {
      ...Resource.type.modelProperties,
      firstName: {
        serializedName: "properties.firstName",
        type: {
          name: "String"
        }
      },
      lastName: {
        serializedName: "properties.lastName",
        type: {
          name: "String"
        }
      },
      email: {
        serializedName: "properties.email",
        type: {
          name: "String"
        }
      },
      role: {
        serializedName: "properties.role",
        type: {
          name: "String"
        }
      },
      budget: {
        serializedName: "properties.budget",
        type: {
          name: "Composite",
          className: "Amount"
        }
      },
      subscriptionId: {
        serializedName: "properties.subscriptionId",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      expirationDate: {
        serializedName: "properties.expirationDate",
        type: {
          name: "DateTime"
        }
      },
      status: {
        serializedName: "properties.status",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      effectiveDate: {
        serializedName: "properties.effectiveDate",
        readOnly: true,
        type: {
          name: "DateTime"
        }
      },
      subscriptionAlias: {
        serializedName: "properties.subscriptionAlias",
        type: {
          name: "String"
        }
      },
      subscriptionInviteLastSentDate: {
        serializedName: "properties.subscriptionInviteLastSentDate",
        type: {
          name: "DateTime"
        }
      }
    }
  }
};

export const StudentLabDetails: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "StudentLabDetails",
    modelProperties: {
      ...Resource.type.modelProperties,
      displayName: {
        serializedName: "properties.displayName",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      description: {
        serializedName: "properties.description",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      expirationDate: {
        serializedName: "properties.expirationDate",
        readOnly: true,
        type: {
          name: "DateTime"
        }
      },
      role: {
        serializedName: "properties.role",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      budget: {
        serializedName: "properties.budget",
        type: {
          name: "Composite",
          className: "Amount"
        }
      },
      subscriptionId: {
        serializedName: "properties.subscriptionId",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      status: {
        serializedName: "properties.status",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      effectiveDate: {
        serializedName: "properties.effectiveDate",
        readOnly: true,
        type: {
          name: "DateTime"
        }
      },
      labScope: {
        serializedName: "properties.labScope",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};