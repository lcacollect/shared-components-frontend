import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql'
import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> }
const defaultOptions = {} as const
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  /** Date (isoformat) */
  Date: any
  /** Date with time (isoformat) */
  DateTime: any
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any
  _FieldSet: any
}

export type AssemblyLayerDeleteInput = {
  id: Scalars['String']
}

export type AssemblyLayerInput = {
  conversionFactor?: InputMaybe<Scalars['Float']>
  epdId: Scalars['String']
  id?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
}

export type AssemblyLayerUpdateInput = {
  conversionFactor?: InputMaybe<Scalars['Float']>
  epdId?: InputMaybe<Scalars['String']>
  id: Scalars['String']
  name?: InputMaybe<Scalars['String']>
}

export enum AssigneeType {
  ProjectMember = 'PROJECT_MEMBER',
  User = 'USER',
}

export type CommentFilters = {
  added?: InputMaybe<FilterOptions>
  id?: InputMaybe<FilterOptions>
  text?: InputMaybe<FilterOptions>
}

export type CommitFilters = {
  added?: InputMaybe<FilterOptions>
  id?: InputMaybe<FilterOptions>
  shortId?: InputMaybe<FilterOptions>
}

export type EpdFilters = {
  category?: InputMaybe<FilterOptions>
  id?: InputMaybe<FilterOptions>
  name?: InputMaybe<FilterOptions>
  owner?: InputMaybe<FilterOptions>
  region?: InputMaybe<FilterOptions>
  source?: InputMaybe<FilterOptions>
  type?: InputMaybe<FilterOptions>
  unit?: InputMaybe<FilterOptions>
}

export type EpdSort = {
  category?: InputMaybe<SortOptions>
  name?: InputMaybe<SortOptions>
  owner?: InputMaybe<SortOptions>
  region?: InputMaybe<SortOptions>
  source?: InputMaybe<SortOptions>
  type?: InputMaybe<SortOptions>
  unit?: InputMaybe<SortOptions>
}

export type FilterOptions = {
  contains?: InputMaybe<Scalars['String']>
  endsWith?: InputMaybe<Scalars['String']>
  equal?: InputMaybe<Scalars['String']>
  isAnyOf?: InputMaybe<Array<Scalars['String']>>
  isEmpty?: InputMaybe<Scalars['Boolean']>
  isNotEmpty?: InputMaybe<Scalars['Boolean']>
  startsWith?: InputMaybe<Scalars['String']>
}

export type GraphQlAssembly = {
  __typename?: 'GraphQLAssembly'
  category: Scalars['String']
  conversionFactor: Scalars['Float']
  description: Scalars['String']
  gwp: Scalars['Float']
  id: Scalars['String']
  layers: Array<GraphQlAssemblyLayer>
  lifeTime: Scalars['Float']
  metaFields: Scalars['JSON']
  name: Scalars['String']
  unit: Scalars['String']
}

export type GraphQlAssemblyGwpArgs = {
  phases?: InputMaybe<Array<Scalars['String']>>
}

export type GraphQlAssemblyLayer = {
  __typename?: 'GraphQLAssemblyLayer'
  conversionFactor?: Maybe<Scalars['Float']>
  epdId: Scalars['String']
  epdName: Scalars['String']
  id?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
}

export type GraphQlAssignee = {
  id: Scalars['String']
  type: AssigneeType
}

export type GraphQlComment = {
  __typename?: 'GraphQLComment'
  added: Scalars['DateTime']
  author?: Maybe<GraphQlProjectMember>
  authorId: Scalars['String']
  id: Scalars['ID']
  task: GraphQlTask
  text: Scalars['String']
}

export type GraphQlCommit = {
  __typename?: 'GraphQLCommit'
  added: Scalars['Date']
  authorId?: Maybe<Scalars['String']>
  id: Scalars['String']
  parentId?: Maybe<Scalars['String']>
  reportingSchemaId: Scalars['String']
  repositoryId: Scalars['String']
  schemaCategories?: Maybe<Array<GraphQlSchemaCategory>>
  schemaElements?: Maybe<Array<GraphQlSchemaElement>>
  shortId: Scalars['String']
  tags?: Maybe<Array<GraphQlTag>>
  tasks?: Maybe<Array<GraphQlTask>>
}

export type GraphQlepd = {
  __typename?: 'GraphQLEPD'
  ap: Scalars['Float']
  apByPhases: Scalars['JSON']
  category: Scalars['String']
  dateUpdated: Scalars['Date']
  ep: Scalars['Float']
  epByPhases: Scalars['JSON']
  expirationDate: Scalars['Date']
  gwp: Scalars['Float']
  gwpByPhases: Scalars['JSON']
  id: Scalars['String']
  name: Scalars['String']
  odp: Scalars['Float']
  odpByPhases: Scalars['JSON']
  originId?: Maybe<Scalars['String']>
  owner: Scalars['String']
  penreByPhases: Scalars['JSON']
  pereByPhases: Scalars['JSON']
  pocp: Scalars['Float']
  pocpByPhases: Scalars['JSON']
  region: Scalars['String']
  source: Scalars['String']
  sourceData: Scalars['String']
  type: Scalars['String']
  unit?: Maybe<Scalars['String']>
  version: Scalars['String']
}

export type GraphQlepdApArgs = {
  phases?: InputMaybe<Array<Scalars['String']>>
}

export type GraphQlepdEpArgs = {
  phases?: InputMaybe<Array<Scalars['String']>>
}

export type GraphQlepdGwpArgs = {
  phases?: InputMaybe<Array<Scalars['String']>>
}

export type GraphQlepdOdpArgs = {
  phases?: InputMaybe<Array<Scalars['String']>>
}

export type GraphQlepdPocpArgs = {
  phases?: InputMaybe<Array<Scalars['String']>>
}

export type GraphQlepdConnection = {
  __typename?: 'GraphQLEPDConnection'
  edges: Array<GraphQlepdEdge>
  numEdges: Scalars['Int']
  pageInfo: PageInfo
}

export type GraphQlepdEdge = {
  __typename?: 'GraphQLEPDEdge'
  cursor: Scalars['String']
  node: GraphQlepd
}

export type GraphQlLifeCycleStage = {
  __typename?: 'GraphQLLifeCycleStage'
  category: Scalars['String']
  id: Scalars['String']
  name: Scalars['String']
  phase: Scalars['String']
}

export type GraphQlProject = {
  __typename?: 'GraphQLProject'
  address?: Maybe<Scalars['String']>
  city?: Maybe<Scalars['String']>
  client?: Maybe<Scalars['String']>
  country?: Maybe<Scalars['String']>
  domain?: Maybe<ProjectDomain>
  groups?: Maybe<Array<GraphQlProjectGroup>>
  id: Scalars['String']
  imageUrl?: Maybe<Scalars['String']>
  members?: Maybe<Array<GraphQlProjectMember>>
  metaFields?: Maybe<Scalars['JSON']>
  name: Scalars['String']
  projectId?: Maybe<Scalars['ID']>
  stages?: Maybe<Array<GraphQlProjectStage>>
}

export type GraphQlProjectEpd = {
  __typename?: 'GraphQLProjectEPD'
  ap: Scalars['Float']
  apByPhases: Scalars['JSON']
  assemblies?: Maybe<Array<GraphQlAssembly>>
  category: Scalars['String']
  dateUpdated: Scalars['Date']
  ep: Scalars['Float']
  epByPhases: Scalars['JSON']
  expirationDate: Scalars['Date']
  gwp: Scalars['Float']
  gwpByPhases: Scalars['JSON']
  id: Scalars['String']
  kgPerM2?: Maybe<Scalars['Float']>
  kgPerM3?: Maybe<Scalars['Float']>
  name: Scalars['String']
  odp: Scalars['Float']
  odpByPhases: Scalars['JSON']
  originId: Scalars['String']
  owner: Scalars['String']
  penreByPhases: Scalars['JSON']
  pereByPhases: Scalars['JSON']
  pocp: Scalars['Float']
  pocpByPhases: Scalars['JSON']
  region: Scalars['String']
  source: Scalars['String']
  sourceData: Scalars['String']
  thickness?: Maybe<Scalars['Float']>
  type: Scalars['String']
  unit?: Maybe<Scalars['String']>
  version: Scalars['String']
}

export type GraphQlProjectEpdApArgs = {
  phases?: InputMaybe<Array<Scalars['String']>>
}

export type GraphQlProjectEpdEpArgs = {
  phases?: InputMaybe<Array<Scalars['String']>>
}

export type GraphQlProjectEpdGwpArgs = {
  phases?: InputMaybe<Array<Scalars['String']>>
}

export type GraphQlProjectEpdOdpArgs = {
  phases?: InputMaybe<Array<Scalars['String']>>
}

export type GraphQlProjectEpdPocpArgs = {
  phases?: InputMaybe<Array<Scalars['String']>>
}

export type GraphQlProjectGroup = {
  __typename?: 'GraphQLProjectGroup'
  id: Scalars['ID']
  lead?: Maybe<GraphQlProjectMember>
  leadId?: Maybe<Scalars['String']>
  members?: Maybe<Array<GraphQlProjectMember>>
  name: Scalars['String']
  projectId: Scalars['String']
}

export type GraphQlProjectMember = {
  __typename?: 'GraphQLProjectMember'
  company?: Maybe<Scalars['String']>
  email: Scalars['String']
  id: Scalars['ID']
  lastLogin?: Maybe<Scalars['Date']>
  leaderOf?: Maybe<Array<GraphQlProjectGroup>>
  name: Scalars['String']
  projectGroups?: Maybe<Array<GraphQlProjectGroup>>
  projectId: Scalars['ID']
  userId: Scalars['String']
}

export type GraphQlProjectMemberGraphQlProjectGroup = GraphQlProjectGroup | GraphQlProjectMember

export type GraphQlProjectSource = {
  __typename?: 'GraphQLProjectSource'
  author: GraphQlProjectMember
  authorId: Scalars['String']
  dataId: Scalars['String']
  elements?: Maybe<Array<GraphQlSchemaElement>>
  fileUrl?: Maybe<Scalars['String']>
  id: Scalars['ID']
  interpretation: Scalars['JSON']
  metaFields: Scalars['JSON']
  name: Scalars['String']
  projectId: Scalars['String']
  type: ProjectSourceType
  updated: Scalars['DateTime']
}

export type GraphQlProjectSourceFile = {
  __typename?: 'GraphQLProjectSourceFile'
  dataId: Scalars['String']
  headers: Scalars['JSON']
  rows: Scalars['JSON']
}

export type GraphQlProjectStage = {
  __typename?: 'GraphQLProjectStage'
  category: Scalars['String']
  name: Scalars['String']
  phase: Scalars['String']
  projectId: Scalars['String']
  stageId: Scalars['String']
}

export type GraphQlReportingCreationSchema = {
  __typename?: 'GraphQLReportingCreationSchema'
  id: Scalars['String']
  name: Scalars['String']
  projectId?: Maybe<Scalars['String']>
}

export type GraphQlReportingSchema = {
  __typename?: 'GraphQLReportingSchema'
  categories?: Maybe<Array<GraphQlSchemaCategory>>
  id: Scalars['String']
  name: Scalars['String']
  projectId: Scalars['String']
  templateId?: Maybe<Scalars['String']>
}

export type GraphQlSchemaCategory = {
  __typename?: 'GraphQLSchemaCategory'
  commits?: Maybe<Array<GraphQlCommit>>
  depth: Scalars['Int']
  description?: Maybe<Scalars['String']>
  elements?: Maybe<Array<GraphQlSchemaElement>>
  id: Scalars['String']
  name: Scalars['String']
  path: Scalars['String']
  reportingSchema: GraphQlReportingSchema
  reportingSchemaId?: Maybe<Scalars['String']>
}

export type GraphQlSchemaElement = {
  __typename?: 'GraphQLSchemaElement'
  commits: Array<GraphQlCommit>
  description?: Maybe<Scalars['String']>
  id: Scalars['String']
  name: Scalars['String']
  quantity: Scalars['Float']
  result?: Maybe<Scalars['JSON']>
  schemaCategory: GraphQlSchemaCategory
  source?: Maybe<GraphQlProjectSource>
  unit: Unit
}

export type GraphQlSchemaElementGraphQlSchemaCategory = GraphQlSchemaCategory | GraphQlSchemaElement

export type GraphQlSchemaTemplate = {
  __typename?: 'GraphQLSchemaTemplate'
  id: Scalars['String']
  name: Scalars['String']
  schema?: Maybe<GraphQlReportingSchema>
}

export type GraphQlTag = {
  __typename?: 'GraphQLTag'
  added: Scalars['Date']
  authorId: Scalars['String']
  commit: GraphQlCommit
  commitId: Scalars['String']
  id: Scalars['String']
  name: Scalars['String']
  shortId: Scalars['String']
}

export type GraphQlTask = {
  __typename?: 'GraphQLTask'
  assignedGroupId?: Maybe<Scalars['String']>
  assignee: GraphQlProjectMemberGraphQlProjectGroup
  assigneeId?: Maybe<Scalars['String']>
  author: GraphQlProjectMember
  authorId: Scalars['String']
  comments?: Maybe<Array<GraphQlComment>>
  commits: Array<GraphQlCommit>
  description: Scalars['String']
  dueDate: Scalars['Date']
  id: Scalars['ID']
  item: GraphQlSchemaElementGraphQlSchemaCategory
  name: Scalars['String']
  reportingSchema: GraphQlReportingSchema
  reportingSchemaId: Scalars['String']
  status: TaskStatus
}

export type GraphQlUserAccount = {
  __typename?: 'GraphQLUserAccount'
  email: Scalars['String']
  id: Scalars['String']
  name: Scalars['String']
  roles: Array<Scalars['String']>
  tenantId: Scalars['String']
}

export type Mutation = {
  __typename?: 'Mutation'
  addAssembly: GraphQlAssembly
  addAssemblyLayers: Array<GraphQlAssemblyLayer>
  /** Add a comment to a task */
  addComment: GraphQlComment
  /** Add a Project */
  addProject: GraphQlProject
  addProjectEpd: GraphQlProjectEpd
  /** Add a Project Group */
  addProjectGroup: GraphQlProjectGroup
  /** Add a Project Member */
  addProjectMember: GraphQlProjectMember
  /** Add Project Members to an existing Project Group */
  addProjectMembersToGroup: GraphQlProjectGroup
  /** Add a Project Source */
  addProjectSource: GraphQlProjectSource
  /** Add a life cycle stage to a project */
  addProjectStage: GraphQlProjectStage
  /**
   * Add a Reporting Schema to a project.
   * Concurrently updates the Schema Template to
   * hold the Reporting Schema.
   */
  addReportingSchema: GraphQlReportingCreationSchema
  /**
   * Add a Reporting Schema to a project.
   * Concurrently updates the Schema Template to
   * hold the Reporting Schema.
   */
  addReportingSchemaFromTemplate: GraphQlReportingCreationSchema
  /** Add a Schema Category to a Reporting Schema */
  addSchemaCategory: GraphQlSchemaCategory
  /** Add a Schema Element to a Schema Category */
  addSchemaElement: GraphQlSchemaElement
  /** Add a Schema Element to a Schema Category */
  addSchemaElementFromSource: Array<GraphQlSchemaElement>
  /** Add a Schema Template */
  addSchemaTemplate: GraphQlSchemaTemplate
  /** Add a Task to a Reporting Schema */
  addTask: GraphQlTask
  /** Add a new tag. */
  createTag: GraphQlTag
  deleteAssembly: Scalars['String']
  deleteAssemblyLayers: Array<Scalars['String']>
  /** Delete a comment */
  deleteComment: Scalars['String']
  /** Delete a project */
  deleteProject: Scalars['String']
  deleteProjectEpd: Scalars['String']
  /** Delete a project group */
  deleteProjectGroup: Scalars['String']
  /** Delete a Project Member */
  deleteProjectMember: Scalars['String']
  /** Delete a project source */
  deleteProjectSource: Scalars['String']
  /** Remove a life cycle stage from a project */
  deleteProjectStage: Scalars['String']
  /** Delete a Reporting Schema */
  deleteReportingSchema: Scalars['String']
  /** Delete a Schema Category */
  deleteSchemaCategory: Scalars['String']
  /** Delete a Schema Element */
  deleteSchemaElement: Scalars['String']
  /** Delete a Schema Template */
  deleteSchemaTemplate: Scalars['String']
  /** Delete a tag */
  deleteTag: Scalars['String']
  /** Delete a Task */
  deleteTask: Scalars['String']
  /** Remove Project Members from an existing Project Group */
  removeProjectMembersFromGroup: GraphQlProjectGroup
  updateAssembly: GraphQlAssembly
  updateAssemblyLayers: Array<GraphQlAssemblyLayer>
  /** Update a task comment */
  updateComment: GraphQlComment
  /** Update a Project */
  updateProject: GraphQlProject
  updateProjectEpd: GraphQlProjectEpd
  /** Update a Project Group */
  updateProjectGroup: GraphQlProjectGroup
  /** Update a Project Source */
  updateProjectSource: GraphQlProjectSource
  /** Update a Reporting Schema */
  updateReportingSchema: GraphQlReportingSchema
  /** Update a Schema Category */
  updateSchemaCategory: GraphQlSchemaCategory
  /** Update a Schema Element */
  updateSchemaElement: GraphQlSchemaElement
  /** Update a Schema Template */
  updateSchemaTemplate: GraphQlSchemaTemplate
  /** Change the name of the tag or move it to a different commit. */
  updateTag: GraphQlTag
  /** Update a Task */
  updateTask: GraphQlTask
}

export type MutationAddAssemblyArgs = {
  category: Scalars['String']
  conversionFactor?: InputMaybe<Scalars['Float']>
  description?: InputMaybe<Scalars['String']>
  lifeTime?: InputMaybe<Scalars['Float']>
  metaFields?: InputMaybe<Scalars['JSON']>
  name: Scalars['String']
  projectId: Scalars['String']
}

export type MutationAddAssemblyLayersArgs = {
  id: Scalars['String']
  layers: Array<AssemblyLayerInput>
}

export type MutationAddCommentArgs = {
  taskId: Scalars['String']
  text: Scalars['String']
}

export type MutationAddProjectArgs = {
  client?: InputMaybe<Scalars['String']>
  domain?: InputMaybe<ProjectDomain>
  file?: InputMaybe<Scalars['String']>
  groups?: InputMaybe<Array<ProjectGroupInput>>
  members?: InputMaybe<Array<ProjectMemberInput>>
  metaFields?: InputMaybe<Scalars['JSON']>
  name: Scalars['String']
  projectId?: InputMaybe<Scalars['String']>
  stages?: InputMaybe<Array<ProjectStageInput>>
}

export type MutationAddProjectEpdArgs = {
  originId: Scalars['String']
  projectId: Scalars['String']
}

export type MutationAddProjectGroupArgs = {
  leadId?: InputMaybe<Scalars['String']>
  name: Scalars['String']
  projectId: Scalars['String']
}

export type MutationAddProjectMemberArgs = {
  email: Scalars['String']
  name: Scalars['String']
  projectGroupIds: Array<Scalars['String']>
  projectId: Scalars['String']
}

export type MutationAddProjectMembersToGroupArgs = {
  groupId: Scalars['String']
  memberIds: Array<Scalars['String']>
}

export type MutationAddProjectSourceArgs = {
  dataId?: InputMaybe<Scalars['String']>
  file?: InputMaybe<Scalars['String']>
  name: Scalars['String']
  projectId: Scalars['String']
  speckleUrl?: InputMaybe<Scalars['String']>
  type: ProjectSourceType
}

export type MutationAddProjectStageArgs = {
  projectId: Scalars['String']
  stageId: Scalars['String']
}

export type MutationAddReportingSchemaArgs = {
  name?: InputMaybe<Scalars['String']>
  projectId: Scalars['String']
  templateId: Scalars['String']
}

export type MutationAddReportingSchemaFromTemplateArgs = {
  name?: InputMaybe<Scalars['String']>
  projectId: Scalars['String']
  templateId: Scalars['String']
}

export type MutationAddSchemaCategoryArgs = {
  description?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
  path?: InputMaybe<Scalars['String']>
  reportingSchemaId: Scalars['String']
}

export type MutationAddSchemaElementArgs = {
  description: Scalars['String']
  name: Scalars['String']
  quantity: Scalars['Float']
  schemaCategoryId: Scalars['String']
  unit: Unit
}

export type MutationAddSchemaElementFromSourceArgs = {
  objectIds: Array<Scalars['String']>
  schemaCategoryId: Scalars['String']
  sourceId: Scalars['String']
}

export type MutationAddSchemaTemplateArgs = {
  name: Scalars['String']
}

export type MutationAddTaskArgs = {
  assignedGroupId?: InputMaybe<Scalars['String']>
  assignee?: InputMaybe<GraphQlAssignee>
  description: Scalars['String']
  dueDate: Scalars['Date']
  item: TaskItem
  name: Scalars['String']
  reportingSchemaId: Scalars['String']
  status: TaskStatus
}

export type MutationCreateTagArgs = {
  commitId: Scalars['String']
  name: Scalars['String']
}

export type MutationDeleteAssemblyArgs = {
  id: Scalars['String']
}

export type MutationDeleteAssemblyLayersArgs = {
  id: Scalars['String']
  layers: Array<AssemblyLayerDeleteInput>
}

export type MutationDeleteCommentArgs = {
  id: Scalars['String']
}

export type MutationDeleteProjectArgs = {
  id: Scalars['String']
}

export type MutationDeleteProjectEpdArgs = {
  id: Scalars['String']
}

export type MutationDeleteProjectGroupArgs = {
  id: Scalars['String']
}

export type MutationDeleteProjectMemberArgs = {
  id: Scalars['String']
}

export type MutationDeleteProjectSourceArgs = {
  id: Scalars['String']
}

export type MutationDeleteProjectStageArgs = {
  projectId: Scalars['String']
  stageId: Scalars['String']
}

export type MutationDeleteReportingSchemaArgs = {
  id: Scalars['String']
}

export type MutationDeleteSchemaCategoryArgs = {
  id: Scalars['String']
}

export type MutationDeleteSchemaElementArgs = {
  id: Scalars['String']
}

export type MutationDeleteSchemaTemplateArgs = {
  id: Scalars['String']
}

export type MutationDeleteTagArgs = {
  id: Scalars['String']
}

export type MutationDeleteTaskArgs = {
  id: Scalars['String']
}

export type MutationRemoveProjectMembersFromGroupArgs = {
  groupId: Scalars['String']
  memberIds: Array<Scalars['String']>
}

export type MutationUpdateAssemblyArgs = {
  category?: InputMaybe<Scalars['String']>
  conversionFactor?: InputMaybe<Scalars['Float']>
  description?: InputMaybe<Scalars['String']>
  id: Scalars['String']
  lifeTime?: InputMaybe<Scalars['Float']>
  metaFields?: InputMaybe<Scalars['JSON']>
  name?: InputMaybe<Scalars['String']>
}

export type MutationUpdateAssemblyLayersArgs = {
  id: Scalars['String']
  layers: Array<AssemblyLayerUpdateInput>
}

export type MutationUpdateCommentArgs = {
  id: Scalars['String']
  text: Scalars['String']
}

export type MutationUpdateProjectArgs = {
  address?: InputMaybe<Scalars['String']>
  city?: InputMaybe<Scalars['String']>
  client?: InputMaybe<Scalars['String']>
  country?: InputMaybe<Scalars['String']>
  domain?: InputMaybe<ProjectDomain>
  file?: InputMaybe<Scalars['String']>
  id: Scalars['String']
  metaFields?: InputMaybe<Scalars['JSON']>
  name?: InputMaybe<Scalars['String']>
  projectId?: InputMaybe<Scalars['String']>
}

export type MutationUpdateProjectEpdArgs = {
  id: Scalars['String']
  kgPerM2?: InputMaybe<Scalars['Float']>
  kgPerM3?: InputMaybe<Scalars['Float']>
  thickness?: InputMaybe<Scalars['Float']>
}

export type MutationUpdateProjectGroupArgs = {
  id: Scalars['String']
  leadId?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
}

export type MutationUpdateProjectSourceArgs = {
  dataId?: InputMaybe<Scalars['String']>
  file?: InputMaybe<Scalars['String']>
  id: Scalars['String']
  interpretation?: InputMaybe<Scalars['JSON']>
  metaFields?: InputMaybe<Scalars['JSON']>
  name?: InputMaybe<Scalars['String']>
  speckleUrl?: InputMaybe<Scalars['String']>
  type?: InputMaybe<ProjectSourceType>
}

export type MutationUpdateReportingSchemaArgs = {
  id: Scalars['String']
  name?: InputMaybe<Scalars['String']>
  projectId?: InputMaybe<Scalars['String']>
}

export type MutationUpdateSchemaCategoryArgs = {
  description?: InputMaybe<Scalars['String']>
  id: Scalars['String']
  name?: InputMaybe<Scalars['String']>
  path?: InputMaybe<Scalars['String']>
}

export type MutationUpdateSchemaElementArgs = {
  description?: InputMaybe<Scalars['String']>
  id: Scalars['String']
  name?: InputMaybe<Scalars['String']>
  quantity?: InputMaybe<Scalars['Float']>
  result?: InputMaybe<Scalars['JSON']>
  schemaCategoryId?: InputMaybe<Scalars['String']>
  unit?: InputMaybe<Scalars['String']>
}

export type MutationUpdateSchemaTemplateArgs = {
  id: Scalars['String']
  name?: InputMaybe<Scalars['String']>
}

export type MutationUpdateTagArgs = {
  commitId?: InputMaybe<Scalars['String']>
  id: Scalars['String']
  name?: InputMaybe<Scalars['String']>
}

export type MutationUpdateTaskArgs = {
  assignedGroupId?: InputMaybe<Scalars['String']>
  assignee?: InputMaybe<GraphQlAssignee>
  description?: InputMaybe<Scalars['String']>
  dueDate?: InputMaybe<Scalars['Date']>
  id: Scalars['String']
  item?: InputMaybe<TaskItem>
  name?: InputMaybe<Scalars['String']>
  status?: InputMaybe<TaskStatus>
}

export type PageInfo = {
  __typename?: 'PageInfo'
  endCursor?: Maybe<Scalars['String']>
  hasNextPage: Scalars['Boolean']
  hasPreviousPage: Scalars['Boolean']
  startCursor?: Maybe<Scalars['String']>
}

export enum ProjectDomain {
  Buildings = 'buildings',
  Energy = 'energy',
  Infrastructure = 'infrastructure',
  Tunnels = 'tunnels',
}

export type ProjectEpdFilters = {
  category?: InputMaybe<FilterOptions>
  name?: InputMaybe<FilterOptions>
  owner?: InputMaybe<FilterOptions>
  projectId?: InputMaybe<FilterOptions>
  region?: InputMaybe<FilterOptions>
  source?: InputMaybe<FilterOptions>
  type?: InputMaybe<FilterOptions>
  unit?: InputMaybe<SortOptions>
}

export type ProjectFilters = {
  id?: InputMaybe<FilterOptions>
  name?: InputMaybe<FilterOptions>
  projectId?: InputMaybe<FilterOptions>
}

export type ProjectGroupFilters = {
  id?: InputMaybe<FilterOptions>
  name?: InputMaybe<FilterOptions>
  projectId?: InputMaybe<FilterOptions>
}

export type ProjectGroupInput = {
  id: Scalars['String']
  leadId: Scalars['String']
  name: Scalars['String']
}

export type ProjectMemberFilters = {
  company?: InputMaybe<FilterOptions>
  email?: InputMaybe<FilterOptions>
  name?: InputMaybe<FilterOptions>
  projectId?: InputMaybe<FilterOptions>
  userId?: InputMaybe<FilterOptions>
}

export type ProjectMemberInput = {
  company: Scalars['String']
  email: Scalars['String']
  id?: InputMaybe<Scalars['String']>
  lastLogin?: InputMaybe<Scalars['Date']>
  name: Scalars['String']
}

export type ProjectSourceFilters = {
  id?: InputMaybe<FilterOptions>
  name?: InputMaybe<FilterOptions>
  projectId?: InputMaybe<FilterOptions>
}

export enum ProjectSourceType {
  Csv = 'CSV',
  Speckle = 'SPECKLE',
}

export type ProjectStageInput = {
  id: Scalars['String']
  lifecyclePhase: Scalars['String']
  name: Scalars['String']
  stage: Scalars['String']
}

export type Query = {
  __typename?: 'Query'
  /** Get current user */
  account: GraphQlUserAccount
  assemblies: Array<GraphQlAssembly>
  /** Query all comments of a task */
  comments: Array<GraphQlComment>
  /** Get all commits of a Reporting Schema */
  commits: Array<GraphQlCommit>
  epds: GraphQlepdConnection
  /** Resolver for exporting the database contents as a base64 encoded string. */
  exportReportingSchema: Scalars['String']
  /** Get all life cycle stages */
  lifeCycleStages: Array<GraphQlLifeCycleStage>
  projectEpds: Array<GraphQlProjectEpd>
  /** Query all Project Groups */
  projectGroups: Array<GraphQlProjectGroup>
  /**
   * Query Project Members using ProjectID.
   * Filters can be used to query unique members of the Project
   */
  projectMembers: Array<GraphQlProjectMember>
  /** Get source files with a list of data ids */
  projectSourceFiles: Array<GraphQlProjectSourceFile>
  /** Get all sources associated with a project */
  projectSources: Array<GraphQlProjectSource>
  /** Get all life cycle stage associated with a project */
  projectStages: Array<GraphQlProjectStage>
  /** Query all Projects user has access to */
  projects: Array<GraphQlProject>
  /** Query a reporting schema using project_id */
  reportingSchemas: Array<GraphQlReportingSchema>
  /** Get all Schema Categories of a Reporting Schema */
  schemaCategories: Array<GraphQlSchemaCategory>
  /** Get all schema elements for a list of categories */
  schemaElements: Array<GraphQlSchemaElement>
  /** Query Schema Templates */
  schemaTemplates: Array<GraphQlSchemaTemplate>
  /** Get all tags */
  tags: Array<GraphQlTag>
  /** Get all tasks connected to a reporting schema */
  tasks: Array<GraphQlTask>
}

export type QueryAssembliesArgs = {
  projectId: Scalars['String']
}

export type QueryCommentsArgs = {
  filters?: InputMaybe<CommentFilters>
  taskId: Scalars['String']
}

export type QueryCommitsArgs = {
  filters?: InputMaybe<CommitFilters>
  reportingSchemaId: Scalars['String']
}

export type QueryEpdsArgs = {
  after?: InputMaybe<Scalars['String']>
  count?: Scalars['Int']
  filters?: InputMaybe<EpdFilters>
  sortBy?: InputMaybe<EpdSort>
}

export type QueryExportReportingSchemaArgs = {
  exportFormat: ExportFormat
  reportingSchemaId: Scalars['String']
}

export type QueryProjectEpdsArgs = {
  filters?: InputMaybe<ProjectEpdFilters>
  projectId: Scalars['String']
}

export type QueryProjectGroupsArgs = {
  filters?: InputMaybe<ProjectGroupFilters>
  projectId: Scalars['String']
}

export type QueryProjectMembersArgs = {
  filters?: InputMaybe<ProjectMemberFilters>
  projectId: Scalars['String']
}

export type QueryProjectSourceFilesArgs = {
  dataIds?: InputMaybe<Array<Scalars['String']>>
  type?: InputMaybe<ProjectSourceType>
}

export type QueryProjectSourcesArgs = {
  filters?: InputMaybe<ProjectSourceFilters>
  projectId: Scalars['String']
}

export type QueryProjectStagesArgs = {
  projectId: Scalars['String']
}

export type QueryProjectsArgs = {
  filters?: InputMaybe<ProjectFilters>
}

export type QueryReportingSchemasArgs = {
  filters?: InputMaybe<ReportingSchemaFilters>
  projectId: Scalars['String']
}

export type QuerySchemaCategoriesArgs = {
  commitId?: InputMaybe<Scalars['String']>
  filters?: InputMaybe<SchemaCategoryFilters>
  reportingSchemaId: Scalars['String']
}

export type QuerySchemaElementsArgs = {
  commitId?: InputMaybe<Scalars['String']>
  filters?: InputMaybe<SchemaElementFilters>
  schemaCategoryIds: Array<Scalars['String']>
}

export type QuerySchemaTemplatesArgs = {
  filters?: InputMaybe<SchemaTemplateFilters>
}

export type QueryTagsArgs = {
  filters?: InputMaybe<TagFilters>
  reportingSchemaId: Scalars['String']
}

export type QueryTasksArgs = {
  commitId?: InputMaybe<Scalars['String']>
  filters?: InputMaybe<TaskFilters>
  reportingSchemaId: Scalars['String']
}

export type ReportingSchemaFilters = {
  id?: InputMaybe<FilterOptions>
  name?: InputMaybe<FilterOptions>
  projectId?: InputMaybe<FilterOptions>
}

export type SchemaCategoryFilters = {
  description?: InputMaybe<FilterOptions>
  id?: InputMaybe<FilterOptions>
  name?: InputMaybe<FilterOptions>
}

export type SchemaElementFilters = {
  classification?: InputMaybe<FilterOptions>
  description?: InputMaybe<FilterOptions>
  id?: InputMaybe<FilterOptions>
  name?: InputMaybe<FilterOptions>
  quantity?: InputMaybe<FilterOptions>
  subclassification?: InputMaybe<FilterOptions>
  unit?: InputMaybe<FilterOptions>
}

export type SchemaTemplateFilters = {
  id?: InputMaybe<FilterOptions>
  name?: InputMaybe<FilterOptions>
}

export enum SortOptions {
  Asc = 'ASC',
  Dsc = 'DSC',
}

export type TagFilters = {
  added?: InputMaybe<FilterOptions>
  authorId?: InputMaybe<FilterOptions>
  id?: InputMaybe<FilterOptions>
  shortId?: InputMaybe<FilterOptions>
}

export type TaskFilters = {
  description?: InputMaybe<FilterOptions>
  dueDate?: InputMaybe<FilterOptions>
  id?: InputMaybe<FilterOptions>
  itemId?: InputMaybe<FilterOptions>
  itemType?: InputMaybe<FilterOptions>
  name?: InputMaybe<FilterOptions>
}

export enum TaskStatus {
  Approved = 'APPROVED',
  Completed = 'COMPLETED',
  Pending = 'PENDING',
}

export enum TaskType {
  Category = 'Category',
  Element = 'Element',
}

export enum Unit {
  Kg = 'KG',
  M = 'M',
  M2 = 'M2',
  M3 = 'M3',
  None = 'NONE',
  Pcs = 'PCS',
}

export enum ExportFormat {
  Csv = 'CSV',
  Lcabyg = 'LCABYG',
}

export type TaskItem = {
  taskId: Scalars['String']
  taskType: TaskType
}

export type ResolverTypeWrapper<T> = Promise<T> | T

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>
}
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => Promise<TResult> | TResult

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo,
) => Maybe<TTypes> | Promise<Maybe<TTypes>>

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo,
) => boolean | Promise<boolean>

export type NextResolverFn<T> = () => Promise<T>

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  AssemblyLayerDeleteInput: AssemblyLayerDeleteInput
  String: ResolverTypeWrapper<Scalars['String']>
  AssemblyLayerInput: AssemblyLayerInput
  Float: ResolverTypeWrapper<Scalars['Float']>
  AssemblyLayerUpdateInput: AssemblyLayerUpdateInput
  AssigneeType: AssigneeType
  CommentFilters: CommentFilters
  CommitFilters: CommitFilters
  Date: ResolverTypeWrapper<Scalars['Date']>
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>
  EPDFilters: EpdFilters
  EPDSort: EpdSort
  FilterOptions: FilterOptions
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>
  GraphQLAssembly: ResolverTypeWrapper<GraphQlAssembly>
  GraphQLAssemblyLayer: ResolverTypeWrapper<GraphQlAssemblyLayer>
  GraphQLAssignee: GraphQlAssignee
  GraphQLComment: ResolverTypeWrapper<GraphQlComment>
  ID: ResolverTypeWrapper<Scalars['ID']>
  GraphQLCommit: ResolverTypeWrapper<GraphQlCommit>
  GraphQLEPD: ResolverTypeWrapper<GraphQlepd>
  GraphQLEPDConnection: ResolverTypeWrapper<GraphQlepdConnection>
  Int: ResolverTypeWrapper<Scalars['Int']>
  GraphQLEPDEdge: ResolverTypeWrapper<GraphQlepdEdge>
  GraphQLLifeCycleStage: ResolverTypeWrapper<GraphQlLifeCycleStage>
  GraphQLProject: ResolverTypeWrapper<GraphQlProject>
  GraphQLProjectEPD: ResolverTypeWrapper<GraphQlProjectEpd>
  GraphQLProjectGroup: ResolverTypeWrapper<GraphQlProjectGroup>
  GraphQLProjectMember: ResolverTypeWrapper<GraphQlProjectMember>
  GraphQLProjectMemberGraphQLProjectGroup:
    | ResolversTypes['GraphQLProjectGroup']
    | ResolversTypes['GraphQLProjectMember']
  GraphQLProjectSource: ResolverTypeWrapper<GraphQlProjectSource>
  GraphQLProjectSourceFile: ResolverTypeWrapper<GraphQlProjectSourceFile>
  GraphQLProjectStage: ResolverTypeWrapper<GraphQlProjectStage>
  GraphQLReportingCreationSchema: ResolverTypeWrapper<GraphQlReportingCreationSchema>
  GraphQLReportingSchema: ResolverTypeWrapper<GraphQlReportingSchema>
  GraphQLSchemaCategory: ResolverTypeWrapper<GraphQlSchemaCategory>
  GraphQLSchemaElement: ResolverTypeWrapper<GraphQlSchemaElement>
  GraphQLSchemaElementGraphQLSchemaCategory:
    | ResolversTypes['GraphQLSchemaCategory']
    | ResolversTypes['GraphQLSchemaElement']
  GraphQLSchemaTemplate: ResolverTypeWrapper<GraphQlSchemaTemplate>
  GraphQLTag: ResolverTypeWrapper<GraphQlTag>
  GraphQLTask: ResolverTypeWrapper<
    Omit<GraphQlTask, 'assignee' | 'item'> & {
      assignee: ResolversTypes['GraphQLProjectMemberGraphQLProjectGroup']
      item: ResolversTypes['GraphQLSchemaElementGraphQLSchemaCategory']
    }
  >
  GraphQLUserAccount: ResolverTypeWrapper<GraphQlUserAccount>
  JSON: ResolverTypeWrapper<Scalars['JSON']>
  Mutation: ResolverTypeWrapper<{}>
  PageInfo: ResolverTypeWrapper<PageInfo>
  ProjectDomain: ProjectDomain
  ProjectEPDFilters: ProjectEpdFilters
  ProjectFilters: ProjectFilters
  ProjectGroupFilters: ProjectGroupFilters
  ProjectGroupInput: ProjectGroupInput
  ProjectMemberFilters: ProjectMemberFilters
  ProjectMemberInput: ProjectMemberInput
  ProjectSourceFilters: ProjectSourceFilters
  ProjectSourceType: ProjectSourceType
  ProjectStageInput: ProjectStageInput
  Query: ResolverTypeWrapper<{}>
  ReportingSchemaFilters: ReportingSchemaFilters
  SchemaCategoryFilters: SchemaCategoryFilters
  SchemaElementFilters: SchemaElementFilters
  SchemaTemplateFilters: SchemaTemplateFilters
  SortOptions: SortOptions
  TagFilters: TagFilters
  TaskFilters: TaskFilters
  TaskStatus: TaskStatus
  TaskType: TaskType
  Unit: Unit
  exportFormat: ExportFormat
  taskItem: TaskItem
}

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  AssemblyLayerDeleteInput: AssemblyLayerDeleteInput
  String: Scalars['String']
  AssemblyLayerInput: AssemblyLayerInput
  Float: Scalars['Float']
  AssemblyLayerUpdateInput: AssemblyLayerUpdateInput
  CommentFilters: CommentFilters
  CommitFilters: CommitFilters
  Date: Scalars['Date']
  DateTime: Scalars['DateTime']
  EPDFilters: EpdFilters
  EPDSort: EpdSort
  FilterOptions: FilterOptions
  Boolean: Scalars['Boolean']
  GraphQLAssembly: GraphQlAssembly
  GraphQLAssemblyLayer: GraphQlAssemblyLayer
  GraphQLAssignee: GraphQlAssignee
  GraphQLComment: GraphQlComment
  ID: Scalars['ID']
  GraphQLCommit: GraphQlCommit
  GraphQLEPD: GraphQlepd
  GraphQLEPDConnection: GraphQlepdConnection
  Int: Scalars['Int']
  GraphQLEPDEdge: GraphQlepdEdge
  GraphQLLifeCycleStage: GraphQlLifeCycleStage
  GraphQLProject: GraphQlProject
  GraphQLProjectEPD: GraphQlProjectEpd
  GraphQLProjectGroup: GraphQlProjectGroup
  GraphQLProjectMember: GraphQlProjectMember
  GraphQLProjectMemberGraphQLProjectGroup:
    | ResolversParentTypes['GraphQLProjectGroup']
    | ResolversParentTypes['GraphQLProjectMember']
  GraphQLProjectSource: GraphQlProjectSource
  GraphQLProjectSourceFile: GraphQlProjectSourceFile
  GraphQLProjectStage: GraphQlProjectStage
  GraphQLReportingCreationSchema: GraphQlReportingCreationSchema
  GraphQLReportingSchema: GraphQlReportingSchema
  GraphQLSchemaCategory: GraphQlSchemaCategory
  GraphQLSchemaElement: GraphQlSchemaElement
  GraphQLSchemaElementGraphQLSchemaCategory:
    | ResolversParentTypes['GraphQLSchemaCategory']
    | ResolversParentTypes['GraphQLSchemaElement']
  GraphQLSchemaTemplate: GraphQlSchemaTemplate
  GraphQLTag: GraphQlTag
  GraphQLTask: Omit<GraphQlTask, 'assignee' | 'item'> & {
    assignee: ResolversParentTypes['GraphQLProjectMemberGraphQLProjectGroup']
    item: ResolversParentTypes['GraphQLSchemaElementGraphQLSchemaCategory']
  }
  GraphQLUserAccount: GraphQlUserAccount
  JSON: Scalars['JSON']
  Mutation: {}
  PageInfo: PageInfo
  ProjectEPDFilters: ProjectEpdFilters
  ProjectFilters: ProjectFilters
  ProjectGroupFilters: ProjectGroupFilters
  ProjectGroupInput: ProjectGroupInput
  ProjectMemberFilters: ProjectMemberFilters
  ProjectMemberInput: ProjectMemberInput
  ProjectSourceFilters: ProjectSourceFilters
  ProjectStageInput: ProjectStageInput
  Query: {}
  ReportingSchemaFilters: ReportingSchemaFilters
  SchemaCategoryFilters: SchemaCategoryFilters
  SchemaElementFilters: SchemaElementFilters
  SchemaTemplateFilters: SchemaTemplateFilters
  TagFilters: TagFilters
  TaskFilters: TaskFilters
  taskItem: TaskItem
}

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date'
}

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime'
}

export type GraphQlAssemblyResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['GraphQLAssembly'] = ResolversParentTypes['GraphQLAssembly'],
> = {
  category?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  conversionFactor?: Resolver<ResolversTypes['Float'], ParentType, ContextType>
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  gwp?: Resolver<ResolversTypes['Float'], ParentType, ContextType, RequireFields<GraphQlAssemblyGwpArgs, 'phases'>>
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  layers?: Resolver<Array<ResolversTypes['GraphQLAssemblyLayer']>, ParentType, ContextType>
  lifeTime?: Resolver<ResolversTypes['Float'], ParentType, ContextType>
  metaFields?: Resolver<ResolversTypes['JSON'], ParentType, ContextType>
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  unit?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type GraphQlAssemblyLayerResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['GraphQLAssemblyLayer'] = ResolversParentTypes['GraphQLAssemblyLayer'],
> = {
  conversionFactor?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  epdId?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  epdName?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type GraphQlCommentResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['GraphQLComment'] = ResolversParentTypes['GraphQLComment'],
> = {
  added?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>
  author?: Resolver<Maybe<ResolversTypes['GraphQLProjectMember']>, ParentType, ContextType>
  authorId?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  task?: Resolver<ResolversTypes['GraphQLTask'], ParentType, ContextType>
  text?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type GraphQlCommitResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['GraphQLCommit'] = ResolversParentTypes['GraphQLCommit'],
> = {
  added?: Resolver<ResolversTypes['Date'], ParentType, ContextType>
  authorId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  parentId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  reportingSchemaId?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  repositoryId?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  schemaCategories?: Resolver<Maybe<Array<ResolversTypes['GraphQLSchemaCategory']>>, ParentType, ContextType>
  schemaElements?: Resolver<Maybe<Array<ResolversTypes['GraphQLSchemaElement']>>, ParentType, ContextType>
  shortId?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  tags?: Resolver<Maybe<Array<ResolversTypes['GraphQLTag']>>, ParentType, ContextType>
  tasks?: Resolver<Maybe<Array<ResolversTypes['GraphQLTask']>>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type GraphQlepdResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['GraphQLEPD'] = ResolversParentTypes['GraphQLEPD'],
> = {
  ap?: Resolver<ResolversTypes['Float'], ParentType, ContextType, RequireFields<GraphQlepdApArgs, 'phases'>>
  apByPhases?: Resolver<ResolversTypes['JSON'], ParentType, ContextType>
  category?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  dateUpdated?: Resolver<ResolversTypes['Date'], ParentType, ContextType>
  ep?: Resolver<ResolversTypes['Float'], ParentType, ContextType, RequireFields<GraphQlepdEpArgs, 'phases'>>
  epByPhases?: Resolver<ResolversTypes['JSON'], ParentType, ContextType>
  expirationDate?: Resolver<ResolversTypes['Date'], ParentType, ContextType>
  gwp?: Resolver<ResolversTypes['Float'], ParentType, ContextType, RequireFields<GraphQlepdGwpArgs, 'phases'>>
  gwpByPhases?: Resolver<ResolversTypes['JSON'], ParentType, ContextType>
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  odp?: Resolver<ResolversTypes['Float'], ParentType, ContextType, RequireFields<GraphQlepdOdpArgs, 'phases'>>
  odpByPhases?: Resolver<ResolversTypes['JSON'], ParentType, ContextType>
  originId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  owner?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  penreByPhases?: Resolver<ResolversTypes['JSON'], ParentType, ContextType>
  pereByPhases?: Resolver<ResolversTypes['JSON'], ParentType, ContextType>
  pocp?: Resolver<ResolversTypes['Float'], ParentType, ContextType, RequireFields<GraphQlepdPocpArgs, 'phases'>>
  pocpByPhases?: Resolver<ResolversTypes['JSON'], ParentType, ContextType>
  region?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  source?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  sourceData?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  unit?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  version?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type GraphQlepdConnectionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['GraphQLEPDConnection'] = ResolversParentTypes['GraphQLEPDConnection'],
> = {
  edges?: Resolver<Array<ResolversTypes['GraphQLEPDEdge']>, ParentType, ContextType>
  numEdges?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type GraphQlepdEdgeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['GraphQLEPDEdge'] = ResolversParentTypes['GraphQLEPDEdge'],
> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  node?: Resolver<ResolversTypes['GraphQLEPD'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type GraphQlLifeCycleStageResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['GraphQLLifeCycleStage'] = ResolversParentTypes['GraphQLLifeCycleStage'],
> = {
  category?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  phase?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type GraphQlProjectResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['GraphQLProject'] = ResolversParentTypes['GraphQLProject'],
> = {
  address?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  city?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  client?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  country?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  domain?: Resolver<Maybe<ResolversTypes['ProjectDomain']>, ParentType, ContextType>
  groups?: Resolver<Maybe<Array<ResolversTypes['GraphQLProjectGroup']>>, ParentType, ContextType>
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  imageUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  members?: Resolver<Maybe<Array<ResolversTypes['GraphQLProjectMember']>>, ParentType, ContextType>
  metaFields?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  projectId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>
  stages?: Resolver<Maybe<Array<ResolversTypes['GraphQLProjectStage']>>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type GraphQlProjectEpdResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['GraphQLProjectEPD'] = ResolversParentTypes['GraphQLProjectEPD'],
> = {
  ap?: Resolver<ResolversTypes['Float'], ParentType, ContextType, RequireFields<GraphQlProjectEpdApArgs, 'phases'>>
  apByPhases?: Resolver<ResolversTypes['JSON'], ParentType, ContextType>
  assemblies?: Resolver<Maybe<Array<ResolversTypes['GraphQLAssembly']>>, ParentType, ContextType>
  category?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  dateUpdated?: Resolver<ResolversTypes['Date'], ParentType, ContextType>
  ep?: Resolver<ResolversTypes['Float'], ParentType, ContextType, RequireFields<GraphQlProjectEpdEpArgs, 'phases'>>
  epByPhases?: Resolver<ResolversTypes['JSON'], ParentType, ContextType>
  expirationDate?: Resolver<ResolversTypes['Date'], ParentType, ContextType>
  gwp?: Resolver<ResolversTypes['Float'], ParentType, ContextType, RequireFields<GraphQlProjectEpdGwpArgs, 'phases'>>
  gwpByPhases?: Resolver<ResolversTypes['JSON'], ParentType, ContextType>
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  kgPerM2?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  kgPerM3?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  odp?: Resolver<ResolversTypes['Float'], ParentType, ContextType, RequireFields<GraphQlProjectEpdOdpArgs, 'phases'>>
  odpByPhases?: Resolver<ResolversTypes['JSON'], ParentType, ContextType>
  originId?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  owner?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  penreByPhases?: Resolver<ResolversTypes['JSON'], ParentType, ContextType>
  pereByPhases?: Resolver<ResolversTypes['JSON'], ParentType, ContextType>
  pocp?: Resolver<ResolversTypes['Float'], ParentType, ContextType, RequireFields<GraphQlProjectEpdPocpArgs, 'phases'>>
  pocpByPhases?: Resolver<ResolversTypes['JSON'], ParentType, ContextType>
  region?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  source?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  sourceData?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  thickness?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  unit?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  version?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type GraphQlProjectGroupResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['GraphQLProjectGroup'] = ResolversParentTypes['GraphQLProjectGroup'],
> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  lead?: Resolver<Maybe<ResolversTypes['GraphQLProjectMember']>, ParentType, ContextType>
  leadId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  members?: Resolver<Maybe<Array<ResolversTypes['GraphQLProjectMember']>>, ParentType, ContextType>
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  projectId?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type GraphQlProjectMemberResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['GraphQLProjectMember'] = ResolversParentTypes['GraphQLProjectMember'],
> = {
  company?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  lastLogin?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>
  leaderOf?: Resolver<Maybe<Array<ResolversTypes['GraphQLProjectGroup']>>, ParentType, ContextType>
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  projectGroups?: Resolver<Maybe<Array<ResolversTypes['GraphQLProjectGroup']>>, ParentType, ContextType>
  projectId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  userId?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type GraphQlProjectMemberGraphQlProjectGroupResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['GraphQLProjectMemberGraphQLProjectGroup'] = ResolversParentTypes['GraphQLProjectMemberGraphQLProjectGroup'],
> = {
  __resolveType: TypeResolveFn<'GraphQLProjectGroup' | 'GraphQLProjectMember', ParentType, ContextType>
}

export type GraphQlProjectSourceResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['GraphQLProjectSource'] = ResolversParentTypes['GraphQLProjectSource'],
> = {
  author?: Resolver<ResolversTypes['GraphQLProjectMember'], ParentType, ContextType>
  authorId?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  dataId?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  elements?: Resolver<Maybe<Array<ResolversTypes['GraphQLSchemaElement']>>, ParentType, ContextType>
  fileUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  interpretation?: Resolver<ResolversTypes['JSON'], ParentType, ContextType>
  metaFields?: Resolver<ResolversTypes['JSON'], ParentType, ContextType>
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  projectId?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  type?: Resolver<ResolversTypes['ProjectSourceType'], ParentType, ContextType>
  updated?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type GraphQlProjectSourceFileResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['GraphQLProjectSourceFile'] = ResolversParentTypes['GraphQLProjectSourceFile'],
> = {
  dataId?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  headers?: Resolver<ResolversTypes['JSON'], ParentType, ContextType>
  rows?: Resolver<ResolversTypes['JSON'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type GraphQlProjectStageResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['GraphQLProjectStage'] = ResolversParentTypes['GraphQLProjectStage'],
> = {
  category?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  phase?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  projectId?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  stageId?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type GraphQlReportingCreationSchemaResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['GraphQLReportingCreationSchema'] = ResolversParentTypes['GraphQLReportingCreationSchema'],
> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  projectId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type GraphQlReportingSchemaResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['GraphQLReportingSchema'] = ResolversParentTypes['GraphQLReportingSchema'],
> = {
  categories?: Resolver<Maybe<Array<ResolversTypes['GraphQLSchemaCategory']>>, ParentType, ContextType>
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  projectId?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  templateId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type GraphQlSchemaCategoryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['GraphQLSchemaCategory'] = ResolversParentTypes['GraphQLSchemaCategory'],
> = {
  commits?: Resolver<Maybe<Array<ResolversTypes['GraphQLCommit']>>, ParentType, ContextType>
  depth?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  elements?: Resolver<Maybe<Array<ResolversTypes['GraphQLSchemaElement']>>, ParentType, ContextType>
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  path?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  reportingSchema?: Resolver<ResolversTypes['GraphQLReportingSchema'], ParentType, ContextType>
  reportingSchemaId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type GraphQlSchemaElementResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['GraphQLSchemaElement'] = ResolversParentTypes['GraphQLSchemaElement'],
> = {
  commits?: Resolver<Array<ResolversTypes['GraphQLCommit']>, ParentType, ContextType>
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  quantity?: Resolver<ResolversTypes['Float'], ParentType, ContextType>
  result?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>
  schemaCategory?: Resolver<ResolversTypes['GraphQLSchemaCategory'], ParentType, ContextType>
  source?: Resolver<Maybe<ResolversTypes['GraphQLProjectSource']>, ParentType, ContextType>
  unit?: Resolver<ResolversTypes['Unit'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type GraphQlSchemaElementGraphQlSchemaCategoryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['GraphQLSchemaElementGraphQLSchemaCategory'] = ResolversParentTypes['GraphQLSchemaElementGraphQLSchemaCategory'],
> = {
  __resolveType: TypeResolveFn<'GraphQLSchemaCategory' | 'GraphQLSchemaElement', ParentType, ContextType>
}

export type GraphQlSchemaTemplateResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['GraphQLSchemaTemplate'] = ResolversParentTypes['GraphQLSchemaTemplate'],
> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  schema?: Resolver<Maybe<ResolversTypes['GraphQLReportingSchema']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type GraphQlTagResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['GraphQLTag'] = ResolversParentTypes['GraphQLTag'],
> = {
  added?: Resolver<ResolversTypes['Date'], ParentType, ContextType>
  authorId?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  commit?: Resolver<ResolversTypes['GraphQLCommit'], ParentType, ContextType>
  commitId?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  shortId?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type GraphQlTaskResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['GraphQLTask'] = ResolversParentTypes['GraphQLTask'],
> = {
  assignedGroupId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  assignee?: Resolver<ResolversTypes['GraphQLProjectMemberGraphQLProjectGroup'], ParentType, ContextType>
  assigneeId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  author?: Resolver<ResolversTypes['GraphQLProjectMember'], ParentType, ContextType>
  authorId?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  comments?: Resolver<Maybe<Array<ResolversTypes['GraphQLComment']>>, ParentType, ContextType>
  commits?: Resolver<Array<ResolversTypes['GraphQLCommit']>, ParentType, ContextType>
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  dueDate?: Resolver<ResolversTypes['Date'], ParentType, ContextType>
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  item?: Resolver<ResolversTypes['GraphQLSchemaElementGraphQLSchemaCategory'], ParentType, ContextType>
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  reportingSchema?: Resolver<ResolversTypes['GraphQLReportingSchema'], ParentType, ContextType>
  reportingSchemaId?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  status?: Resolver<ResolversTypes['TaskStatus'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type GraphQlUserAccountResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['GraphQLUserAccount'] = ResolversParentTypes['GraphQLUserAccount'],
> = {
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  roles?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>
  tenantId?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface JsonScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSON'], any> {
  name: 'JSON'
}

export type MutationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation'],
> = {
  addAssembly?: Resolver<
    ResolversTypes['GraphQLAssembly'],
    ParentType,
    ContextType,
    RequireFields<
      MutationAddAssemblyArgs,
      'category' | 'conversionFactor' | 'lifeTime' | 'metaFields' | 'name' | 'projectId'
    >
  >
  addAssemblyLayers?: Resolver<
    Array<ResolversTypes['GraphQLAssemblyLayer']>,
    ParentType,
    ContextType,
    RequireFields<MutationAddAssemblyLayersArgs, 'id' | 'layers'>
  >
  addComment?: Resolver<
    ResolversTypes['GraphQLComment'],
    ParentType,
    ContextType,
    RequireFields<MutationAddCommentArgs, 'taskId' | 'text'>
  >
  addProject?: Resolver<
    ResolversTypes['GraphQLProject'],
    ParentType,
    ContextType,
    RequireFields<
      MutationAddProjectArgs,
      'client' | 'domain' | 'file' | 'groups' | 'members' | 'metaFields' | 'name' | 'projectId' | 'stages'
    >
  >
  addProjectEpd?: Resolver<
    ResolversTypes['GraphQLProjectEPD'],
    ParentType,
    ContextType,
    RequireFields<MutationAddProjectEpdArgs, 'originId' | 'projectId'>
  >
  addProjectGroup?: Resolver<
    ResolversTypes['GraphQLProjectGroup'],
    ParentType,
    ContextType,
    RequireFields<MutationAddProjectGroupArgs, 'leadId' | 'name' | 'projectId'>
  >
  addProjectMember?: Resolver<
    ResolversTypes['GraphQLProjectMember'],
    ParentType,
    ContextType,
    RequireFields<MutationAddProjectMemberArgs, 'email' | 'name' | 'projectGroupIds' | 'projectId'>
  >
  addProjectMembersToGroup?: Resolver<
    ResolversTypes['GraphQLProjectGroup'],
    ParentType,
    ContextType,
    RequireFields<MutationAddProjectMembersToGroupArgs, 'groupId' | 'memberIds'>
  >
  addProjectSource?: Resolver<
    ResolversTypes['GraphQLProjectSource'],
    ParentType,
    ContextType,
    RequireFields<MutationAddProjectSourceArgs, 'dataId' | 'file' | 'name' | 'projectId' | 'speckleUrl' | 'type'>
  >
  addProjectStage?: Resolver<
    ResolversTypes['GraphQLProjectStage'],
    ParentType,
    ContextType,
    RequireFields<MutationAddProjectStageArgs, 'projectId' | 'stageId'>
  >
  addReportingSchema?: Resolver<
    ResolversTypes['GraphQLReportingCreationSchema'],
    ParentType,
    ContextType,
    RequireFields<MutationAddReportingSchemaArgs, 'name' | 'projectId' | 'templateId'>
  >
  addReportingSchemaFromTemplate?: Resolver<
    ResolversTypes['GraphQLReportingCreationSchema'],
    ParentType,
    ContextType,
    RequireFields<MutationAddReportingSchemaFromTemplateArgs, 'projectId' | 'templateId'>
  >
  addSchemaCategory?: Resolver<
    ResolversTypes['GraphQLSchemaCategory'],
    ParentType,
    ContextType,
    RequireFields<MutationAddSchemaCategoryArgs, 'description' | 'name' | 'path' | 'reportingSchemaId'>
  >
  addSchemaElement?: Resolver<
    ResolversTypes['GraphQLSchemaElement'],
    ParentType,
    ContextType,
    RequireFields<MutationAddSchemaElementArgs, 'description' | 'name' | 'quantity' | 'schemaCategoryId' | 'unit'>
  >
  addSchemaElementFromSource?: Resolver<
    Array<ResolversTypes['GraphQLSchemaElement']>,
    ParentType,
    ContextType,
    RequireFields<MutationAddSchemaElementFromSourceArgs, 'objectIds' | 'schemaCategoryId' | 'sourceId'>
  >
  addSchemaTemplate?: Resolver<
    ResolversTypes['GraphQLSchemaTemplate'],
    ParentType,
    ContextType,
    RequireFields<MutationAddSchemaTemplateArgs, 'name'>
  >
  addTask?: Resolver<
    ResolversTypes['GraphQLTask'],
    ParentType,
    ContextType,
    RequireFields<
      MutationAddTaskArgs,
      'assignedGroupId' | 'assignee' | 'description' | 'dueDate' | 'item' | 'name' | 'reportingSchemaId' | 'status'
    >
  >
  createTag?: Resolver<
    ResolversTypes['GraphQLTag'],
    ParentType,
    ContextType,
    RequireFields<MutationCreateTagArgs, 'commitId' | 'name'>
  >
  deleteAssembly?: Resolver<
    ResolversTypes['String'],
    ParentType,
    ContextType,
    RequireFields<MutationDeleteAssemblyArgs, 'id'>
  >
  deleteAssemblyLayers?: Resolver<
    Array<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteAssemblyLayersArgs, 'id' | 'layers'>
  >
  deleteComment?: Resolver<
    ResolversTypes['String'],
    ParentType,
    ContextType,
    RequireFields<MutationDeleteCommentArgs, 'id'>
  >
  deleteProject?: Resolver<
    ResolversTypes['String'],
    ParentType,
    ContextType,
    RequireFields<MutationDeleteProjectArgs, 'id'>
  >
  deleteProjectEpd?: Resolver<
    ResolversTypes['String'],
    ParentType,
    ContextType,
    RequireFields<MutationDeleteProjectEpdArgs, 'id'>
  >
  deleteProjectGroup?: Resolver<
    ResolversTypes['String'],
    ParentType,
    ContextType,
    RequireFields<MutationDeleteProjectGroupArgs, 'id'>
  >
  deleteProjectMember?: Resolver<
    ResolversTypes['String'],
    ParentType,
    ContextType,
    RequireFields<MutationDeleteProjectMemberArgs, 'id'>
  >
  deleteProjectSource?: Resolver<
    ResolversTypes['String'],
    ParentType,
    ContextType,
    RequireFields<MutationDeleteProjectSourceArgs, 'id'>
  >
  deleteProjectStage?: Resolver<
    ResolversTypes['String'],
    ParentType,
    ContextType,
    RequireFields<MutationDeleteProjectStageArgs, 'projectId' | 'stageId'>
  >
  deleteReportingSchema?: Resolver<
    ResolversTypes['String'],
    ParentType,
    ContextType,
    RequireFields<MutationDeleteReportingSchemaArgs, 'id'>
  >
  deleteSchemaCategory?: Resolver<
    ResolversTypes['String'],
    ParentType,
    ContextType,
    RequireFields<MutationDeleteSchemaCategoryArgs, 'id'>
  >
  deleteSchemaElement?: Resolver<
    ResolversTypes['String'],
    ParentType,
    ContextType,
    RequireFields<MutationDeleteSchemaElementArgs, 'id'>
  >
  deleteSchemaTemplate?: Resolver<
    ResolversTypes['String'],
    ParentType,
    ContextType,
    RequireFields<MutationDeleteSchemaTemplateArgs, 'id'>
  >
  deleteTag?: Resolver<ResolversTypes['String'], ParentType, ContextType, RequireFields<MutationDeleteTagArgs, 'id'>>
  deleteTask?: Resolver<ResolversTypes['String'], ParentType, ContextType, RequireFields<MutationDeleteTaskArgs, 'id'>>
  removeProjectMembersFromGroup?: Resolver<
    ResolversTypes['GraphQLProjectGroup'],
    ParentType,
    ContextType,
    RequireFields<MutationRemoveProjectMembersFromGroupArgs, 'groupId' | 'memberIds'>
  >
  updateAssembly?: Resolver<
    ResolversTypes['GraphQLAssembly'],
    ParentType,
    ContextType,
    RequireFields<
      MutationUpdateAssemblyArgs,
      'category' | 'conversionFactor' | 'description' | 'id' | 'lifeTime' | 'metaFields' | 'name'
    >
  >
  updateAssemblyLayers?: Resolver<
    Array<ResolversTypes['GraphQLAssemblyLayer']>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateAssemblyLayersArgs, 'id' | 'layers'>
  >
  updateComment?: Resolver<
    ResolversTypes['GraphQLComment'],
    ParentType,
    ContextType,
    RequireFields<MutationUpdateCommentArgs, 'id' | 'text'>
  >
  updateProject?: Resolver<
    ResolversTypes['GraphQLProject'],
    ParentType,
    ContextType,
    RequireFields<
      MutationUpdateProjectArgs,
      'address' | 'city' | 'client' | 'country' | 'domain' | 'file' | 'id' | 'metaFields' | 'name' | 'projectId'
    >
  >
  updateProjectEpd?: Resolver<
    ResolversTypes['GraphQLProjectEPD'],
    ParentType,
    ContextType,
    RequireFields<MutationUpdateProjectEpdArgs, 'id' | 'kgPerM2' | 'kgPerM3' | 'thickness'>
  >
  updateProjectGroup?: Resolver<
    ResolversTypes['GraphQLProjectGroup'],
    ParentType,
    ContextType,
    RequireFields<MutationUpdateProjectGroupArgs, 'id' | 'leadId' | 'name'>
  >
  updateProjectSource?: Resolver<
    ResolversTypes['GraphQLProjectSource'],
    ParentType,
    ContextType,
    RequireFields<
      MutationUpdateProjectSourceArgs,
      'dataId' | 'file' | 'id' | 'interpretation' | 'metaFields' | 'name' | 'speckleUrl' | 'type'
    >
  >
  updateReportingSchema?: Resolver<
    ResolversTypes['GraphQLReportingSchema'],
    ParentType,
    ContextType,
    RequireFields<MutationUpdateReportingSchemaArgs, 'id' | 'name' | 'projectId'>
  >
  updateSchemaCategory?: Resolver<
    ResolversTypes['GraphQLSchemaCategory'],
    ParentType,
    ContextType,
    RequireFields<MutationUpdateSchemaCategoryArgs, 'description' | 'id' | 'name' | 'path'>
  >
  updateSchemaElement?: Resolver<
    ResolversTypes['GraphQLSchemaElement'],
    ParentType,
    ContextType,
    RequireFields<
      MutationUpdateSchemaElementArgs,
      'description' | 'id' | 'name' | 'quantity' | 'result' | 'schemaCategoryId' | 'unit'
    >
  >
  updateSchemaTemplate?: Resolver<
    ResolversTypes['GraphQLSchemaTemplate'],
    ParentType,
    ContextType,
    RequireFields<MutationUpdateSchemaTemplateArgs, 'id' | 'name'>
  >
  updateTag?: Resolver<
    ResolversTypes['GraphQLTag'],
    ParentType,
    ContextType,
    RequireFields<MutationUpdateTagArgs, 'commitId' | 'id' | 'name'>
  >
  updateTask?: Resolver<
    ResolversTypes['GraphQLTask'],
    ParentType,
    ContextType,
    RequireFields<
      MutationUpdateTaskArgs,
      'assignedGroupId' | 'assignee' | 'description' | 'dueDate' | 'id' | 'item' | 'name' | 'status'
    >
  >
}

export type PageInfoResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['PageInfo'] = ResolversParentTypes['PageInfo'],
> = {
  endCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  hasNextPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
  hasPreviousPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
  startCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type QueryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query'],
> = {
  account?: Resolver<ResolversTypes['GraphQLUserAccount'], ParentType, ContextType>
  assemblies?: Resolver<
    Array<ResolversTypes['GraphQLAssembly']>,
    ParentType,
    ContextType,
    RequireFields<QueryAssembliesArgs, 'projectId'>
  >
  comments?: Resolver<
    Array<ResolversTypes['GraphQLComment']>,
    ParentType,
    ContextType,
    RequireFields<QueryCommentsArgs, 'filters' | 'taskId'>
  >
  commits?: Resolver<
    Array<ResolversTypes['GraphQLCommit']>,
    ParentType,
    ContextType,
    RequireFields<QueryCommitsArgs, 'filters' | 'reportingSchemaId'>
  >
  epds?: Resolver<
    ResolversTypes['GraphQLEPDConnection'],
    ParentType,
    ContextType,
    RequireFields<QueryEpdsArgs, 'count' | 'filters' | 'sortBy'>
  >
  exportReportingSchema?: Resolver<
    ResolversTypes['String'],
    ParentType,
    ContextType,
    RequireFields<QueryExportReportingSchemaArgs, 'exportFormat' | 'reportingSchemaId'>
  >
  lifeCycleStages?: Resolver<Array<ResolversTypes['GraphQLLifeCycleStage']>, ParentType, ContextType>
  projectEpds?: Resolver<
    Array<ResolversTypes['GraphQLProjectEPD']>,
    ParentType,
    ContextType,
    RequireFields<QueryProjectEpdsArgs, 'filters' | 'projectId'>
  >
  projectGroups?: Resolver<
    Array<ResolversTypes['GraphQLProjectGroup']>,
    ParentType,
    ContextType,
    RequireFields<QueryProjectGroupsArgs, 'filters' | 'projectId'>
  >
  projectMembers?: Resolver<
    Array<ResolversTypes['GraphQLProjectMember']>,
    ParentType,
    ContextType,
    RequireFields<QueryProjectMembersArgs, 'filters' | 'projectId'>
  >
  projectSourceFiles?: Resolver<
    Array<ResolversTypes['GraphQLProjectSourceFile']>,
    ParentType,
    ContextType,
    RequireFields<QueryProjectSourceFilesArgs, 'dataIds' | 'type'>
  >
  projectSources?: Resolver<
    Array<ResolversTypes['GraphQLProjectSource']>,
    ParentType,
    ContextType,
    RequireFields<QueryProjectSourcesArgs, 'filters' | 'projectId'>
  >
  projectStages?: Resolver<
    Array<ResolversTypes['GraphQLProjectStage']>,
    ParentType,
    ContextType,
    RequireFields<QueryProjectStagesArgs, 'projectId'>
  >
  projects?: Resolver<
    Array<ResolversTypes['GraphQLProject']>,
    ParentType,
    ContextType,
    RequireFields<QueryProjectsArgs, 'filters'>
  >
  reportingSchemas?: Resolver<
    Array<ResolversTypes['GraphQLReportingSchema']>,
    ParentType,
    ContextType,
    RequireFields<QueryReportingSchemasArgs, 'filters' | 'projectId'>
  >
  schemaCategories?: Resolver<
    Array<ResolversTypes['GraphQLSchemaCategory']>,
    ParentType,
    ContextType,
    RequireFields<QuerySchemaCategoriesArgs, 'commitId' | 'filters' | 'reportingSchemaId'>
  >
  schemaElements?: Resolver<
    Array<ResolversTypes['GraphQLSchemaElement']>,
    ParentType,
    ContextType,
    RequireFields<QuerySchemaElementsArgs, 'commitId' | 'filters' | 'schemaCategoryIds'>
  >
  schemaTemplates?: Resolver<
    Array<ResolversTypes['GraphQLSchemaTemplate']>,
    ParentType,
    ContextType,
    RequireFields<QuerySchemaTemplatesArgs, 'filters'>
  >
  tags?: Resolver<
    Array<ResolversTypes['GraphQLTag']>,
    ParentType,
    ContextType,
    RequireFields<QueryTagsArgs, 'filters' | 'reportingSchemaId'>
  >
  tasks?: Resolver<
    Array<ResolversTypes['GraphQLTask']>,
    ParentType,
    ContextType,
    RequireFields<QueryTasksArgs, 'commitId' | 'filters' | 'reportingSchemaId'>
  >
}

export type Resolvers<ContextType = any> = {
  Date?: GraphQLScalarType
  DateTime?: GraphQLScalarType
  GraphQLAssembly?: GraphQlAssemblyResolvers<ContextType>
  GraphQLAssemblyLayer?: GraphQlAssemblyLayerResolvers<ContextType>
  GraphQLComment?: GraphQlCommentResolvers<ContextType>
  GraphQLCommit?: GraphQlCommitResolvers<ContextType>
  GraphQLEPD?: GraphQlepdResolvers<ContextType>
  GraphQLEPDConnection?: GraphQlepdConnectionResolvers<ContextType>
  GraphQLEPDEdge?: GraphQlepdEdgeResolvers<ContextType>
  GraphQLLifeCycleStage?: GraphQlLifeCycleStageResolvers<ContextType>
  GraphQLProject?: GraphQlProjectResolvers<ContextType>
  GraphQLProjectEPD?: GraphQlProjectEpdResolvers<ContextType>
  GraphQLProjectGroup?: GraphQlProjectGroupResolvers<ContextType>
  GraphQLProjectMember?: GraphQlProjectMemberResolvers<ContextType>
  GraphQLProjectMemberGraphQLProjectGroup?: GraphQlProjectMemberGraphQlProjectGroupResolvers<ContextType>
  GraphQLProjectSource?: GraphQlProjectSourceResolvers<ContextType>
  GraphQLProjectSourceFile?: GraphQlProjectSourceFileResolvers<ContextType>
  GraphQLProjectStage?: GraphQlProjectStageResolvers<ContextType>
  GraphQLReportingCreationSchema?: GraphQlReportingCreationSchemaResolvers<ContextType>
  GraphQLReportingSchema?: GraphQlReportingSchemaResolvers<ContextType>
  GraphQLSchemaCategory?: GraphQlSchemaCategoryResolvers<ContextType>
  GraphQLSchemaElement?: GraphQlSchemaElementResolvers<ContextType>
  GraphQLSchemaElementGraphQLSchemaCategory?: GraphQlSchemaElementGraphQlSchemaCategoryResolvers<ContextType>
  GraphQLSchemaTemplate?: GraphQlSchemaTemplateResolvers<ContextType>
  GraphQLTag?: GraphQlTagResolvers<ContextType>
  GraphQLTask?: GraphQlTaskResolvers<ContextType>
  GraphQLUserAccount?: GraphQlUserAccountResolvers<ContextType>
  JSON?: GraphQLScalarType
  Mutation?: MutationResolvers<ContextType>
  PageInfo?: PageInfoResolvers<ContextType>
  Query?: QueryResolvers<ContextType>
}

export type GetSingleProjectQueryVariables = Exact<{
  id: Scalars['String']
}>

export type GetSingleProjectQuery = {
  __typename?: 'Query'
  projects: Array<{ __typename?: 'GraphQLProject'; id: string; name: string }>
}

export type GetProjectMembersQueryVariables = Exact<{
  projectId: Scalars['String']
}>

export type GetProjectMembersQuery = {
  __typename?: 'Query'
  projectMembers: Array<{
    __typename?: 'GraphQLProjectMember'
    id: string
    userId: string
    name: string
    email: string
    company?: string | null
    lastLogin?: any | null
    projectId: string
    projectGroups?: Array<{ __typename?: 'GraphQLProjectGroup'; id: string; name: string }> | null
  }>
}

export type AddCommentMutationVariables = Exact<{
  taskId: Scalars['String']
  text: Scalars['String']
}>

export type AddCommentMutation = {
  __typename?: 'Mutation'
  addComment: { __typename?: 'GraphQLComment'; id: string; added: any; text: string; authorId: string }
}

export type UpdateTaskStatusMutationVariables = Exact<{
  updateTaskId: Scalars['String']
  status?: InputMaybe<TaskStatus>
  item?: InputMaybe<TaskItem>
}>

export type UpdateTaskStatusMutation = {
  __typename?: 'Mutation'
  updateTask: { __typename?: 'GraphQLTask'; id: string; status: TaskStatus }
}

export type GetSingleTaskForTasksPageQueryVariables = Exact<{
  reportingSchemaId: Scalars['String']
  taskId: Scalars['String']
}>

export type GetSingleTaskForTasksPageQuery = {
  __typename?: 'Query'
  tasks: Array<{
    __typename?: 'GraphQLTask'
    id: string
    name: string
    description: string
    dueDate: any
    authorId: string
    status: TaskStatus
    assigneeId?: string | null
    assignedGroupId?: string | null
    item:
      | { __typename: 'GraphQLSchemaCategory'; id: string; name: string }
      | { __typename: 'GraphQLSchemaElement'; id: string; name: string }
    comments?: Array<{
      __typename?: 'GraphQLComment'
      id: string
      added: any
      text: string
      authorId: string
      task: { __typename?: 'GraphQLTask'; id: string }
    }> | null
  }>
}

export type GetAccountRolesQueryVariables = Exact<{ [key: string]: never }>

export type GetAccountRolesQuery = {
  __typename?: 'Query'
  account: { __typename?: 'GraphQLUserAccount'; roles: Array<string> }
}

export const GetSingleProjectDocument = gql`
  query getSingleProject($id: String!) {
    projects(filters: { id: { equal: $id } }) {
      id
      name
    }
  }
`

/**
 * __useGetSingleProjectQuery__
 *
 * To run a query within a React component, call `useGetSingleProjectQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSingleProjectQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSingleProjectQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetSingleProjectQuery(
  baseOptions: Apollo.QueryHookOptions<GetSingleProjectQuery, GetSingleProjectQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetSingleProjectQuery, GetSingleProjectQueryVariables>(GetSingleProjectDocument, options)
}
export function useGetSingleProjectLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetSingleProjectQuery, GetSingleProjectQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetSingleProjectQuery, GetSingleProjectQueryVariables>(GetSingleProjectDocument, options)
}
export type GetSingleProjectQueryHookResult = ReturnType<typeof useGetSingleProjectQuery>
export type GetSingleProjectLazyQueryHookResult = ReturnType<typeof useGetSingleProjectLazyQuery>
export type GetSingleProjectQueryResult = Apollo.QueryResult<GetSingleProjectQuery, GetSingleProjectQueryVariables>
export const GetProjectMembersDocument = gql`
  query getProjectMembers($projectId: String!) {
    projectMembers(projectId: $projectId) {
      id
      userId
      name
      userId
      email
      company
      lastLogin
      projectId
      projectGroups {
        id
        name
      }
    }
  }
`

/**
 * __useGetProjectMembersQuery__
 *
 * To run a query within a React component, call `useGetProjectMembersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProjectMembersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProjectMembersQuery({
 *   variables: {
 *      projectId: // value for 'projectId'
 *   },
 * });
 */
export function useGetProjectMembersQuery(
  baseOptions: Apollo.QueryHookOptions<GetProjectMembersQuery, GetProjectMembersQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetProjectMembersQuery, GetProjectMembersQueryVariables>(GetProjectMembersDocument, options)
}
export function useGetProjectMembersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetProjectMembersQuery, GetProjectMembersQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetProjectMembersQuery, GetProjectMembersQueryVariables>(
    GetProjectMembersDocument,
    options,
  )
}
export type GetProjectMembersQueryHookResult = ReturnType<typeof useGetProjectMembersQuery>
export type GetProjectMembersLazyQueryHookResult = ReturnType<typeof useGetProjectMembersLazyQuery>
export type GetProjectMembersQueryResult = Apollo.QueryResult<GetProjectMembersQuery, GetProjectMembersQueryVariables>
export const AddCommentDocument = gql`
  mutation addComment($taskId: String!, $text: String!) {
    addComment(taskId: $taskId, text: $text) {
      id
      added
      text
      authorId
    }
  }
`
export type AddCommentMutationFn = Apollo.MutationFunction<AddCommentMutation, AddCommentMutationVariables>

/**
 * __useAddCommentMutation__
 *
 * To run a mutation, you first call `useAddCommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddCommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addCommentMutation, { data, loading, error }] = useAddCommentMutation({
 *   variables: {
 *      taskId: // value for 'taskId'
 *      text: // value for 'text'
 *   },
 * });
 */
export function useAddCommentMutation(
  baseOptions?: Apollo.MutationHookOptions<AddCommentMutation, AddCommentMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<AddCommentMutation, AddCommentMutationVariables>(AddCommentDocument, options)
}
export type AddCommentMutationHookResult = ReturnType<typeof useAddCommentMutation>
export type AddCommentMutationResult = Apollo.MutationResult<AddCommentMutation>
export type AddCommentMutationOptions = Apollo.BaseMutationOptions<AddCommentMutation, AddCommentMutationVariables>
export const UpdateTaskStatusDocument = gql`
  mutation updateTaskStatus($updateTaskId: String!, $status: TaskStatus, $item: taskItem) {
    updateTask(id: $updateTaskId, status: $status, item: $item) {
      id
      status
    }
  }
`
export type UpdateTaskStatusMutationFn = Apollo.MutationFunction<
  UpdateTaskStatusMutation,
  UpdateTaskStatusMutationVariables
>

/**
 * __useUpdateTaskStatusMutation__
 *
 * To run a mutation, you first call `useUpdateTaskStatusMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTaskStatusMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTaskStatusMutation, { data, loading, error }] = useUpdateTaskStatusMutation({
 *   variables: {
 *      updateTaskId: // value for 'updateTaskId'
 *      status: // value for 'status'
 *      item: // value for 'item'
 *   },
 * });
 */
export function useUpdateTaskStatusMutation(
  baseOptions?: Apollo.MutationHookOptions<UpdateTaskStatusMutation, UpdateTaskStatusMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<UpdateTaskStatusMutation, UpdateTaskStatusMutationVariables>(
    UpdateTaskStatusDocument,
    options,
  )
}
export type UpdateTaskStatusMutationHookResult = ReturnType<typeof useUpdateTaskStatusMutation>
export type UpdateTaskStatusMutationResult = Apollo.MutationResult<UpdateTaskStatusMutation>
export type UpdateTaskStatusMutationOptions = Apollo.BaseMutationOptions<
  UpdateTaskStatusMutation,
  UpdateTaskStatusMutationVariables
>
export const GetSingleTaskForTasksPageDocument = gql`
  query getSingleTaskForTasksPage($reportingSchemaId: String!, $taskId: String!) {
    tasks(reportingSchemaId: $reportingSchemaId, filters: { id: { equal: $taskId } }) {
      id
      name
      description
      dueDate
      authorId
      status
      assigneeId
      assignedGroupId
      item {
        ... on GraphQLSchemaCategory {
          __typename
          id
          name
        }
        ... on GraphQLSchemaElement {
          __typename
          id
          name
        }
      }
      comments {
        id
        added
        text
        authorId
        task {
          id
        }
      }
    }
  }
`

/**
 * __useGetSingleTaskForTasksPageQuery__
 *
 * To run a query within a React component, call `useGetSingleTaskForTasksPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSingleTaskForTasksPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSingleTaskForTasksPageQuery({
 *   variables: {
 *      reportingSchemaId: // value for 'reportingSchemaId'
 *      taskId: // value for 'taskId'
 *   },
 * });
 */
export function useGetSingleTaskForTasksPageQuery(
  baseOptions: Apollo.QueryHookOptions<GetSingleTaskForTasksPageQuery, GetSingleTaskForTasksPageQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetSingleTaskForTasksPageQuery, GetSingleTaskForTasksPageQueryVariables>(
    GetSingleTaskForTasksPageDocument,
    options,
  )
}
export function useGetSingleTaskForTasksPageLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetSingleTaskForTasksPageQuery, GetSingleTaskForTasksPageQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetSingleTaskForTasksPageQuery, GetSingleTaskForTasksPageQueryVariables>(
    GetSingleTaskForTasksPageDocument,
    options,
  )
}
export type GetSingleTaskForTasksPageQueryHookResult = ReturnType<typeof useGetSingleTaskForTasksPageQuery>
export type GetSingleTaskForTasksPageLazyQueryHookResult = ReturnType<typeof useGetSingleTaskForTasksPageLazyQuery>
export type GetSingleTaskForTasksPageQueryResult = Apollo.QueryResult<
  GetSingleTaskForTasksPageQuery,
  GetSingleTaskForTasksPageQueryVariables
>
export const GetAccountRolesDocument = gql`
  query getAccountRoles {
    account {
      roles
    }
  }
`

/**
 * __useGetAccountRolesQuery__
 *
 * To run a query within a React component, call `useGetAccountRolesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAccountRolesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAccountRolesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAccountRolesQuery(
  baseOptions?: Apollo.QueryHookOptions<GetAccountRolesQuery, GetAccountRolesQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetAccountRolesQuery, GetAccountRolesQueryVariables>(GetAccountRolesDocument, options)
}
export function useGetAccountRolesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetAccountRolesQuery, GetAccountRolesQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetAccountRolesQuery, GetAccountRolesQueryVariables>(GetAccountRolesDocument, options)
}
export type GetAccountRolesQueryHookResult = ReturnType<typeof useGetAccountRolesQuery>
export type GetAccountRolesLazyQueryHookResult = ReturnType<typeof useGetAccountRolesLazyQuery>
export type GetAccountRolesQueryResult = Apollo.QueryResult<GetAccountRolesQuery, GetAccountRolesQueryVariables>
