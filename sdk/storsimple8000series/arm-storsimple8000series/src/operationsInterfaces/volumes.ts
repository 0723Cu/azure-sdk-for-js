/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { PollerLike, PollOperationState } from "@azure/core-lro";
import {
  Volume,
  VolumesListByVolumeContainerOptionalParams,
  Metrics,
  VolumesListMetricsOptionalParams,
  MetricDefinition,
  VolumesListMetricDefinitionOptionalParams,
  VolumesListByDeviceOptionalParams,
  VolumesGetOptionalParams,
  VolumesGetResponse,
  VolumesCreateOrUpdateOptionalParams,
  VolumesCreateOrUpdateResponse,
  VolumesDeleteOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Volumes. */
export interface Volumes {
  /**
   * Retrieves all the volumes in a volume container.
   * @param deviceName The device name
   * @param volumeContainerName The volume container name.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param options The options parameters.
   */
  listByVolumeContainer(
    deviceName: string,
    volumeContainerName: string,
    resourceGroupName: string,
    managerName: string,
    options?: VolumesListByVolumeContainerOptionalParams
  ): PagedAsyncIterableIterator<Volume>;
  /**
   * Gets the metrics for the specified volume.
   * @param deviceName The device name
   * @param volumeContainerName The volume container name.
   * @param volumeName The volume name.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param filter OData Filter options
   * @param options The options parameters.
   */
  listMetrics(
    deviceName: string,
    volumeContainerName: string,
    volumeName: string,
    resourceGroupName: string,
    managerName: string,
    filter: string,
    options?: VolumesListMetricsOptionalParams
  ): PagedAsyncIterableIterator<Metrics>;
  /**
   * Gets the metric definitions for the specified volume.
   * @param deviceName The device name
   * @param volumeContainerName The volume container name.
   * @param volumeName The volume name.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param options The options parameters.
   */
  listMetricDefinition(
    deviceName: string,
    volumeContainerName: string,
    volumeName: string,
    resourceGroupName: string,
    managerName: string,
    options?: VolumesListMetricDefinitionOptionalParams
  ): PagedAsyncIterableIterator<MetricDefinition>;
  /**
   * Retrieves all the volumes in a device.
   * @param deviceName The device name
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param options The options parameters.
   */
  listByDevice(
    deviceName: string,
    resourceGroupName: string,
    managerName: string,
    options?: VolumesListByDeviceOptionalParams
  ): PagedAsyncIterableIterator<Volume>;
  /**
   * Returns the properties of the specified volume name.
   * @param deviceName The device name
   * @param volumeContainerName The volume container name.
   * @param volumeName The volume name.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param options The options parameters.
   */
  get(
    deviceName: string,
    volumeContainerName: string,
    volumeName: string,
    resourceGroupName: string,
    managerName: string,
    options?: VolumesGetOptionalParams
  ): Promise<VolumesGetResponse>;
  /**
   * Creates or updates the volume.
   * @param deviceName The device name
   * @param volumeContainerName The volume container name.
   * @param volumeName The volume name.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param parameters Volume to be created or updated.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    deviceName: string,
    volumeContainerName: string,
    volumeName: string,
    resourceGroupName: string,
    managerName: string,
    parameters: Volume,
    options?: VolumesCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<VolumesCreateOrUpdateResponse>,
      VolumesCreateOrUpdateResponse
    >
  >;
  /**
   * Creates or updates the volume.
   * @param deviceName The device name
   * @param volumeContainerName The volume container name.
   * @param volumeName The volume name.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param parameters Volume to be created or updated.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    deviceName: string,
    volumeContainerName: string,
    volumeName: string,
    resourceGroupName: string,
    managerName: string,
    parameters: Volume,
    options?: VolumesCreateOrUpdateOptionalParams
  ): Promise<VolumesCreateOrUpdateResponse>;
  /**
   * Deletes the volume.
   * @param deviceName The device name
   * @param volumeContainerName The volume container name.
   * @param volumeName The volume name.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param options The options parameters.
   */
  beginDelete(
    deviceName: string,
    volumeContainerName: string,
    volumeName: string,
    resourceGroupName: string,
    managerName: string,
    options?: VolumesDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Deletes the volume.
   * @param deviceName The device name
   * @param volumeContainerName The volume container name.
   * @param volumeName The volume name.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    deviceName: string,
    volumeContainerName: string,
    volumeName: string,
    resourceGroupName: string,
    managerName: string,
    options?: VolumesDeleteOptionalParams
  ): Promise<void>;
}