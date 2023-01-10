/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { VirtualNetworkSubnetUsage } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { PostgreSQLManagementFlexibleServerClient } from "../postgreSQLManagementFlexibleServerClient";
import {
  VirtualNetworkSubnetUsageParameter,
  VirtualNetworkSubnetUsageExecuteOptionalParams,
  VirtualNetworkSubnetUsageExecuteResponse
} from "../models";

/** Class containing VirtualNetworkSubnetUsage operations. */
export class VirtualNetworkSubnetUsageImpl
  implements VirtualNetworkSubnetUsage {
  private readonly client: PostgreSQLManagementFlexibleServerClient;

  /**
   * Initialize a new instance of the class VirtualNetworkSubnetUsage class.
   * @param client Reference to the service client
   */
  constructor(client: PostgreSQLManagementFlexibleServerClient) {
    this.client = client;
  }

  /**
   * Get virtual network subnet usage for a given vNet resource id.
   * @param locationName The name of the location.
   * @param parameters The required parameters for creating or updating a server.
   * @param options The options parameters.
   */
  execute(
    locationName: string,
    parameters: VirtualNetworkSubnetUsageParameter,
    options?: VirtualNetworkSubnetUsageExecuteOptionalParams
  ): Promise<VirtualNetworkSubnetUsageExecuteResponse> {
    return this.client.sendOperationRequest(
      { locationName, parameters, options },
      executeOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const executeOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.DBforPostgreSQL/locations/{locationName}/checkVirtualNetworkSubnetUsage",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.VirtualNetworkSubnetUsageResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.parameters8,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.locationName
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
