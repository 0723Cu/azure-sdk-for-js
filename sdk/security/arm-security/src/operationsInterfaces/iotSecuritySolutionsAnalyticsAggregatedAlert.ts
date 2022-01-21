/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  IoTSecurityAggregatedAlert,
  IotSecuritySolutionsAnalyticsAggregatedAlertListOptionalParams,
  IotSecuritySolutionsAnalyticsAggregatedAlertGetOptionalParams,
  IotSecuritySolutionsAnalyticsAggregatedAlertGetResponse,
  IotSecuritySolutionsAnalyticsAggregatedAlertDismissOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a IotSecuritySolutionsAnalyticsAggregatedAlert. */
export interface IotSecuritySolutionsAnalyticsAggregatedAlert {
  /**
   * Use this method to get the aggregated alert list of yours IoT Security solution.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param solutionName The name of the IoT Security solution.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    solutionName: string,
    options?: IotSecuritySolutionsAnalyticsAggregatedAlertListOptionalParams
  ): PagedAsyncIterableIterator<IoTSecurityAggregatedAlert>;
  /**
   * Use this method to get a single the aggregated alert of yours IoT Security solution. This
   * aggregation is performed by alert name.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param solutionName The name of the IoT Security solution.
   * @param aggregatedAlertName Identifier of the aggregated alert.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    solutionName: string,
    aggregatedAlertName: string,
    options?: IotSecuritySolutionsAnalyticsAggregatedAlertGetOptionalParams
  ): Promise<IotSecuritySolutionsAnalyticsAggregatedAlertGetResponse>;
  /**
   * Use this method to dismiss an aggregated IoT Security Solution Alert.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param solutionName The name of the IoT Security solution.
   * @param aggregatedAlertName Identifier of the aggregated alert.
   * @param options The options parameters.
   */
  dismiss(
    resourceGroupName: string,
    solutionName: string,
    aggregatedAlertName: string,
    options?: IotSecuritySolutionsAnalyticsAggregatedAlertDismissOptionalParams
  ): Promise<void>;
}