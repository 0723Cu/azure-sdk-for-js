# Release History
    
## 8.0.0-beta.4 (2023-02-13)
    
**Features**

  - Added operation group AzureMonitorWorkspaces
  - Added operation group MetricsOperations
  - Added operation group MonitorOperations
  - Added operation group PredictiveMetric
  - Added operation ActionGroups.beginCreateNotificationsAtActionGroupResourceLevel
  - Added operation ActionGroups.beginCreateNotificationsAtActionGroupResourceLevelAndWait
  - Added operation ActionGroups.beginCreateNotificationsAtResourceGroupLevel
  - Added operation ActionGroups.beginCreateNotificationsAtResourceGroupLevelAndWait
  - Added operation ActionGroups.getTestNotificationsAtActionGroupResourceLevel
  - Added operation ActionGroups.getTestNotificationsAtResourceGroupLevel
  - Added operation DataCollectionRuleAssociations.listByDataCollectionEndpoint
  - Added Interface AccessModeSettings
  - Added Interface AccessModeSettingsExclusion
  - Added Interface ActionGroup
  - Added Interface ActionGroupResource
  - Added Interface ActionGroupsCreateNotificationsAtActionGroupResourceLevelHeaders
  - Added Interface ActionGroupsCreateNotificationsAtActionGroupResourceLevelOptionalParams
  - Added Interface ActionGroupsCreateNotificationsAtResourceGroupLevelHeaders
  - Added Interface ActionGroupsCreateNotificationsAtResourceGroupLevelOptionalParams
  - Added Interface ActionGroupsGetTestNotificationsAtActionGroupResourceLevelOptionalParams
  - Added Interface ActionGroupsGetTestNotificationsAtResourceGroupLevelOptionalParams
  - Added Interface ActionGroupsPostTestNotificationsHeaders
  - Added Interface ActionList
  - Added Interface Actions
  - Added Interface ActivityLogAlertResource
  - Added Interface ActivityLogAlertsListByResourceGroupNextOptionalParams
  - Added Interface ActivityLogAlertsListBySubscriptionIdNextOptionalParams
  - Added Interface AlertRuleAllOfCondition
  - Added Interface AlertRuleAnyOfOrLeafCondition
  - Added Interface AlertRuleLeafCondition
  - Added Interface AlertRuleList
  - Added Interface AlertRulePatchObject
  - Added Interface AlertRuleResource
  - Added Interface AutoscaleErrorResponse
  - Added Interface AutoscaleErrorResponseError
  - Added Interface AutoscaleSettingResource
  - Added Interface AzureMonitorPrivateLinkScope
  - Added Interface AzureMonitorWorkspace
  - Added Interface AzureMonitorWorkspaceDefaultIngestionSettings
  - Added Interface AzureMonitorWorkspaceMetrics
  - Added Interface AzureMonitorWorkspaceResource
  - Added Interface AzureMonitorWorkspaceResourceForUpdate
  - Added Interface AzureMonitorWorkspaceResourceListResult
  - Added Interface AzureMonitorWorkspaceResourceProperties
  - Added Interface AzureMonitorWorkspacesCreateOptionalParams
  - Added Interface AzureMonitorWorkspacesDeleteOptionalParams
  - Added Interface AzureMonitorWorkspacesGetOptionalParams
  - Added Interface AzureMonitorWorkspacesListByResourceGroupNextOptionalParams
  - Added Interface AzureMonitorWorkspacesListByResourceGroupOptionalParams
  - Added Interface AzureMonitorWorkspacesListBySubscriptionNextOptionalParams
  - Added Interface AzureMonitorWorkspacesListBySubscriptionOptionalParams
  - Added Interface AzureMonitorWorkspacesUpdateOptionalParams
  - Added Interface AzureResourceAutoGenerated
  - Added Interface ColumnDefinition
  - Added Interface Condition
  - Added Interface ConditionFailingPeriods
  - Added Interface DataCollectionEndpointConfigurationAccess
  - Added Interface DataCollectionEndpointLogsIngestion
  - Added Interface DataCollectionEndpointNetworkAcls
  - Added Interface DataCollectionEndpointResourceProperties
  - Added Interface DataCollectionEndpointResourceSystemData
  - Added Interface DataCollectionRuleAssociationMetadata
  - Added Interface DataCollectionRuleAssociationProxyOnlyResourceProperties
  - Added Interface DataCollectionRuleAssociationProxyOnlyResourceSystemData
  - Added Interface DataCollectionRuleAssociationsListByDataCollectionEndpointNextOptionalParams
  - Added Interface DataCollectionRuleAssociationsListByDataCollectionEndpointOptionalParams
  - Added Interface DataCollectionRuleDataSources
  - Added Interface DataCollectionRuleDestinations
  - Added Interface DataCollectionRuleMetadata
  - Added Interface DataCollectionRuleResourceProperties
  - Added Interface DataCollectionRuleResourceSystemData
  - Added Interface DefaultErrorResponse
  - Added Interface DestinationsSpecAzureMonitorMetrics
  - Added Interface DiagnosticSettingsCategoryResource
  - Added Interface DiagnosticSettingsResource
  - Added Interface DynamicMetricCriteria
  - Added Interface ErrorDetailAutoGenerated
  - Added Interface ErrorResponseAdditionalInfo
  - Added Interface ErrorResponseAutoGenerated
  - Added Interface ErrorResponseAutoGenerated2
  - Added Interface ErrorResponseDetails
  - Added Interface Identity
  - Added Interface IisLogsDataSource
  - Added Interface IngestionSettings
  - Added Interface LocationThresholdRuleCondition
  - Added Interface LogFilesDataSource
  - Added Interface LogFilesDataSourceSettings
  - Added Interface LogFileSettings
  - Added Interface LogFileSettingsText
  - Added Interface LogFileTextSettings
  - Added Interface LogProfileResource
  - Added Interface ManagementEventRuleCondition
  - Added Interface Metadata
  - Added Interface MetricAlertMultipleResourceMultipleMetricCriteria
  - Added Interface MetricAlertResource
  - Added Interface MetricAlertSingleResourceMultipleMetricCriteria
  - Added Interface MetricCriteria
  - Added Interface Metrics
  - Added Interface MonitorOperationsListNextOptionalParams
  - Added Interface MonitorOperationsListOptionalParams
  - Added Interface OperationAutoGenerated
  - Added Interface OperationDisplayAutoGenerated
  - Added Interface OperationListResultAutoGenerated
  - Added Interface PredictiveAutoscalePolicy
  - Added Interface PredictiveMetricGetOptionalParams
  - Added Interface PredictiveResponse
  - Added Interface PredictiveValue
  - Added Interface PrivateEndpoint
  - Added Interface PrivateEndpointConnection
  - Added Interface PrivateLinkResource
  - Added Interface PrivateLinkServiceConnectionState
  - Added Interface ProxyResourceAutoGenerated
  - Added Interface ResourceAutoGenerated2
  - Added Interface ResourceAutoGenerated3
  - Added Interface ResourceAutoGenerated4
  - Added Interface ResourceAutoGenerated5
  - Added Interface RuleEmailAction
  - Added Interface RuleManagementEventDataSource
  - Added Interface RuleMetricDataSource
  - Added Interface RuleResolveConfiguration
  - Added Interface RuleWebhookAction
  - Added Interface ScheduledQueryRuleCriteria
  - Added Interface ScheduledQueryRuleResource
  - Added Interface ScheduledQueryRuleResourceCollection
  - Added Interface ScheduledQueryRuleResourcePatch
  - Added Interface ScheduledQueryRulesListByResourceGroupNextOptionalParams
  - Added Interface ScheduledQueryRulesListBySubscriptionNextOptionalParams
  - Added Interface ScopedResource
  - Added Interface StreamDeclaration
  - Added Interface ThresholdRuleCondition
  - Added Interface TrackedResource
  - Added Interface TrackedResourceAutoGenerated
  - Added Interface UserIdentityProperties
  - Added Interface VMInsightsOnboardingStatus
  - Added Interface WebtestLocationAvailabilityCriteria
  - Added Type Alias AccessMode
  - Added Type Alias ActionGroupsCreateNotificationsAtActionGroupResourceLevelResponse
  - Added Type Alias ActionGroupsCreateNotificationsAtResourceGroupLevelResponse
  - Added Type Alias ActionGroupsGetTestNotificationsAtActionGroupResourceLevelResponse
  - Added Type Alias ActionGroupsGetTestNotificationsAtResourceGroupLevelResponse
  - Added Type Alias ActionType
  - Added Type Alias ActivityLogAlertsListByResourceGroupNextResponse
  - Added Type Alias ActivityLogAlertsListBySubscriptionIdNextResponse
  - Added Type Alias AzureMonitorWorkspacesCreateResponse
  - Added Type Alias AzureMonitorWorkspacesGetResponse
  - Added Type Alias AzureMonitorWorkspacesListByResourceGroupNextResponse
  - Added Type Alias AzureMonitorWorkspacesListByResourceGroupResponse
  - Added Type Alias AzureMonitorWorkspacesListBySubscriptionNextResponse
  - Added Type Alias AzureMonitorWorkspacesListBySubscriptionResponse
  - Added Type Alias AzureMonitorWorkspacesUpdateResponse
  - Added Type Alias DataCollectionRuleAssociationsListByDataCollectionEndpointNextResponse
  - Added Type Alias DataCollectionRuleAssociationsListByDataCollectionEndpointResponse
  - Added Type Alias DimensionOperator
  - Added Type Alias IdentityType
  - Added Type Alias Kind
  - Added Type Alias KnownColumnDefinitionType
  - Added Type Alias KnownLogFilesDataSourceFormat
  - Added Type Alias KnownLogFileTextSettingsRecordStartTimestampFormat
  - Added Type Alias MonitorOperationsListNextResponse
  - Added Type Alias MonitorOperationsListResponse
  - Added Type Alias Origin
  - Added Type Alias PredictiveAutoscalePolicyScaleMode
  - Added Type Alias PredictiveMetricGetResponse
  - Added Type Alias PrivateEndpointConnectionProvisioningState
  - Added Type Alias PrivateEndpointServiceConnectionStatus
  - Added Type Alias PublicNetworkAccess
  - Added Type Alias ScheduledQueryRulesListByResourceGroupNextResponse
  - Added Type Alias ScheduledQueryRulesListBySubscriptionNextResponse
  - Added Type Alias TimeAggregation
  - Interface AutoscaleSettingResourcePatch has a new optional parameter predictiveAutoscalePolicy
  - Interface DataCollectionRule has a new optional parameter dataCollectionEndpointId
  - Interface DataCollectionRule has a new optional parameter metadata
  - Interface DataCollectionRule has a new optional parameter streamDeclarations
  - Interface DataCollectionRuleAssociation has a new optional parameter metadata
  - Interface DataCollectionRuleAssociationProxyOnlyResource has a new optional parameter metadata
  - Interface DataCollectionRuleResource has a new optional parameter dataCollectionEndpointId
  - Interface DataCollectionRuleResource has a new optional parameter metadata
  - Interface DataCollectionRuleResource has a new optional parameter streamDeclarations
  - Interface DataFlow has a new optional parameter outputStream
  - Interface DataFlow has a new optional parameter transformKql
  - Interface DataSourcesSpec has a new optional parameter iisLogs
  - Interface DataSourcesSpec has a new optional parameter logFiles
  - Interface LogSettings has a new optional parameter categoryGroup
  - Interface Resource has a new optional parameter systemData
  - Added Enum KnownAccessMode
  - Added Enum KnownActionType
  - Added Enum KnownCategoryType
  - Added Enum KnownDimensionOperator
  - Added Enum KnownKind
  - Added Enum KnownKnownColumnDefinitionType
  - Added Enum KnownKnownLogFilesDataSourceFormat
  - Added Enum KnownKnownLogFileTextSettingsRecordStartTimestampFormat
  - Added Enum KnownOrigin
  - Added Enum KnownPrivateEndpointConnectionProvisioningState
  - Added Enum KnownPrivateEndpointServiceConnectionStatus
  - Added Enum KnownPublicNetworkAccess
  - Added Enum KnownTimeAggregation
  - Enum KnownProvisioningState has a new value Creating
  - Enum KnownProvisioningState has a new value Deleting
  - Added function getContinuationToken

**Breaking Changes**

  - Removed operation group Metrics
  - Operation ActivityLogAlerts.update has a new signature
  - Operation ScheduledQueryRules.createOrUpdate has a new signature
  - Operation ScheduledQueryRules.update has a new signature
  - Interface ActivityLogsListNextOptionalParams no longer has parameter select
  - Interface AzureResource no longer has parameter identity
  - Interface AzureResource no longer has parameter kind
  - Interface PrivateEndpointConnectionListResult no longer has parameter nextLink
  - Interface PrivateLinkResourceListResult no longer has parameter nextLink
  - Interface ResourceAutoGenerated no longer has parameter etag
  - Interface ResourceAutoGenerated no longer has parameter kind
  - Interface ScheduledQueryRulesListByResourceGroupOptionalParams no longer has parameter filter
  - Interface ScheduledQueryRulesListBySubscriptionOptionalParams no longer has parameter filter
  - Interface TenantActivityLogsListNextOptionalParams no longer has parameter filter
  - Interface TenantActivityLogsListNextOptionalParams no longer has parameter select
  - Type of parameter operator of interface Dimension is changed from Operator to DimensionOperator
  - Type of parameter error of interface ErrorContract is changed from ErrorResponse to ErrorResponseDetails
  - Type of parameter error of interface OperationStatus is changed from ErrorResponseCommon to ErrorDetail
  - Class MonitorClient no longer has parameter metrics
  - Removed Enum KnownConditionalOperator
  - Removed Enum KnownEnabled
  - Removed Enum KnownMetricTriggerType
  - Removed Enum KnownQueryType
  - Enum KnownOperator no longer has value Include
  - Enum KnownProvisioningState no longer has value Deploying
    
    
## 7.0.0 (2021-12-20)

The package of @azure/arm-monitor is using our next generation design principles since version 7.0.0, which contains breaking changes.

To understand the detail of the change, please refer to [Changelog](https://aka.ms/js-track2-changelog).

To migrate the existing applications to the latest version, please refer to [Migration Guide](https://aka.ms/js-track2-migration-guide).

To learn more, please refer to our documentation [Quick Start](https://aka.ms/js-track2-quickstart).
