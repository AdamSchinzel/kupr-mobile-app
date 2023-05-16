import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  date: any;
  timestamp: any;
  timestamptz: any;
  uuid: any;
};

export type Boolean_Cast_Exp = {
  String?: InputMaybe<String_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _cast?: InputMaybe<Boolean_Cast_Exp>;
  _eq?: InputMaybe<Scalars['Boolean']>;
  _gt?: InputMaybe<Scalars['Boolean']>;
  _gte?: InputMaybe<Scalars['Boolean']>;
  _in?: InputMaybe<Array<Scalars['Boolean']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Boolean']>;
  _lte?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Scalars['Boolean']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']>>;
};

export type Int_Cast_Exp = {
  String?: InputMaybe<String_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _cast?: InputMaybe<Int_Cast_Exp>;
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

export type SignInResponse = {
  __typename?: 'SignInResponse';
  token: Scalars['String'];
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "accidents" */
export type Accidents = {
  __typename?: 'accidents';
  created_at: Scalars['timestamptz'];
  date_of_occurrence: Scalars['date'];
  date_of_removal?: Maybe<Scalars['date']>;
  description_of_removal: Scalars['String'];
  file: Scalars['uuid'];
  /** An object relationship */
  file_rel: Files;
  generate_service_order?: Maybe<Scalars['Boolean']>;
  id: Scalars['uuid'];
  /** An object relationship */
  owner_rel: Users;
  prevents_operation: Scalars['Boolean'];
  reporter: Scalars['uuid'];
  solved: Scalars['Boolean'];
  tenant: Scalars['uuid'];
  /** An object relationship */
  tenant_rel: Tenants;
  type: Scalars['String'];
  tzb: Scalars['uuid'];
  /** An object relationship */
  tzb_rel: Tzbs;
  updated_at: Scalars['timestamptz'];
  user: Scalars['uuid'];
  /** An object relationship */
  user_rel: Users;
  write_to_operation_log: Scalars['Boolean'];
};

/** aggregated selection of "accidents" */
export type Accidents_Aggregate = {
  __typename?: 'accidents_aggregate';
  aggregate?: Maybe<Accidents_Aggregate_Fields>;
  nodes: Array<Accidents>;
};

/** aggregate fields of "accidents" */
export type Accidents_Aggregate_Fields = {
  __typename?: 'accidents_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Accidents_Max_Fields>;
  min?: Maybe<Accidents_Min_Fields>;
};


/** aggregate fields of "accidents" */
export type Accidents_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Accidents_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "accidents" */
export type Accidents_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Accidents_Max_Order_By>;
  min?: InputMaybe<Accidents_Min_Order_By>;
};

/** input type for inserting array relation for remote table "accidents" */
export type Accidents_Arr_Rel_Insert_Input = {
  data: Array<Accidents_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Accidents_On_Conflict>;
};

/** Boolean expression to filter rows from the table "accidents". All fields are combined with a logical 'AND'. */
export type Accidents_Bool_Exp = {
  _and?: InputMaybe<Array<Accidents_Bool_Exp>>;
  _not?: InputMaybe<Accidents_Bool_Exp>;
  _or?: InputMaybe<Array<Accidents_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  date_of_occurrence?: InputMaybe<Date_Comparison_Exp>;
  date_of_removal?: InputMaybe<Date_Comparison_Exp>;
  description_of_removal?: InputMaybe<String_Comparison_Exp>;
  file?: InputMaybe<Uuid_Comparison_Exp>;
  file_rel?: InputMaybe<Files_Bool_Exp>;
  generate_service_order?: InputMaybe<Boolean_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  owner_rel?: InputMaybe<Users_Bool_Exp>;
  prevents_operation?: InputMaybe<Boolean_Comparison_Exp>;
  reporter?: InputMaybe<Uuid_Comparison_Exp>;
  solved?: InputMaybe<Boolean_Comparison_Exp>;
  tenant?: InputMaybe<Uuid_Comparison_Exp>;
  tenant_rel?: InputMaybe<Tenants_Bool_Exp>;
  type?: InputMaybe<String_Comparison_Exp>;
  tzb?: InputMaybe<Uuid_Comparison_Exp>;
  tzb_rel?: InputMaybe<Tzbs_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Uuid_Comparison_Exp>;
  user_rel?: InputMaybe<Users_Bool_Exp>;
  write_to_operation_log?: InputMaybe<Boolean_Comparison_Exp>;
};

/** unique or primary key constraints on table "accidents" */
export enum Accidents_Constraint {
  /** unique or primary key constraint on columns "id" */
  AccidentsPkey = 'accidents_pkey'
}

/** input type for inserting data into table "accidents" */
export type Accidents_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  date_of_occurrence?: InputMaybe<Scalars['date']>;
  date_of_removal?: InputMaybe<Scalars['date']>;
  description_of_removal?: InputMaybe<Scalars['String']>;
  file?: InputMaybe<Scalars['uuid']>;
  file_rel?: InputMaybe<Files_Obj_Rel_Insert_Input>;
  generate_service_order?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['uuid']>;
  owner_rel?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  prevents_operation?: InputMaybe<Scalars['Boolean']>;
  reporter?: InputMaybe<Scalars['uuid']>;
  solved?: InputMaybe<Scalars['Boolean']>;
  tenant?: InputMaybe<Scalars['uuid']>;
  tenant_rel?: InputMaybe<Tenants_Obj_Rel_Insert_Input>;
  type?: InputMaybe<Scalars['String']>;
  tzb?: InputMaybe<Scalars['uuid']>;
  tzb_rel?: InputMaybe<Tzbs_Obj_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user?: InputMaybe<Scalars['uuid']>;
  user_rel?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  write_to_operation_log?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate max on columns */
export type Accidents_Max_Fields = {
  __typename?: 'accidents_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  date_of_occurrence?: Maybe<Scalars['date']>;
  date_of_removal?: Maybe<Scalars['date']>;
  description_of_removal?: Maybe<Scalars['String']>;
  file?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  reporter?: Maybe<Scalars['uuid']>;
  tenant?: Maybe<Scalars['uuid']>;
  type?: Maybe<Scalars['String']>;
  tzb?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "accidents" */
export type Accidents_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  date_of_occurrence?: InputMaybe<Order_By>;
  date_of_removal?: InputMaybe<Order_By>;
  description_of_removal?: InputMaybe<Order_By>;
  file?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  reporter?: InputMaybe<Order_By>;
  tenant?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  tzb?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Accidents_Min_Fields = {
  __typename?: 'accidents_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  date_of_occurrence?: Maybe<Scalars['date']>;
  date_of_removal?: Maybe<Scalars['date']>;
  description_of_removal?: Maybe<Scalars['String']>;
  file?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  reporter?: Maybe<Scalars['uuid']>;
  tenant?: Maybe<Scalars['uuid']>;
  type?: Maybe<Scalars['String']>;
  tzb?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "accidents" */
export type Accidents_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  date_of_occurrence?: InputMaybe<Order_By>;
  date_of_removal?: InputMaybe<Order_By>;
  description_of_removal?: InputMaybe<Order_By>;
  file?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  reporter?: InputMaybe<Order_By>;
  tenant?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  tzb?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "accidents" */
export type Accidents_Mutation_Response = {
  __typename?: 'accidents_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Accidents>;
};

/** input type for inserting object relation for remote table "accidents" */
export type Accidents_Obj_Rel_Insert_Input = {
  data: Accidents_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Accidents_On_Conflict>;
};

/** on_conflict condition type for table "accidents" */
export type Accidents_On_Conflict = {
  constraint: Accidents_Constraint;
  update_columns?: Array<Accidents_Update_Column>;
  where?: InputMaybe<Accidents_Bool_Exp>;
};

/** Ordering options when selecting data from "accidents". */
export type Accidents_Order_By = {
  created_at?: InputMaybe<Order_By>;
  date_of_occurrence?: InputMaybe<Order_By>;
  date_of_removal?: InputMaybe<Order_By>;
  description_of_removal?: InputMaybe<Order_By>;
  file?: InputMaybe<Order_By>;
  file_rel?: InputMaybe<Files_Order_By>;
  generate_service_order?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  owner_rel?: InputMaybe<Users_Order_By>;
  prevents_operation?: InputMaybe<Order_By>;
  reporter?: InputMaybe<Order_By>;
  solved?: InputMaybe<Order_By>;
  tenant?: InputMaybe<Order_By>;
  tenant_rel?: InputMaybe<Tenants_Order_By>;
  type?: InputMaybe<Order_By>;
  tzb?: InputMaybe<Order_By>;
  tzb_rel?: InputMaybe<Tzbs_Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Order_By>;
  user_rel?: InputMaybe<Users_Order_By>;
  write_to_operation_log?: InputMaybe<Order_By>;
};

/** primary key columns input for table: accidents */
export type Accidents_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "accidents" */
export enum Accidents_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DateOfOccurrence = 'date_of_occurrence',
  /** column name */
  DateOfRemoval = 'date_of_removal',
  /** column name */
  DescriptionOfRemoval = 'description_of_removal',
  /** column name */
  File = 'file',
  /** column name */
  GenerateServiceOrder = 'generate_service_order',
  /** column name */
  Id = 'id',
  /** column name */
  PreventsOperation = 'prevents_operation',
  /** column name */
  Reporter = 'reporter',
  /** column name */
  Solved = 'solved',
  /** column name */
  Tenant = 'tenant',
  /** column name */
  Type = 'type',
  /** column name */
  Tzb = 'tzb',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  User = 'user',
  /** column name */
  WriteToOperationLog = 'write_to_operation_log'
}

/** input type for updating data in table "accidents" */
export type Accidents_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  date_of_occurrence?: InputMaybe<Scalars['date']>;
  date_of_removal?: InputMaybe<Scalars['date']>;
  description_of_removal?: InputMaybe<Scalars['String']>;
  file?: InputMaybe<Scalars['uuid']>;
  generate_service_order?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['uuid']>;
  prevents_operation?: InputMaybe<Scalars['Boolean']>;
  reporter?: InputMaybe<Scalars['uuid']>;
  solved?: InputMaybe<Scalars['Boolean']>;
  tenant?: InputMaybe<Scalars['uuid']>;
  type?: InputMaybe<Scalars['String']>;
  tzb?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user?: InputMaybe<Scalars['uuid']>;
  write_to_operation_log?: InputMaybe<Scalars['Boolean']>;
};

/** update columns of table "accidents" */
export enum Accidents_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DateOfOccurrence = 'date_of_occurrence',
  /** column name */
  DateOfRemoval = 'date_of_removal',
  /** column name */
  DescriptionOfRemoval = 'description_of_removal',
  /** column name */
  File = 'file',
  /** column name */
  GenerateServiceOrder = 'generate_service_order',
  /** column name */
  Id = 'id',
  /** column name */
  PreventsOperation = 'prevents_operation',
  /** column name */
  Reporter = 'reporter',
  /** column name */
  Solved = 'solved',
  /** column name */
  Tenant = 'tenant',
  /** column name */
  Type = 'type',
  /** column name */
  Tzb = 'tzb',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  User = 'user',
  /** column name */
  WriteToOperationLog = 'write_to_operation_log'
}

/** columns and relationships of "action_notes" */
export type Action_Notes = {
  __typename?: 'action_notes';
  created_at: Scalars['timestamptz'];
  date: Scalars['date'];
  /** An object relationship */
  file?: Maybe<Files>;
  id: Scalars['uuid'];
  media?: Maybe<Scalars['uuid']>;
  note: Scalars['String'];
  send_notifications: Scalars['Boolean'];
  tenant: Scalars['uuid'];
  /** An object relationship */
  tenant_rel: Tenants;
  tzb: Scalars['uuid'];
  updated_at: Scalars['timestamptz'];
  user: Scalars['uuid'];
  /** An object relationship */
  user_rel: Users;
};

/** aggregated selection of "action_notes" */
export type Action_Notes_Aggregate = {
  __typename?: 'action_notes_aggregate';
  aggregate?: Maybe<Action_Notes_Aggregate_Fields>;
  nodes: Array<Action_Notes>;
};

/** aggregate fields of "action_notes" */
export type Action_Notes_Aggregate_Fields = {
  __typename?: 'action_notes_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Action_Notes_Max_Fields>;
  min?: Maybe<Action_Notes_Min_Fields>;
};


/** aggregate fields of "action_notes" */
export type Action_Notes_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Action_Notes_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "action_notes" */
export type Action_Notes_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Action_Notes_Max_Order_By>;
  min?: InputMaybe<Action_Notes_Min_Order_By>;
};

/** input type for inserting array relation for remote table "action_notes" */
export type Action_Notes_Arr_Rel_Insert_Input = {
  data: Array<Action_Notes_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Action_Notes_On_Conflict>;
};

/** Boolean expression to filter rows from the table "action_notes". All fields are combined with a logical 'AND'. */
export type Action_Notes_Bool_Exp = {
  _and?: InputMaybe<Array<Action_Notes_Bool_Exp>>;
  _not?: InputMaybe<Action_Notes_Bool_Exp>;
  _or?: InputMaybe<Array<Action_Notes_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  date?: InputMaybe<Date_Comparison_Exp>;
  file?: InputMaybe<Files_Bool_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  media?: InputMaybe<Uuid_Comparison_Exp>;
  note?: InputMaybe<String_Comparison_Exp>;
  send_notifications?: InputMaybe<Boolean_Comparison_Exp>;
  tenant?: InputMaybe<Uuid_Comparison_Exp>;
  tenant_rel?: InputMaybe<Tenants_Bool_Exp>;
  tzb?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Uuid_Comparison_Exp>;
  user_rel?: InputMaybe<Users_Bool_Exp>;
};

/** unique or primary key constraints on table "action_notes" */
export enum Action_Notes_Constraint {
  /** unique or primary key constraint on columns "id" */
  ActionNotesPkey = 'action_notes_pkey'
}

/** input type for inserting data into table "action_notes" */
export type Action_Notes_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  date?: InputMaybe<Scalars['date']>;
  file?: InputMaybe<Files_Obj_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['uuid']>;
  media?: InputMaybe<Scalars['uuid']>;
  note?: InputMaybe<Scalars['String']>;
  send_notifications?: InputMaybe<Scalars['Boolean']>;
  tenant?: InputMaybe<Scalars['uuid']>;
  tenant_rel?: InputMaybe<Tenants_Obj_Rel_Insert_Input>;
  tzb?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user?: InputMaybe<Scalars['uuid']>;
  user_rel?: InputMaybe<Users_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Action_Notes_Max_Fields = {
  __typename?: 'action_notes_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  date?: Maybe<Scalars['date']>;
  id?: Maybe<Scalars['uuid']>;
  media?: Maybe<Scalars['uuid']>;
  note?: Maybe<Scalars['String']>;
  tenant?: Maybe<Scalars['uuid']>;
  tzb?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "action_notes" */
export type Action_Notes_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  date?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  media?: InputMaybe<Order_By>;
  note?: InputMaybe<Order_By>;
  tenant?: InputMaybe<Order_By>;
  tzb?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Action_Notes_Min_Fields = {
  __typename?: 'action_notes_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  date?: Maybe<Scalars['date']>;
  id?: Maybe<Scalars['uuid']>;
  media?: Maybe<Scalars['uuid']>;
  note?: Maybe<Scalars['String']>;
  tenant?: Maybe<Scalars['uuid']>;
  tzb?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "action_notes" */
export type Action_Notes_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  date?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  media?: InputMaybe<Order_By>;
  note?: InputMaybe<Order_By>;
  tenant?: InputMaybe<Order_By>;
  tzb?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "action_notes" */
export type Action_Notes_Mutation_Response = {
  __typename?: 'action_notes_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Action_Notes>;
};

/** on_conflict condition type for table "action_notes" */
export type Action_Notes_On_Conflict = {
  constraint: Action_Notes_Constraint;
  update_columns?: Array<Action_Notes_Update_Column>;
  where?: InputMaybe<Action_Notes_Bool_Exp>;
};

/** Ordering options when selecting data from "action_notes". */
export type Action_Notes_Order_By = {
  created_at?: InputMaybe<Order_By>;
  date?: InputMaybe<Order_By>;
  file?: InputMaybe<Files_Order_By>;
  id?: InputMaybe<Order_By>;
  media?: InputMaybe<Order_By>;
  note?: InputMaybe<Order_By>;
  send_notifications?: InputMaybe<Order_By>;
  tenant?: InputMaybe<Order_By>;
  tenant_rel?: InputMaybe<Tenants_Order_By>;
  tzb?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Order_By>;
  user_rel?: InputMaybe<Users_Order_By>;
};

/** primary key columns input for table: action_notes */
export type Action_Notes_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "action_notes" */
export enum Action_Notes_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Date = 'date',
  /** column name */
  Id = 'id',
  /** column name */
  Media = 'media',
  /** column name */
  Note = 'note',
  /** column name */
  SendNotifications = 'send_notifications',
  /** column name */
  Tenant = 'tenant',
  /** column name */
  Tzb = 'tzb',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  User = 'user'
}

/** input type for updating data in table "action_notes" */
export type Action_Notes_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  date?: InputMaybe<Scalars['date']>;
  id?: InputMaybe<Scalars['uuid']>;
  media?: InputMaybe<Scalars['uuid']>;
  note?: InputMaybe<Scalars['String']>;
  send_notifications?: InputMaybe<Scalars['Boolean']>;
  tenant?: InputMaybe<Scalars['uuid']>;
  tzb?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "action_notes" */
export enum Action_Notes_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Date = 'date',
  /** column name */
  Id = 'id',
  /** column name */
  Media = 'media',
  /** column name */
  Note = 'note',
  /** column name */
  SendNotifications = 'send_notifications',
  /** column name */
  Tenant = 'tenant',
  /** column name */
  Tzb = 'tzb',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  User = 'user'
}

/** (úkony) - jobs from checks and revisions */
export type Actions_Template_Jobs = {
  __typename?: 'actions_template_jobs';
  check_id?: Maybe<Scalars['uuid']>;
  /** An object relationship */
  check_rel?: Maybe<Checks>;
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  revision_id?: Maybe<Scalars['uuid']>;
  /** An object relationship */
  revision_rel?: Maybe<Revisions>;
  tenant: Scalars['uuid'];
  /** An object relationship */
  tenantByTenant: Tenants;
  title: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "actions_template_jobs" */
export type Actions_Template_Jobs_Aggregate = {
  __typename?: 'actions_template_jobs_aggregate';
  aggregate?: Maybe<Actions_Template_Jobs_Aggregate_Fields>;
  nodes: Array<Actions_Template_Jobs>;
};

/** aggregate fields of "actions_template_jobs" */
export type Actions_Template_Jobs_Aggregate_Fields = {
  __typename?: 'actions_template_jobs_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Actions_Template_Jobs_Max_Fields>;
  min?: Maybe<Actions_Template_Jobs_Min_Fields>;
};


/** aggregate fields of "actions_template_jobs" */
export type Actions_Template_Jobs_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Actions_Template_Jobs_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "actions_template_jobs" */
export type Actions_Template_Jobs_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Actions_Template_Jobs_Max_Order_By>;
  min?: InputMaybe<Actions_Template_Jobs_Min_Order_By>;
};

/** input type for inserting array relation for remote table "actions_template_jobs" */
export type Actions_Template_Jobs_Arr_Rel_Insert_Input = {
  data: Array<Actions_Template_Jobs_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Actions_Template_Jobs_On_Conflict>;
};

/** Boolean expression to filter rows from the table "actions_template_jobs". All fields are combined with a logical 'AND'. */
export type Actions_Template_Jobs_Bool_Exp = {
  _and?: InputMaybe<Array<Actions_Template_Jobs_Bool_Exp>>;
  _not?: InputMaybe<Actions_Template_Jobs_Bool_Exp>;
  _or?: InputMaybe<Array<Actions_Template_Jobs_Bool_Exp>>;
  check_id?: InputMaybe<Uuid_Comparison_Exp>;
  check_rel?: InputMaybe<Checks_Bool_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  revision_id?: InputMaybe<Uuid_Comparison_Exp>;
  revision_rel?: InputMaybe<Revisions_Bool_Exp>;
  tenant?: InputMaybe<Uuid_Comparison_Exp>;
  tenantByTenant?: InputMaybe<Tenants_Bool_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "actions_template_jobs" */
export enum Actions_Template_Jobs_Constraint {
  /** unique or primary key constraint on columns "id" */
  ActionsTemplateJobsPkey = 'actions_template_jobs_pkey'
}

/** input type for inserting data into table "actions_template_jobs" */
export type Actions_Template_Jobs_Insert_Input = {
  check_id?: InputMaybe<Scalars['uuid']>;
  check_rel?: InputMaybe<Checks_Obj_Rel_Insert_Input>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  revision_id?: InputMaybe<Scalars['uuid']>;
  revision_rel?: InputMaybe<Revisions_Obj_Rel_Insert_Input>;
  tenant?: InputMaybe<Scalars['uuid']>;
  tenantByTenant?: InputMaybe<Tenants_Obj_Rel_Insert_Input>;
  title?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Actions_Template_Jobs_Max_Fields = {
  __typename?: 'actions_template_jobs_max_fields';
  check_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  revision_id?: Maybe<Scalars['uuid']>;
  tenant?: Maybe<Scalars['uuid']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "actions_template_jobs" */
export type Actions_Template_Jobs_Max_Order_By = {
  check_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  revision_id?: InputMaybe<Order_By>;
  tenant?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Actions_Template_Jobs_Min_Fields = {
  __typename?: 'actions_template_jobs_min_fields';
  check_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  revision_id?: Maybe<Scalars['uuid']>;
  tenant?: Maybe<Scalars['uuid']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "actions_template_jobs" */
export type Actions_Template_Jobs_Min_Order_By = {
  check_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  revision_id?: InputMaybe<Order_By>;
  tenant?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "actions_template_jobs" */
export type Actions_Template_Jobs_Mutation_Response = {
  __typename?: 'actions_template_jobs_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Actions_Template_Jobs>;
};

/** on_conflict condition type for table "actions_template_jobs" */
export type Actions_Template_Jobs_On_Conflict = {
  constraint: Actions_Template_Jobs_Constraint;
  update_columns?: Array<Actions_Template_Jobs_Update_Column>;
  where?: InputMaybe<Actions_Template_Jobs_Bool_Exp>;
};

/** Ordering options when selecting data from "actions_template_jobs". */
export type Actions_Template_Jobs_Order_By = {
  check_id?: InputMaybe<Order_By>;
  check_rel?: InputMaybe<Checks_Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  revision_id?: InputMaybe<Order_By>;
  revision_rel?: InputMaybe<Revisions_Order_By>;
  tenant?: InputMaybe<Order_By>;
  tenantByTenant?: InputMaybe<Tenants_Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: actions_template_jobs */
export type Actions_Template_Jobs_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "actions_template_jobs" */
export enum Actions_Template_Jobs_Select_Column {
  /** column name */
  CheckId = 'check_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  RevisionId = 'revision_id',
  /** column name */
  Tenant = 'tenant',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "actions_template_jobs" */
export type Actions_Template_Jobs_Set_Input = {
  check_id?: InputMaybe<Scalars['uuid']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  revision_id?: InputMaybe<Scalars['uuid']>;
  tenant?: InputMaybe<Scalars['uuid']>;
  title?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "actions_template_jobs" */
export enum Actions_Template_Jobs_Update_Column {
  /** column name */
  CheckId = 'check_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  RevisionId = 'revision_id',
  /** column name */
  Tenant = 'tenant',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** columns and relationships of "actions_templates" */
export type Actions_Templates = {
  __typename?: 'actions_templates';
  category: Scalars['String'];
  /** An array relationship */
  checks: Array<Checks>;
  /** An aggregate relationship */
  checks_aggregate: Checks_Aggregate;
  created_at: Scalars['date'];
  /** An array relationship */
  devices: Array<Devices>;
  /** An aggregate relationship */
  devices_aggregate: Devices_Aggregate;
  /** An array relationship */
  devices_catalog_actions_templates_rel: Array<Devices_Catalog_Actions_Templates>;
  /** An aggregate relationship */
  devices_catalog_actions_templates_rel_aggregate: Devices_Catalog_Actions_Templates_Aggregate;
  /** An array relationship */
  devices_catalogs: Array<Devices_Catalog>;
  /** An aggregate relationship */
  devices_catalogs_aggregate: Devices_Catalog_Aggregate;
  id: Scalars['uuid'];
  name: Scalars['String'];
  /** An array relationship */
  revisions: Array<Revisions>;
  /** An aggregate relationship */
  revisions_aggregate: Revisions_Aggregate;
  subcategory: Scalars['String'];
  tenant: Scalars['uuid'];
  /** An object relationship */
  tenant_rel: Tenants;
  type: Scalars['String'];
  updated_at: Scalars['date'];
  user: Scalars['uuid'];
  /** An object relationship */
  user_rel: Users;
};


/** columns and relationships of "actions_templates" */
export type Actions_TemplatesChecksArgs = {
  distinct_on?: InputMaybe<Array<Checks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Checks_Order_By>>;
  where?: InputMaybe<Checks_Bool_Exp>;
};


/** columns and relationships of "actions_templates" */
export type Actions_TemplatesChecks_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Checks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Checks_Order_By>>;
  where?: InputMaybe<Checks_Bool_Exp>;
};


/** columns and relationships of "actions_templates" */
export type Actions_TemplatesDevicesArgs = {
  distinct_on?: InputMaybe<Array<Devices_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Devices_Order_By>>;
  where?: InputMaybe<Devices_Bool_Exp>;
};


/** columns and relationships of "actions_templates" */
export type Actions_TemplatesDevices_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Devices_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Devices_Order_By>>;
  where?: InputMaybe<Devices_Bool_Exp>;
};


/** columns and relationships of "actions_templates" */
export type Actions_TemplatesDevices_Catalog_Actions_Templates_RelArgs = {
  distinct_on?: InputMaybe<Array<Devices_Catalog_Actions_Templates_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Devices_Catalog_Actions_Templates_Order_By>>;
  where?: InputMaybe<Devices_Catalog_Actions_Templates_Bool_Exp>;
};


/** columns and relationships of "actions_templates" */
export type Actions_TemplatesDevices_Catalog_Actions_Templates_Rel_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Devices_Catalog_Actions_Templates_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Devices_Catalog_Actions_Templates_Order_By>>;
  where?: InputMaybe<Devices_Catalog_Actions_Templates_Bool_Exp>;
};


/** columns and relationships of "actions_templates" */
export type Actions_TemplatesDevices_CatalogsArgs = {
  distinct_on?: InputMaybe<Array<Devices_Catalog_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Devices_Catalog_Order_By>>;
  where?: InputMaybe<Devices_Catalog_Bool_Exp>;
};


/** columns and relationships of "actions_templates" */
export type Actions_TemplatesDevices_Catalogs_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Devices_Catalog_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Devices_Catalog_Order_By>>;
  where?: InputMaybe<Devices_Catalog_Bool_Exp>;
};


/** columns and relationships of "actions_templates" */
export type Actions_TemplatesRevisionsArgs = {
  distinct_on?: InputMaybe<Array<Revisions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Revisions_Order_By>>;
  where?: InputMaybe<Revisions_Bool_Exp>;
};


/** columns and relationships of "actions_templates" */
export type Actions_TemplatesRevisions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Revisions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Revisions_Order_By>>;
  where?: InputMaybe<Revisions_Bool_Exp>;
};

/** aggregated selection of "actions_templates" */
export type Actions_Templates_Aggregate = {
  __typename?: 'actions_templates_aggregate';
  aggregate?: Maybe<Actions_Templates_Aggregate_Fields>;
  nodes: Array<Actions_Templates>;
};

/** aggregate fields of "actions_templates" */
export type Actions_Templates_Aggregate_Fields = {
  __typename?: 'actions_templates_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Actions_Templates_Max_Fields>;
  min?: Maybe<Actions_Templates_Min_Fields>;
};


/** aggregate fields of "actions_templates" */
export type Actions_Templates_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Actions_Templates_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "actions_templates" */
export type Actions_Templates_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Actions_Templates_Max_Order_By>;
  min?: InputMaybe<Actions_Templates_Min_Order_By>;
};

/** input type for inserting array relation for remote table "actions_templates" */
export type Actions_Templates_Arr_Rel_Insert_Input = {
  data: Array<Actions_Templates_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Actions_Templates_On_Conflict>;
};

/** Boolean expression to filter rows from the table "actions_templates". All fields are combined with a logical 'AND'. */
export type Actions_Templates_Bool_Exp = {
  _and?: InputMaybe<Array<Actions_Templates_Bool_Exp>>;
  _not?: InputMaybe<Actions_Templates_Bool_Exp>;
  _or?: InputMaybe<Array<Actions_Templates_Bool_Exp>>;
  category?: InputMaybe<String_Comparison_Exp>;
  checks?: InputMaybe<Checks_Bool_Exp>;
  created_at?: InputMaybe<Date_Comparison_Exp>;
  devices?: InputMaybe<Devices_Bool_Exp>;
  devices_catalog_actions_templates_rel?: InputMaybe<Devices_Catalog_Actions_Templates_Bool_Exp>;
  devices_catalogs?: InputMaybe<Devices_Catalog_Bool_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  revisions?: InputMaybe<Revisions_Bool_Exp>;
  subcategory?: InputMaybe<String_Comparison_Exp>;
  tenant?: InputMaybe<Uuid_Comparison_Exp>;
  tenant_rel?: InputMaybe<Tenants_Bool_Exp>;
  type?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Date_Comparison_Exp>;
  user?: InputMaybe<Uuid_Comparison_Exp>;
  user_rel?: InputMaybe<Users_Bool_Exp>;
};

/** unique or primary key constraints on table "actions_templates" */
export enum Actions_Templates_Constraint {
  /** unique or primary key constraint on columns "id" */
  ActionsTemplatesPkey = 'actions_templates_pkey'
}

/** input type for inserting data into table "actions_templates" */
export type Actions_Templates_Insert_Input = {
  category?: InputMaybe<Scalars['String']>;
  checks?: InputMaybe<Checks_Arr_Rel_Insert_Input>;
  created_at?: InputMaybe<Scalars['date']>;
  devices?: InputMaybe<Devices_Arr_Rel_Insert_Input>;
  devices_catalog_actions_templates_rel?: InputMaybe<Devices_Catalog_Actions_Templates_Arr_Rel_Insert_Input>;
  devices_catalogs?: InputMaybe<Devices_Catalog_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  revisions?: InputMaybe<Revisions_Arr_Rel_Insert_Input>;
  subcategory?: InputMaybe<Scalars['String']>;
  tenant?: InputMaybe<Scalars['uuid']>;
  tenant_rel?: InputMaybe<Tenants_Obj_Rel_Insert_Input>;
  type?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['date']>;
  user?: InputMaybe<Scalars['uuid']>;
  user_rel?: InputMaybe<Users_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Actions_Templates_Max_Fields = {
  __typename?: 'actions_templates_max_fields';
  category?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['date']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  subcategory?: Maybe<Scalars['String']>;
  tenant?: Maybe<Scalars['uuid']>;
  type?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['date']>;
  user?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "actions_templates" */
export type Actions_Templates_Max_Order_By = {
  category?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  subcategory?: InputMaybe<Order_By>;
  tenant?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Actions_Templates_Min_Fields = {
  __typename?: 'actions_templates_min_fields';
  category?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['date']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  subcategory?: Maybe<Scalars['String']>;
  tenant?: Maybe<Scalars['uuid']>;
  type?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['date']>;
  user?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "actions_templates" */
export type Actions_Templates_Min_Order_By = {
  category?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  subcategory?: InputMaybe<Order_By>;
  tenant?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "actions_templates" */
export type Actions_Templates_Mutation_Response = {
  __typename?: 'actions_templates_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Actions_Templates>;
};

/** input type for inserting object relation for remote table "actions_templates" */
export type Actions_Templates_Obj_Rel_Insert_Input = {
  data: Actions_Templates_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Actions_Templates_On_Conflict>;
};

/** on_conflict condition type for table "actions_templates" */
export type Actions_Templates_On_Conflict = {
  constraint: Actions_Templates_Constraint;
  update_columns?: Array<Actions_Templates_Update_Column>;
  where?: InputMaybe<Actions_Templates_Bool_Exp>;
};

/** Ordering options when selecting data from "actions_templates". */
export type Actions_Templates_Order_By = {
  category?: InputMaybe<Order_By>;
  checks_aggregate?: InputMaybe<Checks_Aggregate_Order_By>;
  created_at?: InputMaybe<Order_By>;
  devices_aggregate?: InputMaybe<Devices_Aggregate_Order_By>;
  devices_catalog_actions_templates_rel_aggregate?: InputMaybe<Devices_Catalog_Actions_Templates_Aggregate_Order_By>;
  devices_catalogs_aggregate?: InputMaybe<Devices_Catalog_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  revisions_aggregate?: InputMaybe<Revisions_Aggregate_Order_By>;
  subcategory?: InputMaybe<Order_By>;
  tenant?: InputMaybe<Order_By>;
  tenant_rel?: InputMaybe<Tenants_Order_By>;
  type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Order_By>;
  user_rel?: InputMaybe<Users_Order_By>;
};

/** primary key columns input for table: actions_templates */
export type Actions_Templates_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "actions_templates" */
export enum Actions_Templates_Select_Column {
  /** column name */
  Category = 'category',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Subcategory = 'subcategory',
  /** column name */
  Tenant = 'tenant',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  User = 'user'
}

/** input type for updating data in table "actions_templates" */
export type Actions_Templates_Set_Input = {
  category?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['date']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  subcategory?: InputMaybe<Scalars['String']>;
  tenant?: InputMaybe<Scalars['uuid']>;
  type?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['date']>;
  user?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "actions_templates" */
export enum Actions_Templates_Update_Column {
  /** column name */
  Category = 'category',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Subcategory = 'subcategory',
  /** column name */
  Tenant = 'tenant',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  User = 'user'
}

/** columns and relationships of "buildings" */
export type Buildings = {
  __typename?: 'buildings';
  city: Scalars['String'];
  created_at: Scalars['timestamp'];
  customer: Scalars['uuid'];
  /** An object relationship */
  customer_rel: Customers;
  id: Scalars['uuid'];
  name: Scalars['String'];
  postal_code: Scalars['String'];
  state: Scalars['String'];
  street: Scalars['String'];
  tenant: Scalars['uuid'];
  /** An object relationship */
  tenant_rel: Tenants;
  /** An array relationship */
  tzbs: Array<Tzbs>;
  /** An aggregate relationship */
  tzbs_aggregate: Tzbs_Aggregate;
  updated_at: Scalars['timestamp'];
  user: Scalars['uuid'];
  /** An object relationship */
  user_rel: Users;
};


/** columns and relationships of "buildings" */
export type BuildingsTzbsArgs = {
  distinct_on?: InputMaybe<Array<Tzbs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tzbs_Order_By>>;
  where?: InputMaybe<Tzbs_Bool_Exp>;
};


/** columns and relationships of "buildings" */
export type BuildingsTzbs_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tzbs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tzbs_Order_By>>;
  where?: InputMaybe<Tzbs_Bool_Exp>;
};

/** aggregated selection of "buildings" */
export type Buildings_Aggregate = {
  __typename?: 'buildings_aggregate';
  aggregate?: Maybe<Buildings_Aggregate_Fields>;
  nodes: Array<Buildings>;
};

/** aggregate fields of "buildings" */
export type Buildings_Aggregate_Fields = {
  __typename?: 'buildings_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Buildings_Max_Fields>;
  min?: Maybe<Buildings_Min_Fields>;
};


/** aggregate fields of "buildings" */
export type Buildings_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Buildings_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "buildings" */
export type Buildings_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Buildings_Max_Order_By>;
  min?: InputMaybe<Buildings_Min_Order_By>;
};

/** input type for inserting array relation for remote table "buildings" */
export type Buildings_Arr_Rel_Insert_Input = {
  data: Array<Buildings_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Buildings_On_Conflict>;
};

/** Boolean expression to filter rows from the table "buildings". All fields are combined with a logical 'AND'. */
export type Buildings_Bool_Exp = {
  _and?: InputMaybe<Array<Buildings_Bool_Exp>>;
  _not?: InputMaybe<Buildings_Bool_Exp>;
  _or?: InputMaybe<Array<Buildings_Bool_Exp>>;
  city?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  customer?: InputMaybe<Uuid_Comparison_Exp>;
  customer_rel?: InputMaybe<Customers_Bool_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  postal_code?: InputMaybe<String_Comparison_Exp>;
  state?: InputMaybe<String_Comparison_Exp>;
  street?: InputMaybe<String_Comparison_Exp>;
  tenant?: InputMaybe<Uuid_Comparison_Exp>;
  tenant_rel?: InputMaybe<Tenants_Bool_Exp>;
  tzbs?: InputMaybe<Tzbs_Bool_Exp>;
  updated_at?: InputMaybe<Timestamp_Comparison_Exp>;
  user?: InputMaybe<Uuid_Comparison_Exp>;
  user_rel?: InputMaybe<Users_Bool_Exp>;
};

/** unique or primary key constraints on table "buildings" */
export enum Buildings_Constraint {
  /** unique or primary key constraint on columns "id" */
  BuildingsPkey = 'buildings_pkey'
}

/** input type for inserting data into table "buildings" */
export type Buildings_Insert_Input = {
  city?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamp']>;
  customer?: InputMaybe<Scalars['uuid']>;
  customer_rel?: InputMaybe<Customers_Obj_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  postal_code?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<Scalars['String']>;
  street?: InputMaybe<Scalars['String']>;
  tenant?: InputMaybe<Scalars['uuid']>;
  tenant_rel?: InputMaybe<Tenants_Obj_Rel_Insert_Input>;
  tzbs?: InputMaybe<Tzbs_Arr_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['timestamp']>;
  user?: InputMaybe<Scalars['uuid']>;
  user_rel?: InputMaybe<Users_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Buildings_Max_Fields = {
  __typename?: 'buildings_max_fields';
  city?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamp']>;
  customer?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  postal_code?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
  tenant?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamp']>;
  user?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "buildings" */
export type Buildings_Max_Order_By = {
  city?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  customer?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  postal_code?: InputMaybe<Order_By>;
  state?: InputMaybe<Order_By>;
  street?: InputMaybe<Order_By>;
  tenant?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Buildings_Min_Fields = {
  __typename?: 'buildings_min_fields';
  city?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamp']>;
  customer?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  postal_code?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
  tenant?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamp']>;
  user?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "buildings" */
export type Buildings_Min_Order_By = {
  city?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  customer?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  postal_code?: InputMaybe<Order_By>;
  state?: InputMaybe<Order_By>;
  street?: InputMaybe<Order_By>;
  tenant?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "buildings" */
export type Buildings_Mutation_Response = {
  __typename?: 'buildings_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Buildings>;
};

/** input type for inserting object relation for remote table "buildings" */
export type Buildings_Obj_Rel_Insert_Input = {
  data: Buildings_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Buildings_On_Conflict>;
};

/** on_conflict condition type for table "buildings" */
export type Buildings_On_Conflict = {
  constraint: Buildings_Constraint;
  update_columns?: Array<Buildings_Update_Column>;
  where?: InputMaybe<Buildings_Bool_Exp>;
};

/** Ordering options when selecting data from "buildings". */
export type Buildings_Order_By = {
  city?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  customer?: InputMaybe<Order_By>;
  customer_rel?: InputMaybe<Customers_Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  postal_code?: InputMaybe<Order_By>;
  state?: InputMaybe<Order_By>;
  street?: InputMaybe<Order_By>;
  tenant?: InputMaybe<Order_By>;
  tenant_rel?: InputMaybe<Tenants_Order_By>;
  tzbs_aggregate?: InputMaybe<Tzbs_Aggregate_Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Order_By>;
  user_rel?: InputMaybe<Users_Order_By>;
};

/** primary key columns input for table: buildings */
export type Buildings_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "buildings" */
export enum Buildings_Select_Column {
  /** column name */
  City = 'city',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Customer = 'customer',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  PostalCode = 'postal_code',
  /** column name */
  State = 'state',
  /** column name */
  Street = 'street',
  /** column name */
  Tenant = 'tenant',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  User = 'user'
}

/** input type for updating data in table "buildings" */
export type Buildings_Set_Input = {
  city?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamp']>;
  customer?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  postal_code?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<Scalars['String']>;
  street?: InputMaybe<Scalars['String']>;
  tenant?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamp']>;
  user?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "buildings" */
export enum Buildings_Update_Column {
  /** column name */
  City = 'city',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Customer = 'customer',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  PostalCode = 'postal_code',
  /** column name */
  State = 'state',
  /** column name */
  Street = 'street',
  /** column name */
  Tenant = 'tenant',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  User = 'user'
}

/** columns and relationships of "checks" */
export type Checks = {
  __typename?: 'checks';
  action_template: Scalars['uuid'];
  /** An object relationship */
  actions_rel: Actions_Templates;
  created_at: Scalars['date'];
  frequency: Scalars['String'];
  id: Scalars['uuid'];
  /** An array relationship */
  jobs_rel: Array<Actions_Template_Jobs>;
  /** An aggregate relationship */
  jobs_rel_aggregate: Actions_Template_Jobs_Aggregate;
  note?: Maybe<Scalars['String']>;
  tenant: Scalars['uuid'];
  /** An object relationship */
  tenant_rel: Tenants;
  title: Scalars['String'];
  updated_at: Scalars['date'];
};


/** columns and relationships of "checks" */
export type ChecksJobs_RelArgs = {
  distinct_on?: InputMaybe<Array<Actions_Template_Jobs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Actions_Template_Jobs_Order_By>>;
  where?: InputMaybe<Actions_Template_Jobs_Bool_Exp>;
};


/** columns and relationships of "checks" */
export type ChecksJobs_Rel_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Actions_Template_Jobs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Actions_Template_Jobs_Order_By>>;
  where?: InputMaybe<Actions_Template_Jobs_Bool_Exp>;
};

/** aggregated selection of "checks" */
export type Checks_Aggregate = {
  __typename?: 'checks_aggregate';
  aggregate?: Maybe<Checks_Aggregate_Fields>;
  nodes: Array<Checks>;
};

/** aggregate fields of "checks" */
export type Checks_Aggregate_Fields = {
  __typename?: 'checks_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Checks_Max_Fields>;
  min?: Maybe<Checks_Min_Fields>;
};


/** aggregate fields of "checks" */
export type Checks_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Checks_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "checks" */
export type Checks_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Checks_Max_Order_By>;
  min?: InputMaybe<Checks_Min_Order_By>;
};

/** input type for inserting array relation for remote table "checks" */
export type Checks_Arr_Rel_Insert_Input = {
  data: Array<Checks_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Checks_On_Conflict>;
};

/** Boolean expression to filter rows from the table "checks". All fields are combined with a logical 'AND'. */
export type Checks_Bool_Exp = {
  _and?: InputMaybe<Array<Checks_Bool_Exp>>;
  _not?: InputMaybe<Checks_Bool_Exp>;
  _or?: InputMaybe<Array<Checks_Bool_Exp>>;
  action_template?: InputMaybe<Uuid_Comparison_Exp>;
  actions_rel?: InputMaybe<Actions_Templates_Bool_Exp>;
  created_at?: InputMaybe<Date_Comparison_Exp>;
  frequency?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  jobs_rel?: InputMaybe<Actions_Template_Jobs_Bool_Exp>;
  note?: InputMaybe<String_Comparison_Exp>;
  tenant?: InputMaybe<Uuid_Comparison_Exp>;
  tenant_rel?: InputMaybe<Tenants_Bool_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Date_Comparison_Exp>;
};

/** unique or primary key constraints on table "checks" */
export enum Checks_Constraint {
  /** unique or primary key constraint on columns "id" */
  ChecksPkey = 'checks_pkey'
}

/** input type for inserting data into table "checks" */
export type Checks_Insert_Input = {
  action_template?: InputMaybe<Scalars['uuid']>;
  actions_rel?: InputMaybe<Actions_Templates_Obj_Rel_Insert_Input>;
  created_at?: InputMaybe<Scalars['date']>;
  frequency?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  jobs_rel?: InputMaybe<Actions_Template_Jobs_Arr_Rel_Insert_Input>;
  note?: InputMaybe<Scalars['String']>;
  tenant?: InputMaybe<Scalars['uuid']>;
  tenant_rel?: InputMaybe<Tenants_Obj_Rel_Insert_Input>;
  title?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['date']>;
};

/** aggregate max on columns */
export type Checks_Max_Fields = {
  __typename?: 'checks_max_fields';
  action_template?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['date']>;
  frequency?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  note?: Maybe<Scalars['String']>;
  tenant?: Maybe<Scalars['uuid']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['date']>;
};

/** order by max() on columns of table "checks" */
export type Checks_Max_Order_By = {
  action_template?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  frequency?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  note?: InputMaybe<Order_By>;
  tenant?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Checks_Min_Fields = {
  __typename?: 'checks_min_fields';
  action_template?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['date']>;
  frequency?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  note?: Maybe<Scalars['String']>;
  tenant?: Maybe<Scalars['uuid']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['date']>;
};

/** order by min() on columns of table "checks" */
export type Checks_Min_Order_By = {
  action_template?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  frequency?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  note?: InputMaybe<Order_By>;
  tenant?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "checks" */
export type Checks_Mutation_Response = {
  __typename?: 'checks_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Checks>;
};

/** input type for inserting object relation for remote table "checks" */
export type Checks_Obj_Rel_Insert_Input = {
  data: Checks_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Checks_On_Conflict>;
};

/** on_conflict condition type for table "checks" */
export type Checks_On_Conflict = {
  constraint: Checks_Constraint;
  update_columns?: Array<Checks_Update_Column>;
  where?: InputMaybe<Checks_Bool_Exp>;
};

/** Ordering options when selecting data from "checks". */
export type Checks_Order_By = {
  action_template?: InputMaybe<Order_By>;
  actions_rel?: InputMaybe<Actions_Templates_Order_By>;
  created_at?: InputMaybe<Order_By>;
  frequency?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  jobs_rel_aggregate?: InputMaybe<Actions_Template_Jobs_Aggregate_Order_By>;
  note?: InputMaybe<Order_By>;
  tenant?: InputMaybe<Order_By>;
  tenant_rel?: InputMaybe<Tenants_Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: checks */
export type Checks_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "checks" */
export enum Checks_Select_Column {
  /** column name */
  ActionTemplate = 'action_template',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Frequency = 'frequency',
  /** column name */
  Id = 'id',
  /** column name */
  Note = 'note',
  /** column name */
  Tenant = 'tenant',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "checks" */
export type Checks_Set_Input = {
  action_template?: InputMaybe<Scalars['uuid']>;
  created_at?: InputMaybe<Scalars['date']>;
  frequency?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  note?: InputMaybe<Scalars['String']>;
  tenant?: InputMaybe<Scalars['uuid']>;
  title?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['date']>;
};

/** update columns of table "checks" */
export enum Checks_Update_Column {
  /** column name */
  ActionTemplate = 'action_template',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Frequency = 'frequency',
  /** column name */
  Id = 'id',
  /** column name */
  Note = 'note',
  /** column name */
  Tenant = 'tenant',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** columns and relationships of "consumed_material" */
export type Consumed_Material = {
  __typename?: 'consumed_material';
  created_at: Scalars['date'];
  id: Scalars['uuid'];
  pcs: Scalars['String'];
  price_without_vat: Scalars['String'];
  service_order: Scalars['uuid'];
  /** An object relationship */
  service_order_rel: Service_Orders;
  tenant: Scalars['uuid'];
  /** An object relationship */
  tenant_rel: Tenants;
  title: Scalars['String'];
  updated_at: Scalars['date'];
};

/** aggregated selection of "consumed_material" */
export type Consumed_Material_Aggregate = {
  __typename?: 'consumed_material_aggregate';
  aggregate?: Maybe<Consumed_Material_Aggregate_Fields>;
  nodes: Array<Consumed_Material>;
};

/** aggregate fields of "consumed_material" */
export type Consumed_Material_Aggregate_Fields = {
  __typename?: 'consumed_material_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Consumed_Material_Max_Fields>;
  min?: Maybe<Consumed_Material_Min_Fields>;
};


/** aggregate fields of "consumed_material" */
export type Consumed_Material_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Consumed_Material_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "consumed_material" */
export type Consumed_Material_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Consumed_Material_Max_Order_By>;
  min?: InputMaybe<Consumed_Material_Min_Order_By>;
};

/** input type for inserting array relation for remote table "consumed_material" */
export type Consumed_Material_Arr_Rel_Insert_Input = {
  data: Array<Consumed_Material_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Consumed_Material_On_Conflict>;
};

/** Boolean expression to filter rows from the table "consumed_material". All fields are combined with a logical 'AND'. */
export type Consumed_Material_Bool_Exp = {
  _and?: InputMaybe<Array<Consumed_Material_Bool_Exp>>;
  _not?: InputMaybe<Consumed_Material_Bool_Exp>;
  _or?: InputMaybe<Array<Consumed_Material_Bool_Exp>>;
  created_at?: InputMaybe<Date_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  pcs?: InputMaybe<String_Comparison_Exp>;
  price_without_vat?: InputMaybe<String_Comparison_Exp>;
  service_order?: InputMaybe<Uuid_Comparison_Exp>;
  service_order_rel?: InputMaybe<Service_Orders_Bool_Exp>;
  tenant?: InputMaybe<Uuid_Comparison_Exp>;
  tenant_rel?: InputMaybe<Tenants_Bool_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Date_Comparison_Exp>;
};

/** unique or primary key constraints on table "consumed_material" */
export enum Consumed_Material_Constraint {
  /** unique or primary key constraint on columns "id" */
  ConsumedMaterialPkey = 'consumed_material_pkey'
}

/** input type for inserting data into table "consumed_material" */
export type Consumed_Material_Insert_Input = {
  created_at?: InputMaybe<Scalars['date']>;
  id?: InputMaybe<Scalars['uuid']>;
  pcs?: InputMaybe<Scalars['String']>;
  price_without_vat?: InputMaybe<Scalars['String']>;
  service_order?: InputMaybe<Scalars['uuid']>;
  service_order_rel?: InputMaybe<Service_Orders_Obj_Rel_Insert_Input>;
  tenant?: InputMaybe<Scalars['uuid']>;
  tenant_rel?: InputMaybe<Tenants_Obj_Rel_Insert_Input>;
  title?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['date']>;
};

/** aggregate max on columns */
export type Consumed_Material_Max_Fields = {
  __typename?: 'consumed_material_max_fields';
  created_at?: Maybe<Scalars['date']>;
  id?: Maybe<Scalars['uuid']>;
  pcs?: Maybe<Scalars['String']>;
  price_without_vat?: Maybe<Scalars['String']>;
  service_order?: Maybe<Scalars['uuid']>;
  tenant?: Maybe<Scalars['uuid']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['date']>;
};

/** order by max() on columns of table "consumed_material" */
export type Consumed_Material_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  pcs?: InputMaybe<Order_By>;
  price_without_vat?: InputMaybe<Order_By>;
  service_order?: InputMaybe<Order_By>;
  tenant?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Consumed_Material_Min_Fields = {
  __typename?: 'consumed_material_min_fields';
  created_at?: Maybe<Scalars['date']>;
  id?: Maybe<Scalars['uuid']>;
  pcs?: Maybe<Scalars['String']>;
  price_without_vat?: Maybe<Scalars['String']>;
  service_order?: Maybe<Scalars['uuid']>;
  tenant?: Maybe<Scalars['uuid']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['date']>;
};

/** order by min() on columns of table "consumed_material" */
export type Consumed_Material_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  pcs?: InputMaybe<Order_By>;
  price_without_vat?: InputMaybe<Order_By>;
  service_order?: InputMaybe<Order_By>;
  tenant?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "consumed_material" */
export type Consumed_Material_Mutation_Response = {
  __typename?: 'consumed_material_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Consumed_Material>;
};

/** on_conflict condition type for table "consumed_material" */
export type Consumed_Material_On_Conflict = {
  constraint: Consumed_Material_Constraint;
  update_columns?: Array<Consumed_Material_Update_Column>;
  where?: InputMaybe<Consumed_Material_Bool_Exp>;
};

/** Ordering options when selecting data from "consumed_material". */
export type Consumed_Material_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  pcs?: InputMaybe<Order_By>;
  price_without_vat?: InputMaybe<Order_By>;
  service_order?: InputMaybe<Order_By>;
  service_order_rel?: InputMaybe<Service_Orders_Order_By>;
  tenant?: InputMaybe<Order_By>;
  tenant_rel?: InputMaybe<Tenants_Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: consumed_material */
export type Consumed_Material_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "consumed_material" */
export enum Consumed_Material_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Pcs = 'pcs',
  /** column name */
  PriceWithoutVat = 'price_without_vat',
  /** column name */
  ServiceOrder = 'service_order',
  /** column name */
  Tenant = 'tenant',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "consumed_material" */
export type Consumed_Material_Set_Input = {
  created_at?: InputMaybe<Scalars['date']>;
  id?: InputMaybe<Scalars['uuid']>;
  pcs?: InputMaybe<Scalars['String']>;
  price_without_vat?: InputMaybe<Scalars['String']>;
  service_order?: InputMaybe<Scalars['uuid']>;
  tenant?: InputMaybe<Scalars['uuid']>;
  title?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['date']>;
};

/** update columns of table "consumed_material" */
export enum Consumed_Material_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Pcs = 'pcs',
  /** column name */
  PriceWithoutVat = 'price_without_vat',
  /** column name */
  ServiceOrder = 'service_order',
  /** column name */
  Tenant = 'tenant',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** columns and relationships of "contacts" */
export type Contacts = {
  __typename?: 'contacts';
  address?: Maybe<Scalars['String']>;
  company?: Maybe<Scalars['String']>;
  created_at: Scalars['date'];
  email: Scalars['String'];
  first_name: Scalars['String'];
  id: Scalars['uuid'];
  job_title?: Maybe<Scalars['String']>;
  last_name: Scalars['String'];
  note?: Maybe<Scalars['String']>;
  tel?: Maybe<Scalars['String']>;
  tenant: Scalars['uuid'];
  /** An object relationship */
  tenant_rel: Tenants;
  tzb: Scalars['uuid'];
  /** An object relationship */
  tzb_rel: Tzbs;
  updated_at: Scalars['date'];
  user: Scalars['uuid'];
  /** An object relationship */
  user_rel: Users;
};

/** aggregated selection of "contacts" */
export type Contacts_Aggregate = {
  __typename?: 'contacts_aggregate';
  aggregate?: Maybe<Contacts_Aggregate_Fields>;
  nodes: Array<Contacts>;
};

/** aggregate fields of "contacts" */
export type Contacts_Aggregate_Fields = {
  __typename?: 'contacts_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Contacts_Max_Fields>;
  min?: Maybe<Contacts_Min_Fields>;
};


/** aggregate fields of "contacts" */
export type Contacts_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Contacts_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "contacts" */
export type Contacts_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Contacts_Max_Order_By>;
  min?: InputMaybe<Contacts_Min_Order_By>;
};

/** input type for inserting array relation for remote table "contacts" */
export type Contacts_Arr_Rel_Insert_Input = {
  data: Array<Contacts_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Contacts_On_Conflict>;
};

/** Boolean expression to filter rows from the table "contacts". All fields are combined with a logical 'AND'. */
export type Contacts_Bool_Exp = {
  _and?: InputMaybe<Array<Contacts_Bool_Exp>>;
  _not?: InputMaybe<Contacts_Bool_Exp>;
  _or?: InputMaybe<Array<Contacts_Bool_Exp>>;
  address?: InputMaybe<String_Comparison_Exp>;
  company?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Date_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  first_name?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  job_title?: InputMaybe<String_Comparison_Exp>;
  last_name?: InputMaybe<String_Comparison_Exp>;
  note?: InputMaybe<String_Comparison_Exp>;
  tel?: InputMaybe<String_Comparison_Exp>;
  tenant?: InputMaybe<Uuid_Comparison_Exp>;
  tenant_rel?: InputMaybe<Tenants_Bool_Exp>;
  tzb?: InputMaybe<Uuid_Comparison_Exp>;
  tzb_rel?: InputMaybe<Tzbs_Bool_Exp>;
  updated_at?: InputMaybe<Date_Comparison_Exp>;
  user?: InputMaybe<Uuid_Comparison_Exp>;
  user_rel?: InputMaybe<Users_Bool_Exp>;
};

/** unique or primary key constraints on table "contacts" */
export enum Contacts_Constraint {
  /** unique or primary key constraint on columns "id" */
  ContactsPkey = 'contacts_pkey'
}

/** input type for inserting data into table "contacts" */
export type Contacts_Insert_Input = {
  address?: InputMaybe<Scalars['String']>;
  company?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['date']>;
  email?: InputMaybe<Scalars['String']>;
  first_name?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  job_title?: InputMaybe<Scalars['String']>;
  last_name?: InputMaybe<Scalars['String']>;
  note?: InputMaybe<Scalars['String']>;
  tel?: InputMaybe<Scalars['String']>;
  tenant?: InputMaybe<Scalars['uuid']>;
  tenant_rel?: InputMaybe<Tenants_Obj_Rel_Insert_Input>;
  tzb?: InputMaybe<Scalars['uuid']>;
  tzb_rel?: InputMaybe<Tzbs_Obj_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['date']>;
  user?: InputMaybe<Scalars['uuid']>;
  user_rel?: InputMaybe<Users_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Contacts_Max_Fields = {
  __typename?: 'contacts_max_fields';
  address?: Maybe<Scalars['String']>;
  company?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['date']>;
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  job_title?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  tel?: Maybe<Scalars['String']>;
  tenant?: Maybe<Scalars['uuid']>;
  tzb?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['date']>;
  user?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "contacts" */
export type Contacts_Max_Order_By = {
  address?: InputMaybe<Order_By>;
  company?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  first_name?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  job_title?: InputMaybe<Order_By>;
  last_name?: InputMaybe<Order_By>;
  note?: InputMaybe<Order_By>;
  tel?: InputMaybe<Order_By>;
  tenant?: InputMaybe<Order_By>;
  tzb?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Contacts_Min_Fields = {
  __typename?: 'contacts_min_fields';
  address?: Maybe<Scalars['String']>;
  company?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['date']>;
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  job_title?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  tel?: Maybe<Scalars['String']>;
  tenant?: Maybe<Scalars['uuid']>;
  tzb?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['date']>;
  user?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "contacts" */
export type Contacts_Min_Order_By = {
  address?: InputMaybe<Order_By>;
  company?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  first_name?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  job_title?: InputMaybe<Order_By>;
  last_name?: InputMaybe<Order_By>;
  note?: InputMaybe<Order_By>;
  tel?: InputMaybe<Order_By>;
  tenant?: InputMaybe<Order_By>;
  tzb?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "contacts" */
export type Contacts_Mutation_Response = {
  __typename?: 'contacts_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Contacts>;
};

/** on_conflict condition type for table "contacts" */
export type Contacts_On_Conflict = {
  constraint: Contacts_Constraint;
  update_columns?: Array<Contacts_Update_Column>;
  where?: InputMaybe<Contacts_Bool_Exp>;
};

/** Ordering options when selecting data from "contacts". */
export type Contacts_Order_By = {
  address?: InputMaybe<Order_By>;
  company?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  first_name?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  job_title?: InputMaybe<Order_By>;
  last_name?: InputMaybe<Order_By>;
  note?: InputMaybe<Order_By>;
  tel?: InputMaybe<Order_By>;
  tenant?: InputMaybe<Order_By>;
  tenant_rel?: InputMaybe<Tenants_Order_By>;
  tzb?: InputMaybe<Order_By>;
  tzb_rel?: InputMaybe<Tzbs_Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Order_By>;
  user_rel?: InputMaybe<Users_Order_By>;
};

/** primary key columns input for table: contacts */
export type Contacts_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "contacts" */
export enum Contacts_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  Company = 'company',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  Id = 'id',
  /** column name */
  JobTitle = 'job_title',
  /** column name */
  LastName = 'last_name',
  /** column name */
  Note = 'note',
  /** column name */
  Tel = 'tel',
  /** column name */
  Tenant = 'tenant',
  /** column name */
  Tzb = 'tzb',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  User = 'user'
}

/** input type for updating data in table "contacts" */
export type Contacts_Set_Input = {
  address?: InputMaybe<Scalars['String']>;
  company?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['date']>;
  email?: InputMaybe<Scalars['String']>;
  first_name?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  job_title?: InputMaybe<Scalars['String']>;
  last_name?: InputMaybe<Scalars['String']>;
  note?: InputMaybe<Scalars['String']>;
  tel?: InputMaybe<Scalars['String']>;
  tenant?: InputMaybe<Scalars['uuid']>;
  tzb?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['date']>;
  user?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "contacts" */
export enum Contacts_Update_Column {
  /** column name */
  Address = 'address',
  /** column name */
  Company = 'company',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  Id = 'id',
  /** column name */
  JobTitle = 'job_title',
  /** column name */
  LastName = 'last_name',
  /** column name */
  Note = 'note',
  /** column name */
  Tel = 'tel',
  /** column name */
  Tenant = 'tenant',
  /** column name */
  Tzb = 'tzb',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  User = 'user'
}

/** columns and relationships of "customers" */
export type Customers = {
  __typename?: 'customers';
  /** An array relationship */
  buildings: Array<Buildings>;
  /** An aggregate relationship */
  buildings_aggregate: Buildings_Aggregate;
  city: Scalars['String'];
  company_name: Scalars['String'];
  created_at: Scalars['timestamp'];
  /** An object relationship */
  created_by_user_rel: Users;
  dic?: Maybe<Scalars['String']>;
  ico?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  manager: Scalars['uuid'];
  postal_code: Scalars['String'];
  pricing?: Maybe<Scalars['uuid']>;
  /** An object relationship */
  pricing_rel?: Maybe<Pricing>;
  state: Scalars['String'];
  street: Scalars['String'];
  support?: Maybe<Scalars['uuid']>;
  /** An object relationship */
  support_level_rel?: Maybe<Support_Levels>;
  tenant: Scalars['uuid'];
  /** An object relationship */
  tenant_rel?: Maybe<Tenants>;
  updated_at: Scalars['timestamp'];
  user: Scalars['uuid'];
  /** An object relationship */
  user_rel: Users;
};


/** columns and relationships of "customers" */
export type CustomersBuildingsArgs = {
  distinct_on?: InputMaybe<Array<Buildings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Buildings_Order_By>>;
  where?: InputMaybe<Buildings_Bool_Exp>;
};


/** columns and relationships of "customers" */
export type CustomersBuildings_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Buildings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Buildings_Order_By>>;
  where?: InputMaybe<Buildings_Bool_Exp>;
};

/** aggregated selection of "customers" */
export type Customers_Aggregate = {
  __typename?: 'customers_aggregate';
  aggregate?: Maybe<Customers_Aggregate_Fields>;
  nodes: Array<Customers>;
};

/** aggregate fields of "customers" */
export type Customers_Aggregate_Fields = {
  __typename?: 'customers_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Customers_Max_Fields>;
  min?: Maybe<Customers_Min_Fields>;
};


/** aggregate fields of "customers" */
export type Customers_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Customers_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "customers" */
export type Customers_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Customers_Max_Order_By>;
  min?: InputMaybe<Customers_Min_Order_By>;
};

/** input type for inserting array relation for remote table "customers" */
export type Customers_Arr_Rel_Insert_Input = {
  data: Array<Customers_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Customers_On_Conflict>;
};

/** Boolean expression to filter rows from the table "customers". All fields are combined with a logical 'AND'. */
export type Customers_Bool_Exp = {
  _and?: InputMaybe<Array<Customers_Bool_Exp>>;
  _not?: InputMaybe<Customers_Bool_Exp>;
  _or?: InputMaybe<Array<Customers_Bool_Exp>>;
  buildings?: InputMaybe<Buildings_Bool_Exp>;
  city?: InputMaybe<String_Comparison_Exp>;
  company_name?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  created_by_user_rel?: InputMaybe<Users_Bool_Exp>;
  dic?: InputMaybe<String_Comparison_Exp>;
  ico?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  manager?: InputMaybe<Uuid_Comparison_Exp>;
  postal_code?: InputMaybe<String_Comparison_Exp>;
  pricing?: InputMaybe<Uuid_Comparison_Exp>;
  pricing_rel?: InputMaybe<Pricing_Bool_Exp>;
  state?: InputMaybe<String_Comparison_Exp>;
  street?: InputMaybe<String_Comparison_Exp>;
  support?: InputMaybe<Uuid_Comparison_Exp>;
  support_level_rel?: InputMaybe<Support_Levels_Bool_Exp>;
  tenant?: InputMaybe<Uuid_Comparison_Exp>;
  tenant_rel?: InputMaybe<Tenants_Bool_Exp>;
  updated_at?: InputMaybe<Timestamp_Comparison_Exp>;
  user?: InputMaybe<Uuid_Comparison_Exp>;
  user_rel?: InputMaybe<Users_Bool_Exp>;
};

/** unique or primary key constraints on table "customers" */
export enum Customers_Constraint {
  /** unique or primary key constraint on columns "ico" */
  CustomersIcoKey = 'customers_ico_key',
  /** unique or primary key constraint on columns "id" */
  CustomersPkey = 'customers_pkey'
}

/** input type for inserting data into table "customers" */
export type Customers_Insert_Input = {
  buildings?: InputMaybe<Buildings_Arr_Rel_Insert_Input>;
  city?: InputMaybe<Scalars['String']>;
  company_name?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamp']>;
  created_by_user_rel?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  dic?: InputMaybe<Scalars['String']>;
  ico?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  manager?: InputMaybe<Scalars['uuid']>;
  postal_code?: InputMaybe<Scalars['String']>;
  pricing?: InputMaybe<Scalars['uuid']>;
  pricing_rel?: InputMaybe<Pricing_Obj_Rel_Insert_Input>;
  state?: InputMaybe<Scalars['String']>;
  street?: InputMaybe<Scalars['String']>;
  support?: InputMaybe<Scalars['uuid']>;
  support_level_rel?: InputMaybe<Support_Levels_Obj_Rel_Insert_Input>;
  tenant?: InputMaybe<Scalars['uuid']>;
  tenant_rel?: InputMaybe<Tenants_Obj_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['timestamp']>;
  user?: InputMaybe<Scalars['uuid']>;
  user_rel?: InputMaybe<Users_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Customers_Max_Fields = {
  __typename?: 'customers_max_fields';
  city?: Maybe<Scalars['String']>;
  company_name?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamp']>;
  dic?: Maybe<Scalars['String']>;
  ico?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  manager?: Maybe<Scalars['uuid']>;
  postal_code?: Maybe<Scalars['String']>;
  pricing?: Maybe<Scalars['uuid']>;
  state?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
  support?: Maybe<Scalars['uuid']>;
  tenant?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamp']>;
  user?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "customers" */
export type Customers_Max_Order_By = {
  city?: InputMaybe<Order_By>;
  company_name?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  dic?: InputMaybe<Order_By>;
  ico?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  manager?: InputMaybe<Order_By>;
  postal_code?: InputMaybe<Order_By>;
  pricing?: InputMaybe<Order_By>;
  state?: InputMaybe<Order_By>;
  street?: InputMaybe<Order_By>;
  support?: InputMaybe<Order_By>;
  tenant?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Customers_Min_Fields = {
  __typename?: 'customers_min_fields';
  city?: Maybe<Scalars['String']>;
  company_name?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamp']>;
  dic?: Maybe<Scalars['String']>;
  ico?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  manager?: Maybe<Scalars['uuid']>;
  postal_code?: Maybe<Scalars['String']>;
  pricing?: Maybe<Scalars['uuid']>;
  state?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
  support?: Maybe<Scalars['uuid']>;
  tenant?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamp']>;
  user?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "customers" */
export type Customers_Min_Order_By = {
  city?: InputMaybe<Order_By>;
  company_name?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  dic?: InputMaybe<Order_By>;
  ico?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  manager?: InputMaybe<Order_By>;
  postal_code?: InputMaybe<Order_By>;
  pricing?: InputMaybe<Order_By>;
  state?: InputMaybe<Order_By>;
  street?: InputMaybe<Order_By>;
  support?: InputMaybe<Order_By>;
  tenant?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "customers" */
export type Customers_Mutation_Response = {
  __typename?: 'customers_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Customers>;
};

/** input type for inserting object relation for remote table "customers" */
export type Customers_Obj_Rel_Insert_Input = {
  data: Customers_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Customers_On_Conflict>;
};

/** on_conflict condition type for table "customers" */
export type Customers_On_Conflict = {
  constraint: Customers_Constraint;
  update_columns?: Array<Customers_Update_Column>;
  where?: InputMaybe<Customers_Bool_Exp>;
};

/** Ordering options when selecting data from "customers". */
export type Customers_Order_By = {
  buildings_aggregate?: InputMaybe<Buildings_Aggregate_Order_By>;
  city?: InputMaybe<Order_By>;
  company_name?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  created_by_user_rel?: InputMaybe<Users_Order_By>;
  dic?: InputMaybe<Order_By>;
  ico?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  manager?: InputMaybe<Order_By>;
  postal_code?: InputMaybe<Order_By>;
  pricing?: InputMaybe<Order_By>;
  pricing_rel?: InputMaybe<Pricing_Order_By>;
  state?: InputMaybe<Order_By>;
  street?: InputMaybe<Order_By>;
  support?: InputMaybe<Order_By>;
  support_level_rel?: InputMaybe<Support_Levels_Order_By>;
  tenant?: InputMaybe<Order_By>;
  tenant_rel?: InputMaybe<Tenants_Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Order_By>;
  user_rel?: InputMaybe<Users_Order_By>;
};

/** primary key columns input for table: customers */
export type Customers_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "customers" */
export enum Customers_Select_Column {
  /** column name */
  City = 'city',
  /** column name */
  CompanyName = 'company_name',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Dic = 'dic',
  /** column name */
  Ico = 'ico',
  /** column name */
  Id = 'id',
  /** column name */
  Manager = 'manager',
  /** column name */
  PostalCode = 'postal_code',
  /** column name */
  Pricing = 'pricing',
  /** column name */
  State = 'state',
  /** column name */
  Street = 'street',
  /** column name */
  Support = 'support',
  /** column name */
  Tenant = 'tenant',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  User = 'user'
}

/** input type for updating data in table "customers" */
export type Customers_Set_Input = {
  city?: InputMaybe<Scalars['String']>;
  company_name?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamp']>;
  dic?: InputMaybe<Scalars['String']>;
  ico?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  manager?: InputMaybe<Scalars['uuid']>;
  postal_code?: InputMaybe<Scalars['String']>;
  pricing?: InputMaybe<Scalars['uuid']>;
  state?: InputMaybe<Scalars['String']>;
  street?: InputMaybe<Scalars['String']>;
  support?: InputMaybe<Scalars['uuid']>;
  tenant?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamp']>;
  user?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "customers" */
export enum Customers_Update_Column {
  /** column name */
  City = 'city',
  /** column name */
  CompanyName = 'company_name',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Dic = 'dic',
  /** column name */
  Ico = 'ico',
  /** column name */
  Id = 'id',
  /** column name */
  Manager = 'manager',
  /** column name */
  PostalCode = 'postal_code',
  /** column name */
  Pricing = 'pricing',
  /** column name */
  State = 'state',
  /** column name */
  Street = 'street',
  /** column name */
  Support = 'support',
  /** column name */
  Tenant = 'tenant',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  User = 'user'
}

export type Date_Cast_Exp = {
  String?: InputMaybe<String_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "date". All fields are combined with logical 'AND'. */
export type Date_Comparison_Exp = {
  _cast?: InputMaybe<Date_Cast_Exp>;
  _eq?: InputMaybe<Scalars['date']>;
  _gt?: InputMaybe<Scalars['date']>;
  _gte?: InputMaybe<Scalars['date']>;
  _in?: InputMaybe<Array<Scalars['date']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['date']>;
  _lte?: InputMaybe<Scalars['date']>;
  _neq?: InputMaybe<Scalars['date']>;
  _nin?: InputMaybe<Array<Scalars['date']>>;
};

/** columns and relationships of "device_parameters" */
export type Device_Parameters = {
  __typename?: 'device_parameters';
  created_at: Scalars['date'];
  device: Scalars['uuid'];
  /** An object relationship */
  devices_catalog_rel: Devices_Catalog;
  id: Scalars['uuid'];
  tenant: Scalars['uuid'];
  /** An object relationship */
  tenant_rel: Tenants;
  title: Scalars['String'];
  unit?: Maybe<Scalars['String']>;
  updated_at: Scalars['date'];
  value: Scalars['String'];
};

/** aggregated selection of "device_parameters" */
export type Device_Parameters_Aggregate = {
  __typename?: 'device_parameters_aggregate';
  aggregate?: Maybe<Device_Parameters_Aggregate_Fields>;
  nodes: Array<Device_Parameters>;
};

/** aggregate fields of "device_parameters" */
export type Device_Parameters_Aggregate_Fields = {
  __typename?: 'device_parameters_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Device_Parameters_Max_Fields>;
  min?: Maybe<Device_Parameters_Min_Fields>;
};


/** aggregate fields of "device_parameters" */
export type Device_Parameters_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Device_Parameters_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "device_parameters" */
export type Device_Parameters_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Device_Parameters_Max_Order_By>;
  min?: InputMaybe<Device_Parameters_Min_Order_By>;
};

/** input type for inserting array relation for remote table "device_parameters" */
export type Device_Parameters_Arr_Rel_Insert_Input = {
  data: Array<Device_Parameters_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Device_Parameters_On_Conflict>;
};

/** Boolean expression to filter rows from the table "device_parameters". All fields are combined with a logical 'AND'. */
export type Device_Parameters_Bool_Exp = {
  _and?: InputMaybe<Array<Device_Parameters_Bool_Exp>>;
  _not?: InputMaybe<Device_Parameters_Bool_Exp>;
  _or?: InputMaybe<Array<Device_Parameters_Bool_Exp>>;
  created_at?: InputMaybe<Date_Comparison_Exp>;
  device?: InputMaybe<Uuid_Comparison_Exp>;
  devices_catalog_rel?: InputMaybe<Devices_Catalog_Bool_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  tenant?: InputMaybe<Uuid_Comparison_Exp>;
  tenant_rel?: InputMaybe<Tenants_Bool_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  unit?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Date_Comparison_Exp>;
  value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "device_parameters" */
export enum Device_Parameters_Constraint {
  /** unique or primary key constraint on columns "id" */
  DeviceParametersPkey = 'device_parameters_pkey'
}

/** input type for inserting data into table "device_parameters" */
export type Device_Parameters_Insert_Input = {
  created_at?: InputMaybe<Scalars['date']>;
  device?: InputMaybe<Scalars['uuid']>;
  devices_catalog_rel?: InputMaybe<Devices_Catalog_Obj_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['uuid']>;
  tenant?: InputMaybe<Scalars['uuid']>;
  tenant_rel?: InputMaybe<Tenants_Obj_Rel_Insert_Input>;
  title?: InputMaybe<Scalars['String']>;
  unit?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['date']>;
  value?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Device_Parameters_Max_Fields = {
  __typename?: 'device_parameters_max_fields';
  created_at?: Maybe<Scalars['date']>;
  device?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  tenant?: Maybe<Scalars['uuid']>;
  title?: Maybe<Scalars['String']>;
  unit?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['date']>;
  value?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "device_parameters" */
export type Device_Parameters_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  device?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  tenant?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  unit?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Device_Parameters_Min_Fields = {
  __typename?: 'device_parameters_min_fields';
  created_at?: Maybe<Scalars['date']>;
  device?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  tenant?: Maybe<Scalars['uuid']>;
  title?: Maybe<Scalars['String']>;
  unit?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['date']>;
  value?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "device_parameters" */
export type Device_Parameters_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  device?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  tenant?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  unit?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "device_parameters" */
export type Device_Parameters_Mutation_Response = {
  __typename?: 'device_parameters_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Device_Parameters>;
};

/** on_conflict condition type for table "device_parameters" */
export type Device_Parameters_On_Conflict = {
  constraint: Device_Parameters_Constraint;
  update_columns?: Array<Device_Parameters_Update_Column>;
  where?: InputMaybe<Device_Parameters_Bool_Exp>;
};

/** Ordering options when selecting data from "device_parameters". */
export type Device_Parameters_Order_By = {
  created_at?: InputMaybe<Order_By>;
  device?: InputMaybe<Order_By>;
  devices_catalog_rel?: InputMaybe<Devices_Catalog_Order_By>;
  id?: InputMaybe<Order_By>;
  tenant?: InputMaybe<Order_By>;
  tenant_rel?: InputMaybe<Tenants_Order_By>;
  title?: InputMaybe<Order_By>;
  unit?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: device_parameters */
export type Device_Parameters_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "device_parameters" */
export enum Device_Parameters_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Device = 'device',
  /** column name */
  Id = 'id',
  /** column name */
  Tenant = 'tenant',
  /** column name */
  Title = 'title',
  /** column name */
  Unit = 'unit',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "device_parameters" */
export type Device_Parameters_Set_Input = {
  created_at?: InputMaybe<Scalars['date']>;
  device?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  tenant?: InputMaybe<Scalars['uuid']>;
  title?: InputMaybe<Scalars['String']>;
  unit?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['date']>;
  value?: InputMaybe<Scalars['String']>;
};

/** update columns of table "device_parameters" */
export enum Device_Parameters_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Device = 'device',
  /** column name */
  Id = 'id',
  /** column name */
  Tenant = 'tenant',
  /** column name */
  Title = 'title',
  /** column name */
  Unit = 'unit',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Value = 'value'
}

/** columns and relationships of "device_urls" */
export type Device_Urls = {
  __typename?: 'device_urls';
  created_at: Scalars['date'];
  device: Scalars['uuid'];
  /** An object relationship */
  devices_catalog_rel: Devices_Catalog;
  id: Scalars['uuid'];
  tenant: Scalars['uuid'];
  /** An object relationship */
  tenant_rel: Tenants;
  title: Scalars['String'];
  updated_at: Scalars['date'];
  url: Scalars['String'];
};

/** aggregated selection of "device_urls" */
export type Device_Urls_Aggregate = {
  __typename?: 'device_urls_aggregate';
  aggregate?: Maybe<Device_Urls_Aggregate_Fields>;
  nodes: Array<Device_Urls>;
};

/** aggregate fields of "device_urls" */
export type Device_Urls_Aggregate_Fields = {
  __typename?: 'device_urls_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Device_Urls_Max_Fields>;
  min?: Maybe<Device_Urls_Min_Fields>;
};


/** aggregate fields of "device_urls" */
export type Device_Urls_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Device_Urls_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "device_urls" */
export type Device_Urls_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Device_Urls_Max_Order_By>;
  min?: InputMaybe<Device_Urls_Min_Order_By>;
};

/** input type for inserting array relation for remote table "device_urls" */
export type Device_Urls_Arr_Rel_Insert_Input = {
  data: Array<Device_Urls_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Device_Urls_On_Conflict>;
};

/** Boolean expression to filter rows from the table "device_urls". All fields are combined with a logical 'AND'. */
export type Device_Urls_Bool_Exp = {
  _and?: InputMaybe<Array<Device_Urls_Bool_Exp>>;
  _not?: InputMaybe<Device_Urls_Bool_Exp>;
  _or?: InputMaybe<Array<Device_Urls_Bool_Exp>>;
  created_at?: InputMaybe<Date_Comparison_Exp>;
  device?: InputMaybe<Uuid_Comparison_Exp>;
  devices_catalog_rel?: InputMaybe<Devices_Catalog_Bool_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  tenant?: InputMaybe<Uuid_Comparison_Exp>;
  tenant_rel?: InputMaybe<Tenants_Bool_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Date_Comparison_Exp>;
  url?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "device_urls" */
export enum Device_Urls_Constraint {
  /** unique or primary key constraint on columns "id" */
  DeviceUrlsPkey = 'device_urls_pkey'
}

/** input type for inserting data into table "device_urls" */
export type Device_Urls_Insert_Input = {
  created_at?: InputMaybe<Scalars['date']>;
  device?: InputMaybe<Scalars['uuid']>;
  devices_catalog_rel?: InputMaybe<Devices_Catalog_Obj_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['uuid']>;
  tenant?: InputMaybe<Scalars['uuid']>;
  tenant_rel?: InputMaybe<Tenants_Obj_Rel_Insert_Input>;
  title?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['date']>;
  url?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Device_Urls_Max_Fields = {
  __typename?: 'device_urls_max_fields';
  created_at?: Maybe<Scalars['date']>;
  device?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  tenant?: Maybe<Scalars['uuid']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['date']>;
  url?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "device_urls" */
export type Device_Urls_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  device?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  tenant?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  url?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Device_Urls_Min_Fields = {
  __typename?: 'device_urls_min_fields';
  created_at?: Maybe<Scalars['date']>;
  device?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  tenant?: Maybe<Scalars['uuid']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['date']>;
  url?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "device_urls" */
export type Device_Urls_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  device?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  tenant?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  url?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "device_urls" */
export type Device_Urls_Mutation_Response = {
  __typename?: 'device_urls_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Device_Urls>;
};

/** on_conflict condition type for table "device_urls" */
export type Device_Urls_On_Conflict = {
  constraint: Device_Urls_Constraint;
  update_columns?: Array<Device_Urls_Update_Column>;
  where?: InputMaybe<Device_Urls_Bool_Exp>;
};

/** Ordering options when selecting data from "device_urls". */
export type Device_Urls_Order_By = {
  created_at?: InputMaybe<Order_By>;
  device?: InputMaybe<Order_By>;
  devices_catalog_rel?: InputMaybe<Devices_Catalog_Order_By>;
  id?: InputMaybe<Order_By>;
  tenant?: InputMaybe<Order_By>;
  tenant_rel?: InputMaybe<Tenants_Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  url?: InputMaybe<Order_By>;
};

/** primary key columns input for table: device_urls */
export type Device_Urls_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "device_urls" */
export enum Device_Urls_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Device = 'device',
  /** column name */
  Id = 'id',
  /** column name */
  Tenant = 'tenant',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Url = 'url'
}

/** input type for updating data in table "device_urls" */
export type Device_Urls_Set_Input = {
  created_at?: InputMaybe<Scalars['date']>;
  device?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  tenant?: InputMaybe<Scalars['uuid']>;
  title?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['date']>;
  url?: InputMaybe<Scalars['String']>;
};

/** update columns of table "device_urls" */
export enum Device_Urls_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Device = 'device',
  /** column name */
  Id = 'id',
  /** column name */
  Tenant = 'tenant',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Url = 'url'
}

/** columns and relationships of "devices" */
export type Devices = {
  __typename?: 'devices';
  action_template?: Maybe<Scalars['uuid']>;
  action_templates?: Maybe<Scalars['uuid']>;
  /** An object relationship */
  actions_templates_rel?: Maybe<Actions_Templates>;
  created_at: Scalars['date'];
  device_catalog?: Maybe<Scalars['uuid']>;
  device_number?: Maybe<Scalars['String']>;
  /** An object relationship */
  devices_catalog_rel?: Maybe<Devices_Catalog>;
  id: Scalars['uuid'];
  manufacturer: Scalars['String'];
  name: Scalars['String'];
  part_number?: Maybe<Scalars['String']>;
  tenant: Scalars['uuid'];
  type: Scalars['String'];
  tzb: Scalars['uuid'];
  /** An object relationship */
  tzb_rel: Tzbs;
  updated_at: Scalars['date'];
  user: Scalars['uuid'];
  /** An object relationship */
  user_rel: Users;
};

/** aggregated selection of "devices" */
export type Devices_Aggregate = {
  __typename?: 'devices_aggregate';
  aggregate?: Maybe<Devices_Aggregate_Fields>;
  nodes: Array<Devices>;
};

/** aggregate fields of "devices" */
export type Devices_Aggregate_Fields = {
  __typename?: 'devices_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Devices_Max_Fields>;
  min?: Maybe<Devices_Min_Fields>;
};


/** aggregate fields of "devices" */
export type Devices_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Devices_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "devices" */
export type Devices_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Devices_Max_Order_By>;
  min?: InputMaybe<Devices_Min_Order_By>;
};

/** input type for inserting array relation for remote table "devices" */
export type Devices_Arr_Rel_Insert_Input = {
  data: Array<Devices_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Devices_On_Conflict>;
};

/** Boolean expression to filter rows from the table "devices". All fields are combined with a logical 'AND'. */
export type Devices_Bool_Exp = {
  _and?: InputMaybe<Array<Devices_Bool_Exp>>;
  _not?: InputMaybe<Devices_Bool_Exp>;
  _or?: InputMaybe<Array<Devices_Bool_Exp>>;
  action_template?: InputMaybe<Uuid_Comparison_Exp>;
  action_templates?: InputMaybe<Uuid_Comparison_Exp>;
  actions_templates_rel?: InputMaybe<Actions_Templates_Bool_Exp>;
  created_at?: InputMaybe<Date_Comparison_Exp>;
  device_catalog?: InputMaybe<Uuid_Comparison_Exp>;
  device_number?: InputMaybe<String_Comparison_Exp>;
  devices_catalog_rel?: InputMaybe<Devices_Catalog_Bool_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  manufacturer?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  part_number?: InputMaybe<String_Comparison_Exp>;
  tenant?: InputMaybe<Uuid_Comparison_Exp>;
  type?: InputMaybe<String_Comparison_Exp>;
  tzb?: InputMaybe<Uuid_Comparison_Exp>;
  tzb_rel?: InputMaybe<Tzbs_Bool_Exp>;
  updated_at?: InputMaybe<Date_Comparison_Exp>;
  user?: InputMaybe<Uuid_Comparison_Exp>;
  user_rel?: InputMaybe<Users_Bool_Exp>;
};

/** columns and relationships of "devices_catalog" */
export type Devices_Catalog = {
  __typename?: 'devices_catalog';
  action_template?: Maybe<Scalars['uuid']>;
  action_templates?: Maybe<Scalars['uuid']>;
  /** An object relationship */
  actions_template?: Maybe<Actions_Templates>;
  /** An array relationship */
  actions_templates_rel: Array<Devices_Catalog_Actions_Templates>;
  /** An aggregate relationship */
  actions_templates_rel_aggregate: Devices_Catalog_Actions_Templates_Aggregate;
  created_at: Scalars['date'];
  device_number?: Maybe<Scalars['String']>;
  /** An array relationship */
  device_parameters: Array<Device_Parameters>;
  /** An aggregate relationship */
  device_parameters_aggregate: Device_Parameters_Aggregate;
  /** An array relationship */
  device_urls: Array<Device_Urls>;
  /** An aggregate relationship */
  device_urls_aggregate: Device_Urls_Aggregate;
  /** An array relationship */
  devices: Array<Devices>;
  /** An aggregate relationship */
  devices_aggregate: Devices_Aggregate;
  /** An array relationship */
  devices_catalog_files_rel: Array<Devices_Catalog_Files>;
  /** An aggregate relationship */
  devices_catalog_files_rel_aggregate: Devices_Catalog_Files_Aggregate;
  id: Scalars['uuid'];
  manufacturer: Scalars['String'];
  name: Scalars['String'];
  part_number?: Maybe<Scalars['String']>;
  tenant: Scalars['uuid'];
  /** An object relationship */
  tenant_rel: Tenants;
  type: Scalars['String'];
  updated_at: Scalars['date'];
  user: Scalars['uuid'];
  /** An object relationship */
  user_rel: Users;
};


/** columns and relationships of "devices_catalog" */
export type Devices_CatalogActions_Templates_RelArgs = {
  distinct_on?: InputMaybe<Array<Devices_Catalog_Actions_Templates_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Devices_Catalog_Actions_Templates_Order_By>>;
  where?: InputMaybe<Devices_Catalog_Actions_Templates_Bool_Exp>;
};


/** columns and relationships of "devices_catalog" */
export type Devices_CatalogActions_Templates_Rel_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Devices_Catalog_Actions_Templates_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Devices_Catalog_Actions_Templates_Order_By>>;
  where?: InputMaybe<Devices_Catalog_Actions_Templates_Bool_Exp>;
};


/** columns and relationships of "devices_catalog" */
export type Devices_CatalogDevice_ParametersArgs = {
  distinct_on?: InputMaybe<Array<Device_Parameters_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Device_Parameters_Order_By>>;
  where?: InputMaybe<Device_Parameters_Bool_Exp>;
};


/** columns and relationships of "devices_catalog" */
export type Devices_CatalogDevice_Parameters_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Device_Parameters_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Device_Parameters_Order_By>>;
  where?: InputMaybe<Device_Parameters_Bool_Exp>;
};


/** columns and relationships of "devices_catalog" */
export type Devices_CatalogDevice_UrlsArgs = {
  distinct_on?: InputMaybe<Array<Device_Urls_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Device_Urls_Order_By>>;
  where?: InputMaybe<Device_Urls_Bool_Exp>;
};


/** columns and relationships of "devices_catalog" */
export type Devices_CatalogDevice_Urls_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Device_Urls_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Device_Urls_Order_By>>;
  where?: InputMaybe<Device_Urls_Bool_Exp>;
};


/** columns and relationships of "devices_catalog" */
export type Devices_CatalogDevicesArgs = {
  distinct_on?: InputMaybe<Array<Devices_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Devices_Order_By>>;
  where?: InputMaybe<Devices_Bool_Exp>;
};


/** columns and relationships of "devices_catalog" */
export type Devices_CatalogDevices_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Devices_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Devices_Order_By>>;
  where?: InputMaybe<Devices_Bool_Exp>;
};


/** columns and relationships of "devices_catalog" */
export type Devices_CatalogDevices_Catalog_Files_RelArgs = {
  distinct_on?: InputMaybe<Array<Devices_Catalog_Files_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Devices_Catalog_Files_Order_By>>;
  where?: InputMaybe<Devices_Catalog_Files_Bool_Exp>;
};


/** columns and relationships of "devices_catalog" */
export type Devices_CatalogDevices_Catalog_Files_Rel_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Devices_Catalog_Files_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Devices_Catalog_Files_Order_By>>;
  where?: InputMaybe<Devices_Catalog_Files_Bool_Exp>;
};

/** columns and relationships of "devices_catalog_actions_templates" */
export type Devices_Catalog_Actions_Templates = {
  __typename?: 'devices_catalog_actions_templates';
  /** An object relationship */
  action_template_rel: Actions_Templates;
  actions_template: Scalars['uuid'];
  /** An object relationship */
  catalog_device_rel: Devices_Catalog;
  created_at?: Maybe<Scalars['timestamptz']>;
  devices_catalog: Scalars['uuid'];
  id: Scalars['uuid'];
  tenant: Scalars['uuid'];
  /** An object relationship */
  tenant_rel: Tenants;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregated selection of "devices_catalog_actions_templates" */
export type Devices_Catalog_Actions_Templates_Aggregate = {
  __typename?: 'devices_catalog_actions_templates_aggregate';
  aggregate?: Maybe<Devices_Catalog_Actions_Templates_Aggregate_Fields>;
  nodes: Array<Devices_Catalog_Actions_Templates>;
};

/** aggregate fields of "devices_catalog_actions_templates" */
export type Devices_Catalog_Actions_Templates_Aggregate_Fields = {
  __typename?: 'devices_catalog_actions_templates_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Devices_Catalog_Actions_Templates_Max_Fields>;
  min?: Maybe<Devices_Catalog_Actions_Templates_Min_Fields>;
};


/** aggregate fields of "devices_catalog_actions_templates" */
export type Devices_Catalog_Actions_Templates_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Devices_Catalog_Actions_Templates_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "devices_catalog_actions_templates" */
export type Devices_Catalog_Actions_Templates_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Devices_Catalog_Actions_Templates_Max_Order_By>;
  min?: InputMaybe<Devices_Catalog_Actions_Templates_Min_Order_By>;
};

/** input type for inserting array relation for remote table "devices_catalog_actions_templates" */
export type Devices_Catalog_Actions_Templates_Arr_Rel_Insert_Input = {
  data: Array<Devices_Catalog_Actions_Templates_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Devices_Catalog_Actions_Templates_On_Conflict>;
};

/** Boolean expression to filter rows from the table "devices_catalog_actions_templates". All fields are combined with a logical 'AND'. */
export type Devices_Catalog_Actions_Templates_Bool_Exp = {
  _and?: InputMaybe<Array<Devices_Catalog_Actions_Templates_Bool_Exp>>;
  _not?: InputMaybe<Devices_Catalog_Actions_Templates_Bool_Exp>;
  _or?: InputMaybe<Array<Devices_Catalog_Actions_Templates_Bool_Exp>>;
  action_template_rel?: InputMaybe<Actions_Templates_Bool_Exp>;
  actions_template?: InputMaybe<Uuid_Comparison_Exp>;
  catalog_device_rel?: InputMaybe<Devices_Catalog_Bool_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  devices_catalog?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  tenant?: InputMaybe<Uuid_Comparison_Exp>;
  tenant_rel?: InputMaybe<Tenants_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "devices_catalog_actions_templates" */
export enum Devices_Catalog_Actions_Templates_Constraint {
  /** unique or primary key constraint on columns "id" */
  DeviceActionsTemplatesIdKey = 'device_actions_templates_id_key',
  /** unique or primary key constraint on columns "id" */
  DeviceActionsTemplatesPkey = 'device_actions_templates_pkey'
}

/** input type for inserting data into table "devices_catalog_actions_templates" */
export type Devices_Catalog_Actions_Templates_Insert_Input = {
  action_template_rel?: InputMaybe<Actions_Templates_Obj_Rel_Insert_Input>;
  actions_template?: InputMaybe<Scalars['uuid']>;
  catalog_device_rel?: InputMaybe<Devices_Catalog_Obj_Rel_Insert_Input>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  devices_catalog?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  tenant?: InputMaybe<Scalars['uuid']>;
  tenant_rel?: InputMaybe<Tenants_Obj_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Devices_Catalog_Actions_Templates_Max_Fields = {
  __typename?: 'devices_catalog_actions_templates_max_fields';
  actions_template?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  devices_catalog?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  tenant?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "devices_catalog_actions_templates" */
export type Devices_Catalog_Actions_Templates_Max_Order_By = {
  actions_template?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  devices_catalog?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  tenant?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Devices_Catalog_Actions_Templates_Min_Fields = {
  __typename?: 'devices_catalog_actions_templates_min_fields';
  actions_template?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  devices_catalog?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  tenant?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "devices_catalog_actions_templates" */
export type Devices_Catalog_Actions_Templates_Min_Order_By = {
  actions_template?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  devices_catalog?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  tenant?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "devices_catalog_actions_templates" */
export type Devices_Catalog_Actions_Templates_Mutation_Response = {
  __typename?: 'devices_catalog_actions_templates_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Devices_Catalog_Actions_Templates>;
};

/** on_conflict condition type for table "devices_catalog_actions_templates" */
export type Devices_Catalog_Actions_Templates_On_Conflict = {
  constraint: Devices_Catalog_Actions_Templates_Constraint;
  update_columns?: Array<Devices_Catalog_Actions_Templates_Update_Column>;
  where?: InputMaybe<Devices_Catalog_Actions_Templates_Bool_Exp>;
};

/** Ordering options when selecting data from "devices_catalog_actions_templates". */
export type Devices_Catalog_Actions_Templates_Order_By = {
  action_template_rel?: InputMaybe<Actions_Templates_Order_By>;
  actions_template?: InputMaybe<Order_By>;
  catalog_device_rel?: InputMaybe<Devices_Catalog_Order_By>;
  created_at?: InputMaybe<Order_By>;
  devices_catalog?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  tenant?: InputMaybe<Order_By>;
  tenant_rel?: InputMaybe<Tenants_Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: devices_catalog_actions_templates */
export type Devices_Catalog_Actions_Templates_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "devices_catalog_actions_templates" */
export enum Devices_Catalog_Actions_Templates_Select_Column {
  /** column name */
  ActionsTemplate = 'actions_template',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DevicesCatalog = 'devices_catalog',
  /** column name */
  Id = 'id',
  /** column name */
  Tenant = 'tenant',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "devices_catalog_actions_templates" */
export type Devices_Catalog_Actions_Templates_Set_Input = {
  actions_template?: InputMaybe<Scalars['uuid']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  devices_catalog?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  tenant?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "devices_catalog_actions_templates" */
export enum Devices_Catalog_Actions_Templates_Update_Column {
  /** column name */
  ActionsTemplate = 'actions_template',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DevicesCatalog = 'devices_catalog',
  /** column name */
  Id = 'id',
  /** column name */
  Tenant = 'tenant',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregated selection of "devices_catalog" */
export type Devices_Catalog_Aggregate = {
  __typename?: 'devices_catalog_aggregate';
  aggregate?: Maybe<Devices_Catalog_Aggregate_Fields>;
  nodes: Array<Devices_Catalog>;
};

/** aggregate fields of "devices_catalog" */
export type Devices_Catalog_Aggregate_Fields = {
  __typename?: 'devices_catalog_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Devices_Catalog_Max_Fields>;
  min?: Maybe<Devices_Catalog_Min_Fields>;
};


/** aggregate fields of "devices_catalog" */
export type Devices_Catalog_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Devices_Catalog_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "devices_catalog" */
export type Devices_Catalog_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Devices_Catalog_Max_Order_By>;
  min?: InputMaybe<Devices_Catalog_Min_Order_By>;
};

/** input type for inserting array relation for remote table "devices_catalog" */
export type Devices_Catalog_Arr_Rel_Insert_Input = {
  data: Array<Devices_Catalog_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Devices_Catalog_On_Conflict>;
};

/** Boolean expression to filter rows from the table "devices_catalog". All fields are combined with a logical 'AND'. */
export type Devices_Catalog_Bool_Exp = {
  _and?: InputMaybe<Array<Devices_Catalog_Bool_Exp>>;
  _not?: InputMaybe<Devices_Catalog_Bool_Exp>;
  _or?: InputMaybe<Array<Devices_Catalog_Bool_Exp>>;
  action_template?: InputMaybe<Uuid_Comparison_Exp>;
  action_templates?: InputMaybe<Uuid_Comparison_Exp>;
  actions_template?: InputMaybe<Actions_Templates_Bool_Exp>;
  actions_templates_rel?: InputMaybe<Devices_Catalog_Actions_Templates_Bool_Exp>;
  created_at?: InputMaybe<Date_Comparison_Exp>;
  device_number?: InputMaybe<String_Comparison_Exp>;
  device_parameters?: InputMaybe<Device_Parameters_Bool_Exp>;
  device_urls?: InputMaybe<Device_Urls_Bool_Exp>;
  devices?: InputMaybe<Devices_Bool_Exp>;
  devices_catalog_files_rel?: InputMaybe<Devices_Catalog_Files_Bool_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  manufacturer?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  part_number?: InputMaybe<String_Comparison_Exp>;
  tenant?: InputMaybe<Uuid_Comparison_Exp>;
  tenant_rel?: InputMaybe<Tenants_Bool_Exp>;
  type?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Date_Comparison_Exp>;
  user?: InputMaybe<Uuid_Comparison_Exp>;
  user_rel?: InputMaybe<Users_Bool_Exp>;
};

/** unique or primary key constraints on table "devices_catalog" */
export enum Devices_Catalog_Constraint {
  /** unique or primary key constraint on columns "action_templates" */
  DevicesCatalogActionTemplatesKey = 'devices_catalog_action_templates_key',
  /** unique or primary key constraint on columns "id" */
  DevicesCatalogPkey = 'devices_catalog_pkey'
}

/** columns and relationships of "devices_catalog_files" */
export type Devices_Catalog_Files = {
  __typename?: 'devices_catalog_files';
  created_at: Scalars['date'];
  device_catalog_id: Scalars['uuid'];
  /** An object relationship */
  devices_catalog_rel: Devices_Catalog;
  file_id: Scalars['uuid'];
  /** An object relationship */
  file_rel: Files;
  id: Scalars['uuid'];
  tenant: Scalars['uuid'];
  updated_at: Scalars['date'];
};

/** aggregated selection of "devices_catalog_files" */
export type Devices_Catalog_Files_Aggregate = {
  __typename?: 'devices_catalog_files_aggregate';
  aggregate?: Maybe<Devices_Catalog_Files_Aggregate_Fields>;
  nodes: Array<Devices_Catalog_Files>;
};

/** aggregate fields of "devices_catalog_files" */
export type Devices_Catalog_Files_Aggregate_Fields = {
  __typename?: 'devices_catalog_files_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Devices_Catalog_Files_Max_Fields>;
  min?: Maybe<Devices_Catalog_Files_Min_Fields>;
};


/** aggregate fields of "devices_catalog_files" */
export type Devices_Catalog_Files_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Devices_Catalog_Files_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "devices_catalog_files" */
export type Devices_Catalog_Files_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Devices_Catalog_Files_Max_Order_By>;
  min?: InputMaybe<Devices_Catalog_Files_Min_Order_By>;
};

/** input type for inserting array relation for remote table "devices_catalog_files" */
export type Devices_Catalog_Files_Arr_Rel_Insert_Input = {
  data: Array<Devices_Catalog_Files_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Devices_Catalog_Files_On_Conflict>;
};

/** Boolean expression to filter rows from the table "devices_catalog_files". All fields are combined with a logical 'AND'. */
export type Devices_Catalog_Files_Bool_Exp = {
  _and?: InputMaybe<Array<Devices_Catalog_Files_Bool_Exp>>;
  _not?: InputMaybe<Devices_Catalog_Files_Bool_Exp>;
  _or?: InputMaybe<Array<Devices_Catalog_Files_Bool_Exp>>;
  created_at?: InputMaybe<Date_Comparison_Exp>;
  device_catalog_id?: InputMaybe<Uuid_Comparison_Exp>;
  devices_catalog_rel?: InputMaybe<Devices_Catalog_Bool_Exp>;
  file_id?: InputMaybe<Uuid_Comparison_Exp>;
  file_rel?: InputMaybe<Files_Bool_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  tenant?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Date_Comparison_Exp>;
};

/** unique or primary key constraints on table "devices_catalog_files" */
export enum Devices_Catalog_Files_Constraint {
  /** unique or primary key constraint on columns "id" */
  DevicesCatalogFilesPkey = 'devices_catalog_files_pkey'
}

/** input type for inserting data into table "devices_catalog_files" */
export type Devices_Catalog_Files_Insert_Input = {
  created_at?: InputMaybe<Scalars['date']>;
  device_catalog_id?: InputMaybe<Scalars['uuid']>;
  devices_catalog_rel?: InputMaybe<Devices_Catalog_Obj_Rel_Insert_Input>;
  file_id?: InputMaybe<Scalars['uuid']>;
  file_rel?: InputMaybe<Files_Obj_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['uuid']>;
  tenant?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['date']>;
};

/** aggregate max on columns */
export type Devices_Catalog_Files_Max_Fields = {
  __typename?: 'devices_catalog_files_max_fields';
  created_at?: Maybe<Scalars['date']>;
  device_catalog_id?: Maybe<Scalars['uuid']>;
  file_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  tenant?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['date']>;
};

/** order by max() on columns of table "devices_catalog_files" */
export type Devices_Catalog_Files_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  device_catalog_id?: InputMaybe<Order_By>;
  file_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  tenant?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Devices_Catalog_Files_Min_Fields = {
  __typename?: 'devices_catalog_files_min_fields';
  created_at?: Maybe<Scalars['date']>;
  device_catalog_id?: Maybe<Scalars['uuid']>;
  file_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  tenant?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['date']>;
};

/** order by min() on columns of table "devices_catalog_files" */
export type Devices_Catalog_Files_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  device_catalog_id?: InputMaybe<Order_By>;
  file_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  tenant?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "devices_catalog_files" */
export type Devices_Catalog_Files_Mutation_Response = {
  __typename?: 'devices_catalog_files_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Devices_Catalog_Files>;
};

/** on_conflict condition type for table "devices_catalog_files" */
export type Devices_Catalog_Files_On_Conflict = {
  constraint: Devices_Catalog_Files_Constraint;
  update_columns?: Array<Devices_Catalog_Files_Update_Column>;
  where?: InputMaybe<Devices_Catalog_Files_Bool_Exp>;
};

/** Ordering options when selecting data from "devices_catalog_files". */
export type Devices_Catalog_Files_Order_By = {
  created_at?: InputMaybe<Order_By>;
  device_catalog_id?: InputMaybe<Order_By>;
  devices_catalog_rel?: InputMaybe<Devices_Catalog_Order_By>;
  file_id?: InputMaybe<Order_By>;
  file_rel?: InputMaybe<Files_Order_By>;
  id?: InputMaybe<Order_By>;
  tenant?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: devices_catalog_files */
export type Devices_Catalog_Files_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "devices_catalog_files" */
export enum Devices_Catalog_Files_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeviceCatalogId = 'device_catalog_id',
  /** column name */
  FileId = 'file_id',
  /** column name */
  Id = 'id',
  /** column name */
  Tenant = 'tenant',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "devices_catalog_files" */
export type Devices_Catalog_Files_Set_Input = {
  created_at?: InputMaybe<Scalars['date']>;
  device_catalog_id?: InputMaybe<Scalars['uuid']>;
  file_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  tenant?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['date']>;
};

/** update columns of table "devices_catalog_files" */
export enum Devices_Catalog_Files_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeviceCatalogId = 'device_catalog_id',
  /** column name */
  FileId = 'file_id',
  /** column name */
  Id = 'id',
  /** column name */
  Tenant = 'tenant',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for inserting data into table "devices_catalog" */
export type Devices_Catalog_Insert_Input = {
  action_template?: InputMaybe<Scalars['uuid']>;
  action_templates?: InputMaybe<Scalars['uuid']>;
  actions_template?: InputMaybe<Actions_Templates_Obj_Rel_Insert_Input>;
  actions_templates_rel?: InputMaybe<Devices_Catalog_Actions_Templates_Arr_Rel_Insert_Input>;
  created_at?: InputMaybe<Scalars['date']>;
  device_number?: InputMaybe<Scalars['String']>;
  device_parameters?: InputMaybe<Device_Parameters_Arr_Rel_Insert_Input>;
  device_urls?: InputMaybe<Device_Urls_Arr_Rel_Insert_Input>;
  devices?: InputMaybe<Devices_Arr_Rel_Insert_Input>;
  devices_catalog_files_rel?: InputMaybe<Devices_Catalog_Files_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['uuid']>;
  manufacturer?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  part_number?: InputMaybe<Scalars['String']>;
  tenant?: InputMaybe<Scalars['uuid']>;
  tenant_rel?: InputMaybe<Tenants_Obj_Rel_Insert_Input>;
  type?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['date']>;
  user?: InputMaybe<Scalars['uuid']>;
  user_rel?: InputMaybe<Users_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Devices_Catalog_Max_Fields = {
  __typename?: 'devices_catalog_max_fields';
  action_template?: Maybe<Scalars['uuid']>;
  action_templates?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['date']>;
  device_number?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  manufacturer?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  part_number?: Maybe<Scalars['String']>;
  tenant?: Maybe<Scalars['uuid']>;
  type?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['date']>;
  user?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "devices_catalog" */
export type Devices_Catalog_Max_Order_By = {
  action_template?: InputMaybe<Order_By>;
  action_templates?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  device_number?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  manufacturer?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  part_number?: InputMaybe<Order_By>;
  tenant?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Devices_Catalog_Min_Fields = {
  __typename?: 'devices_catalog_min_fields';
  action_template?: Maybe<Scalars['uuid']>;
  action_templates?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['date']>;
  device_number?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  manufacturer?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  part_number?: Maybe<Scalars['String']>;
  tenant?: Maybe<Scalars['uuid']>;
  type?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['date']>;
  user?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "devices_catalog" */
export type Devices_Catalog_Min_Order_By = {
  action_template?: InputMaybe<Order_By>;
  action_templates?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  device_number?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  manufacturer?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  part_number?: InputMaybe<Order_By>;
  tenant?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "devices_catalog" */
export type Devices_Catalog_Mutation_Response = {
  __typename?: 'devices_catalog_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Devices_Catalog>;
};

/** input type for inserting object relation for remote table "devices_catalog" */
export type Devices_Catalog_Obj_Rel_Insert_Input = {
  data: Devices_Catalog_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Devices_Catalog_On_Conflict>;
};

/** on_conflict condition type for table "devices_catalog" */
export type Devices_Catalog_On_Conflict = {
  constraint: Devices_Catalog_Constraint;
  update_columns?: Array<Devices_Catalog_Update_Column>;
  where?: InputMaybe<Devices_Catalog_Bool_Exp>;
};

/** Ordering options when selecting data from "devices_catalog". */
export type Devices_Catalog_Order_By = {
  action_template?: InputMaybe<Order_By>;
  action_templates?: InputMaybe<Order_By>;
  actions_template?: InputMaybe<Actions_Templates_Order_By>;
  actions_templates_rel_aggregate?: InputMaybe<Devices_Catalog_Actions_Templates_Aggregate_Order_By>;
  created_at?: InputMaybe<Order_By>;
  device_number?: InputMaybe<Order_By>;
  device_parameters_aggregate?: InputMaybe<Device_Parameters_Aggregate_Order_By>;
  device_urls_aggregate?: InputMaybe<Device_Urls_Aggregate_Order_By>;
  devices_aggregate?: InputMaybe<Devices_Aggregate_Order_By>;
  devices_catalog_files_rel_aggregate?: InputMaybe<Devices_Catalog_Files_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  manufacturer?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  part_number?: InputMaybe<Order_By>;
  tenant?: InputMaybe<Order_By>;
  tenant_rel?: InputMaybe<Tenants_Order_By>;
  type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Order_By>;
  user_rel?: InputMaybe<Users_Order_By>;
};

/** primary key columns input for table: devices_catalog */
export type Devices_Catalog_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "devices_catalog" */
export enum Devices_Catalog_Select_Column {
  /** column name */
  ActionTemplate = 'action_template',
  /** column name */
  ActionTemplates = 'action_templates',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeviceNumber = 'device_number',
  /** column name */
  Id = 'id',
  /** column name */
  Manufacturer = 'manufacturer',
  /** column name */
  Name = 'name',
  /** column name */
  PartNumber = 'part_number',
  /** column name */
  Tenant = 'tenant',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  User = 'user'
}

/** input type for updating data in table "devices_catalog" */
export type Devices_Catalog_Set_Input = {
  action_template?: InputMaybe<Scalars['uuid']>;
  action_templates?: InputMaybe<Scalars['uuid']>;
  created_at?: InputMaybe<Scalars['date']>;
  device_number?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  manufacturer?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  part_number?: InputMaybe<Scalars['String']>;
  tenant?: InputMaybe<Scalars['uuid']>;
  type?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['date']>;
  user?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "devices_catalog" */
export enum Devices_Catalog_Update_Column {
  /** column name */
  ActionTemplate = 'action_template',
  /** column name */
  ActionTemplates = 'action_templates',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeviceNumber = 'device_number',
  /** column name */
  Id = 'id',
  /** column name */
  Manufacturer = 'manufacturer',
  /** column name */
  Name = 'name',
  /** column name */
  PartNumber = 'part_number',
  /** column name */
  Tenant = 'tenant',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  User = 'user'
}

/** unique or primary key constraints on table "devices" */
export enum Devices_Constraint {
  /** unique or primary key constraint on columns "action_templates" */
  DevicesActionTemplatesKey = 'devices_action_templates_key',
  /** unique or primary key constraint on columns "id" */
  DevicesPkey = 'devices_pkey'
}

/** input type for inserting data into table "devices" */
export type Devices_Insert_Input = {
  action_template?: InputMaybe<Scalars['uuid']>;
  action_templates?: InputMaybe<Scalars['uuid']>;
  actions_templates_rel?: InputMaybe<Actions_Templates_Obj_Rel_Insert_Input>;
  created_at?: InputMaybe<Scalars['date']>;
  device_catalog?: InputMaybe<Scalars['uuid']>;
  device_number?: InputMaybe<Scalars['String']>;
  devices_catalog_rel?: InputMaybe<Devices_Catalog_Obj_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['uuid']>;
  manufacturer?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  part_number?: InputMaybe<Scalars['String']>;
  tenant?: InputMaybe<Scalars['uuid']>;
  type?: InputMaybe<Scalars['String']>;
  tzb?: InputMaybe<Scalars['uuid']>;
  tzb_rel?: InputMaybe<Tzbs_Obj_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['date']>;
  user?: InputMaybe<Scalars['uuid']>;
  user_rel?: InputMaybe<Users_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Devices_Max_Fields = {
  __typename?: 'devices_max_fields';
  action_template?: Maybe<Scalars['uuid']>;
  action_templates?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['date']>;
  device_catalog?: Maybe<Scalars['uuid']>;
  device_number?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  manufacturer?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  part_number?: Maybe<Scalars['String']>;
  tenant?: Maybe<Scalars['uuid']>;
  type?: Maybe<Scalars['String']>;
  tzb?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['date']>;
  user?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "devices" */
export type Devices_Max_Order_By = {
  action_template?: InputMaybe<Order_By>;
  action_templates?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  device_catalog?: InputMaybe<Order_By>;
  device_number?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  manufacturer?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  part_number?: InputMaybe<Order_By>;
  tenant?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  tzb?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Devices_Min_Fields = {
  __typename?: 'devices_min_fields';
  action_template?: Maybe<Scalars['uuid']>;
  action_templates?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['date']>;
  device_catalog?: Maybe<Scalars['uuid']>;
  device_number?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  manufacturer?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  part_number?: Maybe<Scalars['String']>;
  tenant?: Maybe<Scalars['uuid']>;
  type?: Maybe<Scalars['String']>;
  tzb?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['date']>;
  user?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "devices" */
export type Devices_Min_Order_By = {
  action_template?: InputMaybe<Order_By>;
  action_templates?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  device_catalog?: InputMaybe<Order_By>;
  device_number?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  manufacturer?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  part_number?: InputMaybe<Order_By>;
  tenant?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  tzb?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "devices" */
export type Devices_Mutation_Response = {
  __typename?: 'devices_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Devices>;
};

/** on_conflict condition type for table "devices" */
export type Devices_On_Conflict = {
  constraint: Devices_Constraint;
  update_columns?: Array<Devices_Update_Column>;
  where?: InputMaybe<Devices_Bool_Exp>;
};

/** Ordering options when selecting data from "devices". */
export type Devices_Order_By = {
  action_template?: InputMaybe<Order_By>;
  action_templates?: InputMaybe<Order_By>;
  actions_templates_rel?: InputMaybe<Actions_Templates_Order_By>;
  created_at?: InputMaybe<Order_By>;
  device_catalog?: InputMaybe<Order_By>;
  device_number?: InputMaybe<Order_By>;
  devices_catalog_rel?: InputMaybe<Devices_Catalog_Order_By>;
  id?: InputMaybe<Order_By>;
  manufacturer?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  part_number?: InputMaybe<Order_By>;
  tenant?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  tzb?: InputMaybe<Order_By>;
  tzb_rel?: InputMaybe<Tzbs_Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Order_By>;
  user_rel?: InputMaybe<Users_Order_By>;
};

/** primary key columns input for table: devices */
export type Devices_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "devices" */
export enum Devices_Select_Column {
  /** column name */
  ActionTemplate = 'action_template',
  /** column name */
  ActionTemplates = 'action_templates',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeviceCatalog = 'device_catalog',
  /** column name */
  DeviceNumber = 'device_number',
  /** column name */
  Id = 'id',
  /** column name */
  Manufacturer = 'manufacturer',
  /** column name */
  Name = 'name',
  /** column name */
  PartNumber = 'part_number',
  /** column name */
  Tenant = 'tenant',
  /** column name */
  Type = 'type',
  /** column name */
  Tzb = 'tzb',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  User = 'user'
}

/** input type for updating data in table "devices" */
export type Devices_Set_Input = {
  action_template?: InputMaybe<Scalars['uuid']>;
  action_templates?: InputMaybe<Scalars['uuid']>;
  created_at?: InputMaybe<Scalars['date']>;
  device_catalog?: InputMaybe<Scalars['uuid']>;
  device_number?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  manufacturer?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  part_number?: InputMaybe<Scalars['String']>;
  tenant?: InputMaybe<Scalars['uuid']>;
  type?: InputMaybe<Scalars['String']>;
  tzb?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['date']>;
  user?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "devices" */
export enum Devices_Update_Column {
  /** column name */
  ActionTemplate = 'action_template',
  /** column name */
  ActionTemplates = 'action_templates',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeviceCatalog = 'device_catalog',
  /** column name */
  DeviceNumber = 'device_number',
  /** column name */
  Id = 'id',
  /** column name */
  Manufacturer = 'manufacturer',
  /** column name */
  Name = 'name',
  /** column name */
  PartNumber = 'part_number',
  /** column name */
  Tenant = 'tenant',
  /** column name */
  Type = 'type',
  /** column name */
  Tzb = 'tzb',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  User = 'user'
}

/** columns and relationships of "education_videos" */
export type Education_Videos = {
  __typename?: 'education_videos';
  category: Scalars['String'];
  created_at: Scalars['date'];
  id: Scalars['uuid'];
  minutes_long: Scalars['String'];
  tenant: Scalars['uuid'];
  title: Scalars['String'];
  type: Scalars['String'];
  updated_at: Scalars['date'];
  url: Scalars['String'];
};

/** aggregated selection of "education_videos" */
export type Education_Videos_Aggregate = {
  __typename?: 'education_videos_aggregate';
  aggregate?: Maybe<Education_Videos_Aggregate_Fields>;
  nodes: Array<Education_Videos>;
};

/** aggregate fields of "education_videos" */
export type Education_Videos_Aggregate_Fields = {
  __typename?: 'education_videos_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Education_Videos_Max_Fields>;
  min?: Maybe<Education_Videos_Min_Fields>;
};


/** aggregate fields of "education_videos" */
export type Education_Videos_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Education_Videos_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "education_videos". All fields are combined with a logical 'AND'. */
export type Education_Videos_Bool_Exp = {
  _and?: InputMaybe<Array<Education_Videos_Bool_Exp>>;
  _not?: InputMaybe<Education_Videos_Bool_Exp>;
  _or?: InputMaybe<Array<Education_Videos_Bool_Exp>>;
  category?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Date_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  minutes_long?: InputMaybe<String_Comparison_Exp>;
  tenant?: InputMaybe<Uuid_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  type?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Date_Comparison_Exp>;
  url?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "education_videos" */
export enum Education_Videos_Constraint {
  /** unique or primary key constraint on columns "id" */
  EducationVideosPkey = 'education_videos_pkey'
}

/** input type for inserting data into table "education_videos" */
export type Education_Videos_Insert_Input = {
  category?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['date']>;
  id?: InputMaybe<Scalars['uuid']>;
  minutes_long?: InputMaybe<Scalars['String']>;
  tenant?: InputMaybe<Scalars['uuid']>;
  title?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['date']>;
  url?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Education_Videos_Max_Fields = {
  __typename?: 'education_videos_max_fields';
  category?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['date']>;
  id?: Maybe<Scalars['uuid']>;
  minutes_long?: Maybe<Scalars['String']>;
  tenant?: Maybe<Scalars['uuid']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['date']>;
  url?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Education_Videos_Min_Fields = {
  __typename?: 'education_videos_min_fields';
  category?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['date']>;
  id?: Maybe<Scalars['uuid']>;
  minutes_long?: Maybe<Scalars['String']>;
  tenant?: Maybe<Scalars['uuid']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['date']>;
  url?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "education_videos" */
export type Education_Videos_Mutation_Response = {
  __typename?: 'education_videos_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Education_Videos>;
};

/** on_conflict condition type for table "education_videos" */
export type Education_Videos_On_Conflict = {
  constraint: Education_Videos_Constraint;
  update_columns?: Array<Education_Videos_Update_Column>;
  where?: InputMaybe<Education_Videos_Bool_Exp>;
};

/** Ordering options when selecting data from "education_videos". */
export type Education_Videos_Order_By = {
  category?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  minutes_long?: InputMaybe<Order_By>;
  tenant?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  url?: InputMaybe<Order_By>;
};

/** primary key columns input for table: education_videos */
export type Education_Videos_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "education_videos" */
export enum Education_Videos_Select_Column {
  /** column name */
  Category = 'category',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  MinutesLong = 'minutes_long',
  /** column name */
  Tenant = 'tenant',
  /** column name */
  Title = 'title',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Url = 'url'
}

/** input type for updating data in table "education_videos" */
export type Education_Videos_Set_Input = {
  category?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['date']>;
  id?: InputMaybe<Scalars['uuid']>;
  minutes_long?: InputMaybe<Scalars['String']>;
  tenant?: InputMaybe<Scalars['uuid']>;
  title?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['date']>;
  url?: InputMaybe<Scalars['String']>;
};

/** update columns of table "education_videos" */
export enum Education_Videos_Update_Column {
  /** column name */
  Category = 'category',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  MinutesLong = 'minutes_long',
  /** column name */
  Tenant = 'tenant',
  /** column name */
  Title = 'title',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Url = 'url'
}

/** columns and relationships of "favorite" */
export type Favorite = {
  __typename?: 'favorite';
  created_at: Scalars['date'];
  id: Scalars['uuid'];
  tenant: Scalars['uuid'];
  /** An object relationship */
  tenantByTenant: Tenants;
  tzb: Scalars['uuid'];
  /** An object relationship */
  tzb_rel: Tzbs;
  updated_at: Scalars['date'];
  user: Scalars['uuid'];
  /** An object relationship */
  user_rel: Users;
};

/** aggregated selection of "favorite" */
export type Favorite_Aggregate = {
  __typename?: 'favorite_aggregate';
  aggregate?: Maybe<Favorite_Aggregate_Fields>;
  nodes: Array<Favorite>;
};

/** aggregate fields of "favorite" */
export type Favorite_Aggregate_Fields = {
  __typename?: 'favorite_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Favorite_Max_Fields>;
  min?: Maybe<Favorite_Min_Fields>;
};


/** aggregate fields of "favorite" */
export type Favorite_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Favorite_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "favorite" */
export type Favorite_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Favorite_Max_Order_By>;
  min?: InputMaybe<Favorite_Min_Order_By>;
};

/** input type for inserting array relation for remote table "favorite" */
export type Favorite_Arr_Rel_Insert_Input = {
  data: Array<Favorite_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Favorite_On_Conflict>;
};

/** Boolean expression to filter rows from the table "favorite". All fields are combined with a logical 'AND'. */
export type Favorite_Bool_Exp = {
  _and?: InputMaybe<Array<Favorite_Bool_Exp>>;
  _not?: InputMaybe<Favorite_Bool_Exp>;
  _or?: InputMaybe<Array<Favorite_Bool_Exp>>;
  created_at?: InputMaybe<Date_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  tenant?: InputMaybe<Uuid_Comparison_Exp>;
  tenantByTenant?: InputMaybe<Tenants_Bool_Exp>;
  tzb?: InputMaybe<Uuid_Comparison_Exp>;
  tzb_rel?: InputMaybe<Tzbs_Bool_Exp>;
  updated_at?: InputMaybe<Date_Comparison_Exp>;
  user?: InputMaybe<Uuid_Comparison_Exp>;
  user_rel?: InputMaybe<Users_Bool_Exp>;
};

/** unique or primary key constraints on table "favorite" */
export enum Favorite_Constraint {
  /** unique or primary key constraint on columns "id" */
  FavoritesPkey = 'favorites_pkey'
}

/** input type for inserting data into table "favorite" */
export type Favorite_Insert_Input = {
  created_at?: InputMaybe<Scalars['date']>;
  id?: InputMaybe<Scalars['uuid']>;
  tenant?: InputMaybe<Scalars['uuid']>;
  tenantByTenant?: InputMaybe<Tenants_Obj_Rel_Insert_Input>;
  tzb?: InputMaybe<Scalars['uuid']>;
  tzb_rel?: InputMaybe<Tzbs_Obj_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['date']>;
  user?: InputMaybe<Scalars['uuid']>;
  user_rel?: InputMaybe<Users_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Favorite_Max_Fields = {
  __typename?: 'favorite_max_fields';
  created_at?: Maybe<Scalars['date']>;
  id?: Maybe<Scalars['uuid']>;
  tenant?: Maybe<Scalars['uuid']>;
  tzb?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['date']>;
  user?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "favorite" */
export type Favorite_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  tenant?: InputMaybe<Order_By>;
  tzb?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Favorite_Min_Fields = {
  __typename?: 'favorite_min_fields';
  created_at?: Maybe<Scalars['date']>;
  id?: Maybe<Scalars['uuid']>;
  tenant?: Maybe<Scalars['uuid']>;
  tzb?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['date']>;
  user?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "favorite" */
export type Favorite_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  tenant?: InputMaybe<Order_By>;
  tzb?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "favorite" */
export type Favorite_Mutation_Response = {
  __typename?: 'favorite_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Favorite>;
};

/** on_conflict condition type for table "favorite" */
export type Favorite_On_Conflict = {
  constraint: Favorite_Constraint;
  update_columns?: Array<Favorite_Update_Column>;
  where?: InputMaybe<Favorite_Bool_Exp>;
};

/** Ordering options when selecting data from "favorite". */
export type Favorite_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  tenant?: InputMaybe<Order_By>;
  tenantByTenant?: InputMaybe<Tenants_Order_By>;
  tzb?: InputMaybe<Order_By>;
  tzb_rel?: InputMaybe<Tzbs_Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Order_By>;
  user_rel?: InputMaybe<Users_Order_By>;
};

/** primary key columns input for table: favorite */
export type Favorite_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "favorite" */
export enum Favorite_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Tenant = 'tenant',
  /** column name */
  Tzb = 'tzb',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  User = 'user'
}

/** input type for updating data in table "favorite" */
export type Favorite_Set_Input = {
  created_at?: InputMaybe<Scalars['date']>;
  id?: InputMaybe<Scalars['uuid']>;
  tenant?: InputMaybe<Scalars['uuid']>;
  tzb?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['date']>;
  user?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "favorite" */
export enum Favorite_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Tenant = 'tenant',
  /** column name */
  Tzb = 'tzb',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  User = 'user'
}

/** columns and relationships of "files" */
export type Files = {
  __typename?: 'files';
  /** An array relationship */
  accidents: Array<Accidents>;
  /** An aggregate relationship */
  accidents_aggregate: Accidents_Aggregate;
  /** An array relationship */
  action_notes: Array<Action_Notes>;
  /** An aggregate relationship */
  action_notes_aggregate: Action_Notes_Aggregate;
  bucket: Scalars['String'];
  created_at: Scalars['date'];
  /** An array relationship */
  devices_catalog_files: Array<Devices_Catalog_Files>;
  /** An aggregate relationship */
  devices_catalog_files_aggregate: Devices_Catalog_Files_Aggregate;
  display_name: Scalars['String'];
  file_name: Scalars['String'];
  /** An array relationship */
  files_bozps: Array<Files_Bozp>;
  /** An aggregate relationship */
  files_bozps_aggregate: Files_Bozp_Aggregate;
  /** An array relationship */
  files_checks: Array<Files_Checks>;
  /** An aggregate relationship */
  files_checks_aggregate: Files_Checks_Aggregate;
  /** An array relationship */
  files_fotodocumentations: Array<Files_Fotodocumentation>;
  /** An aggregate relationship */
  files_fotodocumentations_aggregate: Files_Fotodocumentation_Aggregate;
  /** An array relationship */
  files_local_operating_rules: Array<Files_Local_Operating_Rules>;
  /** An aggregate relationship */
  files_local_operating_rules_aggregate: Files_Local_Operating_Rules_Aggregate;
  /** An array relationship */
  files_others: Array<Files_Others>;
  /** An aggregate relationship */
  files_others_aggregate: Files_Others_Aggregate;
  /** An array relationship */
  files_project_documentations: Array<Files_Project_Documentation>;
  /** An aggregate relationship */
  files_project_documentations_aggregate: Files_Project_Documentation_Aggregate;
  /** An array relationship */
  files_revisions: Array<Files_Revisions>;
  /** An aggregate relationship */
  files_revisions_aggregate: Files_Revisions_Aggregate;
  /** An array relationship */
  files_risks: Array<Files_Risks>;
  /** An aggregate relationship */
  files_risks_aggregate: Files_Risks_Aggregate;
  id: Scalars['uuid'];
  /** An array relationship */
  important_notices: Array<Important_Notices>;
  /** An aggregate relationship */
  important_notices_aggregate: Important_Notices_Aggregate;
  /** An object relationship */
  invoice_rel?: Maybe<Invoices>;
  /** An array relationship */
  kupr_difficulty_levels: Array<Kupr_Difficulty_Levels>;
  /** An aggregate relationship */
  kupr_difficulty_levels_aggregate: Kupr_Difficulty_Levels_Aggregate;
  /** An array relationship */
  kupr_posts: Array<Kupr_Posts>;
  /** An aggregate relationship */
  kupr_posts_aggregate: Kupr_Posts_Aggregate;
  mime?: Maybe<Scalars['String']>;
  /** An array relationship */
  operation_logs: Array<Operation_Logs>;
  /** An aggregate relationship */
  operation_logs_aggregate: Operation_Logs_Aggregate;
  /** An array relationship */
  service_orders: Array<Service_Orders>;
  /** An aggregate relationship */
  service_orders_aggregate: Service_Orders_Aggregate;
  tenant?: Maybe<Scalars['uuid']>;
  /** An object relationship */
  tenant_rel?: Maybe<Tenants>;
  /** An array relationship */
  tenants: Array<Tenants>;
  /** An aggregate relationship */
  tenants_aggregate: Tenants_Aggregate;
  updated_at: Scalars['date'];
};


/** columns and relationships of "files" */
export type FilesAccidentsArgs = {
  distinct_on?: InputMaybe<Array<Accidents_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Accidents_Order_By>>;
  where?: InputMaybe<Accidents_Bool_Exp>;
};


/** columns and relationships of "files" */
export type FilesAccidents_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Accidents_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Accidents_Order_By>>;
  where?: InputMaybe<Accidents_Bool_Exp>;
};


/** columns and relationships of "files" */
export type FilesAction_NotesArgs = {
  distinct_on?: InputMaybe<Array<Action_Notes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Action_Notes_Order_By>>;
  where?: InputMaybe<Action_Notes_Bool_Exp>;
};


/** columns and relationships of "files" */
export type FilesAction_Notes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Action_Notes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Action_Notes_Order_By>>;
  where?: InputMaybe<Action_Notes_Bool_Exp>;
};


/** columns and relationships of "files" */
export type FilesDevices_Catalog_FilesArgs = {
  distinct_on?: InputMaybe<Array<Devices_Catalog_Files_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Devices_Catalog_Files_Order_By>>;
  where?: InputMaybe<Devices_Catalog_Files_Bool_Exp>;
};


/** columns and relationships of "files" */
export type FilesDevices_Catalog_Files_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Devices_Catalog_Files_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Devices_Catalog_Files_Order_By>>;
  where?: InputMaybe<Devices_Catalog_Files_Bool_Exp>;
};


/** columns and relationships of "files" */
export type FilesFiles_BozpsArgs = {
  distinct_on?: InputMaybe<Array<Files_Bozp_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Files_Bozp_Order_By>>;
  where?: InputMaybe<Files_Bozp_Bool_Exp>;
};


/** columns and relationships of "files" */
export type FilesFiles_Bozps_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Files_Bozp_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Files_Bozp_Order_By>>;
  where?: InputMaybe<Files_Bozp_Bool_Exp>;
};


/** columns and relationships of "files" */
export type FilesFiles_ChecksArgs = {
  distinct_on?: InputMaybe<Array<Files_Checks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Files_Checks_Order_By>>;
  where?: InputMaybe<Files_Checks_Bool_Exp>;
};


/** columns and relationships of "files" */
export type FilesFiles_Checks_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Files_Checks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Files_Checks_Order_By>>;
  where?: InputMaybe<Files_Checks_Bool_Exp>;
};


/** columns and relationships of "files" */
export type FilesFiles_FotodocumentationsArgs = {
  distinct_on?: InputMaybe<Array<Files_Fotodocumentation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Files_Fotodocumentation_Order_By>>;
  where?: InputMaybe<Files_Fotodocumentation_Bool_Exp>;
};


/** columns and relationships of "files" */
export type FilesFiles_Fotodocumentations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Files_Fotodocumentation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Files_Fotodocumentation_Order_By>>;
  where?: InputMaybe<Files_Fotodocumentation_Bool_Exp>;
};


/** columns and relationships of "files" */
export type FilesFiles_Local_Operating_RulesArgs = {
  distinct_on?: InputMaybe<Array<Files_Local_Operating_Rules_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Files_Local_Operating_Rules_Order_By>>;
  where?: InputMaybe<Files_Local_Operating_Rules_Bool_Exp>;
};


/** columns and relationships of "files" */
export type FilesFiles_Local_Operating_Rules_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Files_Local_Operating_Rules_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Files_Local_Operating_Rules_Order_By>>;
  where?: InputMaybe<Files_Local_Operating_Rules_Bool_Exp>;
};


/** columns and relationships of "files" */
export type FilesFiles_OthersArgs = {
  distinct_on?: InputMaybe<Array<Files_Others_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Files_Others_Order_By>>;
  where?: InputMaybe<Files_Others_Bool_Exp>;
};


/** columns and relationships of "files" */
export type FilesFiles_Others_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Files_Others_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Files_Others_Order_By>>;
  where?: InputMaybe<Files_Others_Bool_Exp>;
};


/** columns and relationships of "files" */
export type FilesFiles_Project_DocumentationsArgs = {
  distinct_on?: InputMaybe<Array<Files_Project_Documentation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Files_Project_Documentation_Order_By>>;
  where?: InputMaybe<Files_Project_Documentation_Bool_Exp>;
};


/** columns and relationships of "files" */
export type FilesFiles_Project_Documentations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Files_Project_Documentation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Files_Project_Documentation_Order_By>>;
  where?: InputMaybe<Files_Project_Documentation_Bool_Exp>;
};


/** columns and relationships of "files" */
export type FilesFiles_RevisionsArgs = {
  distinct_on?: InputMaybe<Array<Files_Revisions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Files_Revisions_Order_By>>;
  where?: InputMaybe<Files_Revisions_Bool_Exp>;
};


/** columns and relationships of "files" */
export type FilesFiles_Revisions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Files_Revisions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Files_Revisions_Order_By>>;
  where?: InputMaybe<Files_Revisions_Bool_Exp>;
};


/** columns and relationships of "files" */
export type FilesFiles_RisksArgs = {
  distinct_on?: InputMaybe<Array<Files_Risks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Files_Risks_Order_By>>;
  where?: InputMaybe<Files_Risks_Bool_Exp>;
};


/** columns and relationships of "files" */
export type FilesFiles_Risks_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Files_Risks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Files_Risks_Order_By>>;
  where?: InputMaybe<Files_Risks_Bool_Exp>;
};


/** columns and relationships of "files" */
export type FilesImportant_NoticesArgs = {
  distinct_on?: InputMaybe<Array<Important_Notices_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Important_Notices_Order_By>>;
  where?: InputMaybe<Important_Notices_Bool_Exp>;
};


/** columns and relationships of "files" */
export type FilesImportant_Notices_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Important_Notices_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Important_Notices_Order_By>>;
  where?: InputMaybe<Important_Notices_Bool_Exp>;
};


/** columns and relationships of "files" */
export type FilesKupr_Difficulty_LevelsArgs = {
  distinct_on?: InputMaybe<Array<Kupr_Difficulty_Levels_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Kupr_Difficulty_Levels_Order_By>>;
  where?: InputMaybe<Kupr_Difficulty_Levels_Bool_Exp>;
};


/** columns and relationships of "files" */
export type FilesKupr_Difficulty_Levels_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Kupr_Difficulty_Levels_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Kupr_Difficulty_Levels_Order_By>>;
  where?: InputMaybe<Kupr_Difficulty_Levels_Bool_Exp>;
};


/** columns and relationships of "files" */
export type FilesKupr_PostsArgs = {
  distinct_on?: InputMaybe<Array<Kupr_Posts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Kupr_Posts_Order_By>>;
  where?: InputMaybe<Kupr_Posts_Bool_Exp>;
};


/** columns and relationships of "files" */
export type FilesKupr_Posts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Kupr_Posts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Kupr_Posts_Order_By>>;
  where?: InputMaybe<Kupr_Posts_Bool_Exp>;
};


/** columns and relationships of "files" */
export type FilesOperation_LogsArgs = {
  distinct_on?: InputMaybe<Array<Operation_Logs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Operation_Logs_Order_By>>;
  where?: InputMaybe<Operation_Logs_Bool_Exp>;
};


/** columns and relationships of "files" */
export type FilesOperation_Logs_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Operation_Logs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Operation_Logs_Order_By>>;
  where?: InputMaybe<Operation_Logs_Bool_Exp>;
};


/** columns and relationships of "files" */
export type FilesService_OrdersArgs = {
  distinct_on?: InputMaybe<Array<Service_Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Service_Orders_Order_By>>;
  where?: InputMaybe<Service_Orders_Bool_Exp>;
};


/** columns and relationships of "files" */
export type FilesService_Orders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Service_Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Service_Orders_Order_By>>;
  where?: InputMaybe<Service_Orders_Bool_Exp>;
};


/** columns and relationships of "files" */
export type FilesTenantsArgs = {
  distinct_on?: InputMaybe<Array<Tenants_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tenants_Order_By>>;
  where?: InputMaybe<Tenants_Bool_Exp>;
};


/** columns and relationships of "files" */
export type FilesTenants_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tenants_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tenants_Order_By>>;
  where?: InputMaybe<Tenants_Bool_Exp>;
};

/** aggregated selection of "files" */
export type Files_Aggregate = {
  __typename?: 'files_aggregate';
  aggregate?: Maybe<Files_Aggregate_Fields>;
  nodes: Array<Files>;
};

/** aggregate fields of "files" */
export type Files_Aggregate_Fields = {
  __typename?: 'files_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Files_Max_Fields>;
  min?: Maybe<Files_Min_Fields>;
};


/** aggregate fields of "files" */
export type Files_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Files_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "files". All fields are combined with a logical 'AND'. */
export type Files_Bool_Exp = {
  _and?: InputMaybe<Array<Files_Bool_Exp>>;
  _not?: InputMaybe<Files_Bool_Exp>;
  _or?: InputMaybe<Array<Files_Bool_Exp>>;
  accidents?: InputMaybe<Accidents_Bool_Exp>;
  action_notes?: InputMaybe<Action_Notes_Bool_Exp>;
  bucket?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Date_Comparison_Exp>;
  devices_catalog_files?: InputMaybe<Devices_Catalog_Files_Bool_Exp>;
  display_name?: InputMaybe<String_Comparison_Exp>;
  file_name?: InputMaybe<String_Comparison_Exp>;
  files_bozps?: InputMaybe<Files_Bozp_Bool_Exp>;
  files_checks?: InputMaybe<Files_Checks_Bool_Exp>;
  files_fotodocumentations?: InputMaybe<Files_Fotodocumentation_Bool_Exp>;
  files_local_operating_rules?: InputMaybe<Files_Local_Operating_Rules_Bool_Exp>;
  files_others?: InputMaybe<Files_Others_Bool_Exp>;
  files_project_documentations?: InputMaybe<Files_Project_Documentation_Bool_Exp>;
  files_revisions?: InputMaybe<Files_Revisions_Bool_Exp>;
  files_risks?: InputMaybe<Files_Risks_Bool_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  important_notices?: InputMaybe<Important_Notices_Bool_Exp>;
  invoice_rel?: InputMaybe<Invoices_Bool_Exp>;
  kupr_difficulty_levels?: InputMaybe<Kupr_Difficulty_Levels_Bool_Exp>;
  kupr_posts?: InputMaybe<Kupr_Posts_Bool_Exp>;
  mime?: InputMaybe<String_Comparison_Exp>;
  operation_logs?: InputMaybe<Operation_Logs_Bool_Exp>;
  service_orders?: InputMaybe<Service_Orders_Bool_Exp>;
  tenant?: InputMaybe<Uuid_Comparison_Exp>;
  tenant_rel?: InputMaybe<Tenants_Bool_Exp>;
  tenants?: InputMaybe<Tenants_Bool_Exp>;
  updated_at?: InputMaybe<Date_Comparison_Exp>;
};

/** columns and relationships of "files_bozp" */
export type Files_Bozp = {
  __typename?: 'files_bozp';
  created_at: Scalars['date'];
  file: Scalars['uuid'];
  /** An object relationship */
  file_rel: Files;
  id: Scalars['uuid'];
  tenant: Scalars['uuid'];
  /** An object relationship */
  tenant_rel: Tenants;
  tzb: Scalars['uuid'];
  /** An object relationship */
  tzb_rel: Tzbs;
  updated_at: Scalars['date'];
  user: Scalars['uuid'];
  /** An object relationship */
  user_rel: Users;
};

/** aggregated selection of "files_bozp" */
export type Files_Bozp_Aggregate = {
  __typename?: 'files_bozp_aggregate';
  aggregate?: Maybe<Files_Bozp_Aggregate_Fields>;
  nodes: Array<Files_Bozp>;
};

/** aggregate fields of "files_bozp" */
export type Files_Bozp_Aggregate_Fields = {
  __typename?: 'files_bozp_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Files_Bozp_Max_Fields>;
  min?: Maybe<Files_Bozp_Min_Fields>;
};


/** aggregate fields of "files_bozp" */
export type Files_Bozp_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Files_Bozp_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "files_bozp" */
export type Files_Bozp_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Files_Bozp_Max_Order_By>;
  min?: InputMaybe<Files_Bozp_Min_Order_By>;
};

/** input type for inserting array relation for remote table "files_bozp" */
export type Files_Bozp_Arr_Rel_Insert_Input = {
  data: Array<Files_Bozp_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Files_Bozp_On_Conflict>;
};

/** Boolean expression to filter rows from the table "files_bozp". All fields are combined with a logical 'AND'. */
export type Files_Bozp_Bool_Exp = {
  _and?: InputMaybe<Array<Files_Bozp_Bool_Exp>>;
  _not?: InputMaybe<Files_Bozp_Bool_Exp>;
  _or?: InputMaybe<Array<Files_Bozp_Bool_Exp>>;
  created_at?: InputMaybe<Date_Comparison_Exp>;
  file?: InputMaybe<Uuid_Comparison_Exp>;
  file_rel?: InputMaybe<Files_Bool_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  tenant?: InputMaybe<Uuid_Comparison_Exp>;
  tenant_rel?: InputMaybe<Tenants_Bool_Exp>;
  tzb?: InputMaybe<Uuid_Comparison_Exp>;
  tzb_rel?: InputMaybe<Tzbs_Bool_Exp>;
  updated_at?: InputMaybe<Date_Comparison_Exp>;
  user?: InputMaybe<Uuid_Comparison_Exp>;
  user_rel?: InputMaybe<Users_Bool_Exp>;
};

/** unique or primary key constraints on table "files_bozp" */
export enum Files_Bozp_Constraint {
  /** unique or primary key constraint on columns "id" */
  FilesBozpPkey = 'files_bozp_pkey'
}

/** input type for inserting data into table "files_bozp" */
export type Files_Bozp_Insert_Input = {
  created_at?: InputMaybe<Scalars['date']>;
  file?: InputMaybe<Scalars['uuid']>;
  file_rel?: InputMaybe<Files_Obj_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['uuid']>;
  tenant?: InputMaybe<Scalars['uuid']>;
  tenant_rel?: InputMaybe<Tenants_Obj_Rel_Insert_Input>;
  tzb?: InputMaybe<Scalars['uuid']>;
  tzb_rel?: InputMaybe<Tzbs_Obj_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['date']>;
  user?: InputMaybe<Scalars['uuid']>;
  user_rel?: InputMaybe<Users_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Files_Bozp_Max_Fields = {
  __typename?: 'files_bozp_max_fields';
  created_at?: Maybe<Scalars['date']>;
  file?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  tenant?: Maybe<Scalars['uuid']>;
  tzb?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['date']>;
  user?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "files_bozp" */
export type Files_Bozp_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  file?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  tenant?: InputMaybe<Order_By>;
  tzb?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Files_Bozp_Min_Fields = {
  __typename?: 'files_bozp_min_fields';
  created_at?: Maybe<Scalars['date']>;
  file?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  tenant?: Maybe<Scalars['uuid']>;
  tzb?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['date']>;
  user?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "files_bozp" */
export type Files_Bozp_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  file?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  tenant?: InputMaybe<Order_By>;
  tzb?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "files_bozp" */
export type Files_Bozp_Mutation_Response = {
  __typename?: 'files_bozp_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Files_Bozp>;
};

/** on_conflict condition type for table "files_bozp" */
export type Files_Bozp_On_Conflict = {
  constraint: Files_Bozp_Constraint;
  update_columns?: Array<Files_Bozp_Update_Column>;
  where?: InputMaybe<Files_Bozp_Bool_Exp>;
};

/** Ordering options when selecting data from "files_bozp". */
export type Files_Bozp_Order_By = {
  created_at?: InputMaybe<Order_By>;
  file?: InputMaybe<Order_By>;
  file_rel?: InputMaybe<Files_Order_By>;
  id?: InputMaybe<Order_By>;
  tenant?: InputMaybe<Order_By>;
  tenant_rel?: InputMaybe<Tenants_Order_By>;
  tzb?: InputMaybe<Order_By>;
  tzb_rel?: InputMaybe<Tzbs_Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Order_By>;
  user_rel?: InputMaybe<Users_Order_By>;
};

/** primary key columns input for table: files_bozp */
export type Files_Bozp_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "files_bozp" */
export enum Files_Bozp_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  File = 'file',
  /** column name */
  Id = 'id',
  /** column name */
  Tenant = 'tenant',
  /** column name */
  Tzb = 'tzb',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  User = 'user'
}

/** input type for updating data in table "files_bozp" */
export type Files_Bozp_Set_Input = {
  created_at?: InputMaybe<Scalars['date']>;
  file?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  tenant?: InputMaybe<Scalars['uuid']>;
  tzb?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['date']>;
  user?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "files_bozp" */
export enum Files_Bozp_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  File = 'file',
  /** column name */
  Id = 'id',
  /** column name */
  Tenant = 'tenant',
  /** column name */
  Tzb = 'tzb',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  User = 'user'
}

/** columns and relationships of "files_checks" */
export type Files_Checks = {
  __typename?: 'files_checks';
  created_at: Scalars['date'];
  file: Scalars['uuid'];
  /** An object relationship */
  file_rel: Files;
  /** An array relationship */
  full_checks_rel: Array<Full_Checks>;
  /** An aggregate relationship */
  full_checks_rel_aggregate: Full_Checks_Aggregate;
  id: Scalars['uuid'];
  tenant: Scalars['uuid'];
  /** An object relationship */
  tenant_rel: Tenants;
  tzb: Scalars['uuid'];
  /** An object relationship */
  tzb_rel: Tzbs;
  updated_at: Scalars['date'];
  user: Scalars['uuid'];
  /** An object relationship */
  user_rel: Users;
};


/** columns and relationships of "files_checks" */
export type Files_ChecksFull_Checks_RelArgs = {
  distinct_on?: InputMaybe<Array<Full_Checks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Full_Checks_Order_By>>;
  where?: InputMaybe<Full_Checks_Bool_Exp>;
};


/** columns and relationships of "files_checks" */
export type Files_ChecksFull_Checks_Rel_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Full_Checks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Full_Checks_Order_By>>;
  where?: InputMaybe<Full_Checks_Bool_Exp>;
};

/** aggregated selection of "files_checks" */
export type Files_Checks_Aggregate = {
  __typename?: 'files_checks_aggregate';
  aggregate?: Maybe<Files_Checks_Aggregate_Fields>;
  nodes: Array<Files_Checks>;
};

/** aggregate fields of "files_checks" */
export type Files_Checks_Aggregate_Fields = {
  __typename?: 'files_checks_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Files_Checks_Max_Fields>;
  min?: Maybe<Files_Checks_Min_Fields>;
};


/** aggregate fields of "files_checks" */
export type Files_Checks_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Files_Checks_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "files_checks" */
export type Files_Checks_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Files_Checks_Max_Order_By>;
  min?: InputMaybe<Files_Checks_Min_Order_By>;
};

/** input type for inserting array relation for remote table "files_checks" */
export type Files_Checks_Arr_Rel_Insert_Input = {
  data: Array<Files_Checks_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Files_Checks_On_Conflict>;
};

/** Boolean expression to filter rows from the table "files_checks". All fields are combined with a logical 'AND'. */
export type Files_Checks_Bool_Exp = {
  _and?: InputMaybe<Array<Files_Checks_Bool_Exp>>;
  _not?: InputMaybe<Files_Checks_Bool_Exp>;
  _or?: InputMaybe<Array<Files_Checks_Bool_Exp>>;
  created_at?: InputMaybe<Date_Comparison_Exp>;
  file?: InputMaybe<Uuid_Comparison_Exp>;
  file_rel?: InputMaybe<Files_Bool_Exp>;
  full_checks_rel?: InputMaybe<Full_Checks_Bool_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  tenant?: InputMaybe<Uuid_Comparison_Exp>;
  tenant_rel?: InputMaybe<Tenants_Bool_Exp>;
  tzb?: InputMaybe<Uuid_Comparison_Exp>;
  tzb_rel?: InputMaybe<Tzbs_Bool_Exp>;
  updated_at?: InputMaybe<Date_Comparison_Exp>;
  user?: InputMaybe<Uuid_Comparison_Exp>;
  user_rel?: InputMaybe<Users_Bool_Exp>;
};

/** unique or primary key constraints on table "files_checks" */
export enum Files_Checks_Constraint {
  /** unique or primary key constraint on columns "id" */
  FilesChecksPkey = 'files_checks_pkey'
}

/** input type for inserting data into table "files_checks" */
export type Files_Checks_Insert_Input = {
  created_at?: InputMaybe<Scalars['date']>;
  file?: InputMaybe<Scalars['uuid']>;
  file_rel?: InputMaybe<Files_Obj_Rel_Insert_Input>;
  full_checks_rel?: InputMaybe<Full_Checks_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['uuid']>;
  tenant?: InputMaybe<Scalars['uuid']>;
  tenant_rel?: InputMaybe<Tenants_Obj_Rel_Insert_Input>;
  tzb?: InputMaybe<Scalars['uuid']>;
  tzb_rel?: InputMaybe<Tzbs_Obj_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['date']>;
  user?: InputMaybe<Scalars['uuid']>;
  user_rel?: InputMaybe<Users_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Files_Checks_Max_Fields = {
  __typename?: 'files_checks_max_fields';
  created_at?: Maybe<Scalars['date']>;
  file?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  tenant?: Maybe<Scalars['uuid']>;
  tzb?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['date']>;
  user?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "files_checks" */
export type Files_Checks_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  file?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  tenant?: InputMaybe<Order_By>;
  tzb?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Files_Checks_Min_Fields = {
  __typename?: 'files_checks_min_fields';
  created_at?: Maybe<Scalars['date']>;
  file?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  tenant?: Maybe<Scalars['uuid']>;
  tzb?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['date']>;
  user?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "files_checks" */
export type Files_Checks_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  file?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  tenant?: InputMaybe<Order_By>;
  tzb?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "files_checks" */
export type Files_Checks_Mutation_Response = {
  __typename?: 'files_checks_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Files_Checks>;
};

/** input type for inserting object relation for remote table "files_checks" */
export type Files_Checks_Obj_Rel_Insert_Input = {
  data: Files_Checks_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Files_Checks_On_Conflict>;
};

/** on_conflict condition type for table "files_checks" */
export type Files_Checks_On_Conflict = {
  constraint: Files_Checks_Constraint;
  update_columns?: Array<Files_Checks_Update_Column>;
  where?: InputMaybe<Files_Checks_Bool_Exp>;
};

/** Ordering options when selecting data from "files_checks". */
export type Files_Checks_Order_By = {
  created_at?: InputMaybe<Order_By>;
  file?: InputMaybe<Order_By>;
  file_rel?: InputMaybe<Files_Order_By>;
  full_checks_rel_aggregate?: InputMaybe<Full_Checks_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  tenant?: InputMaybe<Order_By>;
  tenant_rel?: InputMaybe<Tenants_Order_By>;
  tzb?: InputMaybe<Order_By>;
  tzb_rel?: InputMaybe<Tzbs_Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Order_By>;
  user_rel?: InputMaybe<Users_Order_By>;
};

/** primary key columns input for table: files_checks */
export type Files_Checks_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "files_checks" */
export enum Files_Checks_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  File = 'file',
  /** column name */
  Id = 'id',
  /** column name */
  Tenant = 'tenant',
  /** column name */
  Tzb = 'tzb',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  User = 'user'
}

/** input type for updating data in table "files_checks" */
export type Files_Checks_Set_Input = {
  created_at?: InputMaybe<Scalars['date']>;
  file?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  tenant?: InputMaybe<Scalars['uuid']>;
  tzb?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['date']>;
  user?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "files_checks" */
export enum Files_Checks_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  File = 'file',
  /** column name */
  Id = 'id',
  /** column name */
  Tenant = 'tenant',
  /** column name */
  Tzb = 'tzb',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  User = 'user'
}

/** unique or primary key constraints on table "files" */
export enum Files_Constraint {
  /** unique or primary key constraint on columns "id" */
  FilesPkey = 'files_pkey'
}

/** columns and relationships of "files_fotodocumentation" */
export type Files_Fotodocumentation = {
  __typename?: 'files_fotodocumentation';
  created_at: Scalars['date'];
  file: Scalars['uuid'];
  /** An object relationship */
  file_rel: Files;
  id: Scalars['uuid'];
  tenant: Scalars['uuid'];
  /** An object relationship */
  tenant_rel: Tenants;
  tzb: Scalars['uuid'];
  /** An object relationship */
  tzb_rel: Tzbs;
  updated_at: Scalars['date'];
  user: Scalars['uuid'];
  /** An object relationship */
  user_rel: Users;
};

/** aggregated selection of "files_fotodocumentation" */
export type Files_Fotodocumentation_Aggregate = {
  __typename?: 'files_fotodocumentation_aggregate';
  aggregate?: Maybe<Files_Fotodocumentation_Aggregate_Fields>;
  nodes: Array<Files_Fotodocumentation>;
};

/** aggregate fields of "files_fotodocumentation" */
export type Files_Fotodocumentation_Aggregate_Fields = {
  __typename?: 'files_fotodocumentation_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Files_Fotodocumentation_Max_Fields>;
  min?: Maybe<Files_Fotodocumentation_Min_Fields>;
};


/** aggregate fields of "files_fotodocumentation" */
export type Files_Fotodocumentation_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Files_Fotodocumentation_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "files_fotodocumentation" */
export type Files_Fotodocumentation_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Files_Fotodocumentation_Max_Order_By>;
  min?: InputMaybe<Files_Fotodocumentation_Min_Order_By>;
};

/** input type for inserting array relation for remote table "files_fotodocumentation" */
export type Files_Fotodocumentation_Arr_Rel_Insert_Input = {
  data: Array<Files_Fotodocumentation_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Files_Fotodocumentation_On_Conflict>;
};

/** Boolean expression to filter rows from the table "files_fotodocumentation". All fields are combined with a logical 'AND'. */
export type Files_Fotodocumentation_Bool_Exp = {
  _and?: InputMaybe<Array<Files_Fotodocumentation_Bool_Exp>>;
  _not?: InputMaybe<Files_Fotodocumentation_Bool_Exp>;
  _or?: InputMaybe<Array<Files_Fotodocumentation_Bool_Exp>>;
  created_at?: InputMaybe<Date_Comparison_Exp>;
  file?: InputMaybe<Uuid_Comparison_Exp>;
  file_rel?: InputMaybe<Files_Bool_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  tenant?: InputMaybe<Uuid_Comparison_Exp>;
  tenant_rel?: InputMaybe<Tenants_Bool_Exp>;
  tzb?: InputMaybe<Uuid_Comparison_Exp>;
  tzb_rel?: InputMaybe<Tzbs_Bool_Exp>;
  updated_at?: InputMaybe<Date_Comparison_Exp>;
  user?: InputMaybe<Uuid_Comparison_Exp>;
  user_rel?: InputMaybe<Users_Bool_Exp>;
};

/** unique or primary key constraints on table "files_fotodocumentation" */
export enum Files_Fotodocumentation_Constraint {
  /** unique or primary key constraint on columns "id" */
  FilesFotodocumentationPkey = 'files_fotodocumentation_pkey'
}

/** input type for inserting data into table "files_fotodocumentation" */
export type Files_Fotodocumentation_Insert_Input = {
  created_at?: InputMaybe<Scalars['date']>;
  file?: InputMaybe<Scalars['uuid']>;
  file_rel?: InputMaybe<Files_Obj_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['uuid']>;
  tenant?: InputMaybe<Scalars['uuid']>;
  tenant_rel?: InputMaybe<Tenants_Obj_Rel_Insert_Input>;
  tzb?: InputMaybe<Scalars['uuid']>;
  tzb_rel?: InputMaybe<Tzbs_Obj_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['date']>;
  user?: InputMaybe<Scalars['uuid']>;
  user_rel?: InputMaybe<Users_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Files_Fotodocumentation_Max_Fields = {
  __typename?: 'files_fotodocumentation_max_fields';
  created_at?: Maybe<Scalars['date']>;
  file?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  tenant?: Maybe<Scalars['uuid']>;
  tzb?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['date']>;
  user?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "files_fotodocumentation" */
export type Files_Fotodocumentation_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  file?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  tenant?: InputMaybe<Order_By>;
  tzb?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Files_Fotodocumentation_Min_Fields = {
  __typename?: 'files_fotodocumentation_min_fields';
  created_at?: Maybe<Scalars['date']>;
  file?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  tenant?: Maybe<Scalars['uuid']>;
  tzb?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['date']>;
  user?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "files_fotodocumentation" */
export type Files_Fotodocumentation_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  file?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  tenant?: InputMaybe<Order_By>;
  tzb?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "files_fotodocumentation" */
export type Files_Fotodocumentation_Mutation_Response = {
  __typename?: 'files_fotodocumentation_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Files_Fotodocumentation>;
};

/** on_conflict condition type for table "files_fotodocumentation" */
export type Files_Fotodocumentation_On_Conflict = {
  constraint: Files_Fotodocumentation_Constraint;
  update_columns?: Array<Files_Fotodocumentation_Update_Column>;
  where?: InputMaybe<Files_Fotodocumentation_Bool_Exp>;
};

/** Ordering options when selecting data from "files_fotodocumentation". */
export type Files_Fotodocumentation_Order_By = {
  created_at?: InputMaybe<Order_By>;
  file?: InputMaybe<Order_By>;
  file_rel?: InputMaybe<Files_Order_By>;
  id?: InputMaybe<Order_By>;
  tenant?: InputMaybe<Order_By>;
  tenant_rel?: InputMaybe<Tenants_Order_By>;
  tzb?: InputMaybe<Order_By>;
  tzb_rel?: InputMaybe<Tzbs_Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Order_By>;
  user_rel?: InputMaybe<Users_Order_By>;
};

/** primary key columns input for table: files_fotodocumentation */
export type Files_Fotodocumentation_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "files_fotodocumentation" */
export enum Files_Fotodocumentation_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  File = 'file',
  /** column name */
  Id = 'id',
  /** column name */
  Tenant = 'tenant',
  /** column name */
  Tzb = 'tzb',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  User = 'user'
}

/** input type for updating data in table "files_fotodocumentation" */
export type Files_Fotodocumentation_Set_Input = {
  created_at?: InputMaybe<Scalars['date']>;
  file?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  tenant?: InputMaybe<Scalars['uuid']>;
  tzb?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['date']>;
  user?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "files_fotodocumentation" */
export enum Files_Fotodocumentation_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  File = 'file',
  /** column name */
  Id = 'id',
  /** column name */
  Tenant = 'tenant',
  /** column name */
  Tzb = 'tzb',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  User = 'user'
}

/** input type for inserting data into table "files" */
export type Files_Insert_Input = {
  accidents?: InputMaybe<Accidents_Arr_Rel_Insert_Input>;
  action_notes?: InputMaybe<Action_Notes_Arr_Rel_Insert_Input>;
  bucket?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['date']>;
  devices_catalog_files?: InputMaybe<Devices_Catalog_Files_Arr_Rel_Insert_Input>;
  display_name?: InputMaybe<Scalars['String']>;
  file_name?: InputMaybe<Scalars['String']>;
  files_bozps?: InputMaybe<Files_Bozp_Arr_Rel_Insert_Input>;
  files_checks?: InputMaybe<Files_Checks_Arr_Rel_Insert_Input>;
  files_fotodocumentations?: InputMaybe<Files_Fotodocumentation_Arr_Rel_Insert_Input>;
  files_local_operating_rules?: InputMaybe<Files_Local_Operating_Rules_Arr_Rel_Insert_Input>;
  files_others?: InputMaybe<Files_Others_Arr_Rel_Insert_Input>;
  files_project_documentations?: InputMaybe<Files_Project_Documentation_Arr_Rel_Insert_Input>;
  files_revisions?: InputMaybe<Files_Revisions_Arr_Rel_Insert_Input>;
  files_risks?: InputMaybe<Files_Risks_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['uuid']>;
  important_notices?: InputMaybe<Important_Notices_Arr_Rel_Insert_Input>;
  invoice_rel?: InputMaybe<Invoices_Obj_Rel_Insert_Input>;
  kupr_difficulty_levels?: InputMaybe<Kupr_Difficulty_Levels_Arr_Rel_Insert_Input>;
  kupr_posts?: InputMaybe<Kupr_Posts_Arr_Rel_Insert_Input>;
  mime?: InputMaybe<Scalars['String']>;
  operation_logs?: InputMaybe<Operation_Logs_Arr_Rel_Insert_Input>;
  service_orders?: InputMaybe<Service_Orders_Arr_Rel_Insert_Input>;
  tenant?: InputMaybe<Scalars['uuid']>;
  tenant_rel?: InputMaybe<Tenants_Obj_Rel_Insert_Input>;
  tenants?: InputMaybe<Tenants_Arr_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['date']>;
};

/** columns and relationships of "files_local_operating_rules" */
export type Files_Local_Operating_Rules = {
  __typename?: 'files_local_operating_rules';
  created_at: Scalars['date'];
  file: Scalars['uuid'];
  /** An object relationship */
  file_rel: Files;
  id: Scalars['uuid'];
  tenant: Scalars['uuid'];
  /** An object relationship */
  tenant_rel: Tenants;
  tzb: Scalars['uuid'];
  /** An object relationship */
  tzb_rel: Tzbs;
  updated_at: Scalars['date'];
  user: Scalars['uuid'];
  /** An object relationship */
  user_rel: Users;
};

/** aggregated selection of "files_local_operating_rules" */
export type Files_Local_Operating_Rules_Aggregate = {
  __typename?: 'files_local_operating_rules_aggregate';
  aggregate?: Maybe<Files_Local_Operating_Rules_Aggregate_Fields>;
  nodes: Array<Files_Local_Operating_Rules>;
};

/** aggregate fields of "files_local_operating_rules" */
export type Files_Local_Operating_Rules_Aggregate_Fields = {
  __typename?: 'files_local_operating_rules_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Files_Local_Operating_Rules_Max_Fields>;
  min?: Maybe<Files_Local_Operating_Rules_Min_Fields>;
};


/** aggregate fields of "files_local_operating_rules" */
export type Files_Local_Operating_Rules_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Files_Local_Operating_Rules_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "files_local_operating_rules" */
export type Files_Local_Operating_Rules_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Files_Local_Operating_Rules_Max_Order_By>;
  min?: InputMaybe<Files_Local_Operating_Rules_Min_Order_By>;
};

/** input type for inserting array relation for remote table "files_local_operating_rules" */
export type Files_Local_Operating_Rules_Arr_Rel_Insert_Input = {
  data: Array<Files_Local_Operating_Rules_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Files_Local_Operating_Rules_On_Conflict>;
};

/** Boolean expression to filter rows from the table "files_local_operating_rules". All fields are combined with a logical 'AND'. */
export type Files_Local_Operating_Rules_Bool_Exp = {
  _and?: InputMaybe<Array<Files_Local_Operating_Rules_Bool_Exp>>;
  _not?: InputMaybe<Files_Local_Operating_Rules_Bool_Exp>;
  _or?: InputMaybe<Array<Files_Local_Operating_Rules_Bool_Exp>>;
  created_at?: InputMaybe<Date_Comparison_Exp>;
  file?: InputMaybe<Uuid_Comparison_Exp>;
  file_rel?: InputMaybe<Files_Bool_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  tenant?: InputMaybe<Uuid_Comparison_Exp>;
  tenant_rel?: InputMaybe<Tenants_Bool_Exp>;
  tzb?: InputMaybe<Uuid_Comparison_Exp>;
  tzb_rel?: InputMaybe<Tzbs_Bool_Exp>;
  updated_at?: InputMaybe<Date_Comparison_Exp>;
  user?: InputMaybe<Uuid_Comparison_Exp>;
  user_rel?: InputMaybe<Users_Bool_Exp>;
};

/** unique or primary key constraints on table "files_local_operating_rules" */
export enum Files_Local_Operating_Rules_Constraint {
  /** unique or primary key constraint on columns "id" */
  FilesLocalOperatingRulesPkey = 'files_local_operating_rules_pkey'
}

/** input type for inserting data into table "files_local_operating_rules" */
export type Files_Local_Operating_Rules_Insert_Input = {
  created_at?: InputMaybe<Scalars['date']>;
  file?: InputMaybe<Scalars['uuid']>;
  file_rel?: InputMaybe<Files_Obj_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['uuid']>;
  tenant?: InputMaybe<Scalars['uuid']>;
  tenant_rel?: InputMaybe<Tenants_Obj_Rel_Insert_Input>;
  tzb?: InputMaybe<Scalars['uuid']>;
  tzb_rel?: InputMaybe<Tzbs_Obj_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['date']>;
  user?: InputMaybe<Scalars['uuid']>;
  user_rel?: InputMaybe<Users_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Files_Local_Operating_Rules_Max_Fields = {
  __typename?: 'files_local_operating_rules_max_fields';
  created_at?: Maybe<Scalars['date']>;
  file?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  tenant?: Maybe<Scalars['uuid']>;
  tzb?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['date']>;
  user?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "files_local_operating_rules" */
export type Files_Local_Operating_Rules_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  file?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  tenant?: InputMaybe<Order_By>;
  tzb?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Files_Local_Operating_Rules_Min_Fields = {
  __typename?: 'files_local_operating_rules_min_fields';
  created_at?: Maybe<Scalars['date']>;
  file?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  tenant?: Maybe<Scalars['uuid']>;
  tzb?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['date']>;
  user?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "files_local_operating_rules" */
export type Files_Local_Operating_Rules_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  file?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  tenant?: InputMaybe<Order_By>;
  tzb?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "files_local_operating_rules" */
export type Files_Local_Operating_Rules_Mutation_Response = {
  __typename?: 'files_local_operating_rules_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Files_Local_Operating_Rules>;
};

/** on_conflict condition type for table "files_local_operating_rules" */
export type Files_Local_Operating_Rules_On_Conflict = {
  constraint: Files_Local_Operating_Rules_Constraint;
  update_columns?: Array<Files_Local_Operating_Rules_Update_Column>;
  where?: InputMaybe<Files_Local_Operating_Rules_Bool_Exp>;
};

/** Ordering options when selecting data from "files_local_operating_rules". */
export type Files_Local_Operating_Rules_Order_By = {
  created_at?: InputMaybe<Order_By>;
  file?: InputMaybe<Order_By>;
  file_rel?: InputMaybe<Files_Order_By>;
  id?: InputMaybe<Order_By>;
  tenant?: InputMaybe<Order_By>;
  tenant_rel?: InputMaybe<Tenants_Order_By>;
  tzb?: InputMaybe<Order_By>;
  tzb_rel?: InputMaybe<Tzbs_Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Order_By>;
  user_rel?: InputMaybe<Users_Order_By>;
};

/** primary key columns input for table: files_local_operating_rules */
export type Files_Local_Operating_Rules_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "files_local_operating_rules" */
export enum Files_Local_Operating_Rules_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  File = 'file',
  /** column name */
  Id = 'id',
  /** column name */
  Tenant = 'tenant',
  /** column name */
  Tzb = 'tzb',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  User = 'user'
}

/** input type for updating data in table "files_local_operating_rules" */
export type Files_Local_Operating_Rules_Set_Input = {
  created_at?: InputMaybe<Scalars['date']>;
  file?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  tenant?: InputMaybe<Scalars['uuid']>;
  tzb?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['date']>;
  user?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "files_local_operating_rules" */
export enum Files_Local_Operating_Rules_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  File = 'file',
  /** column name */
  Id = 'id',
  /** column name */
  Tenant = 'tenant',
  /** column name */
  Tzb = 'tzb',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  User = 'user'
}

/** aggregate max on columns */
export type Files_Max_Fields = {
  __typename?: 'files_max_fields';
  bucket?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['date']>;
  display_name?: Maybe<Scalars['String']>;
  file_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  mime?: Maybe<Scalars['String']>;
  tenant?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['date']>;
};

/** aggregate min on columns */
export type Files_Min_Fields = {
  __typename?: 'files_min_fields';
  bucket?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['date']>;
  display_name?: Maybe<Scalars['String']>;
  file_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  mime?: Maybe<Scalars['String']>;
  tenant?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['date']>;
};

/** response of any mutation on the table "files" */
export type Files_Mutation_Response = {
  __typename?: 'files_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Files>;
};

/** input type for inserting object relation for remote table "files" */
export type Files_Obj_Rel_Insert_Input = {
  data: Files_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Files_On_Conflict>;
};

/** on_conflict condition type for table "files" */
export type Files_On_Conflict = {
  constraint: Files_Constraint;
  update_columns?: Array<Files_Update_Column>;
  where?: InputMaybe<Files_Bool_Exp>;
};

/** Ordering options when selecting data from "files". */
export type Files_Order_By = {
  accidents_aggregate?: InputMaybe<Accidents_Aggregate_Order_By>;
  action_notes_aggregate?: InputMaybe<Action_Notes_Aggregate_Order_By>;
  bucket?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  devices_catalog_files_aggregate?: InputMaybe<Devices_Catalog_Files_Aggregate_Order_By>;
  display_name?: InputMaybe<Order_By>;
  file_name?: InputMaybe<Order_By>;
  files_bozps_aggregate?: InputMaybe<Files_Bozp_Aggregate_Order_By>;
  files_checks_aggregate?: InputMaybe<Files_Checks_Aggregate_Order_By>;
  files_fotodocumentations_aggregate?: InputMaybe<Files_Fotodocumentation_Aggregate_Order_By>;
  files_local_operating_rules_aggregate?: InputMaybe<Files_Local_Operating_Rules_Aggregate_Order_By>;
  files_others_aggregate?: InputMaybe<Files_Others_Aggregate_Order_By>;
  files_project_documentations_aggregate?: InputMaybe<Files_Project_Documentation_Aggregate_Order_By>;
  files_revisions_aggregate?: InputMaybe<Files_Revisions_Aggregate_Order_By>;
  files_risks_aggregate?: InputMaybe<Files_Risks_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  important_notices_aggregate?: InputMaybe<Important_Notices_Aggregate_Order_By>;
  invoice_rel?: InputMaybe<Invoices_Order_By>;
  kupr_difficulty_levels_aggregate?: InputMaybe<Kupr_Difficulty_Levels_Aggregate_Order_By>;
  kupr_posts_aggregate?: InputMaybe<Kupr_Posts_Aggregate_Order_By>;
  mime?: InputMaybe<Order_By>;
  operation_logs_aggregate?: InputMaybe<Operation_Logs_Aggregate_Order_By>;
  service_orders_aggregate?: InputMaybe<Service_Orders_Aggregate_Order_By>;
  tenant?: InputMaybe<Order_By>;
  tenant_rel?: InputMaybe<Tenants_Order_By>;
  tenants_aggregate?: InputMaybe<Tenants_Aggregate_Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** columns and relationships of "files_others" */
export type Files_Others = {
  __typename?: 'files_others';
  created_at: Scalars['date'];
  file: Scalars['uuid'];
  /** An object relationship */
  file_rel: Files;
  id: Scalars['uuid'];
  tenant: Scalars['uuid'];
  /** An object relationship */
  tenant_rel: Tenants;
  tzb: Scalars['uuid'];
  /** An object relationship */
  tzb_rel: Tzbs;
  updated_at: Scalars['date'];
  user: Scalars['uuid'];
  /** An object relationship */
  user_rel: Users;
};

/** aggregated selection of "files_others" */
export type Files_Others_Aggregate = {
  __typename?: 'files_others_aggregate';
  aggregate?: Maybe<Files_Others_Aggregate_Fields>;
  nodes: Array<Files_Others>;
};

/** aggregate fields of "files_others" */
export type Files_Others_Aggregate_Fields = {
  __typename?: 'files_others_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Files_Others_Max_Fields>;
  min?: Maybe<Files_Others_Min_Fields>;
};


/** aggregate fields of "files_others" */
export type Files_Others_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Files_Others_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "files_others" */
export type Files_Others_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Files_Others_Max_Order_By>;
  min?: InputMaybe<Files_Others_Min_Order_By>;
};

/** input type for inserting array relation for remote table "files_others" */
export type Files_Others_Arr_Rel_Insert_Input = {
  data: Array<Files_Others_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Files_Others_On_Conflict>;
};

/** Boolean expression to filter rows from the table "files_others". All fields are combined with a logical 'AND'. */
export type Files_Others_Bool_Exp = {
  _and?: InputMaybe<Array<Files_Others_Bool_Exp>>;
  _not?: InputMaybe<Files_Others_Bool_Exp>;
  _or?: InputMaybe<Array<Files_Others_Bool_Exp>>;
  created_at?: InputMaybe<Date_Comparison_Exp>;
  file?: InputMaybe<Uuid_Comparison_Exp>;
  file_rel?: InputMaybe<Files_Bool_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  tenant?: InputMaybe<Uuid_Comparison_Exp>;
  tenant_rel?: InputMaybe<Tenants_Bool_Exp>;
  tzb?: InputMaybe<Uuid_Comparison_Exp>;
  tzb_rel?: InputMaybe<Tzbs_Bool_Exp>;
  updated_at?: InputMaybe<Date_Comparison_Exp>;
  user?: InputMaybe<Uuid_Comparison_Exp>;
  user_rel?: InputMaybe<Users_Bool_Exp>;
};

/** unique or primary key constraints on table "files_others" */
export enum Files_Others_Constraint {
  /** unique or primary key constraint on columns "id" */
  OthersFilesPkey = 'others_files_pkey'
}

/** input type for inserting data into table "files_others" */
export type Files_Others_Insert_Input = {
  created_at?: InputMaybe<Scalars['date']>;
  file?: InputMaybe<Scalars['uuid']>;
  file_rel?: InputMaybe<Files_Obj_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['uuid']>;
  tenant?: InputMaybe<Scalars['uuid']>;
  tenant_rel?: InputMaybe<Tenants_Obj_Rel_Insert_Input>;
  tzb?: InputMaybe<Scalars['uuid']>;
  tzb_rel?: InputMaybe<Tzbs_Obj_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['date']>;
  user?: InputMaybe<Scalars['uuid']>;
  user_rel?: InputMaybe<Users_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Files_Others_Max_Fields = {
  __typename?: 'files_others_max_fields';
  created_at?: Maybe<Scalars['date']>;
  file?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  tenant?: Maybe<Scalars['uuid']>;
  tzb?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['date']>;
  user?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "files_others" */
export type Files_Others_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  file?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  tenant?: InputMaybe<Order_By>;
  tzb?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Files_Others_Min_Fields = {
  __typename?: 'files_others_min_fields';
  created_at?: Maybe<Scalars['date']>;
  file?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  tenant?: Maybe<Scalars['uuid']>;
  tzb?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['date']>;
  user?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "files_others" */
export type Files_Others_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  file?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  tenant?: InputMaybe<Order_By>;
  tzb?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "files_others" */
export type Files_Others_Mutation_Response = {
  __typename?: 'files_others_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Files_Others>;
};

/** on_conflict condition type for table "files_others" */
export type Files_Others_On_Conflict = {
  constraint: Files_Others_Constraint;
  update_columns?: Array<Files_Others_Update_Column>;
  where?: InputMaybe<Files_Others_Bool_Exp>;
};

/** Ordering options when selecting data from "files_others". */
export type Files_Others_Order_By = {
  created_at?: InputMaybe<Order_By>;
  file?: InputMaybe<Order_By>;
  file_rel?: InputMaybe<Files_Order_By>;
  id?: InputMaybe<Order_By>;
  tenant?: InputMaybe<Order_By>;
  tenant_rel?: InputMaybe<Tenants_Order_By>;
  tzb?: InputMaybe<Order_By>;
  tzb_rel?: InputMaybe<Tzbs_Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Order_By>;
  user_rel?: InputMaybe<Users_Order_By>;
};

/** primary key columns input for table: files_others */
export type Files_Others_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "files_others" */
export enum Files_Others_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  File = 'file',
  /** column name */
  Id = 'id',
  /** column name */
  Tenant = 'tenant',
  /** column name */
  Tzb = 'tzb',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  User = 'user'
}

/** input type for updating data in table "files_others" */
export type Files_Others_Set_Input = {
  created_at?: InputMaybe<Scalars['date']>;
  file?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  tenant?: InputMaybe<Scalars['uuid']>;
  tzb?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['date']>;
  user?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "files_others" */
export enum Files_Others_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  File = 'file',
  /** column name */
  Id = 'id',
  /** column name */
  Tenant = 'tenant',
  /** column name */
  Tzb = 'tzb',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  User = 'user'
}

/** primary key columns input for table: files */
export type Files_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** columns and relationships of "files_project_documentation" */
export type Files_Project_Documentation = {
  __typename?: 'files_project_documentation';
  created_at: Scalars['date'];
  file: Scalars['uuid'];
  /** An object relationship */
  file_rel: Files;
  id: Scalars['uuid'];
  tenant: Scalars['uuid'];
  /** An object relationship */
  tenant_rel: Tenants;
  tzb: Scalars['uuid'];
  /** An object relationship */
  tzb_rel: Tzbs;
  updated_at: Scalars['date'];
  user: Scalars['uuid'];
  /** An object relationship */
  user_rel: Users;
};

/** aggregated selection of "files_project_documentation" */
export type Files_Project_Documentation_Aggregate = {
  __typename?: 'files_project_documentation_aggregate';
  aggregate?: Maybe<Files_Project_Documentation_Aggregate_Fields>;
  nodes: Array<Files_Project_Documentation>;
};

/** aggregate fields of "files_project_documentation" */
export type Files_Project_Documentation_Aggregate_Fields = {
  __typename?: 'files_project_documentation_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Files_Project_Documentation_Max_Fields>;
  min?: Maybe<Files_Project_Documentation_Min_Fields>;
};


/** aggregate fields of "files_project_documentation" */
export type Files_Project_Documentation_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Files_Project_Documentation_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "files_project_documentation" */
export type Files_Project_Documentation_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Files_Project_Documentation_Max_Order_By>;
  min?: InputMaybe<Files_Project_Documentation_Min_Order_By>;
};

/** input type for inserting array relation for remote table "files_project_documentation" */
export type Files_Project_Documentation_Arr_Rel_Insert_Input = {
  data: Array<Files_Project_Documentation_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Files_Project_Documentation_On_Conflict>;
};

/** Boolean expression to filter rows from the table "files_project_documentation". All fields are combined with a logical 'AND'. */
export type Files_Project_Documentation_Bool_Exp = {
  _and?: InputMaybe<Array<Files_Project_Documentation_Bool_Exp>>;
  _not?: InputMaybe<Files_Project_Documentation_Bool_Exp>;
  _or?: InputMaybe<Array<Files_Project_Documentation_Bool_Exp>>;
  created_at?: InputMaybe<Date_Comparison_Exp>;
  file?: InputMaybe<Uuid_Comparison_Exp>;
  file_rel?: InputMaybe<Files_Bool_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  tenant?: InputMaybe<Uuid_Comparison_Exp>;
  tenant_rel?: InputMaybe<Tenants_Bool_Exp>;
  tzb?: InputMaybe<Uuid_Comparison_Exp>;
  tzb_rel?: InputMaybe<Tzbs_Bool_Exp>;
  updated_at?: InputMaybe<Date_Comparison_Exp>;
  user?: InputMaybe<Uuid_Comparison_Exp>;
  user_rel?: InputMaybe<Users_Bool_Exp>;
};

/** unique or primary key constraints on table "files_project_documentation" */
export enum Files_Project_Documentation_Constraint {
  /** unique or primary key constraint on columns "id" */
  FilesProjectDocumentationPkey = 'files_project_documentation_pkey'
}

/** input type for inserting data into table "files_project_documentation" */
export type Files_Project_Documentation_Insert_Input = {
  created_at?: InputMaybe<Scalars['date']>;
  file?: InputMaybe<Scalars['uuid']>;
  file_rel?: InputMaybe<Files_Obj_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['uuid']>;
  tenant?: InputMaybe<Scalars['uuid']>;
  tenant_rel?: InputMaybe<Tenants_Obj_Rel_Insert_Input>;
  tzb?: InputMaybe<Scalars['uuid']>;
  tzb_rel?: InputMaybe<Tzbs_Obj_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['date']>;
  user?: InputMaybe<Scalars['uuid']>;
  user_rel?: InputMaybe<Users_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Files_Project_Documentation_Max_Fields = {
  __typename?: 'files_project_documentation_max_fields';
  created_at?: Maybe<Scalars['date']>;
  file?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  tenant?: Maybe<Scalars['uuid']>;
  tzb?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['date']>;
  user?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "files_project_documentation" */
export type Files_Project_Documentation_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  file?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  tenant?: InputMaybe<Order_By>;
  tzb?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Files_Project_Documentation_Min_Fields = {
  __typename?: 'files_project_documentation_min_fields';
  created_at?: Maybe<Scalars['date']>;
  file?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  tenant?: Maybe<Scalars['uuid']>;
  tzb?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['date']>;
  user?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "files_project_documentation" */
export type Files_Project_Documentation_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  file?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  tenant?: InputMaybe<Order_By>;
  tzb?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "files_project_documentation" */
export type Files_Project_Documentation_Mutation_Response = {
  __typename?: 'files_project_documentation_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Files_Project_Documentation>;
};

/** on_conflict condition type for table "files_project_documentation" */
export type Files_Project_Documentation_On_Conflict = {
  constraint: Files_Project_Documentation_Constraint;
  update_columns?: Array<Files_Project_Documentation_Update_Column>;
  where?: InputMaybe<Files_Project_Documentation_Bool_Exp>;
};

/** Ordering options when selecting data from "files_project_documentation". */
export type Files_Project_Documentation_Order_By = {
  created_at?: InputMaybe<Order_By>;
  file?: InputMaybe<Order_By>;
  file_rel?: InputMaybe<Files_Order_By>;
  id?: InputMaybe<Order_By>;
  tenant?: InputMaybe<Order_By>;
  tenant_rel?: InputMaybe<Tenants_Order_By>;
  tzb?: InputMaybe<Order_By>;
  tzb_rel?: InputMaybe<Tzbs_Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Order_By>;
  user_rel?: InputMaybe<Users_Order_By>;
};

/** primary key columns input for table: files_project_documentation */
export type Files_Project_Documentation_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "files_project_documentation" */
export enum Files_Project_Documentation_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  File = 'file',
  /** column name */
  Id = 'id',
  /** column name */
  Tenant = 'tenant',
  /** column name */
  Tzb = 'tzb',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  User = 'user'
}

/** input type for updating data in table "files_project_documentation" */
export type Files_Project_Documentation_Set_Input = {
  created_at?: InputMaybe<Scalars['date']>;
  file?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  tenant?: InputMaybe<Scalars['uuid']>;
  tzb?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['date']>;
  user?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "files_project_documentation" */
export enum Files_Project_Documentation_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  File = 'file',
  /** column name */
  Id = 'id',
  /** column name */
  Tenant = 'tenant',
  /** column name */
  Tzb = 'tzb',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  User = 'user'
}

/** columns and relationships of "files_revisions" */
export type Files_Revisions = {
  __typename?: 'files_revisions';
  created_at: Scalars['date'];
  file: Scalars['uuid'];
  /** An object relationship */
  file_rel: Files;
  /** An array relationship */
  full_revisions: Array<Full_Revisions>;
  /** An aggregate relationship */
  full_revisions_aggregate: Full_Revisions_Aggregate;
  id: Scalars['uuid'];
  tenant: Scalars['uuid'];
  /** An object relationship */
  tenant_rel: Tenants;
  tzb: Scalars['uuid'];
  /** An object relationship */
  tzb_rel: Tzbs;
  updated_at: Scalars['date'];
  user: Scalars['uuid'];
  /** An object relationship */
  userByUser: Users;
};


/** columns and relationships of "files_revisions" */
export type Files_RevisionsFull_RevisionsArgs = {
  distinct_on?: InputMaybe<Array<Full_Revisions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Full_Revisions_Order_By>>;
  where?: InputMaybe<Full_Revisions_Bool_Exp>;
};


/** columns and relationships of "files_revisions" */
export type Files_RevisionsFull_Revisions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Full_Revisions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Full_Revisions_Order_By>>;
  where?: InputMaybe<Full_Revisions_Bool_Exp>;
};

/** aggregated selection of "files_revisions" */
export type Files_Revisions_Aggregate = {
  __typename?: 'files_revisions_aggregate';
  aggregate?: Maybe<Files_Revisions_Aggregate_Fields>;
  nodes: Array<Files_Revisions>;
};

/** aggregate fields of "files_revisions" */
export type Files_Revisions_Aggregate_Fields = {
  __typename?: 'files_revisions_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Files_Revisions_Max_Fields>;
  min?: Maybe<Files_Revisions_Min_Fields>;
};


/** aggregate fields of "files_revisions" */
export type Files_Revisions_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Files_Revisions_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "files_revisions" */
export type Files_Revisions_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Files_Revisions_Max_Order_By>;
  min?: InputMaybe<Files_Revisions_Min_Order_By>;
};

/** input type for inserting array relation for remote table "files_revisions" */
export type Files_Revisions_Arr_Rel_Insert_Input = {
  data: Array<Files_Revisions_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Files_Revisions_On_Conflict>;
};

/** Boolean expression to filter rows from the table "files_revisions". All fields are combined with a logical 'AND'. */
export type Files_Revisions_Bool_Exp = {
  _and?: InputMaybe<Array<Files_Revisions_Bool_Exp>>;
  _not?: InputMaybe<Files_Revisions_Bool_Exp>;
  _or?: InputMaybe<Array<Files_Revisions_Bool_Exp>>;
  created_at?: InputMaybe<Date_Comparison_Exp>;
  file?: InputMaybe<Uuid_Comparison_Exp>;
  file_rel?: InputMaybe<Files_Bool_Exp>;
  full_revisions?: InputMaybe<Full_Revisions_Bool_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  tenant?: InputMaybe<Uuid_Comparison_Exp>;
  tenant_rel?: InputMaybe<Tenants_Bool_Exp>;
  tzb?: InputMaybe<Uuid_Comparison_Exp>;
  tzb_rel?: InputMaybe<Tzbs_Bool_Exp>;
  updated_at?: InputMaybe<Date_Comparison_Exp>;
  user?: InputMaybe<Uuid_Comparison_Exp>;
  userByUser?: InputMaybe<Users_Bool_Exp>;
};

/** unique or primary key constraints on table "files_revisions" */
export enum Files_Revisions_Constraint {
  /** unique or primary key constraint on columns "id" */
  FilesRevisionsPkey = 'files_revisions_pkey'
}

/** input type for inserting data into table "files_revisions" */
export type Files_Revisions_Insert_Input = {
  created_at?: InputMaybe<Scalars['date']>;
  file?: InputMaybe<Scalars['uuid']>;
  file_rel?: InputMaybe<Files_Obj_Rel_Insert_Input>;
  full_revisions?: InputMaybe<Full_Revisions_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['uuid']>;
  tenant?: InputMaybe<Scalars['uuid']>;
  tenant_rel?: InputMaybe<Tenants_Obj_Rel_Insert_Input>;
  tzb?: InputMaybe<Scalars['uuid']>;
  tzb_rel?: InputMaybe<Tzbs_Obj_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['date']>;
  user?: InputMaybe<Scalars['uuid']>;
  userByUser?: InputMaybe<Users_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Files_Revisions_Max_Fields = {
  __typename?: 'files_revisions_max_fields';
  created_at?: Maybe<Scalars['date']>;
  file?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  tenant?: Maybe<Scalars['uuid']>;
  tzb?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['date']>;
  user?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "files_revisions" */
export type Files_Revisions_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  file?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  tenant?: InputMaybe<Order_By>;
  tzb?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Files_Revisions_Min_Fields = {
  __typename?: 'files_revisions_min_fields';
  created_at?: Maybe<Scalars['date']>;
  file?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  tenant?: Maybe<Scalars['uuid']>;
  tzb?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['date']>;
  user?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "files_revisions" */
export type Files_Revisions_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  file?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  tenant?: InputMaybe<Order_By>;
  tzb?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "files_revisions" */
export type Files_Revisions_Mutation_Response = {
  __typename?: 'files_revisions_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Files_Revisions>;
};

/** input type for inserting object relation for remote table "files_revisions" */
export type Files_Revisions_Obj_Rel_Insert_Input = {
  data: Files_Revisions_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Files_Revisions_On_Conflict>;
};

/** on_conflict condition type for table "files_revisions" */
export type Files_Revisions_On_Conflict = {
  constraint: Files_Revisions_Constraint;
  update_columns?: Array<Files_Revisions_Update_Column>;
  where?: InputMaybe<Files_Revisions_Bool_Exp>;
};

/** Ordering options when selecting data from "files_revisions". */
export type Files_Revisions_Order_By = {
  created_at?: InputMaybe<Order_By>;
  file?: InputMaybe<Order_By>;
  file_rel?: InputMaybe<Files_Order_By>;
  full_revisions_aggregate?: InputMaybe<Full_Revisions_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  tenant?: InputMaybe<Order_By>;
  tenant_rel?: InputMaybe<Tenants_Order_By>;
  tzb?: InputMaybe<Order_By>;
  tzb_rel?: InputMaybe<Tzbs_Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Order_By>;
  userByUser?: InputMaybe<Users_Order_By>;
};

/** primary key columns input for table: files_revisions */
export type Files_Revisions_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "files_revisions" */
export enum Files_Revisions_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  File = 'file',
  /** column name */
  Id = 'id',
  /** column name */
  Tenant = 'tenant',
  /** column name */
  Tzb = 'tzb',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  User = 'user'
}

/** input type for updating data in table "files_revisions" */
export type Files_Revisions_Set_Input = {
  created_at?: InputMaybe<Scalars['date']>;
  file?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  tenant?: InputMaybe<Scalars['uuid']>;
  tzb?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['date']>;
  user?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "files_revisions" */
export enum Files_Revisions_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  File = 'file',
  /** column name */
  Id = 'id',
  /** column name */
  Tenant = 'tenant',
  /** column name */
  Tzb = 'tzb',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  User = 'user'
}

/** columns and relationships of "files_risks" */
export type Files_Risks = {
  __typename?: 'files_risks';
  created_at: Scalars['date'];
  file: Scalars['uuid'];
  /** An object relationship */
  file_rel: Files;
  id: Scalars['uuid'];
  tenant: Scalars['uuid'];
  /** An object relationship */
  tenant_rel: Tenants;
  tzb: Scalars['uuid'];
  /** An object relationship */
  tzb_rel: Tzbs;
  updated_at: Scalars['date'];
  user: Scalars['uuid'];
  /** An object relationship */
  user_rel: Users;
};

/** aggregated selection of "files_risks" */
export type Files_Risks_Aggregate = {
  __typename?: 'files_risks_aggregate';
  aggregate?: Maybe<Files_Risks_Aggregate_Fields>;
  nodes: Array<Files_Risks>;
};

/** aggregate fields of "files_risks" */
export type Files_Risks_Aggregate_Fields = {
  __typename?: 'files_risks_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Files_Risks_Max_Fields>;
  min?: Maybe<Files_Risks_Min_Fields>;
};


/** aggregate fields of "files_risks" */
export type Files_Risks_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Files_Risks_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "files_risks" */
export type Files_Risks_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Files_Risks_Max_Order_By>;
  min?: InputMaybe<Files_Risks_Min_Order_By>;
};

/** input type for inserting array relation for remote table "files_risks" */
export type Files_Risks_Arr_Rel_Insert_Input = {
  data: Array<Files_Risks_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Files_Risks_On_Conflict>;
};

/** Boolean expression to filter rows from the table "files_risks". All fields are combined with a logical 'AND'. */
export type Files_Risks_Bool_Exp = {
  _and?: InputMaybe<Array<Files_Risks_Bool_Exp>>;
  _not?: InputMaybe<Files_Risks_Bool_Exp>;
  _or?: InputMaybe<Array<Files_Risks_Bool_Exp>>;
  created_at?: InputMaybe<Date_Comparison_Exp>;
  file?: InputMaybe<Uuid_Comparison_Exp>;
  file_rel?: InputMaybe<Files_Bool_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  tenant?: InputMaybe<Uuid_Comparison_Exp>;
  tenant_rel?: InputMaybe<Tenants_Bool_Exp>;
  tzb?: InputMaybe<Uuid_Comparison_Exp>;
  tzb_rel?: InputMaybe<Tzbs_Bool_Exp>;
  updated_at?: InputMaybe<Date_Comparison_Exp>;
  user?: InputMaybe<Uuid_Comparison_Exp>;
  user_rel?: InputMaybe<Users_Bool_Exp>;
};

/** unique or primary key constraints on table "files_risks" */
export enum Files_Risks_Constraint {
  /** unique or primary key constraint on columns "id" */
  FilesRisksPkey = 'files_risks_pkey'
}

/** input type for inserting data into table "files_risks" */
export type Files_Risks_Insert_Input = {
  created_at?: InputMaybe<Scalars['date']>;
  file?: InputMaybe<Scalars['uuid']>;
  file_rel?: InputMaybe<Files_Obj_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['uuid']>;
  tenant?: InputMaybe<Scalars['uuid']>;
  tenant_rel?: InputMaybe<Tenants_Obj_Rel_Insert_Input>;
  tzb?: InputMaybe<Scalars['uuid']>;
  tzb_rel?: InputMaybe<Tzbs_Obj_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['date']>;
  user?: InputMaybe<Scalars['uuid']>;
  user_rel?: InputMaybe<Users_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Files_Risks_Max_Fields = {
  __typename?: 'files_risks_max_fields';
  created_at?: Maybe<Scalars['date']>;
  file?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  tenant?: Maybe<Scalars['uuid']>;
  tzb?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['date']>;
  user?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "files_risks" */
export type Files_Risks_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  file?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  tenant?: InputMaybe<Order_By>;
  tzb?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Files_Risks_Min_Fields = {
  __typename?: 'files_risks_min_fields';
  created_at?: Maybe<Scalars['date']>;
  file?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  tenant?: Maybe<Scalars['uuid']>;
  tzb?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['date']>;
  user?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "files_risks" */
export type Files_Risks_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  file?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  tenant?: InputMaybe<Order_By>;
  tzb?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "files_risks" */
export type Files_Risks_Mutation_Response = {
  __typename?: 'files_risks_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Files_Risks>;
};

/** on_conflict condition type for table "files_risks" */
export type Files_Risks_On_Conflict = {
  constraint: Files_Risks_Constraint;
  update_columns?: Array<Files_Risks_Update_Column>;
  where?: InputMaybe<Files_Risks_Bool_Exp>;
};

/** Ordering options when selecting data from "files_risks". */
export type Files_Risks_Order_By = {
  created_at?: InputMaybe<Order_By>;
  file?: InputMaybe<Order_By>;
  file_rel?: InputMaybe<Files_Order_By>;
  id?: InputMaybe<Order_By>;
  tenant?: InputMaybe<Order_By>;
  tenant_rel?: InputMaybe<Tenants_Order_By>;
  tzb?: InputMaybe<Order_By>;
  tzb_rel?: InputMaybe<Tzbs_Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Order_By>;
  user_rel?: InputMaybe<Users_Order_By>;
};

/** primary key columns input for table: files_risks */
export type Files_Risks_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "files_risks" */
export enum Files_Risks_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  File = 'file',
  /** column name */
  Id = 'id',
  /** column name */
  Tenant = 'tenant',
  /** column name */
  Tzb = 'tzb',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  User = 'user'
}

/** input type for updating data in table "files_risks" */
export type Files_Risks_Set_Input = {
  created_at?: InputMaybe<Scalars['date']>;
  file?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  tenant?: InputMaybe<Scalars['uuid']>;
  tzb?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['date']>;
  user?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "files_risks" */
export enum Files_Risks_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  File = 'file',
  /** column name */
  Id = 'id',
  /** column name */
  Tenant = 'tenant',
  /** column name */
  Tzb = 'tzb',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  User = 'user'
}

/** select columns of table "files" */
export enum Files_Select_Column {
  /** column name */
  Bucket = 'bucket',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DisplayName = 'display_name',
  /** column name */
  FileName = 'file_name',
  /** column name */
  Id = 'id',
  /** column name */
  Mime = 'mime',
  /** column name */
  Tenant = 'tenant',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "files" */
export type Files_Set_Input = {
  bucket?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['date']>;
  display_name?: InputMaybe<Scalars['String']>;
  file_name?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  mime?: InputMaybe<Scalars['String']>;
  tenant?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['date']>;
};

/** update columns of table "files" */
export enum Files_Update_Column {
  /** column name */
  Bucket = 'bucket',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DisplayName = 'display_name',
  /** column name */
  FileName = 'file_name',
  /** column name */
  Id = 'id',
  /** column name */
  Mime = 'mime',
  /** column name */
  Tenant = 'tenant',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** columns and relationships of "full_checks" */
export type Full_Checks = {
  __typename?: 'full_checks';
  created_at: Scalars['timestamptz'];
  device_manufacturer?: Maybe<Scalars['String']>;
  device_part_number?: Maybe<Scalars['String']>;
  device_type?: Maybe<Scalars['String']>;
  fault_detected: Scalars['Boolean'];
  fault_removed: Scalars['Boolean'];
  /** An object relationship */
  files_check_rel: Files_Checks;
  files_checks_id: Scalars['uuid'];
  /** *period */
  frequency: Scalars['Int'];
  get_notified: Scalars['Boolean'];
  id: Scalars['uuid'];
  planned_date?: Maybe<Scalars['date']>;
  start_date?: Maybe<Scalars['date']>;
  technician_id: Scalars['uuid'];
  /** An object relationship */
  technician_rel: Users;
  tenant: Scalars['uuid'];
  /** An object relationship */
  tenant_rel: Tenants;
  title: Scalars['String'];
  tzb: Scalars['uuid'];
  /** An object relationship */
  tzb_rel: Tzbs;
  updated_at: Scalars['timestamptz'];
  user: Scalars['uuid'];
  /** An object relationship */
  user_rel: Users;
};

/** aggregated selection of "full_checks" */
export type Full_Checks_Aggregate = {
  __typename?: 'full_checks_aggregate';
  aggregate?: Maybe<Full_Checks_Aggregate_Fields>;
  nodes: Array<Full_Checks>;
};

/** aggregate fields of "full_checks" */
export type Full_Checks_Aggregate_Fields = {
  __typename?: 'full_checks_aggregate_fields';
  avg?: Maybe<Full_Checks_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Full_Checks_Max_Fields>;
  min?: Maybe<Full_Checks_Min_Fields>;
  stddev?: Maybe<Full_Checks_Stddev_Fields>;
  stddev_pop?: Maybe<Full_Checks_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Full_Checks_Stddev_Samp_Fields>;
  sum?: Maybe<Full_Checks_Sum_Fields>;
  var_pop?: Maybe<Full_Checks_Var_Pop_Fields>;
  var_samp?: Maybe<Full_Checks_Var_Samp_Fields>;
  variance?: Maybe<Full_Checks_Variance_Fields>;
};


/** aggregate fields of "full_checks" */
export type Full_Checks_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Full_Checks_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "full_checks" */
export type Full_Checks_Aggregate_Order_By = {
  avg?: InputMaybe<Full_Checks_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Full_Checks_Max_Order_By>;
  min?: InputMaybe<Full_Checks_Min_Order_By>;
  stddev?: InputMaybe<Full_Checks_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Full_Checks_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Full_Checks_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Full_Checks_Sum_Order_By>;
  var_pop?: InputMaybe<Full_Checks_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Full_Checks_Var_Samp_Order_By>;
  variance?: InputMaybe<Full_Checks_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "full_checks" */
export type Full_Checks_Arr_Rel_Insert_Input = {
  data: Array<Full_Checks_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Full_Checks_On_Conflict>;
};

/** aggregate avg on columns */
export type Full_Checks_Avg_Fields = {
  __typename?: 'full_checks_avg_fields';
  /** *period */
  frequency?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "full_checks" */
export type Full_Checks_Avg_Order_By = {
  /** *period */
  frequency?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "full_checks". All fields are combined with a logical 'AND'. */
export type Full_Checks_Bool_Exp = {
  _and?: InputMaybe<Array<Full_Checks_Bool_Exp>>;
  _not?: InputMaybe<Full_Checks_Bool_Exp>;
  _or?: InputMaybe<Array<Full_Checks_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  device_manufacturer?: InputMaybe<String_Comparison_Exp>;
  device_part_number?: InputMaybe<String_Comparison_Exp>;
  device_type?: InputMaybe<String_Comparison_Exp>;
  fault_detected?: InputMaybe<Boolean_Comparison_Exp>;
  fault_removed?: InputMaybe<Boolean_Comparison_Exp>;
  files_check_rel?: InputMaybe<Files_Checks_Bool_Exp>;
  files_checks_id?: InputMaybe<Uuid_Comparison_Exp>;
  frequency?: InputMaybe<Int_Comparison_Exp>;
  get_notified?: InputMaybe<Boolean_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  planned_date?: InputMaybe<Date_Comparison_Exp>;
  start_date?: InputMaybe<Date_Comparison_Exp>;
  technician_id?: InputMaybe<Uuid_Comparison_Exp>;
  technician_rel?: InputMaybe<Users_Bool_Exp>;
  tenant?: InputMaybe<Uuid_Comparison_Exp>;
  tenant_rel?: InputMaybe<Tenants_Bool_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  tzb?: InputMaybe<Uuid_Comparison_Exp>;
  tzb_rel?: InputMaybe<Tzbs_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Uuid_Comparison_Exp>;
  user_rel?: InputMaybe<Users_Bool_Exp>;
};

/** unique or primary key constraints on table "full_checks" */
export enum Full_Checks_Constraint {
  /** unique or primary key constraint on columns "id" */
  FullChecksPkey = 'full_checks_pkey'
}

/** input type for incrementing numeric columns in table "full_checks" */
export type Full_Checks_Inc_Input = {
  /** *period */
  frequency?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "full_checks" */
export type Full_Checks_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  device_manufacturer?: InputMaybe<Scalars['String']>;
  device_part_number?: InputMaybe<Scalars['String']>;
  device_type?: InputMaybe<Scalars['String']>;
  fault_detected?: InputMaybe<Scalars['Boolean']>;
  fault_removed?: InputMaybe<Scalars['Boolean']>;
  files_check_rel?: InputMaybe<Files_Checks_Obj_Rel_Insert_Input>;
  files_checks_id?: InputMaybe<Scalars['uuid']>;
  /** *period */
  frequency?: InputMaybe<Scalars['Int']>;
  get_notified?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['uuid']>;
  planned_date?: InputMaybe<Scalars['date']>;
  start_date?: InputMaybe<Scalars['date']>;
  technician_id?: InputMaybe<Scalars['uuid']>;
  technician_rel?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  tenant?: InputMaybe<Scalars['uuid']>;
  tenant_rel?: InputMaybe<Tenants_Obj_Rel_Insert_Input>;
  title?: InputMaybe<Scalars['String']>;
  tzb?: InputMaybe<Scalars['uuid']>;
  tzb_rel?: InputMaybe<Tzbs_Obj_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user?: InputMaybe<Scalars['uuid']>;
  user_rel?: InputMaybe<Users_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Full_Checks_Max_Fields = {
  __typename?: 'full_checks_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  device_manufacturer?: Maybe<Scalars['String']>;
  device_part_number?: Maybe<Scalars['String']>;
  device_type?: Maybe<Scalars['String']>;
  files_checks_id?: Maybe<Scalars['uuid']>;
  /** *period */
  frequency?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  planned_date?: Maybe<Scalars['date']>;
  start_date?: Maybe<Scalars['date']>;
  technician_id?: Maybe<Scalars['uuid']>;
  tenant?: Maybe<Scalars['uuid']>;
  title?: Maybe<Scalars['String']>;
  tzb?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "full_checks" */
export type Full_Checks_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  device_manufacturer?: InputMaybe<Order_By>;
  device_part_number?: InputMaybe<Order_By>;
  device_type?: InputMaybe<Order_By>;
  files_checks_id?: InputMaybe<Order_By>;
  /** *period */
  frequency?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  planned_date?: InputMaybe<Order_By>;
  start_date?: InputMaybe<Order_By>;
  technician_id?: InputMaybe<Order_By>;
  tenant?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  tzb?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Full_Checks_Min_Fields = {
  __typename?: 'full_checks_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  device_manufacturer?: Maybe<Scalars['String']>;
  device_part_number?: Maybe<Scalars['String']>;
  device_type?: Maybe<Scalars['String']>;
  files_checks_id?: Maybe<Scalars['uuid']>;
  /** *period */
  frequency?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  planned_date?: Maybe<Scalars['date']>;
  start_date?: Maybe<Scalars['date']>;
  technician_id?: Maybe<Scalars['uuid']>;
  tenant?: Maybe<Scalars['uuid']>;
  title?: Maybe<Scalars['String']>;
  tzb?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "full_checks" */
export type Full_Checks_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  device_manufacturer?: InputMaybe<Order_By>;
  device_part_number?: InputMaybe<Order_By>;
  device_type?: InputMaybe<Order_By>;
  files_checks_id?: InputMaybe<Order_By>;
  /** *period */
  frequency?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  planned_date?: InputMaybe<Order_By>;
  start_date?: InputMaybe<Order_By>;
  technician_id?: InputMaybe<Order_By>;
  tenant?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  tzb?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "full_checks" */
export type Full_Checks_Mutation_Response = {
  __typename?: 'full_checks_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Full_Checks>;
};

/** on_conflict condition type for table "full_checks" */
export type Full_Checks_On_Conflict = {
  constraint: Full_Checks_Constraint;
  update_columns?: Array<Full_Checks_Update_Column>;
  where?: InputMaybe<Full_Checks_Bool_Exp>;
};

/** Ordering options when selecting data from "full_checks". */
export type Full_Checks_Order_By = {
  created_at?: InputMaybe<Order_By>;
  device_manufacturer?: InputMaybe<Order_By>;
  device_part_number?: InputMaybe<Order_By>;
  device_type?: InputMaybe<Order_By>;
  fault_detected?: InputMaybe<Order_By>;
  fault_removed?: InputMaybe<Order_By>;
  files_check_rel?: InputMaybe<Files_Checks_Order_By>;
  files_checks_id?: InputMaybe<Order_By>;
  frequency?: InputMaybe<Order_By>;
  get_notified?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  planned_date?: InputMaybe<Order_By>;
  start_date?: InputMaybe<Order_By>;
  technician_id?: InputMaybe<Order_By>;
  technician_rel?: InputMaybe<Users_Order_By>;
  tenant?: InputMaybe<Order_By>;
  tenant_rel?: InputMaybe<Tenants_Order_By>;
  title?: InputMaybe<Order_By>;
  tzb?: InputMaybe<Order_By>;
  tzb_rel?: InputMaybe<Tzbs_Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Order_By>;
  user_rel?: InputMaybe<Users_Order_By>;
};

/** primary key columns input for table: full_checks */
export type Full_Checks_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "full_checks" */
export enum Full_Checks_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeviceManufacturer = 'device_manufacturer',
  /** column name */
  DevicePartNumber = 'device_part_number',
  /** column name */
  DeviceType = 'device_type',
  /** column name */
  FaultDetected = 'fault_detected',
  /** column name */
  FaultRemoved = 'fault_removed',
  /** column name */
  FilesChecksId = 'files_checks_id',
  /** column name */
  Frequency = 'frequency',
  /** column name */
  GetNotified = 'get_notified',
  /** column name */
  Id = 'id',
  /** column name */
  PlannedDate = 'planned_date',
  /** column name */
  StartDate = 'start_date',
  /** column name */
  TechnicianId = 'technician_id',
  /** column name */
  Tenant = 'tenant',
  /** column name */
  Title = 'title',
  /** column name */
  Tzb = 'tzb',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  User = 'user'
}

/** input type for updating data in table "full_checks" */
export type Full_Checks_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  device_manufacturer?: InputMaybe<Scalars['String']>;
  device_part_number?: InputMaybe<Scalars['String']>;
  device_type?: InputMaybe<Scalars['String']>;
  fault_detected?: InputMaybe<Scalars['Boolean']>;
  fault_removed?: InputMaybe<Scalars['Boolean']>;
  files_checks_id?: InputMaybe<Scalars['uuid']>;
  /** *period */
  frequency?: InputMaybe<Scalars['Int']>;
  get_notified?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['uuid']>;
  planned_date?: InputMaybe<Scalars['date']>;
  start_date?: InputMaybe<Scalars['date']>;
  technician_id?: InputMaybe<Scalars['uuid']>;
  tenant?: InputMaybe<Scalars['uuid']>;
  title?: InputMaybe<Scalars['String']>;
  tzb?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user?: InputMaybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type Full_Checks_Stddev_Fields = {
  __typename?: 'full_checks_stddev_fields';
  /** *period */
  frequency?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "full_checks" */
export type Full_Checks_Stddev_Order_By = {
  /** *period */
  frequency?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Full_Checks_Stddev_Pop_Fields = {
  __typename?: 'full_checks_stddev_pop_fields';
  /** *period */
  frequency?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "full_checks" */
export type Full_Checks_Stddev_Pop_Order_By = {
  /** *period */
  frequency?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Full_Checks_Stddev_Samp_Fields = {
  __typename?: 'full_checks_stddev_samp_fields';
  /** *period */
  frequency?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "full_checks" */
export type Full_Checks_Stddev_Samp_Order_By = {
  /** *period */
  frequency?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Full_Checks_Sum_Fields = {
  __typename?: 'full_checks_sum_fields';
  /** *period */
  frequency?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "full_checks" */
export type Full_Checks_Sum_Order_By = {
  /** *period */
  frequency?: InputMaybe<Order_By>;
};

/** update columns of table "full_checks" */
export enum Full_Checks_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeviceManufacturer = 'device_manufacturer',
  /** column name */
  DevicePartNumber = 'device_part_number',
  /** column name */
  DeviceType = 'device_type',
  /** column name */
  FaultDetected = 'fault_detected',
  /** column name */
  FaultRemoved = 'fault_removed',
  /** column name */
  FilesChecksId = 'files_checks_id',
  /** column name */
  Frequency = 'frequency',
  /** column name */
  GetNotified = 'get_notified',
  /** column name */
  Id = 'id',
  /** column name */
  PlannedDate = 'planned_date',
  /** column name */
  StartDate = 'start_date',
  /** column name */
  TechnicianId = 'technician_id',
  /** column name */
  Tenant = 'tenant',
  /** column name */
  Title = 'title',
  /** column name */
  Tzb = 'tzb',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  User = 'user'
}

/** aggregate var_pop on columns */
export type Full_Checks_Var_Pop_Fields = {
  __typename?: 'full_checks_var_pop_fields';
  /** *period */
  frequency?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "full_checks" */
export type Full_Checks_Var_Pop_Order_By = {
  /** *period */
  frequency?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Full_Checks_Var_Samp_Fields = {
  __typename?: 'full_checks_var_samp_fields';
  /** *period */
  frequency?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "full_checks" */
export type Full_Checks_Var_Samp_Order_By = {
  /** *period */
  frequency?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Full_Checks_Variance_Fields = {
  __typename?: 'full_checks_variance_fields';
  /** *period */
  frequency?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "full_checks" */
export type Full_Checks_Variance_Order_By = {
  /** *period */
  frequency?: InputMaybe<Order_By>;
};

/** columns and relationships of "full_revisions" */
export type Full_Revisions = {
  __typename?: 'full_revisions';
  created_at: Scalars['timestamptz'];
  device_manufacturer?: Maybe<Scalars['String']>;
  device_part_number?: Maybe<Scalars['String']>;
  device_type?: Maybe<Scalars['String']>;
  fault_detected: Scalars['Boolean'];
  fault_removed: Scalars['Boolean'];
  /** An object relationship */
  files_revision_rel: Files_Revisions;
  files_revisions_id: Scalars['uuid'];
  /** *period */
  frequency: Scalars['Int'];
  get_notified: Scalars['Boolean'];
  id: Scalars['uuid'];
  planned_date?: Maybe<Scalars['date']>;
  start_date?: Maybe<Scalars['date']>;
  technician_id: Scalars['uuid'];
  /** An object relationship */
  technician_rel: Users;
  tenant: Scalars['uuid'];
  title: Scalars['String'];
  tzb: Scalars['uuid'];
  /** An object relationship */
  tzbByTzb: Tzbs;
  updated_at: Scalars['timestamptz'];
  user: Scalars['uuid'];
  /** An object relationship */
  user_rel: Users;
};

/** aggregated selection of "full_revisions" */
export type Full_Revisions_Aggregate = {
  __typename?: 'full_revisions_aggregate';
  aggregate?: Maybe<Full_Revisions_Aggregate_Fields>;
  nodes: Array<Full_Revisions>;
};

/** aggregate fields of "full_revisions" */
export type Full_Revisions_Aggregate_Fields = {
  __typename?: 'full_revisions_aggregate_fields';
  avg?: Maybe<Full_Revisions_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Full_Revisions_Max_Fields>;
  min?: Maybe<Full_Revisions_Min_Fields>;
  stddev?: Maybe<Full_Revisions_Stddev_Fields>;
  stddev_pop?: Maybe<Full_Revisions_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Full_Revisions_Stddev_Samp_Fields>;
  sum?: Maybe<Full_Revisions_Sum_Fields>;
  var_pop?: Maybe<Full_Revisions_Var_Pop_Fields>;
  var_samp?: Maybe<Full_Revisions_Var_Samp_Fields>;
  variance?: Maybe<Full_Revisions_Variance_Fields>;
};


/** aggregate fields of "full_revisions" */
export type Full_Revisions_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Full_Revisions_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "full_revisions" */
export type Full_Revisions_Aggregate_Order_By = {
  avg?: InputMaybe<Full_Revisions_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Full_Revisions_Max_Order_By>;
  min?: InputMaybe<Full_Revisions_Min_Order_By>;
  stddev?: InputMaybe<Full_Revisions_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Full_Revisions_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Full_Revisions_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Full_Revisions_Sum_Order_By>;
  var_pop?: InputMaybe<Full_Revisions_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Full_Revisions_Var_Samp_Order_By>;
  variance?: InputMaybe<Full_Revisions_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "full_revisions" */
export type Full_Revisions_Arr_Rel_Insert_Input = {
  data: Array<Full_Revisions_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Full_Revisions_On_Conflict>;
};

/** aggregate avg on columns */
export type Full_Revisions_Avg_Fields = {
  __typename?: 'full_revisions_avg_fields';
  /** *period */
  frequency?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "full_revisions" */
export type Full_Revisions_Avg_Order_By = {
  /** *period */
  frequency?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "full_revisions". All fields are combined with a logical 'AND'. */
export type Full_Revisions_Bool_Exp = {
  _and?: InputMaybe<Array<Full_Revisions_Bool_Exp>>;
  _not?: InputMaybe<Full_Revisions_Bool_Exp>;
  _or?: InputMaybe<Array<Full_Revisions_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  device_manufacturer?: InputMaybe<String_Comparison_Exp>;
  device_part_number?: InputMaybe<String_Comparison_Exp>;
  device_type?: InputMaybe<String_Comparison_Exp>;
  fault_detected?: InputMaybe<Boolean_Comparison_Exp>;
  fault_removed?: InputMaybe<Boolean_Comparison_Exp>;
  files_revision_rel?: InputMaybe<Files_Revisions_Bool_Exp>;
  files_revisions_id?: InputMaybe<Uuid_Comparison_Exp>;
  frequency?: InputMaybe<Int_Comparison_Exp>;
  get_notified?: InputMaybe<Boolean_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  planned_date?: InputMaybe<Date_Comparison_Exp>;
  start_date?: InputMaybe<Date_Comparison_Exp>;
  technician_id?: InputMaybe<Uuid_Comparison_Exp>;
  technician_rel?: InputMaybe<Users_Bool_Exp>;
  tenant?: InputMaybe<Uuid_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  tzb?: InputMaybe<Uuid_Comparison_Exp>;
  tzbByTzb?: InputMaybe<Tzbs_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Uuid_Comparison_Exp>;
  user_rel?: InputMaybe<Users_Bool_Exp>;
};

/** unique or primary key constraints on table "full_revisions" */
export enum Full_Revisions_Constraint {
  /** unique or primary key constraint on columns "id" */
  FullRevisionsPkey = 'full_revisions_pkey'
}

/** input type for incrementing numeric columns in table "full_revisions" */
export type Full_Revisions_Inc_Input = {
  /** *period */
  frequency?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "full_revisions" */
export type Full_Revisions_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  device_manufacturer?: InputMaybe<Scalars['String']>;
  device_part_number?: InputMaybe<Scalars['String']>;
  device_type?: InputMaybe<Scalars['String']>;
  fault_detected?: InputMaybe<Scalars['Boolean']>;
  fault_removed?: InputMaybe<Scalars['Boolean']>;
  files_revision_rel?: InputMaybe<Files_Revisions_Obj_Rel_Insert_Input>;
  files_revisions_id?: InputMaybe<Scalars['uuid']>;
  /** *period */
  frequency?: InputMaybe<Scalars['Int']>;
  get_notified?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['uuid']>;
  planned_date?: InputMaybe<Scalars['date']>;
  start_date?: InputMaybe<Scalars['date']>;
  technician_id?: InputMaybe<Scalars['uuid']>;
  technician_rel?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  tenant?: InputMaybe<Scalars['uuid']>;
  title?: InputMaybe<Scalars['String']>;
  tzb?: InputMaybe<Scalars['uuid']>;
  tzbByTzb?: InputMaybe<Tzbs_Obj_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user?: InputMaybe<Scalars['uuid']>;
  user_rel?: InputMaybe<Users_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Full_Revisions_Max_Fields = {
  __typename?: 'full_revisions_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  device_manufacturer?: Maybe<Scalars['String']>;
  device_part_number?: Maybe<Scalars['String']>;
  device_type?: Maybe<Scalars['String']>;
  files_revisions_id?: Maybe<Scalars['uuid']>;
  /** *period */
  frequency?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  planned_date?: Maybe<Scalars['date']>;
  start_date?: Maybe<Scalars['date']>;
  technician_id?: Maybe<Scalars['uuid']>;
  tenant?: Maybe<Scalars['uuid']>;
  title?: Maybe<Scalars['String']>;
  tzb?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "full_revisions" */
export type Full_Revisions_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  device_manufacturer?: InputMaybe<Order_By>;
  device_part_number?: InputMaybe<Order_By>;
  device_type?: InputMaybe<Order_By>;
  files_revisions_id?: InputMaybe<Order_By>;
  /** *period */
  frequency?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  planned_date?: InputMaybe<Order_By>;
  start_date?: InputMaybe<Order_By>;
  technician_id?: InputMaybe<Order_By>;
  tenant?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  tzb?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Full_Revisions_Min_Fields = {
  __typename?: 'full_revisions_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  device_manufacturer?: Maybe<Scalars['String']>;
  device_part_number?: Maybe<Scalars['String']>;
  device_type?: Maybe<Scalars['String']>;
  files_revisions_id?: Maybe<Scalars['uuid']>;
  /** *period */
  frequency?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  planned_date?: Maybe<Scalars['date']>;
  start_date?: Maybe<Scalars['date']>;
  technician_id?: Maybe<Scalars['uuid']>;
  tenant?: Maybe<Scalars['uuid']>;
  title?: Maybe<Scalars['String']>;
  tzb?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "full_revisions" */
export type Full_Revisions_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  device_manufacturer?: InputMaybe<Order_By>;
  device_part_number?: InputMaybe<Order_By>;
  device_type?: InputMaybe<Order_By>;
  files_revisions_id?: InputMaybe<Order_By>;
  /** *period */
  frequency?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  planned_date?: InputMaybe<Order_By>;
  start_date?: InputMaybe<Order_By>;
  technician_id?: InputMaybe<Order_By>;
  tenant?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  tzb?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "full_revisions" */
export type Full_Revisions_Mutation_Response = {
  __typename?: 'full_revisions_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Full_Revisions>;
};

/** on_conflict condition type for table "full_revisions" */
export type Full_Revisions_On_Conflict = {
  constraint: Full_Revisions_Constraint;
  update_columns?: Array<Full_Revisions_Update_Column>;
  where?: InputMaybe<Full_Revisions_Bool_Exp>;
};

/** Ordering options when selecting data from "full_revisions". */
export type Full_Revisions_Order_By = {
  created_at?: InputMaybe<Order_By>;
  device_manufacturer?: InputMaybe<Order_By>;
  device_part_number?: InputMaybe<Order_By>;
  device_type?: InputMaybe<Order_By>;
  fault_detected?: InputMaybe<Order_By>;
  fault_removed?: InputMaybe<Order_By>;
  files_revision_rel?: InputMaybe<Files_Revisions_Order_By>;
  files_revisions_id?: InputMaybe<Order_By>;
  frequency?: InputMaybe<Order_By>;
  get_notified?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  planned_date?: InputMaybe<Order_By>;
  start_date?: InputMaybe<Order_By>;
  technician_id?: InputMaybe<Order_By>;
  technician_rel?: InputMaybe<Users_Order_By>;
  tenant?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  tzb?: InputMaybe<Order_By>;
  tzbByTzb?: InputMaybe<Tzbs_Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Order_By>;
  user_rel?: InputMaybe<Users_Order_By>;
};

/** primary key columns input for table: full_revisions */
export type Full_Revisions_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "full_revisions" */
export enum Full_Revisions_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeviceManufacturer = 'device_manufacturer',
  /** column name */
  DevicePartNumber = 'device_part_number',
  /** column name */
  DeviceType = 'device_type',
  /** column name */
  FaultDetected = 'fault_detected',
  /** column name */
  FaultRemoved = 'fault_removed',
  /** column name */
  FilesRevisionsId = 'files_revisions_id',
  /** column name */
  Frequency = 'frequency',
  /** column name */
  GetNotified = 'get_notified',
  /** column name */
  Id = 'id',
  /** column name */
  PlannedDate = 'planned_date',
  /** column name */
  StartDate = 'start_date',
  /** column name */
  TechnicianId = 'technician_id',
  /** column name */
  Tenant = 'tenant',
  /** column name */
  Title = 'title',
  /** column name */
  Tzb = 'tzb',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  User = 'user'
}

/** input type for updating data in table "full_revisions" */
export type Full_Revisions_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  device_manufacturer?: InputMaybe<Scalars['String']>;
  device_part_number?: InputMaybe<Scalars['String']>;
  device_type?: InputMaybe<Scalars['String']>;
  fault_detected?: InputMaybe<Scalars['Boolean']>;
  fault_removed?: InputMaybe<Scalars['Boolean']>;
  files_revisions_id?: InputMaybe<Scalars['uuid']>;
  /** *period */
  frequency?: InputMaybe<Scalars['Int']>;
  get_notified?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['uuid']>;
  planned_date?: InputMaybe<Scalars['date']>;
  start_date?: InputMaybe<Scalars['date']>;
  technician_id?: InputMaybe<Scalars['uuid']>;
  tenant?: InputMaybe<Scalars['uuid']>;
  title?: InputMaybe<Scalars['String']>;
  tzb?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user?: InputMaybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type Full_Revisions_Stddev_Fields = {
  __typename?: 'full_revisions_stddev_fields';
  /** *period */
  frequency?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "full_revisions" */
export type Full_Revisions_Stddev_Order_By = {
  /** *period */
  frequency?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Full_Revisions_Stddev_Pop_Fields = {
  __typename?: 'full_revisions_stddev_pop_fields';
  /** *period */
  frequency?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "full_revisions" */
export type Full_Revisions_Stddev_Pop_Order_By = {
  /** *period */
  frequency?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Full_Revisions_Stddev_Samp_Fields = {
  __typename?: 'full_revisions_stddev_samp_fields';
  /** *period */
  frequency?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "full_revisions" */
export type Full_Revisions_Stddev_Samp_Order_By = {
  /** *period */
  frequency?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Full_Revisions_Sum_Fields = {
  __typename?: 'full_revisions_sum_fields';
  /** *period */
  frequency?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "full_revisions" */
export type Full_Revisions_Sum_Order_By = {
  /** *period */
  frequency?: InputMaybe<Order_By>;
};

/** update columns of table "full_revisions" */
export enum Full_Revisions_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeviceManufacturer = 'device_manufacturer',
  /** column name */
  DevicePartNumber = 'device_part_number',
  /** column name */
  DeviceType = 'device_type',
  /** column name */
  FaultDetected = 'fault_detected',
  /** column name */
  FaultRemoved = 'fault_removed',
  /** column name */
  FilesRevisionsId = 'files_revisions_id',
  /** column name */
  Frequency = 'frequency',
  /** column name */
  GetNotified = 'get_notified',
  /** column name */
  Id = 'id',
  /** column name */
  PlannedDate = 'planned_date',
  /** column name */
  StartDate = 'start_date',
  /** column name */
  TechnicianId = 'technician_id',
  /** column name */
  Tenant = 'tenant',
  /** column name */
  Title = 'title',
  /** column name */
  Tzb = 'tzb',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  User = 'user'
}

/** aggregate var_pop on columns */
export type Full_Revisions_Var_Pop_Fields = {
  __typename?: 'full_revisions_var_pop_fields';
  /** *period */
  frequency?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "full_revisions" */
export type Full_Revisions_Var_Pop_Order_By = {
  /** *period */
  frequency?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Full_Revisions_Var_Samp_Fields = {
  __typename?: 'full_revisions_var_samp_fields';
  /** *period */
  frequency?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "full_revisions" */
export type Full_Revisions_Var_Samp_Order_By = {
  /** *period */
  frequency?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Full_Revisions_Variance_Fields = {
  __typename?: 'full_revisions_variance_fields';
  /** *period */
  frequency?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "full_revisions" */
export type Full_Revisions_Variance_Order_By = {
  /** *period */
  frequency?: InputMaybe<Order_By>;
};

/** columns and relationships of "important_notices" */
export type Important_Notices = {
  __typename?: 'important_notices';
  content: Scalars['String'];
  created_at: Scalars['date'];
  document?: Maybe<Scalars['String']>;
  file?: Maybe<Scalars['uuid']>;
  /** An object relationship */
  file_rel?: Maybe<Files>;
  id: Scalars['uuid'];
  tenant: Scalars['uuid'];
  /** An object relationship */
  tenant_rel: Tenants;
  title: Scalars['String'];
  tzb: Scalars['uuid'];
  /** An object relationship */
  tzb_rel: Tzbs;
  updated_at: Scalars['date'];
  user: Scalars['uuid'];
  /** An object relationship */
  user_rel: Users;
};

/** aggregated selection of "important_notices" */
export type Important_Notices_Aggregate = {
  __typename?: 'important_notices_aggregate';
  aggregate?: Maybe<Important_Notices_Aggregate_Fields>;
  nodes: Array<Important_Notices>;
};

/** aggregate fields of "important_notices" */
export type Important_Notices_Aggregate_Fields = {
  __typename?: 'important_notices_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Important_Notices_Max_Fields>;
  min?: Maybe<Important_Notices_Min_Fields>;
};


/** aggregate fields of "important_notices" */
export type Important_Notices_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Important_Notices_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "important_notices" */
export type Important_Notices_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Important_Notices_Max_Order_By>;
  min?: InputMaybe<Important_Notices_Min_Order_By>;
};

/** input type for inserting array relation for remote table "important_notices" */
export type Important_Notices_Arr_Rel_Insert_Input = {
  data: Array<Important_Notices_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Important_Notices_On_Conflict>;
};

/** Boolean expression to filter rows from the table "important_notices". All fields are combined with a logical 'AND'. */
export type Important_Notices_Bool_Exp = {
  _and?: InputMaybe<Array<Important_Notices_Bool_Exp>>;
  _not?: InputMaybe<Important_Notices_Bool_Exp>;
  _or?: InputMaybe<Array<Important_Notices_Bool_Exp>>;
  content?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Date_Comparison_Exp>;
  document?: InputMaybe<String_Comparison_Exp>;
  file?: InputMaybe<Uuid_Comparison_Exp>;
  file_rel?: InputMaybe<Files_Bool_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  tenant?: InputMaybe<Uuid_Comparison_Exp>;
  tenant_rel?: InputMaybe<Tenants_Bool_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  tzb?: InputMaybe<Uuid_Comparison_Exp>;
  tzb_rel?: InputMaybe<Tzbs_Bool_Exp>;
  updated_at?: InputMaybe<Date_Comparison_Exp>;
  user?: InputMaybe<Uuid_Comparison_Exp>;
  user_rel?: InputMaybe<Users_Bool_Exp>;
};

/** unique or primary key constraints on table "important_notices" */
export enum Important_Notices_Constraint {
  /** unique or primary key constraint on columns "id" */
  ImportantNoticesPkey = 'important_notices_pkey'
}

/** input type for inserting data into table "important_notices" */
export type Important_Notices_Insert_Input = {
  content?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['date']>;
  document?: InputMaybe<Scalars['String']>;
  file?: InputMaybe<Scalars['uuid']>;
  file_rel?: InputMaybe<Files_Obj_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['uuid']>;
  tenant?: InputMaybe<Scalars['uuid']>;
  tenant_rel?: InputMaybe<Tenants_Obj_Rel_Insert_Input>;
  title?: InputMaybe<Scalars['String']>;
  tzb?: InputMaybe<Scalars['uuid']>;
  tzb_rel?: InputMaybe<Tzbs_Obj_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['date']>;
  user?: InputMaybe<Scalars['uuid']>;
  user_rel?: InputMaybe<Users_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Important_Notices_Max_Fields = {
  __typename?: 'important_notices_max_fields';
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['date']>;
  document?: Maybe<Scalars['String']>;
  file?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  tenant?: Maybe<Scalars['uuid']>;
  title?: Maybe<Scalars['String']>;
  tzb?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['date']>;
  user?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "important_notices" */
export type Important_Notices_Max_Order_By = {
  content?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  document?: InputMaybe<Order_By>;
  file?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  tenant?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  tzb?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Important_Notices_Min_Fields = {
  __typename?: 'important_notices_min_fields';
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['date']>;
  document?: Maybe<Scalars['String']>;
  file?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  tenant?: Maybe<Scalars['uuid']>;
  title?: Maybe<Scalars['String']>;
  tzb?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['date']>;
  user?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "important_notices" */
export type Important_Notices_Min_Order_By = {
  content?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  document?: InputMaybe<Order_By>;
  file?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  tenant?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  tzb?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "important_notices" */
export type Important_Notices_Mutation_Response = {
  __typename?: 'important_notices_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Important_Notices>;
};

/** on_conflict condition type for table "important_notices" */
export type Important_Notices_On_Conflict = {
  constraint: Important_Notices_Constraint;
  update_columns?: Array<Important_Notices_Update_Column>;
  where?: InputMaybe<Important_Notices_Bool_Exp>;
};

/** Ordering options when selecting data from "important_notices". */
export type Important_Notices_Order_By = {
  content?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  document?: InputMaybe<Order_By>;
  file?: InputMaybe<Order_By>;
  file_rel?: InputMaybe<Files_Order_By>;
  id?: InputMaybe<Order_By>;
  tenant?: InputMaybe<Order_By>;
  tenant_rel?: InputMaybe<Tenants_Order_By>;
  title?: InputMaybe<Order_By>;
  tzb?: InputMaybe<Order_By>;
  tzb_rel?: InputMaybe<Tzbs_Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Order_By>;
  user_rel?: InputMaybe<Users_Order_By>;
};

/** primary key columns input for table: important_notices */
export type Important_Notices_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "important_notices" */
export enum Important_Notices_Select_Column {
  /** column name */
  Content = 'content',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Document = 'document',
  /** column name */
  File = 'file',
  /** column name */
  Id = 'id',
  /** column name */
  Tenant = 'tenant',
  /** column name */
  Title = 'title',
  /** column name */
  Tzb = 'tzb',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  User = 'user'
}

/** input type for updating data in table "important_notices" */
export type Important_Notices_Set_Input = {
  content?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['date']>;
  document?: InputMaybe<Scalars['String']>;
  file?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  tenant?: InputMaybe<Scalars['uuid']>;
  title?: InputMaybe<Scalars['String']>;
  tzb?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['date']>;
  user?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "important_notices" */
export enum Important_Notices_Update_Column {
  /** column name */
  Content = 'content',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Document = 'document',
  /** column name */
  File = 'file',
  /** column name */
  Id = 'id',
  /** column name */
  Tenant = 'tenant',
  /** column name */
  Title = 'title',
  /** column name */
  Tzb = 'tzb',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  User = 'user'
}

/** columns and relationships of "invoices" */
export type Invoices = {
  __typename?: 'invoices';
  created_at: Scalars['date'];
  date: Scalars['date'];
  description: Scalars['String'];
  file: Scalars['uuid'];
  /** An object relationship */
  file_rel: Files;
  id: Scalars['uuid'];
  supplier?: Maybe<Scalars['String']>;
  tenant: Scalars['uuid'];
  /** An object relationship */
  tenant_rel: Tenants;
  type: Scalars['String'];
  tzb: Scalars['uuid'];
  /** An object relationship */
  tzb_rel: Tzbs;
  updated_at: Scalars['date'];
  user: Scalars['uuid'];
  /** An object relationship */
  user_rel: Users;
};

/** aggregated selection of "invoices" */
export type Invoices_Aggregate = {
  __typename?: 'invoices_aggregate';
  aggregate?: Maybe<Invoices_Aggregate_Fields>;
  nodes: Array<Invoices>;
};

/** aggregate fields of "invoices" */
export type Invoices_Aggregate_Fields = {
  __typename?: 'invoices_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Invoices_Max_Fields>;
  min?: Maybe<Invoices_Min_Fields>;
};


/** aggregate fields of "invoices" */
export type Invoices_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Invoices_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "invoices" */
export type Invoices_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Invoices_Max_Order_By>;
  min?: InputMaybe<Invoices_Min_Order_By>;
};

/** input type for inserting array relation for remote table "invoices" */
export type Invoices_Arr_Rel_Insert_Input = {
  data: Array<Invoices_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Invoices_On_Conflict>;
};

/** Boolean expression to filter rows from the table "invoices". All fields are combined with a logical 'AND'. */
export type Invoices_Bool_Exp = {
  _and?: InputMaybe<Array<Invoices_Bool_Exp>>;
  _not?: InputMaybe<Invoices_Bool_Exp>;
  _or?: InputMaybe<Array<Invoices_Bool_Exp>>;
  created_at?: InputMaybe<Date_Comparison_Exp>;
  date?: InputMaybe<Date_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  file?: InputMaybe<Uuid_Comparison_Exp>;
  file_rel?: InputMaybe<Files_Bool_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  supplier?: InputMaybe<String_Comparison_Exp>;
  tenant?: InputMaybe<Uuid_Comparison_Exp>;
  tenant_rel?: InputMaybe<Tenants_Bool_Exp>;
  type?: InputMaybe<String_Comparison_Exp>;
  tzb?: InputMaybe<Uuid_Comparison_Exp>;
  tzb_rel?: InputMaybe<Tzbs_Bool_Exp>;
  updated_at?: InputMaybe<Date_Comparison_Exp>;
  user?: InputMaybe<Uuid_Comparison_Exp>;
  user_rel?: InputMaybe<Users_Bool_Exp>;
};

/** unique or primary key constraints on table "invoices" */
export enum Invoices_Constraint {
  /** unique or primary key constraint on columns "file" */
  InvoicesFileKey = 'invoices_file_key',
  /** unique or primary key constraint on columns "id" */
  InvoicesPkey = 'invoices_pkey'
}

/** input type for inserting data into table "invoices" */
export type Invoices_Insert_Input = {
  created_at?: InputMaybe<Scalars['date']>;
  date?: InputMaybe<Scalars['date']>;
  description?: InputMaybe<Scalars['String']>;
  file?: InputMaybe<Scalars['uuid']>;
  file_rel?: InputMaybe<Files_Obj_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['uuid']>;
  supplier?: InputMaybe<Scalars['String']>;
  tenant?: InputMaybe<Scalars['uuid']>;
  tenant_rel?: InputMaybe<Tenants_Obj_Rel_Insert_Input>;
  type?: InputMaybe<Scalars['String']>;
  tzb?: InputMaybe<Scalars['uuid']>;
  tzb_rel?: InputMaybe<Tzbs_Obj_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['date']>;
  user?: InputMaybe<Scalars['uuid']>;
  user_rel?: InputMaybe<Users_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Invoices_Max_Fields = {
  __typename?: 'invoices_max_fields';
  created_at?: Maybe<Scalars['date']>;
  date?: Maybe<Scalars['date']>;
  description?: Maybe<Scalars['String']>;
  file?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  supplier?: Maybe<Scalars['String']>;
  tenant?: Maybe<Scalars['uuid']>;
  type?: Maybe<Scalars['String']>;
  tzb?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['date']>;
  user?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "invoices" */
export type Invoices_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  date?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  file?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  supplier?: InputMaybe<Order_By>;
  tenant?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  tzb?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Invoices_Min_Fields = {
  __typename?: 'invoices_min_fields';
  created_at?: Maybe<Scalars['date']>;
  date?: Maybe<Scalars['date']>;
  description?: Maybe<Scalars['String']>;
  file?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  supplier?: Maybe<Scalars['String']>;
  tenant?: Maybe<Scalars['uuid']>;
  type?: Maybe<Scalars['String']>;
  tzb?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['date']>;
  user?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "invoices" */
export type Invoices_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  date?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  file?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  supplier?: InputMaybe<Order_By>;
  tenant?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  tzb?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "invoices" */
export type Invoices_Mutation_Response = {
  __typename?: 'invoices_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Invoices>;
};

/** input type for inserting object relation for remote table "invoices" */
export type Invoices_Obj_Rel_Insert_Input = {
  data: Invoices_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Invoices_On_Conflict>;
};

/** on_conflict condition type for table "invoices" */
export type Invoices_On_Conflict = {
  constraint: Invoices_Constraint;
  update_columns?: Array<Invoices_Update_Column>;
  where?: InputMaybe<Invoices_Bool_Exp>;
};

/** Ordering options when selecting data from "invoices". */
export type Invoices_Order_By = {
  created_at?: InputMaybe<Order_By>;
  date?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  file?: InputMaybe<Order_By>;
  file_rel?: InputMaybe<Files_Order_By>;
  id?: InputMaybe<Order_By>;
  supplier?: InputMaybe<Order_By>;
  tenant?: InputMaybe<Order_By>;
  tenant_rel?: InputMaybe<Tenants_Order_By>;
  type?: InputMaybe<Order_By>;
  tzb?: InputMaybe<Order_By>;
  tzb_rel?: InputMaybe<Tzbs_Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Order_By>;
  user_rel?: InputMaybe<Users_Order_By>;
};

/** primary key columns input for table: invoices */
export type Invoices_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "invoices" */
export enum Invoices_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Date = 'date',
  /** column name */
  Description = 'description',
  /** column name */
  File = 'file',
  /** column name */
  Id = 'id',
  /** column name */
  Supplier = 'supplier',
  /** column name */
  Tenant = 'tenant',
  /** column name */
  Type = 'type',
  /** column name */
  Tzb = 'tzb',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  User = 'user'
}

/** input type for updating data in table "invoices" */
export type Invoices_Set_Input = {
  created_at?: InputMaybe<Scalars['date']>;
  date?: InputMaybe<Scalars['date']>;
  description?: InputMaybe<Scalars['String']>;
  file?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  supplier?: InputMaybe<Scalars['String']>;
  tenant?: InputMaybe<Scalars['uuid']>;
  type?: InputMaybe<Scalars['String']>;
  tzb?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['date']>;
  user?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "invoices" */
export enum Invoices_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Date = 'date',
  /** column name */
  Description = 'description',
  /** column name */
  File = 'file',
  /** column name */
  Id = 'id',
  /** column name */
  Supplier = 'supplier',
  /** column name */
  Tenant = 'tenant',
  /** column name */
  Type = 'type',
  /** column name */
  Tzb = 'tzb',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  User = 'user'
}

/** columns and relationships of "kupr_difficulty_levels" */
export type Kupr_Difficulty_Levels = {
  __typename?: 'kupr_difficulty_levels';
  created_at: Scalars['date'];
  difficulty: Scalars['String'];
  file: Scalars['uuid'];
  /** An object relationship */
  file_rel: Files;
  id: Scalars['uuid'];
  level: Scalars['Int'];
  updated_at: Scalars['date'];
};

/** aggregated selection of "kupr_difficulty_levels" */
export type Kupr_Difficulty_Levels_Aggregate = {
  __typename?: 'kupr_difficulty_levels_aggregate';
  aggregate?: Maybe<Kupr_Difficulty_Levels_Aggregate_Fields>;
  nodes: Array<Kupr_Difficulty_Levels>;
};

/** aggregate fields of "kupr_difficulty_levels" */
export type Kupr_Difficulty_Levels_Aggregate_Fields = {
  __typename?: 'kupr_difficulty_levels_aggregate_fields';
  avg?: Maybe<Kupr_Difficulty_Levels_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Kupr_Difficulty_Levels_Max_Fields>;
  min?: Maybe<Kupr_Difficulty_Levels_Min_Fields>;
  stddev?: Maybe<Kupr_Difficulty_Levels_Stddev_Fields>;
  stddev_pop?: Maybe<Kupr_Difficulty_Levels_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Kupr_Difficulty_Levels_Stddev_Samp_Fields>;
  sum?: Maybe<Kupr_Difficulty_Levels_Sum_Fields>;
  var_pop?: Maybe<Kupr_Difficulty_Levels_Var_Pop_Fields>;
  var_samp?: Maybe<Kupr_Difficulty_Levels_Var_Samp_Fields>;
  variance?: Maybe<Kupr_Difficulty_Levels_Variance_Fields>;
};


/** aggregate fields of "kupr_difficulty_levels" */
export type Kupr_Difficulty_Levels_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Kupr_Difficulty_Levels_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "kupr_difficulty_levels" */
export type Kupr_Difficulty_Levels_Aggregate_Order_By = {
  avg?: InputMaybe<Kupr_Difficulty_Levels_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Kupr_Difficulty_Levels_Max_Order_By>;
  min?: InputMaybe<Kupr_Difficulty_Levels_Min_Order_By>;
  stddev?: InputMaybe<Kupr_Difficulty_Levels_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Kupr_Difficulty_Levels_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Kupr_Difficulty_Levels_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Kupr_Difficulty_Levels_Sum_Order_By>;
  var_pop?: InputMaybe<Kupr_Difficulty_Levels_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Kupr_Difficulty_Levels_Var_Samp_Order_By>;
  variance?: InputMaybe<Kupr_Difficulty_Levels_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "kupr_difficulty_levels" */
export type Kupr_Difficulty_Levels_Arr_Rel_Insert_Input = {
  data: Array<Kupr_Difficulty_Levels_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Kupr_Difficulty_Levels_On_Conflict>;
};

/** aggregate avg on columns */
export type Kupr_Difficulty_Levels_Avg_Fields = {
  __typename?: 'kupr_difficulty_levels_avg_fields';
  level?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "kupr_difficulty_levels" */
export type Kupr_Difficulty_Levels_Avg_Order_By = {
  level?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "kupr_difficulty_levels". All fields are combined with a logical 'AND'. */
export type Kupr_Difficulty_Levels_Bool_Exp = {
  _and?: InputMaybe<Array<Kupr_Difficulty_Levels_Bool_Exp>>;
  _not?: InputMaybe<Kupr_Difficulty_Levels_Bool_Exp>;
  _or?: InputMaybe<Array<Kupr_Difficulty_Levels_Bool_Exp>>;
  created_at?: InputMaybe<Date_Comparison_Exp>;
  difficulty?: InputMaybe<String_Comparison_Exp>;
  file?: InputMaybe<Uuid_Comparison_Exp>;
  file_rel?: InputMaybe<Files_Bool_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  level?: InputMaybe<Int_Comparison_Exp>;
  updated_at?: InputMaybe<Date_Comparison_Exp>;
};

/** unique or primary key constraints on table "kupr_difficulty_levels" */
export enum Kupr_Difficulty_Levels_Constraint {
  /** unique or primary key constraint on columns "id" */
  KuprDifficultyLevelsPkey = 'kupr_difficulty_levels_pkey'
}

/** input type for incrementing numeric columns in table "kupr_difficulty_levels" */
export type Kupr_Difficulty_Levels_Inc_Input = {
  level?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "kupr_difficulty_levels" */
export type Kupr_Difficulty_Levels_Insert_Input = {
  created_at?: InputMaybe<Scalars['date']>;
  difficulty?: InputMaybe<Scalars['String']>;
  file?: InputMaybe<Scalars['uuid']>;
  file_rel?: InputMaybe<Files_Obj_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['uuid']>;
  level?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['date']>;
};

/** aggregate max on columns */
export type Kupr_Difficulty_Levels_Max_Fields = {
  __typename?: 'kupr_difficulty_levels_max_fields';
  created_at?: Maybe<Scalars['date']>;
  difficulty?: Maybe<Scalars['String']>;
  file?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  level?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['date']>;
};

/** order by max() on columns of table "kupr_difficulty_levels" */
export type Kupr_Difficulty_Levels_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  difficulty?: InputMaybe<Order_By>;
  file?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  level?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Kupr_Difficulty_Levels_Min_Fields = {
  __typename?: 'kupr_difficulty_levels_min_fields';
  created_at?: Maybe<Scalars['date']>;
  difficulty?: Maybe<Scalars['String']>;
  file?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  level?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['date']>;
};

/** order by min() on columns of table "kupr_difficulty_levels" */
export type Kupr_Difficulty_Levels_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  difficulty?: InputMaybe<Order_By>;
  file?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  level?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "kupr_difficulty_levels" */
export type Kupr_Difficulty_Levels_Mutation_Response = {
  __typename?: 'kupr_difficulty_levels_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Kupr_Difficulty_Levels>;
};

/** on_conflict condition type for table "kupr_difficulty_levels" */
export type Kupr_Difficulty_Levels_On_Conflict = {
  constraint: Kupr_Difficulty_Levels_Constraint;
  update_columns?: Array<Kupr_Difficulty_Levels_Update_Column>;
  where?: InputMaybe<Kupr_Difficulty_Levels_Bool_Exp>;
};

/** Ordering options when selecting data from "kupr_difficulty_levels". */
export type Kupr_Difficulty_Levels_Order_By = {
  created_at?: InputMaybe<Order_By>;
  difficulty?: InputMaybe<Order_By>;
  file?: InputMaybe<Order_By>;
  file_rel?: InputMaybe<Files_Order_By>;
  id?: InputMaybe<Order_By>;
  level?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: kupr_difficulty_levels */
export type Kupr_Difficulty_Levels_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "kupr_difficulty_levels" */
export enum Kupr_Difficulty_Levels_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Difficulty = 'difficulty',
  /** column name */
  File = 'file',
  /** column name */
  Id = 'id',
  /** column name */
  Level = 'level',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "kupr_difficulty_levels" */
export type Kupr_Difficulty_Levels_Set_Input = {
  created_at?: InputMaybe<Scalars['date']>;
  difficulty?: InputMaybe<Scalars['String']>;
  file?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  level?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['date']>;
};

/** aggregate stddev on columns */
export type Kupr_Difficulty_Levels_Stddev_Fields = {
  __typename?: 'kupr_difficulty_levels_stddev_fields';
  level?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "kupr_difficulty_levels" */
export type Kupr_Difficulty_Levels_Stddev_Order_By = {
  level?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Kupr_Difficulty_Levels_Stddev_Pop_Fields = {
  __typename?: 'kupr_difficulty_levels_stddev_pop_fields';
  level?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "kupr_difficulty_levels" */
export type Kupr_Difficulty_Levels_Stddev_Pop_Order_By = {
  level?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Kupr_Difficulty_Levels_Stddev_Samp_Fields = {
  __typename?: 'kupr_difficulty_levels_stddev_samp_fields';
  level?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "kupr_difficulty_levels" */
export type Kupr_Difficulty_Levels_Stddev_Samp_Order_By = {
  level?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Kupr_Difficulty_Levels_Sum_Fields = {
  __typename?: 'kupr_difficulty_levels_sum_fields';
  level?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "kupr_difficulty_levels" */
export type Kupr_Difficulty_Levels_Sum_Order_By = {
  level?: InputMaybe<Order_By>;
};

/** update columns of table "kupr_difficulty_levels" */
export enum Kupr_Difficulty_Levels_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Difficulty = 'difficulty',
  /** column name */
  File = 'file',
  /** column name */
  Id = 'id',
  /** column name */
  Level = 'level',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Kupr_Difficulty_Levels_Var_Pop_Fields = {
  __typename?: 'kupr_difficulty_levels_var_pop_fields';
  level?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "kupr_difficulty_levels" */
export type Kupr_Difficulty_Levels_Var_Pop_Order_By = {
  level?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Kupr_Difficulty_Levels_Var_Samp_Fields = {
  __typename?: 'kupr_difficulty_levels_var_samp_fields';
  level?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "kupr_difficulty_levels" */
export type Kupr_Difficulty_Levels_Var_Samp_Order_By = {
  level?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Kupr_Difficulty_Levels_Variance_Fields = {
  __typename?: 'kupr_difficulty_levels_variance_fields';
  level?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "kupr_difficulty_levels" */
export type Kupr_Difficulty_Levels_Variance_Order_By = {
  level?: InputMaybe<Order_By>;
};

/** columns and relationships of "kupr_posts" */
export type Kupr_Posts = {
  __typename?: 'kupr_posts';
  created_at: Scalars['timestamptz'];
  description: Scalars['String'];
  file: Scalars['uuid'];
  /** An object relationship */
  file_rel: Files;
  id: Scalars['uuid'];
  title: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "kupr_posts" */
export type Kupr_Posts_Aggregate = {
  __typename?: 'kupr_posts_aggregate';
  aggregate?: Maybe<Kupr_Posts_Aggregate_Fields>;
  nodes: Array<Kupr_Posts>;
};

/** aggregate fields of "kupr_posts" */
export type Kupr_Posts_Aggregate_Fields = {
  __typename?: 'kupr_posts_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Kupr_Posts_Max_Fields>;
  min?: Maybe<Kupr_Posts_Min_Fields>;
};


/** aggregate fields of "kupr_posts" */
export type Kupr_Posts_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Kupr_Posts_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "kupr_posts" */
export type Kupr_Posts_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Kupr_Posts_Max_Order_By>;
  min?: InputMaybe<Kupr_Posts_Min_Order_By>;
};

/** input type for inserting array relation for remote table "kupr_posts" */
export type Kupr_Posts_Arr_Rel_Insert_Input = {
  data: Array<Kupr_Posts_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Kupr_Posts_On_Conflict>;
};

/** Boolean expression to filter rows from the table "kupr_posts". All fields are combined with a logical 'AND'. */
export type Kupr_Posts_Bool_Exp = {
  _and?: InputMaybe<Array<Kupr_Posts_Bool_Exp>>;
  _not?: InputMaybe<Kupr_Posts_Bool_Exp>;
  _or?: InputMaybe<Array<Kupr_Posts_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  file?: InputMaybe<Uuid_Comparison_Exp>;
  file_rel?: InputMaybe<Files_Bool_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "kupr_posts" */
export enum Kupr_Posts_Constraint {
  /** unique or primary key constraint on columns "id" */
  KuprPostsPkey = 'kupr_posts_pkey'
}

/** input type for inserting data into table "kupr_posts" */
export type Kupr_Posts_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  description?: InputMaybe<Scalars['String']>;
  file?: InputMaybe<Scalars['uuid']>;
  file_rel?: InputMaybe<Files_Obj_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['uuid']>;
  title?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Kupr_Posts_Max_Fields = {
  __typename?: 'kupr_posts_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  file?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "kupr_posts" */
export type Kupr_Posts_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  file?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Kupr_Posts_Min_Fields = {
  __typename?: 'kupr_posts_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  file?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "kupr_posts" */
export type Kupr_Posts_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  file?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "kupr_posts" */
export type Kupr_Posts_Mutation_Response = {
  __typename?: 'kupr_posts_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Kupr_Posts>;
};

/** on_conflict condition type for table "kupr_posts" */
export type Kupr_Posts_On_Conflict = {
  constraint: Kupr_Posts_Constraint;
  update_columns?: Array<Kupr_Posts_Update_Column>;
  where?: InputMaybe<Kupr_Posts_Bool_Exp>;
};

/** Ordering options when selecting data from "kupr_posts". */
export type Kupr_Posts_Order_By = {
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  file?: InputMaybe<Order_By>;
  file_rel?: InputMaybe<Files_Order_By>;
  id?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: kupr_posts */
export type Kupr_Posts_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "kupr_posts" */
export enum Kupr_Posts_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  File = 'file',
  /** column name */
  Id = 'id',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "kupr_posts" */
export type Kupr_Posts_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  description?: InputMaybe<Scalars['String']>;
  file?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  title?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "kupr_posts" */
export enum Kupr_Posts_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  File = 'file',
  /** column name */
  Id = 'id',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  change_password: Scalars['Boolean'];
  change_tenant: SignInResponse;
  /** delete data from the table: "accidents" */
  delete_accidents?: Maybe<Accidents_Mutation_Response>;
  /** delete single row from the table: "accidents" */
  delete_accidents_by_pk?: Maybe<Accidents>;
  /** delete data from the table: "action_notes" */
  delete_action_notes?: Maybe<Action_Notes_Mutation_Response>;
  /** delete single row from the table: "action_notes" */
  delete_action_notes_by_pk?: Maybe<Action_Notes>;
  /** delete data from the table: "actions_template_jobs" */
  delete_actions_template_jobs?: Maybe<Actions_Template_Jobs_Mutation_Response>;
  /** delete single row from the table: "actions_template_jobs" */
  delete_actions_template_jobs_by_pk?: Maybe<Actions_Template_Jobs>;
  /** delete data from the table: "actions_templates" */
  delete_actions_templates?: Maybe<Actions_Templates_Mutation_Response>;
  /** delete single row from the table: "actions_templates" */
  delete_actions_templates_by_pk?: Maybe<Actions_Templates>;
  /** delete data from the table: "buildings" */
  delete_buildings?: Maybe<Buildings_Mutation_Response>;
  /** delete single row from the table: "buildings" */
  delete_buildings_by_pk?: Maybe<Buildings>;
  /** delete data from the table: "checks" */
  delete_checks?: Maybe<Checks_Mutation_Response>;
  /** delete single row from the table: "checks" */
  delete_checks_by_pk?: Maybe<Checks>;
  /** delete data from the table: "consumed_material" */
  delete_consumed_material?: Maybe<Consumed_Material_Mutation_Response>;
  /** delete single row from the table: "consumed_material" */
  delete_consumed_material_by_pk?: Maybe<Consumed_Material>;
  /** delete data from the table: "contacts" */
  delete_contacts?: Maybe<Contacts_Mutation_Response>;
  /** delete single row from the table: "contacts" */
  delete_contacts_by_pk?: Maybe<Contacts>;
  /** delete data from the table: "customers" */
  delete_customers?: Maybe<Customers_Mutation_Response>;
  /** delete single row from the table: "customers" */
  delete_customers_by_pk?: Maybe<Customers>;
  /** delete data from the table: "device_parameters" */
  delete_device_parameters?: Maybe<Device_Parameters_Mutation_Response>;
  /** delete single row from the table: "device_parameters" */
  delete_device_parameters_by_pk?: Maybe<Device_Parameters>;
  /** delete data from the table: "device_urls" */
  delete_device_urls?: Maybe<Device_Urls_Mutation_Response>;
  /** delete single row from the table: "device_urls" */
  delete_device_urls_by_pk?: Maybe<Device_Urls>;
  /** delete data from the table: "devices" */
  delete_devices?: Maybe<Devices_Mutation_Response>;
  /** delete single row from the table: "devices" */
  delete_devices_by_pk?: Maybe<Devices>;
  /** delete data from the table: "devices_catalog" */
  delete_devices_catalog?: Maybe<Devices_Catalog_Mutation_Response>;
  /** delete data from the table: "devices_catalog_actions_templates" */
  delete_devices_catalog_actions_templates?: Maybe<Devices_Catalog_Actions_Templates_Mutation_Response>;
  /** delete single row from the table: "devices_catalog_actions_templates" */
  delete_devices_catalog_actions_templates_by_pk?: Maybe<Devices_Catalog_Actions_Templates>;
  /** delete single row from the table: "devices_catalog" */
  delete_devices_catalog_by_pk?: Maybe<Devices_Catalog>;
  /** delete data from the table: "devices_catalog_files" */
  delete_devices_catalog_files?: Maybe<Devices_Catalog_Files_Mutation_Response>;
  /** delete single row from the table: "devices_catalog_files" */
  delete_devices_catalog_files_by_pk?: Maybe<Devices_Catalog_Files>;
  /** delete data from the table: "education_videos" */
  delete_education_videos?: Maybe<Education_Videos_Mutation_Response>;
  /** delete single row from the table: "education_videos" */
  delete_education_videos_by_pk?: Maybe<Education_Videos>;
  /** delete data from the table: "favorite" */
  delete_favorite?: Maybe<Favorite_Mutation_Response>;
  /** delete single row from the table: "favorite" */
  delete_favorite_by_pk?: Maybe<Favorite>;
  /** delete data from the table: "files" */
  delete_files?: Maybe<Files_Mutation_Response>;
  /** delete data from the table: "files_bozp" */
  delete_files_bozp?: Maybe<Files_Bozp_Mutation_Response>;
  /** delete single row from the table: "files_bozp" */
  delete_files_bozp_by_pk?: Maybe<Files_Bozp>;
  /** delete single row from the table: "files" */
  delete_files_by_pk?: Maybe<Files>;
  /** delete data from the table: "files_checks" */
  delete_files_checks?: Maybe<Files_Checks_Mutation_Response>;
  /** delete single row from the table: "files_checks" */
  delete_files_checks_by_pk?: Maybe<Files_Checks>;
  /** delete data from the table: "files_fotodocumentation" */
  delete_files_fotodocumentation?: Maybe<Files_Fotodocumentation_Mutation_Response>;
  /** delete single row from the table: "files_fotodocumentation" */
  delete_files_fotodocumentation_by_pk?: Maybe<Files_Fotodocumentation>;
  /** delete data from the table: "files_local_operating_rules" */
  delete_files_local_operating_rules?: Maybe<Files_Local_Operating_Rules_Mutation_Response>;
  /** delete single row from the table: "files_local_operating_rules" */
  delete_files_local_operating_rules_by_pk?: Maybe<Files_Local_Operating_Rules>;
  /** delete data from the table: "files_others" */
  delete_files_others?: Maybe<Files_Others_Mutation_Response>;
  /** delete single row from the table: "files_others" */
  delete_files_others_by_pk?: Maybe<Files_Others>;
  /** delete data from the table: "files_project_documentation" */
  delete_files_project_documentation?: Maybe<Files_Project_Documentation_Mutation_Response>;
  /** delete single row from the table: "files_project_documentation" */
  delete_files_project_documentation_by_pk?: Maybe<Files_Project_Documentation>;
  /** delete data from the table: "files_revisions" */
  delete_files_revisions?: Maybe<Files_Revisions_Mutation_Response>;
  /** delete single row from the table: "files_revisions" */
  delete_files_revisions_by_pk?: Maybe<Files_Revisions>;
  /** delete data from the table: "files_risks" */
  delete_files_risks?: Maybe<Files_Risks_Mutation_Response>;
  /** delete single row from the table: "files_risks" */
  delete_files_risks_by_pk?: Maybe<Files_Risks>;
  /** delete data from the table: "full_checks" */
  delete_full_checks?: Maybe<Full_Checks_Mutation_Response>;
  /** delete single row from the table: "full_checks" */
  delete_full_checks_by_pk?: Maybe<Full_Checks>;
  /** delete data from the table: "full_revisions" */
  delete_full_revisions?: Maybe<Full_Revisions_Mutation_Response>;
  /** delete single row from the table: "full_revisions" */
  delete_full_revisions_by_pk?: Maybe<Full_Revisions>;
  /** delete data from the table: "important_notices" */
  delete_important_notices?: Maybe<Important_Notices_Mutation_Response>;
  /** delete single row from the table: "important_notices" */
  delete_important_notices_by_pk?: Maybe<Important_Notices>;
  /** delete data from the table: "invoices" */
  delete_invoices?: Maybe<Invoices_Mutation_Response>;
  /** delete single row from the table: "invoices" */
  delete_invoices_by_pk?: Maybe<Invoices>;
  /** delete data from the table: "kupr_difficulty_levels" */
  delete_kupr_difficulty_levels?: Maybe<Kupr_Difficulty_Levels_Mutation_Response>;
  /** delete single row from the table: "kupr_difficulty_levels" */
  delete_kupr_difficulty_levels_by_pk?: Maybe<Kupr_Difficulty_Levels>;
  /** delete data from the table: "kupr_posts" */
  delete_kupr_posts?: Maybe<Kupr_Posts_Mutation_Response>;
  /** delete single row from the table: "kupr_posts" */
  delete_kupr_posts_by_pk?: Maybe<Kupr_Posts>;
  /** delete data from the table: "my_user" */
  delete_my_user?: Maybe<My_User_Mutation_Response>;
  /** delete data from the table: "operation_log_custom_fields" */
  delete_operation_log_custom_fields?: Maybe<Operation_Log_Custom_Fields_Mutation_Response>;
  /** delete single row from the table: "operation_log_custom_fields" */
  delete_operation_log_custom_fields_by_pk?: Maybe<Operation_Log_Custom_Fields>;
  /** delete data from the table: "operation_logs" */
  delete_operation_logs?: Maybe<Operation_Logs_Mutation_Response>;
  /** delete single row from the table: "operation_logs" */
  delete_operation_logs_by_pk?: Maybe<Operation_Logs>;
  /** delete data from the table: "other_expenses" */
  delete_other_expenses?: Maybe<Other_Expenses_Mutation_Response>;
  /** delete single row from the table: "other_expenses" */
  delete_other_expenses_by_pk?: Maybe<Other_Expenses>;
  /** delete data from the table: "password_reset_requests" */
  delete_password_reset_requests?: Maybe<Password_Reset_Requests_Mutation_Response>;
  /** delete single row from the table: "password_reset_requests" */
  delete_password_reset_requests_by_pk?: Maybe<Password_Reset_Requests>;
  /** delete data from the table: "pricing" */
  delete_pricing?: Maybe<Pricing_Mutation_Response>;
  /** delete single row from the table: "pricing" */
  delete_pricing_by_pk?: Maybe<Pricing>;
  /** delete data from the table: "revisions" */
  delete_revisions?: Maybe<Revisions_Mutation_Response>;
  /** delete single row from the table: "revisions" */
  delete_revisions_by_pk?: Maybe<Revisions>;
  /** delete data from the table: "roles" */
  delete_roles?: Maybe<Roles_Mutation_Response>;
  /** delete single row from the table: "roles" */
  delete_roles_by_pk?: Maybe<Roles>;
  /** delete data from the table: "service_orders" */
  delete_service_orders?: Maybe<Service_Orders_Mutation_Response>;
  /** delete single row from the table: "service_orders" */
  delete_service_orders_by_pk?: Maybe<Service_Orders>;
  /** delete data from the table: "support_levels" */
  delete_support_levels?: Maybe<Support_Levels_Mutation_Response>;
  /** delete single row from the table: "support_levels" */
  delete_support_levels_by_pk?: Maybe<Support_Levels>;
  /** delete data from the table: "tenant_invitation" */
  delete_tenant_invitation?: Maybe<Tenant_Invitation_Mutation_Response>;
  /** delete single row from the table: "tenant_invitation" */
  delete_tenant_invitation_by_pk?: Maybe<Tenant_Invitation>;
  /** delete data from the table: "tenant_user_access" */
  delete_tenant_user_access?: Maybe<Tenant_User_Access_Mutation_Response>;
  /** delete single row from the table: "tenant_user_access" */
  delete_tenant_user_access_by_pk?: Maybe<Tenant_User_Access>;
  /** delete data from the table: "tenants" */
  delete_tenants?: Maybe<Tenants_Mutation_Response>;
  /** delete single row from the table: "tenants" */
  delete_tenants_by_pk?: Maybe<Tenants>;
  /** delete data from the table: "time_on_road" */
  delete_time_on_road?: Maybe<Time_On_Road_Mutation_Response>;
  /** delete single row from the table: "time_on_road" */
  delete_time_on_road_by_pk?: Maybe<Time_On_Road>;
  /** delete data from the table: "tzb_custom_fields" */
  delete_tzb_custom_fields?: Maybe<Tzb_Custom_Fields_Mutation_Response>;
  /** delete single row from the table: "tzb_custom_fields" */
  delete_tzb_custom_fields_by_pk?: Maybe<Tzb_Custom_Fields>;
  /** delete data from the table: "tzbs" */
  delete_tzbs?: Maybe<Tzbs_Mutation_Response>;
  /** delete single row from the table: "tzbs" */
  delete_tzbs_by_pk?: Maybe<Tzbs>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** delete data from the table: "workers" */
  delete_workers?: Maybe<Workers_Mutation_Response>;
  /** delete single row from the table: "workers" */
  delete_workers_by_pk?: Maybe<Workers>;
  /** insert data into the table: "accidents" */
  insert_accidents?: Maybe<Accidents_Mutation_Response>;
  /** insert a single row into the table: "accidents" */
  insert_accidents_one?: Maybe<Accidents>;
  /** insert data into the table: "action_notes" */
  insert_action_notes?: Maybe<Action_Notes_Mutation_Response>;
  /** insert a single row into the table: "action_notes" */
  insert_action_notes_one?: Maybe<Action_Notes>;
  /** insert data into the table: "actions_template_jobs" */
  insert_actions_template_jobs?: Maybe<Actions_Template_Jobs_Mutation_Response>;
  /** insert a single row into the table: "actions_template_jobs" */
  insert_actions_template_jobs_one?: Maybe<Actions_Template_Jobs>;
  /** insert data into the table: "actions_templates" */
  insert_actions_templates?: Maybe<Actions_Templates_Mutation_Response>;
  /** insert a single row into the table: "actions_templates" */
  insert_actions_templates_one?: Maybe<Actions_Templates>;
  /** insert data into the table: "buildings" */
  insert_buildings?: Maybe<Buildings_Mutation_Response>;
  /** insert a single row into the table: "buildings" */
  insert_buildings_one?: Maybe<Buildings>;
  /** insert data into the table: "checks" */
  insert_checks?: Maybe<Checks_Mutation_Response>;
  /** insert a single row into the table: "checks" */
  insert_checks_one?: Maybe<Checks>;
  /** insert data into the table: "consumed_material" */
  insert_consumed_material?: Maybe<Consumed_Material_Mutation_Response>;
  /** insert a single row into the table: "consumed_material" */
  insert_consumed_material_one?: Maybe<Consumed_Material>;
  /** insert data into the table: "contacts" */
  insert_contacts?: Maybe<Contacts_Mutation_Response>;
  /** insert a single row into the table: "contacts" */
  insert_contacts_one?: Maybe<Contacts>;
  /** insert data into the table: "customers" */
  insert_customers?: Maybe<Customers_Mutation_Response>;
  /** insert a single row into the table: "customers" */
  insert_customers_one?: Maybe<Customers>;
  /** insert data into the table: "device_parameters" */
  insert_device_parameters?: Maybe<Device_Parameters_Mutation_Response>;
  /** insert a single row into the table: "device_parameters" */
  insert_device_parameters_one?: Maybe<Device_Parameters>;
  /** insert data into the table: "device_urls" */
  insert_device_urls?: Maybe<Device_Urls_Mutation_Response>;
  /** insert a single row into the table: "device_urls" */
  insert_device_urls_one?: Maybe<Device_Urls>;
  /** insert data into the table: "devices" */
  insert_devices?: Maybe<Devices_Mutation_Response>;
  /** insert data into the table: "devices_catalog" */
  insert_devices_catalog?: Maybe<Devices_Catalog_Mutation_Response>;
  /** insert data into the table: "devices_catalog_actions_templates" */
  insert_devices_catalog_actions_templates?: Maybe<Devices_Catalog_Actions_Templates_Mutation_Response>;
  /** insert a single row into the table: "devices_catalog_actions_templates" */
  insert_devices_catalog_actions_templates_one?: Maybe<Devices_Catalog_Actions_Templates>;
  /** insert data into the table: "devices_catalog_files" */
  insert_devices_catalog_files?: Maybe<Devices_Catalog_Files_Mutation_Response>;
  /** insert a single row into the table: "devices_catalog_files" */
  insert_devices_catalog_files_one?: Maybe<Devices_Catalog_Files>;
  /** insert a single row into the table: "devices_catalog" */
  insert_devices_catalog_one?: Maybe<Devices_Catalog>;
  /** insert a single row into the table: "devices" */
  insert_devices_one?: Maybe<Devices>;
  /** insert data into the table: "education_videos" */
  insert_education_videos?: Maybe<Education_Videos_Mutation_Response>;
  /** insert a single row into the table: "education_videos" */
  insert_education_videos_one?: Maybe<Education_Videos>;
  /** insert data into the table: "favorite" */
  insert_favorite?: Maybe<Favorite_Mutation_Response>;
  /** insert a single row into the table: "favorite" */
  insert_favorite_one?: Maybe<Favorite>;
  /** insert data into the table: "files" */
  insert_files?: Maybe<Files_Mutation_Response>;
  /** insert data into the table: "files_bozp" */
  insert_files_bozp?: Maybe<Files_Bozp_Mutation_Response>;
  /** insert a single row into the table: "files_bozp" */
  insert_files_bozp_one?: Maybe<Files_Bozp>;
  /** insert data into the table: "files_checks" */
  insert_files_checks?: Maybe<Files_Checks_Mutation_Response>;
  /** insert a single row into the table: "files_checks" */
  insert_files_checks_one?: Maybe<Files_Checks>;
  /** insert data into the table: "files_fotodocumentation" */
  insert_files_fotodocumentation?: Maybe<Files_Fotodocumentation_Mutation_Response>;
  /** insert a single row into the table: "files_fotodocumentation" */
  insert_files_fotodocumentation_one?: Maybe<Files_Fotodocumentation>;
  /** insert data into the table: "files_local_operating_rules" */
  insert_files_local_operating_rules?: Maybe<Files_Local_Operating_Rules_Mutation_Response>;
  /** insert a single row into the table: "files_local_operating_rules" */
  insert_files_local_operating_rules_one?: Maybe<Files_Local_Operating_Rules>;
  /** insert a single row into the table: "files" */
  insert_files_one?: Maybe<Files>;
  /** insert data into the table: "files_others" */
  insert_files_others?: Maybe<Files_Others_Mutation_Response>;
  /** insert a single row into the table: "files_others" */
  insert_files_others_one?: Maybe<Files_Others>;
  /** insert data into the table: "files_project_documentation" */
  insert_files_project_documentation?: Maybe<Files_Project_Documentation_Mutation_Response>;
  /** insert a single row into the table: "files_project_documentation" */
  insert_files_project_documentation_one?: Maybe<Files_Project_Documentation>;
  /** insert data into the table: "files_revisions" */
  insert_files_revisions?: Maybe<Files_Revisions_Mutation_Response>;
  /** insert a single row into the table: "files_revisions" */
  insert_files_revisions_one?: Maybe<Files_Revisions>;
  /** insert data into the table: "files_risks" */
  insert_files_risks?: Maybe<Files_Risks_Mutation_Response>;
  /** insert a single row into the table: "files_risks" */
  insert_files_risks_one?: Maybe<Files_Risks>;
  /** insert data into the table: "full_checks" */
  insert_full_checks?: Maybe<Full_Checks_Mutation_Response>;
  /** insert a single row into the table: "full_checks" */
  insert_full_checks_one?: Maybe<Full_Checks>;
  /** insert data into the table: "full_revisions" */
  insert_full_revisions?: Maybe<Full_Revisions_Mutation_Response>;
  /** insert a single row into the table: "full_revisions" */
  insert_full_revisions_one?: Maybe<Full_Revisions>;
  /** insert data into the table: "important_notices" */
  insert_important_notices?: Maybe<Important_Notices_Mutation_Response>;
  /** insert a single row into the table: "important_notices" */
  insert_important_notices_one?: Maybe<Important_Notices>;
  /** insert data into the table: "invoices" */
  insert_invoices?: Maybe<Invoices_Mutation_Response>;
  /** insert a single row into the table: "invoices" */
  insert_invoices_one?: Maybe<Invoices>;
  /** insert data into the table: "kupr_difficulty_levels" */
  insert_kupr_difficulty_levels?: Maybe<Kupr_Difficulty_Levels_Mutation_Response>;
  /** insert a single row into the table: "kupr_difficulty_levels" */
  insert_kupr_difficulty_levels_one?: Maybe<Kupr_Difficulty_Levels>;
  /** insert data into the table: "kupr_posts" */
  insert_kupr_posts?: Maybe<Kupr_Posts_Mutation_Response>;
  /** insert a single row into the table: "kupr_posts" */
  insert_kupr_posts_one?: Maybe<Kupr_Posts>;
  /** insert data into the table: "my_user" */
  insert_my_user?: Maybe<My_User_Mutation_Response>;
  /** insert a single row into the table: "my_user" */
  insert_my_user_one?: Maybe<My_User>;
  /** insert data into the table: "operation_log_custom_fields" */
  insert_operation_log_custom_fields?: Maybe<Operation_Log_Custom_Fields_Mutation_Response>;
  /** insert a single row into the table: "operation_log_custom_fields" */
  insert_operation_log_custom_fields_one?: Maybe<Operation_Log_Custom_Fields>;
  /** insert data into the table: "operation_logs" */
  insert_operation_logs?: Maybe<Operation_Logs_Mutation_Response>;
  /** insert a single row into the table: "operation_logs" */
  insert_operation_logs_one?: Maybe<Operation_Logs>;
  /** insert data into the table: "other_expenses" */
  insert_other_expenses?: Maybe<Other_Expenses_Mutation_Response>;
  /** insert a single row into the table: "other_expenses" */
  insert_other_expenses_one?: Maybe<Other_Expenses>;
  /** insert data into the table: "password_reset_requests" */
  insert_password_reset_requests?: Maybe<Password_Reset_Requests_Mutation_Response>;
  /** insert a single row into the table: "password_reset_requests" */
  insert_password_reset_requests_one?: Maybe<Password_Reset_Requests>;
  /** insert data into the table: "pricing" */
  insert_pricing?: Maybe<Pricing_Mutation_Response>;
  /** insert a single row into the table: "pricing" */
  insert_pricing_one?: Maybe<Pricing>;
  /** insert data into the table: "revisions" */
  insert_revisions?: Maybe<Revisions_Mutation_Response>;
  /** insert a single row into the table: "revisions" */
  insert_revisions_one?: Maybe<Revisions>;
  /** insert data into the table: "roles" */
  insert_roles?: Maybe<Roles_Mutation_Response>;
  /** insert a single row into the table: "roles" */
  insert_roles_one?: Maybe<Roles>;
  /** insert data into the table: "service_orders" */
  insert_service_orders?: Maybe<Service_Orders_Mutation_Response>;
  /** insert a single row into the table: "service_orders" */
  insert_service_orders_one?: Maybe<Service_Orders>;
  /** insert data into the table: "support_levels" */
  insert_support_levels?: Maybe<Support_Levels_Mutation_Response>;
  /** insert a single row into the table: "support_levels" */
  insert_support_levels_one?: Maybe<Support_Levels>;
  /** insert data into the table: "tenant_invitation" */
  insert_tenant_invitation?: Maybe<Tenant_Invitation_Mutation_Response>;
  /** insert a single row into the table: "tenant_invitation" */
  insert_tenant_invitation_one?: Maybe<Tenant_Invitation>;
  /** insert data into the table: "tenant_user_access" */
  insert_tenant_user_access?: Maybe<Tenant_User_Access_Mutation_Response>;
  /** insert a single row into the table: "tenant_user_access" */
  insert_tenant_user_access_one?: Maybe<Tenant_User_Access>;
  /** insert data into the table: "tenants" */
  insert_tenants?: Maybe<Tenants_Mutation_Response>;
  /** insert a single row into the table: "tenants" */
  insert_tenants_one?: Maybe<Tenants>;
  /** insert data into the table: "time_on_road" */
  insert_time_on_road?: Maybe<Time_On_Road_Mutation_Response>;
  /** insert a single row into the table: "time_on_road" */
  insert_time_on_road_one?: Maybe<Time_On_Road>;
  /** insert data into the table: "tzb_custom_fields" */
  insert_tzb_custom_fields?: Maybe<Tzb_Custom_Fields_Mutation_Response>;
  /** insert a single row into the table: "tzb_custom_fields" */
  insert_tzb_custom_fields_one?: Maybe<Tzb_Custom_Fields>;
  /** insert data into the table: "tzbs" */
  insert_tzbs?: Maybe<Tzbs_Mutation_Response>;
  /** insert a single row into the table: "tzbs" */
  insert_tzbs_one?: Maybe<Tzbs>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** insert data into the table: "workers" */
  insert_workers?: Maybe<Workers_Mutation_Response>;
  /** insert a single row into the table: "workers" */
  insert_workers_one?: Maybe<Workers>;
  invite_user: Scalars['Boolean'];
  perform_password_reset: SignInResponse;
  request_password_reset: Scalars['Boolean'];
  sign_in: SignInResponse;
  sign_up: SignInResponse;
  /** update data of the table: "accidents" */
  update_accidents?: Maybe<Accidents_Mutation_Response>;
  /** update single row of the table: "accidents" */
  update_accidents_by_pk?: Maybe<Accidents>;
  /** update data of the table: "action_notes" */
  update_action_notes?: Maybe<Action_Notes_Mutation_Response>;
  /** update single row of the table: "action_notes" */
  update_action_notes_by_pk?: Maybe<Action_Notes>;
  /** update data of the table: "actions_template_jobs" */
  update_actions_template_jobs?: Maybe<Actions_Template_Jobs_Mutation_Response>;
  /** update single row of the table: "actions_template_jobs" */
  update_actions_template_jobs_by_pk?: Maybe<Actions_Template_Jobs>;
  /** update data of the table: "actions_templates" */
  update_actions_templates?: Maybe<Actions_Templates_Mutation_Response>;
  /** update single row of the table: "actions_templates" */
  update_actions_templates_by_pk?: Maybe<Actions_Templates>;
  /** update data of the table: "buildings" */
  update_buildings?: Maybe<Buildings_Mutation_Response>;
  /** update single row of the table: "buildings" */
  update_buildings_by_pk?: Maybe<Buildings>;
  /** update data of the table: "checks" */
  update_checks?: Maybe<Checks_Mutation_Response>;
  /** update single row of the table: "checks" */
  update_checks_by_pk?: Maybe<Checks>;
  /** update data of the table: "consumed_material" */
  update_consumed_material?: Maybe<Consumed_Material_Mutation_Response>;
  /** update single row of the table: "consumed_material" */
  update_consumed_material_by_pk?: Maybe<Consumed_Material>;
  /** update data of the table: "contacts" */
  update_contacts?: Maybe<Contacts_Mutation_Response>;
  /** update single row of the table: "contacts" */
  update_contacts_by_pk?: Maybe<Contacts>;
  /** update data of the table: "customers" */
  update_customers?: Maybe<Customers_Mutation_Response>;
  /** update single row of the table: "customers" */
  update_customers_by_pk?: Maybe<Customers>;
  /** update data of the table: "device_parameters" */
  update_device_parameters?: Maybe<Device_Parameters_Mutation_Response>;
  /** update single row of the table: "device_parameters" */
  update_device_parameters_by_pk?: Maybe<Device_Parameters>;
  /** update data of the table: "device_urls" */
  update_device_urls?: Maybe<Device_Urls_Mutation_Response>;
  /** update single row of the table: "device_urls" */
  update_device_urls_by_pk?: Maybe<Device_Urls>;
  /** update data of the table: "devices" */
  update_devices?: Maybe<Devices_Mutation_Response>;
  /** update single row of the table: "devices" */
  update_devices_by_pk?: Maybe<Devices>;
  /** update data of the table: "devices_catalog" */
  update_devices_catalog?: Maybe<Devices_Catalog_Mutation_Response>;
  /** update data of the table: "devices_catalog_actions_templates" */
  update_devices_catalog_actions_templates?: Maybe<Devices_Catalog_Actions_Templates_Mutation_Response>;
  /** update single row of the table: "devices_catalog_actions_templates" */
  update_devices_catalog_actions_templates_by_pk?: Maybe<Devices_Catalog_Actions_Templates>;
  /** update single row of the table: "devices_catalog" */
  update_devices_catalog_by_pk?: Maybe<Devices_Catalog>;
  /** update data of the table: "devices_catalog_files" */
  update_devices_catalog_files?: Maybe<Devices_Catalog_Files_Mutation_Response>;
  /** update single row of the table: "devices_catalog_files" */
  update_devices_catalog_files_by_pk?: Maybe<Devices_Catalog_Files>;
  /** update data of the table: "education_videos" */
  update_education_videos?: Maybe<Education_Videos_Mutation_Response>;
  /** update single row of the table: "education_videos" */
  update_education_videos_by_pk?: Maybe<Education_Videos>;
  /** update data of the table: "favorite" */
  update_favorite?: Maybe<Favorite_Mutation_Response>;
  /** update single row of the table: "favorite" */
  update_favorite_by_pk?: Maybe<Favorite>;
  /** update data of the table: "files" */
  update_files?: Maybe<Files_Mutation_Response>;
  /** update data of the table: "files_bozp" */
  update_files_bozp?: Maybe<Files_Bozp_Mutation_Response>;
  /** update single row of the table: "files_bozp" */
  update_files_bozp_by_pk?: Maybe<Files_Bozp>;
  /** update single row of the table: "files" */
  update_files_by_pk?: Maybe<Files>;
  /** update data of the table: "files_checks" */
  update_files_checks?: Maybe<Files_Checks_Mutation_Response>;
  /** update single row of the table: "files_checks" */
  update_files_checks_by_pk?: Maybe<Files_Checks>;
  /** update data of the table: "files_fotodocumentation" */
  update_files_fotodocumentation?: Maybe<Files_Fotodocumentation_Mutation_Response>;
  /** update single row of the table: "files_fotodocumentation" */
  update_files_fotodocumentation_by_pk?: Maybe<Files_Fotodocumentation>;
  /** update data of the table: "files_local_operating_rules" */
  update_files_local_operating_rules?: Maybe<Files_Local_Operating_Rules_Mutation_Response>;
  /** update single row of the table: "files_local_operating_rules" */
  update_files_local_operating_rules_by_pk?: Maybe<Files_Local_Operating_Rules>;
  /** update data of the table: "files_others" */
  update_files_others?: Maybe<Files_Others_Mutation_Response>;
  /** update single row of the table: "files_others" */
  update_files_others_by_pk?: Maybe<Files_Others>;
  /** update data of the table: "files_project_documentation" */
  update_files_project_documentation?: Maybe<Files_Project_Documentation_Mutation_Response>;
  /** update single row of the table: "files_project_documentation" */
  update_files_project_documentation_by_pk?: Maybe<Files_Project_Documentation>;
  /** update data of the table: "files_revisions" */
  update_files_revisions?: Maybe<Files_Revisions_Mutation_Response>;
  /** update single row of the table: "files_revisions" */
  update_files_revisions_by_pk?: Maybe<Files_Revisions>;
  /** update data of the table: "files_risks" */
  update_files_risks?: Maybe<Files_Risks_Mutation_Response>;
  /** update single row of the table: "files_risks" */
  update_files_risks_by_pk?: Maybe<Files_Risks>;
  /** update data of the table: "full_checks" */
  update_full_checks?: Maybe<Full_Checks_Mutation_Response>;
  /** update single row of the table: "full_checks" */
  update_full_checks_by_pk?: Maybe<Full_Checks>;
  /** update data of the table: "full_revisions" */
  update_full_revisions?: Maybe<Full_Revisions_Mutation_Response>;
  /** update single row of the table: "full_revisions" */
  update_full_revisions_by_pk?: Maybe<Full_Revisions>;
  /** update data of the table: "important_notices" */
  update_important_notices?: Maybe<Important_Notices_Mutation_Response>;
  /** update single row of the table: "important_notices" */
  update_important_notices_by_pk?: Maybe<Important_Notices>;
  /** update data of the table: "invoices" */
  update_invoices?: Maybe<Invoices_Mutation_Response>;
  /** update single row of the table: "invoices" */
  update_invoices_by_pk?: Maybe<Invoices>;
  /** update data of the table: "kupr_difficulty_levels" */
  update_kupr_difficulty_levels?: Maybe<Kupr_Difficulty_Levels_Mutation_Response>;
  /** update single row of the table: "kupr_difficulty_levels" */
  update_kupr_difficulty_levels_by_pk?: Maybe<Kupr_Difficulty_Levels>;
  /** update data of the table: "kupr_posts" */
  update_kupr_posts?: Maybe<Kupr_Posts_Mutation_Response>;
  /** update single row of the table: "kupr_posts" */
  update_kupr_posts_by_pk?: Maybe<Kupr_Posts>;
  /** update data of the table: "my_user" */
  update_my_user?: Maybe<My_User_Mutation_Response>;
  /** update data of the table: "operation_log_custom_fields" */
  update_operation_log_custom_fields?: Maybe<Operation_Log_Custom_Fields_Mutation_Response>;
  /** update single row of the table: "operation_log_custom_fields" */
  update_operation_log_custom_fields_by_pk?: Maybe<Operation_Log_Custom_Fields>;
  /** update data of the table: "operation_logs" */
  update_operation_logs?: Maybe<Operation_Logs_Mutation_Response>;
  /** update single row of the table: "operation_logs" */
  update_operation_logs_by_pk?: Maybe<Operation_Logs>;
  /** update data of the table: "other_expenses" */
  update_other_expenses?: Maybe<Other_Expenses_Mutation_Response>;
  /** update single row of the table: "other_expenses" */
  update_other_expenses_by_pk?: Maybe<Other_Expenses>;
  /** update data of the table: "password_reset_requests" */
  update_password_reset_requests?: Maybe<Password_Reset_Requests_Mutation_Response>;
  /** update single row of the table: "password_reset_requests" */
  update_password_reset_requests_by_pk?: Maybe<Password_Reset_Requests>;
  /** update data of the table: "pricing" */
  update_pricing?: Maybe<Pricing_Mutation_Response>;
  /** update single row of the table: "pricing" */
  update_pricing_by_pk?: Maybe<Pricing>;
  /** update data of the table: "revisions" */
  update_revisions?: Maybe<Revisions_Mutation_Response>;
  /** update single row of the table: "revisions" */
  update_revisions_by_pk?: Maybe<Revisions>;
  /** update data of the table: "roles" */
  update_roles?: Maybe<Roles_Mutation_Response>;
  /** update single row of the table: "roles" */
  update_roles_by_pk?: Maybe<Roles>;
  /** update data of the table: "service_orders" */
  update_service_orders?: Maybe<Service_Orders_Mutation_Response>;
  /** update single row of the table: "service_orders" */
  update_service_orders_by_pk?: Maybe<Service_Orders>;
  /** update data of the table: "support_levels" */
  update_support_levels?: Maybe<Support_Levels_Mutation_Response>;
  /** update single row of the table: "support_levels" */
  update_support_levels_by_pk?: Maybe<Support_Levels>;
  /** update data of the table: "tenant_invitation" */
  update_tenant_invitation?: Maybe<Tenant_Invitation_Mutation_Response>;
  /** update single row of the table: "tenant_invitation" */
  update_tenant_invitation_by_pk?: Maybe<Tenant_Invitation>;
  /** update data of the table: "tenant_user_access" */
  update_tenant_user_access?: Maybe<Tenant_User_Access_Mutation_Response>;
  /** update single row of the table: "tenant_user_access" */
  update_tenant_user_access_by_pk?: Maybe<Tenant_User_Access>;
  /** update data of the table: "tenants" */
  update_tenants?: Maybe<Tenants_Mutation_Response>;
  /** update single row of the table: "tenants" */
  update_tenants_by_pk?: Maybe<Tenants>;
  /** update data of the table: "time_on_road" */
  update_time_on_road?: Maybe<Time_On_Road_Mutation_Response>;
  /** update single row of the table: "time_on_road" */
  update_time_on_road_by_pk?: Maybe<Time_On_Road>;
  /** update data of the table: "tzb_custom_fields" */
  update_tzb_custom_fields?: Maybe<Tzb_Custom_Fields_Mutation_Response>;
  /** update single row of the table: "tzb_custom_fields" */
  update_tzb_custom_fields_by_pk?: Maybe<Tzb_Custom_Fields>;
  /** update data of the table: "tzbs" */
  update_tzbs?: Maybe<Tzbs_Mutation_Response>;
  /** update single row of the table: "tzbs" */
  update_tzbs_by_pk?: Maybe<Tzbs>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
  /** update data of the table: "workers" */
  update_workers?: Maybe<Workers_Mutation_Response>;
  /** update single row of the table: "workers" */
  update_workers_by_pk?: Maybe<Workers>;
};


/** mutation root */
export type Mutation_RootChange_PasswordArgs = {
  new_password: Scalars['String'];
  password: Scalars['String'];
};


/** mutation root */
export type Mutation_RootChange_TenantArgs = {
  tenantId: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_AccidentsArgs = {
  where: Accidents_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Accidents_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Action_NotesArgs = {
  where: Action_Notes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Action_Notes_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Actions_Template_JobsArgs = {
  where: Actions_Template_Jobs_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Actions_Template_Jobs_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Actions_TemplatesArgs = {
  where: Actions_Templates_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Actions_Templates_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_BuildingsArgs = {
  where: Buildings_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Buildings_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_ChecksArgs = {
  where: Checks_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Checks_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Consumed_MaterialArgs = {
  where: Consumed_Material_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Consumed_Material_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_ContactsArgs = {
  where: Contacts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Contacts_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_CustomersArgs = {
  where: Customers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Customers_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Device_ParametersArgs = {
  where: Device_Parameters_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Device_Parameters_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Device_UrlsArgs = {
  where: Device_Urls_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Device_Urls_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_DevicesArgs = {
  where: Devices_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Devices_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Devices_CatalogArgs = {
  where: Devices_Catalog_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Devices_Catalog_Actions_TemplatesArgs = {
  where: Devices_Catalog_Actions_Templates_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Devices_Catalog_Actions_Templates_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Devices_Catalog_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Devices_Catalog_FilesArgs = {
  where: Devices_Catalog_Files_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Devices_Catalog_Files_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Education_VideosArgs = {
  where: Education_Videos_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Education_Videos_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_FavoriteArgs = {
  where: Favorite_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Favorite_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_FilesArgs = {
  where: Files_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Files_BozpArgs = {
  where: Files_Bozp_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Files_Bozp_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Files_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Files_ChecksArgs = {
  where: Files_Checks_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Files_Checks_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Files_FotodocumentationArgs = {
  where: Files_Fotodocumentation_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Files_Fotodocumentation_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Files_Local_Operating_RulesArgs = {
  where: Files_Local_Operating_Rules_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Files_Local_Operating_Rules_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Files_OthersArgs = {
  where: Files_Others_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Files_Others_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Files_Project_DocumentationArgs = {
  where: Files_Project_Documentation_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Files_Project_Documentation_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Files_RevisionsArgs = {
  where: Files_Revisions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Files_Revisions_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Files_RisksArgs = {
  where: Files_Risks_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Files_Risks_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Full_ChecksArgs = {
  where: Full_Checks_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Full_Checks_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Full_RevisionsArgs = {
  where: Full_Revisions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Full_Revisions_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Important_NoticesArgs = {
  where: Important_Notices_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Important_Notices_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_InvoicesArgs = {
  where: Invoices_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Invoices_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Kupr_Difficulty_LevelsArgs = {
  where: Kupr_Difficulty_Levels_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Kupr_Difficulty_Levels_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Kupr_PostsArgs = {
  where: Kupr_Posts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Kupr_Posts_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_My_UserArgs = {
  where: My_User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Operation_Log_Custom_FieldsArgs = {
  where: Operation_Log_Custom_Fields_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Operation_Log_Custom_Fields_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Operation_LogsArgs = {
  where: Operation_Logs_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Operation_Logs_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Other_ExpensesArgs = {
  where: Other_Expenses_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Other_Expenses_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Password_Reset_RequestsArgs = {
  where: Password_Reset_Requests_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Password_Reset_Requests_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_PricingArgs = {
  where: Pricing_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Pricing_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_RevisionsArgs = {
  where: Revisions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Revisions_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_RolesArgs = {
  where: Roles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Roles_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Service_OrdersArgs = {
  where: Service_Orders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Service_Orders_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Support_LevelsArgs = {
  where: Support_Levels_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Support_Levels_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Tenant_InvitationArgs = {
  where: Tenant_Invitation_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Tenant_Invitation_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Tenant_User_AccessArgs = {
  where: Tenant_User_Access_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Tenant_User_Access_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_TenantsArgs = {
  where: Tenants_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Tenants_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Time_On_RoadArgs = {
  where: Time_On_Road_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Time_On_Road_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Tzb_Custom_FieldsArgs = {
  where: Tzb_Custom_Fields_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Tzb_Custom_Fields_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_TzbsArgs = {
  where: Tzbs_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Tzbs_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_WorkersArgs = {
  where: Workers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Workers_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootInsert_AccidentsArgs = {
  objects: Array<Accidents_Insert_Input>;
  on_conflict?: InputMaybe<Accidents_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Accidents_OneArgs = {
  object: Accidents_Insert_Input;
  on_conflict?: InputMaybe<Accidents_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Action_NotesArgs = {
  objects: Array<Action_Notes_Insert_Input>;
  on_conflict?: InputMaybe<Action_Notes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Action_Notes_OneArgs = {
  object: Action_Notes_Insert_Input;
  on_conflict?: InputMaybe<Action_Notes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Actions_Template_JobsArgs = {
  objects: Array<Actions_Template_Jobs_Insert_Input>;
  on_conflict?: InputMaybe<Actions_Template_Jobs_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Actions_Template_Jobs_OneArgs = {
  object: Actions_Template_Jobs_Insert_Input;
  on_conflict?: InputMaybe<Actions_Template_Jobs_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Actions_TemplatesArgs = {
  objects: Array<Actions_Templates_Insert_Input>;
  on_conflict?: InputMaybe<Actions_Templates_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Actions_Templates_OneArgs = {
  object: Actions_Templates_Insert_Input;
  on_conflict?: InputMaybe<Actions_Templates_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_BuildingsArgs = {
  objects: Array<Buildings_Insert_Input>;
  on_conflict?: InputMaybe<Buildings_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Buildings_OneArgs = {
  object: Buildings_Insert_Input;
  on_conflict?: InputMaybe<Buildings_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ChecksArgs = {
  objects: Array<Checks_Insert_Input>;
  on_conflict?: InputMaybe<Checks_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Checks_OneArgs = {
  object: Checks_Insert_Input;
  on_conflict?: InputMaybe<Checks_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Consumed_MaterialArgs = {
  objects: Array<Consumed_Material_Insert_Input>;
  on_conflict?: InputMaybe<Consumed_Material_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Consumed_Material_OneArgs = {
  object: Consumed_Material_Insert_Input;
  on_conflict?: InputMaybe<Consumed_Material_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ContactsArgs = {
  objects: Array<Contacts_Insert_Input>;
  on_conflict?: InputMaybe<Contacts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Contacts_OneArgs = {
  object: Contacts_Insert_Input;
  on_conflict?: InputMaybe<Contacts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_CustomersArgs = {
  objects: Array<Customers_Insert_Input>;
  on_conflict?: InputMaybe<Customers_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Customers_OneArgs = {
  object: Customers_Insert_Input;
  on_conflict?: InputMaybe<Customers_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Device_ParametersArgs = {
  objects: Array<Device_Parameters_Insert_Input>;
  on_conflict?: InputMaybe<Device_Parameters_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Device_Parameters_OneArgs = {
  object: Device_Parameters_Insert_Input;
  on_conflict?: InputMaybe<Device_Parameters_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Device_UrlsArgs = {
  objects: Array<Device_Urls_Insert_Input>;
  on_conflict?: InputMaybe<Device_Urls_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Device_Urls_OneArgs = {
  object: Device_Urls_Insert_Input;
  on_conflict?: InputMaybe<Device_Urls_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_DevicesArgs = {
  objects: Array<Devices_Insert_Input>;
  on_conflict?: InputMaybe<Devices_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Devices_CatalogArgs = {
  objects: Array<Devices_Catalog_Insert_Input>;
  on_conflict?: InputMaybe<Devices_Catalog_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Devices_Catalog_Actions_TemplatesArgs = {
  objects: Array<Devices_Catalog_Actions_Templates_Insert_Input>;
  on_conflict?: InputMaybe<Devices_Catalog_Actions_Templates_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Devices_Catalog_Actions_Templates_OneArgs = {
  object: Devices_Catalog_Actions_Templates_Insert_Input;
  on_conflict?: InputMaybe<Devices_Catalog_Actions_Templates_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Devices_Catalog_FilesArgs = {
  objects: Array<Devices_Catalog_Files_Insert_Input>;
  on_conflict?: InputMaybe<Devices_Catalog_Files_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Devices_Catalog_Files_OneArgs = {
  object: Devices_Catalog_Files_Insert_Input;
  on_conflict?: InputMaybe<Devices_Catalog_Files_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Devices_Catalog_OneArgs = {
  object: Devices_Catalog_Insert_Input;
  on_conflict?: InputMaybe<Devices_Catalog_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Devices_OneArgs = {
  object: Devices_Insert_Input;
  on_conflict?: InputMaybe<Devices_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Education_VideosArgs = {
  objects: Array<Education_Videos_Insert_Input>;
  on_conflict?: InputMaybe<Education_Videos_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Education_Videos_OneArgs = {
  object: Education_Videos_Insert_Input;
  on_conflict?: InputMaybe<Education_Videos_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_FavoriteArgs = {
  objects: Array<Favorite_Insert_Input>;
  on_conflict?: InputMaybe<Favorite_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Favorite_OneArgs = {
  object: Favorite_Insert_Input;
  on_conflict?: InputMaybe<Favorite_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_FilesArgs = {
  objects: Array<Files_Insert_Input>;
  on_conflict?: InputMaybe<Files_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Files_BozpArgs = {
  objects: Array<Files_Bozp_Insert_Input>;
  on_conflict?: InputMaybe<Files_Bozp_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Files_Bozp_OneArgs = {
  object: Files_Bozp_Insert_Input;
  on_conflict?: InputMaybe<Files_Bozp_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Files_ChecksArgs = {
  objects: Array<Files_Checks_Insert_Input>;
  on_conflict?: InputMaybe<Files_Checks_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Files_Checks_OneArgs = {
  object: Files_Checks_Insert_Input;
  on_conflict?: InputMaybe<Files_Checks_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Files_FotodocumentationArgs = {
  objects: Array<Files_Fotodocumentation_Insert_Input>;
  on_conflict?: InputMaybe<Files_Fotodocumentation_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Files_Fotodocumentation_OneArgs = {
  object: Files_Fotodocumentation_Insert_Input;
  on_conflict?: InputMaybe<Files_Fotodocumentation_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Files_Local_Operating_RulesArgs = {
  objects: Array<Files_Local_Operating_Rules_Insert_Input>;
  on_conflict?: InputMaybe<Files_Local_Operating_Rules_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Files_Local_Operating_Rules_OneArgs = {
  object: Files_Local_Operating_Rules_Insert_Input;
  on_conflict?: InputMaybe<Files_Local_Operating_Rules_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Files_OneArgs = {
  object: Files_Insert_Input;
  on_conflict?: InputMaybe<Files_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Files_OthersArgs = {
  objects: Array<Files_Others_Insert_Input>;
  on_conflict?: InputMaybe<Files_Others_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Files_Others_OneArgs = {
  object: Files_Others_Insert_Input;
  on_conflict?: InputMaybe<Files_Others_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Files_Project_DocumentationArgs = {
  objects: Array<Files_Project_Documentation_Insert_Input>;
  on_conflict?: InputMaybe<Files_Project_Documentation_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Files_Project_Documentation_OneArgs = {
  object: Files_Project_Documentation_Insert_Input;
  on_conflict?: InputMaybe<Files_Project_Documentation_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Files_RevisionsArgs = {
  objects: Array<Files_Revisions_Insert_Input>;
  on_conflict?: InputMaybe<Files_Revisions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Files_Revisions_OneArgs = {
  object: Files_Revisions_Insert_Input;
  on_conflict?: InputMaybe<Files_Revisions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Files_RisksArgs = {
  objects: Array<Files_Risks_Insert_Input>;
  on_conflict?: InputMaybe<Files_Risks_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Files_Risks_OneArgs = {
  object: Files_Risks_Insert_Input;
  on_conflict?: InputMaybe<Files_Risks_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Full_ChecksArgs = {
  objects: Array<Full_Checks_Insert_Input>;
  on_conflict?: InputMaybe<Full_Checks_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Full_Checks_OneArgs = {
  object: Full_Checks_Insert_Input;
  on_conflict?: InputMaybe<Full_Checks_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Full_RevisionsArgs = {
  objects: Array<Full_Revisions_Insert_Input>;
  on_conflict?: InputMaybe<Full_Revisions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Full_Revisions_OneArgs = {
  object: Full_Revisions_Insert_Input;
  on_conflict?: InputMaybe<Full_Revisions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Important_NoticesArgs = {
  objects: Array<Important_Notices_Insert_Input>;
  on_conflict?: InputMaybe<Important_Notices_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Important_Notices_OneArgs = {
  object: Important_Notices_Insert_Input;
  on_conflict?: InputMaybe<Important_Notices_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_InvoicesArgs = {
  objects: Array<Invoices_Insert_Input>;
  on_conflict?: InputMaybe<Invoices_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Invoices_OneArgs = {
  object: Invoices_Insert_Input;
  on_conflict?: InputMaybe<Invoices_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Kupr_Difficulty_LevelsArgs = {
  objects: Array<Kupr_Difficulty_Levels_Insert_Input>;
  on_conflict?: InputMaybe<Kupr_Difficulty_Levels_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Kupr_Difficulty_Levels_OneArgs = {
  object: Kupr_Difficulty_Levels_Insert_Input;
  on_conflict?: InputMaybe<Kupr_Difficulty_Levels_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Kupr_PostsArgs = {
  objects: Array<Kupr_Posts_Insert_Input>;
  on_conflict?: InputMaybe<Kupr_Posts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Kupr_Posts_OneArgs = {
  object: Kupr_Posts_Insert_Input;
  on_conflict?: InputMaybe<Kupr_Posts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_My_UserArgs = {
  objects: Array<My_User_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_My_User_OneArgs = {
  object: My_User_Insert_Input;
};


/** mutation root */
export type Mutation_RootInsert_Operation_Log_Custom_FieldsArgs = {
  objects: Array<Operation_Log_Custom_Fields_Insert_Input>;
  on_conflict?: InputMaybe<Operation_Log_Custom_Fields_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Operation_Log_Custom_Fields_OneArgs = {
  object: Operation_Log_Custom_Fields_Insert_Input;
  on_conflict?: InputMaybe<Operation_Log_Custom_Fields_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Operation_LogsArgs = {
  objects: Array<Operation_Logs_Insert_Input>;
  on_conflict?: InputMaybe<Operation_Logs_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Operation_Logs_OneArgs = {
  object: Operation_Logs_Insert_Input;
  on_conflict?: InputMaybe<Operation_Logs_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Other_ExpensesArgs = {
  objects: Array<Other_Expenses_Insert_Input>;
  on_conflict?: InputMaybe<Other_Expenses_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Other_Expenses_OneArgs = {
  object: Other_Expenses_Insert_Input;
  on_conflict?: InputMaybe<Other_Expenses_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Password_Reset_RequestsArgs = {
  objects: Array<Password_Reset_Requests_Insert_Input>;
  on_conflict?: InputMaybe<Password_Reset_Requests_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Password_Reset_Requests_OneArgs = {
  object: Password_Reset_Requests_Insert_Input;
  on_conflict?: InputMaybe<Password_Reset_Requests_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_PricingArgs = {
  objects: Array<Pricing_Insert_Input>;
  on_conflict?: InputMaybe<Pricing_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Pricing_OneArgs = {
  object: Pricing_Insert_Input;
  on_conflict?: InputMaybe<Pricing_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_RevisionsArgs = {
  objects: Array<Revisions_Insert_Input>;
  on_conflict?: InputMaybe<Revisions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Revisions_OneArgs = {
  object: Revisions_Insert_Input;
  on_conflict?: InputMaybe<Revisions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_RolesArgs = {
  objects: Array<Roles_Insert_Input>;
  on_conflict?: InputMaybe<Roles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Roles_OneArgs = {
  object: Roles_Insert_Input;
  on_conflict?: InputMaybe<Roles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Service_OrdersArgs = {
  objects: Array<Service_Orders_Insert_Input>;
  on_conflict?: InputMaybe<Service_Orders_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Service_Orders_OneArgs = {
  object: Service_Orders_Insert_Input;
  on_conflict?: InputMaybe<Service_Orders_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Support_LevelsArgs = {
  objects: Array<Support_Levels_Insert_Input>;
  on_conflict?: InputMaybe<Support_Levels_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Support_Levels_OneArgs = {
  object: Support_Levels_Insert_Input;
  on_conflict?: InputMaybe<Support_Levels_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Tenant_InvitationArgs = {
  objects: Array<Tenant_Invitation_Insert_Input>;
  on_conflict?: InputMaybe<Tenant_Invitation_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Tenant_Invitation_OneArgs = {
  object: Tenant_Invitation_Insert_Input;
  on_conflict?: InputMaybe<Tenant_Invitation_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Tenant_User_AccessArgs = {
  objects: Array<Tenant_User_Access_Insert_Input>;
  on_conflict?: InputMaybe<Tenant_User_Access_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Tenant_User_Access_OneArgs = {
  object: Tenant_User_Access_Insert_Input;
  on_conflict?: InputMaybe<Tenant_User_Access_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_TenantsArgs = {
  objects: Array<Tenants_Insert_Input>;
  on_conflict?: InputMaybe<Tenants_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Tenants_OneArgs = {
  object: Tenants_Insert_Input;
  on_conflict?: InputMaybe<Tenants_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Time_On_RoadArgs = {
  objects: Array<Time_On_Road_Insert_Input>;
  on_conflict?: InputMaybe<Time_On_Road_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Time_On_Road_OneArgs = {
  object: Time_On_Road_Insert_Input;
  on_conflict?: InputMaybe<Time_On_Road_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Tzb_Custom_FieldsArgs = {
  objects: Array<Tzb_Custom_Fields_Insert_Input>;
  on_conflict?: InputMaybe<Tzb_Custom_Fields_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Tzb_Custom_Fields_OneArgs = {
  object: Tzb_Custom_Fields_Insert_Input;
  on_conflict?: InputMaybe<Tzb_Custom_Fields_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_TzbsArgs = {
  objects: Array<Tzbs_Insert_Input>;
  on_conflict?: InputMaybe<Tzbs_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Tzbs_OneArgs = {
  object: Tzbs_Insert_Input;
  on_conflict?: InputMaybe<Tzbs_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_WorkersArgs = {
  objects: Array<Workers_Insert_Input>;
  on_conflict?: InputMaybe<Workers_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Workers_OneArgs = {
  object: Workers_Insert_Input;
  on_conflict?: InputMaybe<Workers_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInvite_UserArgs = {
  email: Scalars['String'];
  role_id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootPerform_Password_ResetArgs = {
  new_password: Scalars['String'];
  request_id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootRequest_Password_ResetArgs = {
  email: Scalars['String'];
};


/** mutation root */
export type Mutation_RootSign_InArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


/** mutation root */
export type Mutation_RootSign_UpArgs = {
  first_name: Scalars['String'];
  last_name: Scalars['String'];
  password: Scalars['String'];
  request_id: Scalars['String'];
  tel: Scalars['String'];
};


/** mutation root */
export type Mutation_RootUpdate_AccidentsArgs = {
  _set?: InputMaybe<Accidents_Set_Input>;
  where: Accidents_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Accidents_By_PkArgs = {
  _set?: InputMaybe<Accidents_Set_Input>;
  pk_columns: Accidents_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Action_NotesArgs = {
  _set?: InputMaybe<Action_Notes_Set_Input>;
  where: Action_Notes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Action_Notes_By_PkArgs = {
  _set?: InputMaybe<Action_Notes_Set_Input>;
  pk_columns: Action_Notes_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Actions_Template_JobsArgs = {
  _set?: InputMaybe<Actions_Template_Jobs_Set_Input>;
  where: Actions_Template_Jobs_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Actions_Template_Jobs_By_PkArgs = {
  _set?: InputMaybe<Actions_Template_Jobs_Set_Input>;
  pk_columns: Actions_Template_Jobs_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Actions_TemplatesArgs = {
  _set?: InputMaybe<Actions_Templates_Set_Input>;
  where: Actions_Templates_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Actions_Templates_By_PkArgs = {
  _set?: InputMaybe<Actions_Templates_Set_Input>;
  pk_columns: Actions_Templates_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_BuildingsArgs = {
  _set?: InputMaybe<Buildings_Set_Input>;
  where: Buildings_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Buildings_By_PkArgs = {
  _set?: InputMaybe<Buildings_Set_Input>;
  pk_columns: Buildings_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_ChecksArgs = {
  _set?: InputMaybe<Checks_Set_Input>;
  where: Checks_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Checks_By_PkArgs = {
  _set?: InputMaybe<Checks_Set_Input>;
  pk_columns: Checks_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Consumed_MaterialArgs = {
  _set?: InputMaybe<Consumed_Material_Set_Input>;
  where: Consumed_Material_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Consumed_Material_By_PkArgs = {
  _set?: InputMaybe<Consumed_Material_Set_Input>;
  pk_columns: Consumed_Material_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_ContactsArgs = {
  _set?: InputMaybe<Contacts_Set_Input>;
  where: Contacts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Contacts_By_PkArgs = {
  _set?: InputMaybe<Contacts_Set_Input>;
  pk_columns: Contacts_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_CustomersArgs = {
  _set?: InputMaybe<Customers_Set_Input>;
  where: Customers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Customers_By_PkArgs = {
  _set?: InputMaybe<Customers_Set_Input>;
  pk_columns: Customers_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Device_ParametersArgs = {
  _set?: InputMaybe<Device_Parameters_Set_Input>;
  where: Device_Parameters_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Device_Parameters_By_PkArgs = {
  _set?: InputMaybe<Device_Parameters_Set_Input>;
  pk_columns: Device_Parameters_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Device_UrlsArgs = {
  _set?: InputMaybe<Device_Urls_Set_Input>;
  where: Device_Urls_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Device_Urls_By_PkArgs = {
  _set?: InputMaybe<Device_Urls_Set_Input>;
  pk_columns: Device_Urls_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_DevicesArgs = {
  _set?: InputMaybe<Devices_Set_Input>;
  where: Devices_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Devices_By_PkArgs = {
  _set?: InputMaybe<Devices_Set_Input>;
  pk_columns: Devices_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Devices_CatalogArgs = {
  _set?: InputMaybe<Devices_Catalog_Set_Input>;
  where: Devices_Catalog_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Devices_Catalog_Actions_TemplatesArgs = {
  _set?: InputMaybe<Devices_Catalog_Actions_Templates_Set_Input>;
  where: Devices_Catalog_Actions_Templates_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Devices_Catalog_Actions_Templates_By_PkArgs = {
  _set?: InputMaybe<Devices_Catalog_Actions_Templates_Set_Input>;
  pk_columns: Devices_Catalog_Actions_Templates_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Devices_Catalog_By_PkArgs = {
  _set?: InputMaybe<Devices_Catalog_Set_Input>;
  pk_columns: Devices_Catalog_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Devices_Catalog_FilesArgs = {
  _set?: InputMaybe<Devices_Catalog_Files_Set_Input>;
  where: Devices_Catalog_Files_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Devices_Catalog_Files_By_PkArgs = {
  _set?: InputMaybe<Devices_Catalog_Files_Set_Input>;
  pk_columns: Devices_Catalog_Files_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Education_VideosArgs = {
  _set?: InputMaybe<Education_Videos_Set_Input>;
  where: Education_Videos_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Education_Videos_By_PkArgs = {
  _set?: InputMaybe<Education_Videos_Set_Input>;
  pk_columns: Education_Videos_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_FavoriteArgs = {
  _set?: InputMaybe<Favorite_Set_Input>;
  where: Favorite_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Favorite_By_PkArgs = {
  _set?: InputMaybe<Favorite_Set_Input>;
  pk_columns: Favorite_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_FilesArgs = {
  _set?: InputMaybe<Files_Set_Input>;
  where: Files_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Files_BozpArgs = {
  _set?: InputMaybe<Files_Bozp_Set_Input>;
  where: Files_Bozp_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Files_Bozp_By_PkArgs = {
  _set?: InputMaybe<Files_Bozp_Set_Input>;
  pk_columns: Files_Bozp_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Files_By_PkArgs = {
  _set?: InputMaybe<Files_Set_Input>;
  pk_columns: Files_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Files_ChecksArgs = {
  _set?: InputMaybe<Files_Checks_Set_Input>;
  where: Files_Checks_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Files_Checks_By_PkArgs = {
  _set?: InputMaybe<Files_Checks_Set_Input>;
  pk_columns: Files_Checks_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Files_FotodocumentationArgs = {
  _set?: InputMaybe<Files_Fotodocumentation_Set_Input>;
  where: Files_Fotodocumentation_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Files_Fotodocumentation_By_PkArgs = {
  _set?: InputMaybe<Files_Fotodocumentation_Set_Input>;
  pk_columns: Files_Fotodocumentation_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Files_Local_Operating_RulesArgs = {
  _set?: InputMaybe<Files_Local_Operating_Rules_Set_Input>;
  where: Files_Local_Operating_Rules_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Files_Local_Operating_Rules_By_PkArgs = {
  _set?: InputMaybe<Files_Local_Operating_Rules_Set_Input>;
  pk_columns: Files_Local_Operating_Rules_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Files_OthersArgs = {
  _set?: InputMaybe<Files_Others_Set_Input>;
  where: Files_Others_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Files_Others_By_PkArgs = {
  _set?: InputMaybe<Files_Others_Set_Input>;
  pk_columns: Files_Others_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Files_Project_DocumentationArgs = {
  _set?: InputMaybe<Files_Project_Documentation_Set_Input>;
  where: Files_Project_Documentation_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Files_Project_Documentation_By_PkArgs = {
  _set?: InputMaybe<Files_Project_Documentation_Set_Input>;
  pk_columns: Files_Project_Documentation_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Files_RevisionsArgs = {
  _set?: InputMaybe<Files_Revisions_Set_Input>;
  where: Files_Revisions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Files_Revisions_By_PkArgs = {
  _set?: InputMaybe<Files_Revisions_Set_Input>;
  pk_columns: Files_Revisions_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Files_RisksArgs = {
  _set?: InputMaybe<Files_Risks_Set_Input>;
  where: Files_Risks_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Files_Risks_By_PkArgs = {
  _set?: InputMaybe<Files_Risks_Set_Input>;
  pk_columns: Files_Risks_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Full_ChecksArgs = {
  _inc?: InputMaybe<Full_Checks_Inc_Input>;
  _set?: InputMaybe<Full_Checks_Set_Input>;
  where: Full_Checks_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Full_Checks_By_PkArgs = {
  _inc?: InputMaybe<Full_Checks_Inc_Input>;
  _set?: InputMaybe<Full_Checks_Set_Input>;
  pk_columns: Full_Checks_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Full_RevisionsArgs = {
  _inc?: InputMaybe<Full_Revisions_Inc_Input>;
  _set?: InputMaybe<Full_Revisions_Set_Input>;
  where: Full_Revisions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Full_Revisions_By_PkArgs = {
  _inc?: InputMaybe<Full_Revisions_Inc_Input>;
  _set?: InputMaybe<Full_Revisions_Set_Input>;
  pk_columns: Full_Revisions_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Important_NoticesArgs = {
  _set?: InputMaybe<Important_Notices_Set_Input>;
  where: Important_Notices_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Important_Notices_By_PkArgs = {
  _set?: InputMaybe<Important_Notices_Set_Input>;
  pk_columns: Important_Notices_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_InvoicesArgs = {
  _set?: InputMaybe<Invoices_Set_Input>;
  where: Invoices_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Invoices_By_PkArgs = {
  _set?: InputMaybe<Invoices_Set_Input>;
  pk_columns: Invoices_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Kupr_Difficulty_LevelsArgs = {
  _inc?: InputMaybe<Kupr_Difficulty_Levels_Inc_Input>;
  _set?: InputMaybe<Kupr_Difficulty_Levels_Set_Input>;
  where: Kupr_Difficulty_Levels_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Kupr_Difficulty_Levels_By_PkArgs = {
  _inc?: InputMaybe<Kupr_Difficulty_Levels_Inc_Input>;
  _set?: InputMaybe<Kupr_Difficulty_Levels_Set_Input>;
  pk_columns: Kupr_Difficulty_Levels_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Kupr_PostsArgs = {
  _set?: InputMaybe<Kupr_Posts_Set_Input>;
  where: Kupr_Posts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Kupr_Posts_By_PkArgs = {
  _set?: InputMaybe<Kupr_Posts_Set_Input>;
  pk_columns: Kupr_Posts_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_My_UserArgs = {
  _set?: InputMaybe<My_User_Set_Input>;
  where: My_User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Operation_Log_Custom_FieldsArgs = {
  _set?: InputMaybe<Operation_Log_Custom_Fields_Set_Input>;
  where: Operation_Log_Custom_Fields_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Operation_Log_Custom_Fields_By_PkArgs = {
  _set?: InputMaybe<Operation_Log_Custom_Fields_Set_Input>;
  pk_columns: Operation_Log_Custom_Fields_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Operation_LogsArgs = {
  _set?: InputMaybe<Operation_Logs_Set_Input>;
  where: Operation_Logs_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Operation_Logs_By_PkArgs = {
  _set?: InputMaybe<Operation_Logs_Set_Input>;
  pk_columns: Operation_Logs_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Other_ExpensesArgs = {
  _set?: InputMaybe<Other_Expenses_Set_Input>;
  where: Other_Expenses_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Other_Expenses_By_PkArgs = {
  _set?: InputMaybe<Other_Expenses_Set_Input>;
  pk_columns: Other_Expenses_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Password_Reset_RequestsArgs = {
  _set?: InputMaybe<Password_Reset_Requests_Set_Input>;
  where: Password_Reset_Requests_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Password_Reset_Requests_By_PkArgs = {
  _set?: InputMaybe<Password_Reset_Requests_Set_Input>;
  pk_columns: Password_Reset_Requests_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_PricingArgs = {
  _set?: InputMaybe<Pricing_Set_Input>;
  where: Pricing_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Pricing_By_PkArgs = {
  _set?: InputMaybe<Pricing_Set_Input>;
  pk_columns: Pricing_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_RevisionsArgs = {
  _set?: InputMaybe<Revisions_Set_Input>;
  where: Revisions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Revisions_By_PkArgs = {
  _set?: InputMaybe<Revisions_Set_Input>;
  pk_columns: Revisions_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_RolesArgs = {
  _set?: InputMaybe<Roles_Set_Input>;
  where: Roles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Roles_By_PkArgs = {
  _set?: InputMaybe<Roles_Set_Input>;
  pk_columns: Roles_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Service_OrdersArgs = {
  _inc?: InputMaybe<Service_Orders_Inc_Input>;
  _set?: InputMaybe<Service_Orders_Set_Input>;
  where: Service_Orders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Service_Orders_By_PkArgs = {
  _inc?: InputMaybe<Service_Orders_Inc_Input>;
  _set?: InputMaybe<Service_Orders_Set_Input>;
  pk_columns: Service_Orders_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Support_LevelsArgs = {
  _set?: InputMaybe<Support_Levels_Set_Input>;
  where: Support_Levels_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Support_Levels_By_PkArgs = {
  _set?: InputMaybe<Support_Levels_Set_Input>;
  pk_columns: Support_Levels_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Tenant_InvitationArgs = {
  _set?: InputMaybe<Tenant_Invitation_Set_Input>;
  where: Tenant_Invitation_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Tenant_Invitation_By_PkArgs = {
  _set?: InputMaybe<Tenant_Invitation_Set_Input>;
  pk_columns: Tenant_Invitation_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Tenant_User_AccessArgs = {
  _set?: InputMaybe<Tenant_User_Access_Set_Input>;
  where: Tenant_User_Access_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Tenant_User_Access_By_PkArgs = {
  _set?: InputMaybe<Tenant_User_Access_Set_Input>;
  pk_columns: Tenant_User_Access_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_TenantsArgs = {
  _inc?: InputMaybe<Tenants_Inc_Input>;
  _set?: InputMaybe<Tenants_Set_Input>;
  where: Tenants_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Tenants_By_PkArgs = {
  _inc?: InputMaybe<Tenants_Inc_Input>;
  _set?: InputMaybe<Tenants_Set_Input>;
  pk_columns: Tenants_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Time_On_RoadArgs = {
  _set?: InputMaybe<Time_On_Road_Set_Input>;
  where: Time_On_Road_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Time_On_Road_By_PkArgs = {
  _set?: InputMaybe<Time_On_Road_Set_Input>;
  pk_columns: Time_On_Road_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Tzb_Custom_FieldsArgs = {
  _inc?: InputMaybe<Tzb_Custom_Fields_Inc_Input>;
  _set?: InputMaybe<Tzb_Custom_Fields_Set_Input>;
  where: Tzb_Custom_Fields_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Tzb_Custom_Fields_By_PkArgs = {
  _inc?: InputMaybe<Tzb_Custom_Fields_Inc_Input>;
  _set?: InputMaybe<Tzb_Custom_Fields_Set_Input>;
  pk_columns: Tzb_Custom_Fields_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_TzbsArgs = {
  _set?: InputMaybe<Tzbs_Set_Input>;
  where: Tzbs_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Tzbs_By_PkArgs = {
  _set?: InputMaybe<Tzbs_Set_Input>;
  pk_columns: Tzbs_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _set?: InputMaybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _set?: InputMaybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_WorkersArgs = {
  _set?: InputMaybe<Workers_Set_Input>;
  where: Workers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Workers_By_PkArgs = {
  _set?: InputMaybe<Workers_Set_Input>;
  pk_columns: Workers_Pk_Columns_Input;
};

/** columns and relationships of "my_user" */
export type My_User = {
  __typename?: 'my_user';
  active?: Maybe<Scalars['Boolean']>;
  admin?: Maybe<Scalars['Boolean']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  last_name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['uuid']>;
  /** An object relationship */
  role_rel?: Maybe<Roles>;
  super_admin?: Maybe<Scalars['Boolean']>;
  tel?: Maybe<Scalars['String']>;
  tenant?: Maybe<Scalars['uuid']>;
  /** An object relationship */
  tenant_rel?: Maybe<Tenants>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  view_onboarding?: Maybe<Scalars['Boolean']>;
};

/** aggregated selection of "my_user" */
export type My_User_Aggregate = {
  __typename?: 'my_user_aggregate';
  aggregate?: Maybe<My_User_Aggregate_Fields>;
  nodes: Array<My_User>;
};

/** aggregate fields of "my_user" */
export type My_User_Aggregate_Fields = {
  __typename?: 'my_user_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<My_User_Max_Fields>;
  min?: Maybe<My_User_Min_Fields>;
};


/** aggregate fields of "my_user" */
export type My_User_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<My_User_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "my_user". All fields are combined with a logical 'AND'. */
export type My_User_Bool_Exp = {
  _and?: InputMaybe<Array<My_User_Bool_Exp>>;
  _not?: InputMaybe<My_User_Bool_Exp>;
  _or?: InputMaybe<Array<My_User_Bool_Exp>>;
  active?: InputMaybe<Boolean_Comparison_Exp>;
  admin?: InputMaybe<Boolean_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  first_name?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  last_name?: InputMaybe<String_Comparison_Exp>;
  password?: InputMaybe<String_Comparison_Exp>;
  role?: InputMaybe<Uuid_Comparison_Exp>;
  role_rel?: InputMaybe<Roles_Bool_Exp>;
  super_admin?: InputMaybe<Boolean_Comparison_Exp>;
  tel?: InputMaybe<String_Comparison_Exp>;
  tenant?: InputMaybe<Uuid_Comparison_Exp>;
  tenant_rel?: InputMaybe<Tenants_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  view_onboarding?: InputMaybe<Boolean_Comparison_Exp>;
};

/** input type for inserting data into table "my_user" */
export type My_User_Insert_Input = {
  active?: InputMaybe<Scalars['Boolean']>;
  admin?: InputMaybe<Scalars['Boolean']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  email?: InputMaybe<Scalars['String']>;
  first_name?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  last_name?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['uuid']>;
  role_rel?: InputMaybe<Roles_Obj_Rel_Insert_Input>;
  super_admin?: InputMaybe<Scalars['Boolean']>;
  tel?: InputMaybe<Scalars['String']>;
  tenant?: InputMaybe<Scalars['uuid']>;
  tenant_rel?: InputMaybe<Tenants_Obj_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  view_onboarding?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate max on columns */
export type My_User_Max_Fields = {
  __typename?: 'my_user_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  last_name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['uuid']>;
  tel?: Maybe<Scalars['String']>;
  tenant?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type My_User_Min_Fields = {
  __typename?: 'my_user_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  last_name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['uuid']>;
  tel?: Maybe<Scalars['String']>;
  tenant?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "my_user" */
export type My_User_Mutation_Response = {
  __typename?: 'my_user_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<My_User>;
};

/** Ordering options when selecting data from "my_user". */
export type My_User_Order_By = {
  active?: InputMaybe<Order_By>;
  admin?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  first_name?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  last_name?: InputMaybe<Order_By>;
  password?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  role_rel?: InputMaybe<Roles_Order_By>;
  super_admin?: InputMaybe<Order_By>;
  tel?: InputMaybe<Order_By>;
  tenant?: InputMaybe<Order_By>;
  tenant_rel?: InputMaybe<Tenants_Order_By>;
  updated_at?: InputMaybe<Order_By>;
  view_onboarding?: InputMaybe<Order_By>;
};

/** select columns of table "my_user" */
export enum My_User_Select_Column {
  /** column name */
  Active = 'active',
  /** column name */
  Admin = 'admin',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  Id = 'id',
  /** column name */
  LastName = 'last_name',
  /** column name */
  Password = 'password',
  /** column name */
  Role = 'role',
  /** column name */
  SuperAdmin = 'super_admin',
  /** column name */
  Tel = 'tel',
  /** column name */
  Tenant = 'tenant',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  ViewOnboarding = 'view_onboarding'
}

/** input type for updating data in table "my_user" */
export type My_User_Set_Input = {
  active?: InputMaybe<Scalars['Boolean']>;
  admin?: InputMaybe<Scalars['Boolean']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  email?: InputMaybe<Scalars['String']>;
  first_name?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  last_name?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['uuid']>;
  super_admin?: InputMaybe<Scalars['Boolean']>;
  tel?: InputMaybe<Scalars['String']>;
  tenant?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  view_onboarding?: InputMaybe<Scalars['Boolean']>;
};

/** columns and relationships of "operation_log_custom_fields" */
export type Operation_Log_Custom_Fields = {
  __typename?: 'operation_log_custom_fields';
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  operation_log_id: Scalars['uuid'];
  /** An object relationship */
  operation_log_rel: Operation_Logs;
  tenant: Scalars['uuid'];
  /** An object relationship */
  tenantByTenant: Tenants;
  tzb_custom_field_id: Scalars['uuid'];
  /** An object relationship */
  tzb_custom_field_rel: Tzb_Custom_Fields;
  updated_at: Scalars['timestamptz'];
  value?: Maybe<Scalars['String']>;
};

/** aggregated selection of "operation_log_custom_fields" */
export type Operation_Log_Custom_Fields_Aggregate = {
  __typename?: 'operation_log_custom_fields_aggregate';
  aggregate?: Maybe<Operation_Log_Custom_Fields_Aggregate_Fields>;
  nodes: Array<Operation_Log_Custom_Fields>;
};

/** aggregate fields of "operation_log_custom_fields" */
export type Operation_Log_Custom_Fields_Aggregate_Fields = {
  __typename?: 'operation_log_custom_fields_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Operation_Log_Custom_Fields_Max_Fields>;
  min?: Maybe<Operation_Log_Custom_Fields_Min_Fields>;
};


/** aggregate fields of "operation_log_custom_fields" */
export type Operation_Log_Custom_Fields_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Operation_Log_Custom_Fields_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "operation_log_custom_fields" */
export type Operation_Log_Custom_Fields_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Operation_Log_Custom_Fields_Max_Order_By>;
  min?: InputMaybe<Operation_Log_Custom_Fields_Min_Order_By>;
};

/** input type for inserting array relation for remote table "operation_log_custom_fields" */
export type Operation_Log_Custom_Fields_Arr_Rel_Insert_Input = {
  data: Array<Operation_Log_Custom_Fields_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Operation_Log_Custom_Fields_On_Conflict>;
};

/** Boolean expression to filter rows from the table "operation_log_custom_fields". All fields are combined with a logical 'AND'. */
export type Operation_Log_Custom_Fields_Bool_Exp = {
  _and?: InputMaybe<Array<Operation_Log_Custom_Fields_Bool_Exp>>;
  _not?: InputMaybe<Operation_Log_Custom_Fields_Bool_Exp>;
  _or?: InputMaybe<Array<Operation_Log_Custom_Fields_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  operation_log_id?: InputMaybe<Uuid_Comparison_Exp>;
  operation_log_rel?: InputMaybe<Operation_Logs_Bool_Exp>;
  tenant?: InputMaybe<Uuid_Comparison_Exp>;
  tenantByTenant?: InputMaybe<Tenants_Bool_Exp>;
  tzb_custom_field_id?: InputMaybe<Uuid_Comparison_Exp>;
  tzb_custom_field_rel?: InputMaybe<Tzb_Custom_Fields_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "operation_log_custom_fields" */
export enum Operation_Log_Custom_Fields_Constraint {
  /** unique or primary key constraint on columns "id" */
  OperationLogCustomFieldsPkey = 'operation_log_custom_fields_pkey'
}

/** input type for inserting data into table "operation_log_custom_fields" */
export type Operation_Log_Custom_Fields_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  operation_log_id?: InputMaybe<Scalars['uuid']>;
  operation_log_rel?: InputMaybe<Operation_Logs_Obj_Rel_Insert_Input>;
  tenant?: InputMaybe<Scalars['uuid']>;
  tenantByTenant?: InputMaybe<Tenants_Obj_Rel_Insert_Input>;
  tzb_custom_field_id?: InputMaybe<Scalars['uuid']>;
  tzb_custom_field_rel?: InputMaybe<Tzb_Custom_Fields_Obj_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  value?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Operation_Log_Custom_Fields_Max_Fields = {
  __typename?: 'operation_log_custom_fields_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  operation_log_id?: Maybe<Scalars['uuid']>;
  tenant?: Maybe<Scalars['uuid']>;
  tzb_custom_field_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  value?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "operation_log_custom_fields" */
export type Operation_Log_Custom_Fields_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  operation_log_id?: InputMaybe<Order_By>;
  tenant?: InputMaybe<Order_By>;
  tzb_custom_field_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Operation_Log_Custom_Fields_Min_Fields = {
  __typename?: 'operation_log_custom_fields_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  operation_log_id?: Maybe<Scalars['uuid']>;
  tenant?: Maybe<Scalars['uuid']>;
  tzb_custom_field_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  value?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "operation_log_custom_fields" */
export type Operation_Log_Custom_Fields_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  operation_log_id?: InputMaybe<Order_By>;
  tenant?: InputMaybe<Order_By>;
  tzb_custom_field_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "operation_log_custom_fields" */
export type Operation_Log_Custom_Fields_Mutation_Response = {
  __typename?: 'operation_log_custom_fields_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Operation_Log_Custom_Fields>;
};

/** on_conflict condition type for table "operation_log_custom_fields" */
export type Operation_Log_Custom_Fields_On_Conflict = {
  constraint: Operation_Log_Custom_Fields_Constraint;
  update_columns?: Array<Operation_Log_Custom_Fields_Update_Column>;
  where?: InputMaybe<Operation_Log_Custom_Fields_Bool_Exp>;
};

/** Ordering options when selecting data from "operation_log_custom_fields". */
export type Operation_Log_Custom_Fields_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  operation_log_id?: InputMaybe<Order_By>;
  operation_log_rel?: InputMaybe<Operation_Logs_Order_By>;
  tenant?: InputMaybe<Order_By>;
  tenantByTenant?: InputMaybe<Tenants_Order_By>;
  tzb_custom_field_id?: InputMaybe<Order_By>;
  tzb_custom_field_rel?: InputMaybe<Tzb_Custom_Fields_Order_By>;
  updated_at?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: operation_log_custom_fields */
export type Operation_Log_Custom_Fields_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "operation_log_custom_fields" */
export enum Operation_Log_Custom_Fields_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  OperationLogId = 'operation_log_id',
  /** column name */
  Tenant = 'tenant',
  /** column name */
  TzbCustomFieldId = 'tzb_custom_field_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "operation_log_custom_fields" */
export type Operation_Log_Custom_Fields_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  operation_log_id?: InputMaybe<Scalars['uuid']>;
  tenant?: InputMaybe<Scalars['uuid']>;
  tzb_custom_field_id?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  value?: InputMaybe<Scalars['String']>;
};

/** update columns of table "operation_log_custom_fields" */
export enum Operation_Log_Custom_Fields_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  OperationLogId = 'operation_log_id',
  /** column name */
  Tenant = 'tenant',
  /** column name */
  TzbCustomFieldId = 'tzb_custom_field_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Value = 'value'
}

/** columns and relationships of "operation_logs" */
export type Operation_Logs = {
  __typename?: 'operation_logs';
  accident?: Maybe<Scalars['uuid']>;
  /** An object relationship */
  accident_rel?: Maybe<Accidents>;
  created_at: Scalars['date'];
  date: Scalars['date'];
  /** An object relationship */
  file_rel?: Maybe<Files>;
  id: Scalars['uuid'];
  is_problem: Scalars['Boolean'];
  media?: Maybe<Scalars['uuid']>;
  note?: Maybe<Scalars['String']>;
  /** An array relationship */
  operation_log_custom_fields_rel: Array<Operation_Log_Custom_Fields>;
  /** An aggregate relationship */
  operation_log_custom_fields_rel_aggregate: Operation_Log_Custom_Fields_Aggregate;
  record: Scalars['String'];
  reporter: Scalars['uuid'];
  tenant: Scalars['uuid'];
  /** An object relationship */
  tenant_rel: Tenants;
  tzb: Scalars['uuid'];
  /** An object relationship */
  tzb_rel: Tzbs;
  updated_at: Scalars['date'];
  user: Scalars['uuid'];
  /** An object relationship */
  userByUser: Users;
  /** An object relationship */
  user_rel: Users;
};


/** columns and relationships of "operation_logs" */
export type Operation_LogsOperation_Log_Custom_Fields_RelArgs = {
  distinct_on?: InputMaybe<Array<Operation_Log_Custom_Fields_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Operation_Log_Custom_Fields_Order_By>>;
  where?: InputMaybe<Operation_Log_Custom_Fields_Bool_Exp>;
};


/** columns and relationships of "operation_logs" */
export type Operation_LogsOperation_Log_Custom_Fields_Rel_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Operation_Log_Custom_Fields_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Operation_Log_Custom_Fields_Order_By>>;
  where?: InputMaybe<Operation_Log_Custom_Fields_Bool_Exp>;
};

/** aggregated selection of "operation_logs" */
export type Operation_Logs_Aggregate = {
  __typename?: 'operation_logs_aggregate';
  aggregate?: Maybe<Operation_Logs_Aggregate_Fields>;
  nodes: Array<Operation_Logs>;
};

/** aggregate fields of "operation_logs" */
export type Operation_Logs_Aggregate_Fields = {
  __typename?: 'operation_logs_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Operation_Logs_Max_Fields>;
  min?: Maybe<Operation_Logs_Min_Fields>;
};


/** aggregate fields of "operation_logs" */
export type Operation_Logs_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Operation_Logs_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "operation_logs" */
export type Operation_Logs_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Operation_Logs_Max_Order_By>;
  min?: InputMaybe<Operation_Logs_Min_Order_By>;
};

/** input type for inserting array relation for remote table "operation_logs" */
export type Operation_Logs_Arr_Rel_Insert_Input = {
  data: Array<Operation_Logs_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Operation_Logs_On_Conflict>;
};

/** Boolean expression to filter rows from the table "operation_logs". All fields are combined with a logical 'AND'. */
export type Operation_Logs_Bool_Exp = {
  _and?: InputMaybe<Array<Operation_Logs_Bool_Exp>>;
  _not?: InputMaybe<Operation_Logs_Bool_Exp>;
  _or?: InputMaybe<Array<Operation_Logs_Bool_Exp>>;
  accident?: InputMaybe<Uuid_Comparison_Exp>;
  accident_rel?: InputMaybe<Accidents_Bool_Exp>;
  created_at?: InputMaybe<Date_Comparison_Exp>;
  date?: InputMaybe<Date_Comparison_Exp>;
  file_rel?: InputMaybe<Files_Bool_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  is_problem?: InputMaybe<Boolean_Comparison_Exp>;
  media?: InputMaybe<Uuid_Comparison_Exp>;
  note?: InputMaybe<String_Comparison_Exp>;
  operation_log_custom_fields_rel?: InputMaybe<Operation_Log_Custom_Fields_Bool_Exp>;
  record?: InputMaybe<String_Comparison_Exp>;
  reporter?: InputMaybe<Uuid_Comparison_Exp>;
  tenant?: InputMaybe<Uuid_Comparison_Exp>;
  tenant_rel?: InputMaybe<Tenants_Bool_Exp>;
  tzb?: InputMaybe<Uuid_Comparison_Exp>;
  tzb_rel?: InputMaybe<Tzbs_Bool_Exp>;
  updated_at?: InputMaybe<Date_Comparison_Exp>;
  user?: InputMaybe<Uuid_Comparison_Exp>;
  userByUser?: InputMaybe<Users_Bool_Exp>;
  user_rel?: InputMaybe<Users_Bool_Exp>;
};

/** unique or primary key constraints on table "operation_logs" */
export enum Operation_Logs_Constraint {
  /** unique or primary key constraint on columns "id" */
  OperationLogPkey = 'operation_log_pkey'
}

/** input type for inserting data into table "operation_logs" */
export type Operation_Logs_Insert_Input = {
  accident?: InputMaybe<Scalars['uuid']>;
  accident_rel?: InputMaybe<Accidents_Obj_Rel_Insert_Input>;
  created_at?: InputMaybe<Scalars['date']>;
  date?: InputMaybe<Scalars['date']>;
  file_rel?: InputMaybe<Files_Obj_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['uuid']>;
  is_problem?: InputMaybe<Scalars['Boolean']>;
  media?: InputMaybe<Scalars['uuid']>;
  note?: InputMaybe<Scalars['String']>;
  operation_log_custom_fields_rel?: InputMaybe<Operation_Log_Custom_Fields_Arr_Rel_Insert_Input>;
  record?: InputMaybe<Scalars['String']>;
  reporter?: InputMaybe<Scalars['uuid']>;
  tenant?: InputMaybe<Scalars['uuid']>;
  tenant_rel?: InputMaybe<Tenants_Obj_Rel_Insert_Input>;
  tzb?: InputMaybe<Scalars['uuid']>;
  tzb_rel?: InputMaybe<Tzbs_Obj_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['date']>;
  user?: InputMaybe<Scalars['uuid']>;
  userByUser?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_rel?: InputMaybe<Users_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Operation_Logs_Max_Fields = {
  __typename?: 'operation_logs_max_fields';
  accident?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['date']>;
  date?: Maybe<Scalars['date']>;
  id?: Maybe<Scalars['uuid']>;
  media?: Maybe<Scalars['uuid']>;
  note?: Maybe<Scalars['String']>;
  record?: Maybe<Scalars['String']>;
  reporter?: Maybe<Scalars['uuid']>;
  tenant?: Maybe<Scalars['uuid']>;
  tzb?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['date']>;
  user?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "operation_logs" */
export type Operation_Logs_Max_Order_By = {
  accident?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  date?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  media?: InputMaybe<Order_By>;
  note?: InputMaybe<Order_By>;
  record?: InputMaybe<Order_By>;
  reporter?: InputMaybe<Order_By>;
  tenant?: InputMaybe<Order_By>;
  tzb?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Operation_Logs_Min_Fields = {
  __typename?: 'operation_logs_min_fields';
  accident?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['date']>;
  date?: Maybe<Scalars['date']>;
  id?: Maybe<Scalars['uuid']>;
  media?: Maybe<Scalars['uuid']>;
  note?: Maybe<Scalars['String']>;
  record?: Maybe<Scalars['String']>;
  reporter?: Maybe<Scalars['uuid']>;
  tenant?: Maybe<Scalars['uuid']>;
  tzb?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['date']>;
  user?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "operation_logs" */
export type Operation_Logs_Min_Order_By = {
  accident?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  date?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  media?: InputMaybe<Order_By>;
  note?: InputMaybe<Order_By>;
  record?: InputMaybe<Order_By>;
  reporter?: InputMaybe<Order_By>;
  tenant?: InputMaybe<Order_By>;
  tzb?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "operation_logs" */
export type Operation_Logs_Mutation_Response = {
  __typename?: 'operation_logs_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Operation_Logs>;
};

/** input type for inserting object relation for remote table "operation_logs" */
export type Operation_Logs_Obj_Rel_Insert_Input = {
  data: Operation_Logs_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Operation_Logs_On_Conflict>;
};

/** on_conflict condition type for table "operation_logs" */
export type Operation_Logs_On_Conflict = {
  constraint: Operation_Logs_Constraint;
  update_columns?: Array<Operation_Logs_Update_Column>;
  where?: InputMaybe<Operation_Logs_Bool_Exp>;
};

/** Ordering options when selecting data from "operation_logs". */
export type Operation_Logs_Order_By = {
  accident?: InputMaybe<Order_By>;
  accident_rel?: InputMaybe<Accidents_Order_By>;
  created_at?: InputMaybe<Order_By>;
  date?: InputMaybe<Order_By>;
  file_rel?: InputMaybe<Files_Order_By>;
  id?: InputMaybe<Order_By>;
  is_problem?: InputMaybe<Order_By>;
  media?: InputMaybe<Order_By>;
  note?: InputMaybe<Order_By>;
  operation_log_custom_fields_rel_aggregate?: InputMaybe<Operation_Log_Custom_Fields_Aggregate_Order_By>;
  record?: InputMaybe<Order_By>;
  reporter?: InputMaybe<Order_By>;
  tenant?: InputMaybe<Order_By>;
  tenant_rel?: InputMaybe<Tenants_Order_By>;
  tzb?: InputMaybe<Order_By>;
  tzb_rel?: InputMaybe<Tzbs_Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Order_By>;
  userByUser?: InputMaybe<Users_Order_By>;
  user_rel?: InputMaybe<Users_Order_By>;
};

/** primary key columns input for table: operation_logs */
export type Operation_Logs_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "operation_logs" */
export enum Operation_Logs_Select_Column {
  /** column name */
  Accident = 'accident',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Date = 'date',
  /** column name */
  Id = 'id',
  /** column name */
  IsProblem = 'is_problem',
  /** column name */
  Media = 'media',
  /** column name */
  Note = 'note',
  /** column name */
  Record = 'record',
  /** column name */
  Reporter = 'reporter',
  /** column name */
  Tenant = 'tenant',
  /** column name */
  Tzb = 'tzb',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  User = 'user'
}

/** input type for updating data in table "operation_logs" */
export type Operation_Logs_Set_Input = {
  accident?: InputMaybe<Scalars['uuid']>;
  created_at?: InputMaybe<Scalars['date']>;
  date?: InputMaybe<Scalars['date']>;
  id?: InputMaybe<Scalars['uuid']>;
  is_problem?: InputMaybe<Scalars['Boolean']>;
  media?: InputMaybe<Scalars['uuid']>;
  note?: InputMaybe<Scalars['String']>;
  record?: InputMaybe<Scalars['String']>;
  reporter?: InputMaybe<Scalars['uuid']>;
  tenant?: InputMaybe<Scalars['uuid']>;
  tzb?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['date']>;
  user?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "operation_logs" */
export enum Operation_Logs_Update_Column {
  /** column name */
  Accident = 'accident',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Date = 'date',
  /** column name */
  Id = 'id',
  /** column name */
  IsProblem = 'is_problem',
  /** column name */
  Media = 'media',
  /** column name */
  Note = 'note',
  /** column name */
  Record = 'record',
  /** column name */
  Reporter = 'reporter',
  /** column name */
  Tenant = 'tenant',
  /** column name */
  Tzb = 'tzb',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  User = 'user'
}

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** columns and relationships of "other_expenses" */
export type Other_Expenses = {
  __typename?: 'other_expenses';
  created_at: Scalars['date'];
  id: Scalars['uuid'];
  pcs: Scalars['String'];
  price_without_vat: Scalars['String'];
  service_order: Scalars['uuid'];
  /** An object relationship */
  service_order_rel: Service_Orders;
  tenant: Scalars['uuid'];
  /** An object relationship */
  tenant_rel: Tenants;
  title: Scalars['String'];
  updated_at: Scalars['date'];
};

/** aggregated selection of "other_expenses" */
export type Other_Expenses_Aggregate = {
  __typename?: 'other_expenses_aggregate';
  aggregate?: Maybe<Other_Expenses_Aggregate_Fields>;
  nodes: Array<Other_Expenses>;
};

/** aggregate fields of "other_expenses" */
export type Other_Expenses_Aggregate_Fields = {
  __typename?: 'other_expenses_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Other_Expenses_Max_Fields>;
  min?: Maybe<Other_Expenses_Min_Fields>;
};


/** aggregate fields of "other_expenses" */
export type Other_Expenses_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Other_Expenses_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "other_expenses" */
export type Other_Expenses_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Other_Expenses_Max_Order_By>;
  min?: InputMaybe<Other_Expenses_Min_Order_By>;
};

/** input type for inserting array relation for remote table "other_expenses" */
export type Other_Expenses_Arr_Rel_Insert_Input = {
  data: Array<Other_Expenses_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Other_Expenses_On_Conflict>;
};

/** Boolean expression to filter rows from the table "other_expenses". All fields are combined with a logical 'AND'. */
export type Other_Expenses_Bool_Exp = {
  _and?: InputMaybe<Array<Other_Expenses_Bool_Exp>>;
  _not?: InputMaybe<Other_Expenses_Bool_Exp>;
  _or?: InputMaybe<Array<Other_Expenses_Bool_Exp>>;
  created_at?: InputMaybe<Date_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  pcs?: InputMaybe<String_Comparison_Exp>;
  price_without_vat?: InputMaybe<String_Comparison_Exp>;
  service_order?: InputMaybe<Uuid_Comparison_Exp>;
  service_order_rel?: InputMaybe<Service_Orders_Bool_Exp>;
  tenant?: InputMaybe<Uuid_Comparison_Exp>;
  tenant_rel?: InputMaybe<Tenants_Bool_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Date_Comparison_Exp>;
};

/** unique or primary key constraints on table "other_expenses" */
export enum Other_Expenses_Constraint {
  /** unique or primary key constraint on columns "id" */
  OtherExpensesPkey = 'other_expenses_pkey'
}

/** input type for inserting data into table "other_expenses" */
export type Other_Expenses_Insert_Input = {
  created_at?: InputMaybe<Scalars['date']>;
  id?: InputMaybe<Scalars['uuid']>;
  pcs?: InputMaybe<Scalars['String']>;
  price_without_vat?: InputMaybe<Scalars['String']>;
  service_order?: InputMaybe<Scalars['uuid']>;
  service_order_rel?: InputMaybe<Service_Orders_Obj_Rel_Insert_Input>;
  tenant?: InputMaybe<Scalars['uuid']>;
  tenant_rel?: InputMaybe<Tenants_Obj_Rel_Insert_Input>;
  title?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['date']>;
};

/** aggregate max on columns */
export type Other_Expenses_Max_Fields = {
  __typename?: 'other_expenses_max_fields';
  created_at?: Maybe<Scalars['date']>;
  id?: Maybe<Scalars['uuid']>;
  pcs?: Maybe<Scalars['String']>;
  price_without_vat?: Maybe<Scalars['String']>;
  service_order?: Maybe<Scalars['uuid']>;
  tenant?: Maybe<Scalars['uuid']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['date']>;
};

/** order by max() on columns of table "other_expenses" */
export type Other_Expenses_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  pcs?: InputMaybe<Order_By>;
  price_without_vat?: InputMaybe<Order_By>;
  service_order?: InputMaybe<Order_By>;
  tenant?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Other_Expenses_Min_Fields = {
  __typename?: 'other_expenses_min_fields';
  created_at?: Maybe<Scalars['date']>;
  id?: Maybe<Scalars['uuid']>;
  pcs?: Maybe<Scalars['String']>;
  price_without_vat?: Maybe<Scalars['String']>;
  service_order?: Maybe<Scalars['uuid']>;
  tenant?: Maybe<Scalars['uuid']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['date']>;
};

/** order by min() on columns of table "other_expenses" */
export type Other_Expenses_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  pcs?: InputMaybe<Order_By>;
  price_without_vat?: InputMaybe<Order_By>;
  service_order?: InputMaybe<Order_By>;
  tenant?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "other_expenses" */
export type Other_Expenses_Mutation_Response = {
  __typename?: 'other_expenses_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Other_Expenses>;
};

/** on_conflict condition type for table "other_expenses" */
export type Other_Expenses_On_Conflict = {
  constraint: Other_Expenses_Constraint;
  update_columns?: Array<Other_Expenses_Update_Column>;
  where?: InputMaybe<Other_Expenses_Bool_Exp>;
};

/** Ordering options when selecting data from "other_expenses". */
export type Other_Expenses_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  pcs?: InputMaybe<Order_By>;
  price_without_vat?: InputMaybe<Order_By>;
  service_order?: InputMaybe<Order_By>;
  service_order_rel?: InputMaybe<Service_Orders_Order_By>;
  tenant?: InputMaybe<Order_By>;
  tenant_rel?: InputMaybe<Tenants_Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: other_expenses */
export type Other_Expenses_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "other_expenses" */
export enum Other_Expenses_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Pcs = 'pcs',
  /** column name */
  PriceWithoutVat = 'price_without_vat',
  /** column name */
  ServiceOrder = 'service_order',
  /** column name */
  Tenant = 'tenant',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "other_expenses" */
export type Other_Expenses_Set_Input = {
  created_at?: InputMaybe<Scalars['date']>;
  id?: InputMaybe<Scalars['uuid']>;
  pcs?: InputMaybe<Scalars['String']>;
  price_without_vat?: InputMaybe<Scalars['String']>;
  service_order?: InputMaybe<Scalars['uuid']>;
  tenant?: InputMaybe<Scalars['uuid']>;
  title?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['date']>;
};

/** update columns of table "other_expenses" */
export enum Other_Expenses_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Pcs = 'pcs',
  /** column name */
  PriceWithoutVat = 'price_without_vat',
  /** column name */
  ServiceOrder = 'service_order',
  /** column name */
  Tenant = 'tenant',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** columns and relationships of "password_reset_requests" */
export type Password_Reset_Requests = {
  __typename?: 'password_reset_requests';
  created_at: Scalars['timestamptz'];
  expires_at: Scalars['timestamptz'];
  finished: Scalars['Boolean'];
  id: Scalars['uuid'];
  /** An object relationship */
  user: Users;
  userid: Scalars['uuid'];
};

/** aggregated selection of "password_reset_requests" */
export type Password_Reset_Requests_Aggregate = {
  __typename?: 'password_reset_requests_aggregate';
  aggregate?: Maybe<Password_Reset_Requests_Aggregate_Fields>;
  nodes: Array<Password_Reset_Requests>;
};

/** aggregate fields of "password_reset_requests" */
export type Password_Reset_Requests_Aggregate_Fields = {
  __typename?: 'password_reset_requests_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Password_Reset_Requests_Max_Fields>;
  min?: Maybe<Password_Reset_Requests_Min_Fields>;
};


/** aggregate fields of "password_reset_requests" */
export type Password_Reset_Requests_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Password_Reset_Requests_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "password_reset_requests" */
export type Password_Reset_Requests_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Password_Reset_Requests_Max_Order_By>;
  min?: InputMaybe<Password_Reset_Requests_Min_Order_By>;
};

/** input type for inserting array relation for remote table "password_reset_requests" */
export type Password_Reset_Requests_Arr_Rel_Insert_Input = {
  data: Array<Password_Reset_Requests_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Password_Reset_Requests_On_Conflict>;
};

/** Boolean expression to filter rows from the table "password_reset_requests". All fields are combined with a logical 'AND'. */
export type Password_Reset_Requests_Bool_Exp = {
  _and?: InputMaybe<Array<Password_Reset_Requests_Bool_Exp>>;
  _not?: InputMaybe<Password_Reset_Requests_Bool_Exp>;
  _or?: InputMaybe<Array<Password_Reset_Requests_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  expires_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  finished?: InputMaybe<Boolean_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  userid?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "password_reset_requests" */
export enum Password_Reset_Requests_Constraint {
  /** unique or primary key constraint on columns "id" */
  PasswordResetRequestsPkey = 'password_reset_requests_pkey'
}

/** input type for inserting data into table "password_reset_requests" */
export type Password_Reset_Requests_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  expires_at?: InputMaybe<Scalars['timestamptz']>;
  finished?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['uuid']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  userid?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Password_Reset_Requests_Max_Fields = {
  __typename?: 'password_reset_requests_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  expires_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  userid?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "password_reset_requests" */
export type Password_Reset_Requests_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  expires_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  userid?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Password_Reset_Requests_Min_Fields = {
  __typename?: 'password_reset_requests_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  expires_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  userid?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "password_reset_requests" */
export type Password_Reset_Requests_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  expires_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  userid?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "password_reset_requests" */
export type Password_Reset_Requests_Mutation_Response = {
  __typename?: 'password_reset_requests_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Password_Reset_Requests>;
};

/** on_conflict condition type for table "password_reset_requests" */
export type Password_Reset_Requests_On_Conflict = {
  constraint: Password_Reset_Requests_Constraint;
  update_columns?: Array<Password_Reset_Requests_Update_Column>;
  where?: InputMaybe<Password_Reset_Requests_Bool_Exp>;
};

/** Ordering options when selecting data from "password_reset_requests". */
export type Password_Reset_Requests_Order_By = {
  created_at?: InputMaybe<Order_By>;
  expires_at?: InputMaybe<Order_By>;
  finished?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  userid?: InputMaybe<Order_By>;
};

/** primary key columns input for table: password_reset_requests */
export type Password_Reset_Requests_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "password_reset_requests" */
export enum Password_Reset_Requests_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  ExpiresAt = 'expires_at',
  /** column name */
  Finished = 'finished',
  /** column name */
  Id = 'id',
  /** column name */
  Userid = 'userid'
}

/** input type for updating data in table "password_reset_requests" */
export type Password_Reset_Requests_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  expires_at?: InputMaybe<Scalars['timestamptz']>;
  finished?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['uuid']>;
  userid?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "password_reset_requests" */
export enum Password_Reset_Requests_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  ExpiresAt = 'expires_at',
  /** column name */
  Finished = 'finished',
  /** column name */
  Id = 'id',
  /** column name */
  Userid = 'userid'
}

/** columns and relationships of "pricing" */
export type Pricing = {
  __typename?: 'pricing';
  created_at: Scalars['date'];
  /** An array relationship */
  customers_rel: Array<Customers>;
  /** An aggregate relationship */
  customers_rel_aggregate: Customers_Aggregate;
  hour_rate_consultation: Scalars['String'];
  hour_rate_work: Scalars['String'];
  id: Scalars['uuid'];
  job_title: Scalars['String'];
  surcharge: Scalars['String'];
  tenant: Scalars['uuid'];
  /** An object relationship */
  tenant_rel: Tenants;
  traveling_fees_city: Scalars['String'];
  traveling_fees_per_hour: Scalars['String'];
  traveling_fees_per_km: Scalars['String'];
  updated_at: Scalars['date'];
  user: Scalars['uuid'];
  /** An object relationship */
  user_rel: Users;
};


/** columns and relationships of "pricing" */
export type PricingCustomers_RelArgs = {
  distinct_on?: InputMaybe<Array<Customers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Customers_Order_By>>;
  where?: InputMaybe<Customers_Bool_Exp>;
};


/** columns and relationships of "pricing" */
export type PricingCustomers_Rel_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Customers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Customers_Order_By>>;
  where?: InputMaybe<Customers_Bool_Exp>;
};

/** aggregated selection of "pricing" */
export type Pricing_Aggregate = {
  __typename?: 'pricing_aggregate';
  aggregate?: Maybe<Pricing_Aggregate_Fields>;
  nodes: Array<Pricing>;
};

/** aggregate fields of "pricing" */
export type Pricing_Aggregate_Fields = {
  __typename?: 'pricing_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Pricing_Max_Fields>;
  min?: Maybe<Pricing_Min_Fields>;
};


/** aggregate fields of "pricing" */
export type Pricing_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Pricing_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "pricing" */
export type Pricing_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Pricing_Max_Order_By>;
  min?: InputMaybe<Pricing_Min_Order_By>;
};

/** input type for inserting array relation for remote table "pricing" */
export type Pricing_Arr_Rel_Insert_Input = {
  data: Array<Pricing_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Pricing_On_Conflict>;
};

/** Boolean expression to filter rows from the table "pricing". All fields are combined with a logical 'AND'. */
export type Pricing_Bool_Exp = {
  _and?: InputMaybe<Array<Pricing_Bool_Exp>>;
  _not?: InputMaybe<Pricing_Bool_Exp>;
  _or?: InputMaybe<Array<Pricing_Bool_Exp>>;
  created_at?: InputMaybe<Date_Comparison_Exp>;
  customers_rel?: InputMaybe<Customers_Bool_Exp>;
  hour_rate_consultation?: InputMaybe<String_Comparison_Exp>;
  hour_rate_work?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  job_title?: InputMaybe<String_Comparison_Exp>;
  surcharge?: InputMaybe<String_Comparison_Exp>;
  tenant?: InputMaybe<Uuid_Comparison_Exp>;
  tenant_rel?: InputMaybe<Tenants_Bool_Exp>;
  traveling_fees_city?: InputMaybe<String_Comparison_Exp>;
  traveling_fees_per_hour?: InputMaybe<String_Comparison_Exp>;
  traveling_fees_per_km?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Date_Comparison_Exp>;
  user?: InputMaybe<Uuid_Comparison_Exp>;
  user_rel?: InputMaybe<Users_Bool_Exp>;
};

/** unique or primary key constraints on table "pricing" */
export enum Pricing_Constraint {
  /** unique or primary key constraint on columns "id" */
  PricingPkey = 'pricing_pkey'
}

/** input type for inserting data into table "pricing" */
export type Pricing_Insert_Input = {
  created_at?: InputMaybe<Scalars['date']>;
  customers_rel?: InputMaybe<Customers_Arr_Rel_Insert_Input>;
  hour_rate_consultation?: InputMaybe<Scalars['String']>;
  hour_rate_work?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  job_title?: InputMaybe<Scalars['String']>;
  surcharge?: InputMaybe<Scalars['String']>;
  tenant?: InputMaybe<Scalars['uuid']>;
  tenant_rel?: InputMaybe<Tenants_Obj_Rel_Insert_Input>;
  traveling_fees_city?: InputMaybe<Scalars['String']>;
  traveling_fees_per_hour?: InputMaybe<Scalars['String']>;
  traveling_fees_per_km?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['date']>;
  user?: InputMaybe<Scalars['uuid']>;
  user_rel?: InputMaybe<Users_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Pricing_Max_Fields = {
  __typename?: 'pricing_max_fields';
  created_at?: Maybe<Scalars['date']>;
  hour_rate_consultation?: Maybe<Scalars['String']>;
  hour_rate_work?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  job_title?: Maybe<Scalars['String']>;
  surcharge?: Maybe<Scalars['String']>;
  tenant?: Maybe<Scalars['uuid']>;
  traveling_fees_city?: Maybe<Scalars['String']>;
  traveling_fees_per_hour?: Maybe<Scalars['String']>;
  traveling_fees_per_km?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['date']>;
  user?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "pricing" */
export type Pricing_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  hour_rate_consultation?: InputMaybe<Order_By>;
  hour_rate_work?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  job_title?: InputMaybe<Order_By>;
  surcharge?: InputMaybe<Order_By>;
  tenant?: InputMaybe<Order_By>;
  traveling_fees_city?: InputMaybe<Order_By>;
  traveling_fees_per_hour?: InputMaybe<Order_By>;
  traveling_fees_per_km?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Pricing_Min_Fields = {
  __typename?: 'pricing_min_fields';
  created_at?: Maybe<Scalars['date']>;
  hour_rate_consultation?: Maybe<Scalars['String']>;
  hour_rate_work?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  job_title?: Maybe<Scalars['String']>;
  surcharge?: Maybe<Scalars['String']>;
  tenant?: Maybe<Scalars['uuid']>;
  traveling_fees_city?: Maybe<Scalars['String']>;
  traveling_fees_per_hour?: Maybe<Scalars['String']>;
  traveling_fees_per_km?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['date']>;
  user?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "pricing" */
export type Pricing_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  hour_rate_consultation?: InputMaybe<Order_By>;
  hour_rate_work?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  job_title?: InputMaybe<Order_By>;
  surcharge?: InputMaybe<Order_By>;
  tenant?: InputMaybe<Order_By>;
  traveling_fees_city?: InputMaybe<Order_By>;
  traveling_fees_per_hour?: InputMaybe<Order_By>;
  traveling_fees_per_km?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "pricing" */
export type Pricing_Mutation_Response = {
  __typename?: 'pricing_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Pricing>;
};

/** input type for inserting object relation for remote table "pricing" */
export type Pricing_Obj_Rel_Insert_Input = {
  data: Pricing_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Pricing_On_Conflict>;
};

/** on_conflict condition type for table "pricing" */
export type Pricing_On_Conflict = {
  constraint: Pricing_Constraint;
  update_columns?: Array<Pricing_Update_Column>;
  where?: InputMaybe<Pricing_Bool_Exp>;
};

/** Ordering options when selecting data from "pricing". */
export type Pricing_Order_By = {
  created_at?: InputMaybe<Order_By>;
  customers_rel_aggregate?: InputMaybe<Customers_Aggregate_Order_By>;
  hour_rate_consultation?: InputMaybe<Order_By>;
  hour_rate_work?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  job_title?: InputMaybe<Order_By>;
  surcharge?: InputMaybe<Order_By>;
  tenant?: InputMaybe<Order_By>;
  tenant_rel?: InputMaybe<Tenants_Order_By>;
  traveling_fees_city?: InputMaybe<Order_By>;
  traveling_fees_per_hour?: InputMaybe<Order_By>;
  traveling_fees_per_km?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Order_By>;
  user_rel?: InputMaybe<Users_Order_By>;
};

/** primary key columns input for table: pricing */
export type Pricing_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "pricing" */
export enum Pricing_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  HourRateConsultation = 'hour_rate_consultation',
  /** column name */
  HourRateWork = 'hour_rate_work',
  /** column name */
  Id = 'id',
  /** column name */
  JobTitle = 'job_title',
  /** column name */
  Surcharge = 'surcharge',
  /** column name */
  Tenant = 'tenant',
  /** column name */
  TravelingFeesCity = 'traveling_fees_city',
  /** column name */
  TravelingFeesPerHour = 'traveling_fees_per_hour',
  /** column name */
  TravelingFeesPerKm = 'traveling_fees_per_km',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  User = 'user'
}

/** input type for updating data in table "pricing" */
export type Pricing_Set_Input = {
  created_at?: InputMaybe<Scalars['date']>;
  hour_rate_consultation?: InputMaybe<Scalars['String']>;
  hour_rate_work?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  job_title?: InputMaybe<Scalars['String']>;
  surcharge?: InputMaybe<Scalars['String']>;
  tenant?: InputMaybe<Scalars['uuid']>;
  traveling_fees_city?: InputMaybe<Scalars['String']>;
  traveling_fees_per_hour?: InputMaybe<Scalars['String']>;
  traveling_fees_per_km?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['date']>;
  user?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "pricing" */
export enum Pricing_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  HourRateConsultation = 'hour_rate_consultation',
  /** column name */
  HourRateWork = 'hour_rate_work',
  /** column name */
  Id = 'id',
  /** column name */
  JobTitle = 'job_title',
  /** column name */
  Surcharge = 'surcharge',
  /** column name */
  Tenant = 'tenant',
  /** column name */
  TravelingFeesCity = 'traveling_fees_city',
  /** column name */
  TravelingFeesPerHour = 'traveling_fees_per_hour',
  /** column name */
  TravelingFeesPerKm = 'traveling_fees_per_km',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  User = 'user'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** An array relationship */
  accidents: Array<Accidents>;
  /** An aggregate relationship */
  accidents_aggregate: Accidents_Aggregate;
  /** fetch data from the table: "accidents" using primary key columns */
  accidents_by_pk?: Maybe<Accidents>;
  /** An array relationship */
  action_notes: Array<Action_Notes>;
  /** An aggregate relationship */
  action_notes_aggregate: Action_Notes_Aggregate;
  /** fetch data from the table: "action_notes" using primary key columns */
  action_notes_by_pk?: Maybe<Action_Notes>;
  /** An array relationship */
  actions_template_jobs: Array<Actions_Template_Jobs>;
  /** An aggregate relationship */
  actions_template_jobs_aggregate: Actions_Template_Jobs_Aggregate;
  /** fetch data from the table: "actions_template_jobs" using primary key columns */
  actions_template_jobs_by_pk?: Maybe<Actions_Template_Jobs>;
  /** An array relationship */
  actions_templates: Array<Actions_Templates>;
  /** An aggregate relationship */
  actions_templates_aggregate: Actions_Templates_Aggregate;
  /** fetch data from the table: "actions_templates" using primary key columns */
  actions_templates_by_pk?: Maybe<Actions_Templates>;
  backend_check: Scalars['String'];
  /** An array relationship */
  buildings: Array<Buildings>;
  /** An aggregate relationship */
  buildings_aggregate: Buildings_Aggregate;
  /** fetch data from the table: "buildings" using primary key columns */
  buildings_by_pk?: Maybe<Buildings>;
  /** An array relationship */
  checks: Array<Checks>;
  /** An aggregate relationship */
  checks_aggregate: Checks_Aggregate;
  /** fetch data from the table: "checks" using primary key columns */
  checks_by_pk?: Maybe<Checks>;
  /** fetch data from the table: "consumed_material" */
  consumed_material: Array<Consumed_Material>;
  /** fetch aggregated fields from the table: "consumed_material" */
  consumed_material_aggregate: Consumed_Material_Aggregate;
  /** fetch data from the table: "consumed_material" using primary key columns */
  consumed_material_by_pk?: Maybe<Consumed_Material>;
  /** An array relationship */
  contacts: Array<Contacts>;
  /** An aggregate relationship */
  contacts_aggregate: Contacts_Aggregate;
  /** fetch data from the table: "contacts" using primary key columns */
  contacts_by_pk?: Maybe<Contacts>;
  /** An array relationship */
  customers: Array<Customers>;
  /** An aggregate relationship */
  customers_aggregate: Customers_Aggregate;
  /** fetch data from the table: "customers" using primary key columns */
  customers_by_pk?: Maybe<Customers>;
  /** An array relationship */
  device_parameters: Array<Device_Parameters>;
  /** An aggregate relationship */
  device_parameters_aggregate: Device_Parameters_Aggregate;
  /** fetch data from the table: "device_parameters" using primary key columns */
  device_parameters_by_pk?: Maybe<Device_Parameters>;
  /** An array relationship */
  device_urls: Array<Device_Urls>;
  /** An aggregate relationship */
  device_urls_aggregate: Device_Urls_Aggregate;
  /** fetch data from the table: "device_urls" using primary key columns */
  device_urls_by_pk?: Maybe<Device_Urls>;
  /** An array relationship */
  devices: Array<Devices>;
  /** An aggregate relationship */
  devices_aggregate: Devices_Aggregate;
  /** fetch data from the table: "devices" using primary key columns */
  devices_by_pk?: Maybe<Devices>;
  /** fetch data from the table: "devices_catalog" */
  devices_catalog: Array<Devices_Catalog>;
  /** An array relationship */
  devices_catalog_actions_templates: Array<Devices_Catalog_Actions_Templates>;
  /** An aggregate relationship */
  devices_catalog_actions_templates_aggregate: Devices_Catalog_Actions_Templates_Aggregate;
  /** fetch data from the table: "devices_catalog_actions_templates" using primary key columns */
  devices_catalog_actions_templates_by_pk?: Maybe<Devices_Catalog_Actions_Templates>;
  /** fetch aggregated fields from the table: "devices_catalog" */
  devices_catalog_aggregate: Devices_Catalog_Aggregate;
  /** fetch data from the table: "devices_catalog" using primary key columns */
  devices_catalog_by_pk?: Maybe<Devices_Catalog>;
  /** An array relationship */
  devices_catalog_files: Array<Devices_Catalog_Files>;
  /** An aggregate relationship */
  devices_catalog_files_aggregate: Devices_Catalog_Files_Aggregate;
  /** fetch data from the table: "devices_catalog_files" using primary key columns */
  devices_catalog_files_by_pk?: Maybe<Devices_Catalog_Files>;
  /** fetch data from the table: "education_videos" */
  education_videos: Array<Education_Videos>;
  /** fetch aggregated fields from the table: "education_videos" */
  education_videos_aggregate: Education_Videos_Aggregate;
  /** fetch data from the table: "education_videos" using primary key columns */
  education_videos_by_pk?: Maybe<Education_Videos>;
  /** fetch data from the table: "favorite" */
  favorite: Array<Favorite>;
  /** fetch aggregated fields from the table: "favorite" */
  favorite_aggregate: Favorite_Aggregate;
  /** fetch data from the table: "favorite" using primary key columns */
  favorite_by_pk?: Maybe<Favorite>;
  /** fetch data from the table: "files" */
  files: Array<Files>;
  /** fetch aggregated fields from the table: "files" */
  files_aggregate: Files_Aggregate;
  /** fetch data from the table: "files_bozp" */
  files_bozp: Array<Files_Bozp>;
  /** fetch aggregated fields from the table: "files_bozp" */
  files_bozp_aggregate: Files_Bozp_Aggregate;
  /** fetch data from the table: "files_bozp" using primary key columns */
  files_bozp_by_pk?: Maybe<Files_Bozp>;
  /** fetch data from the table: "files" using primary key columns */
  files_by_pk?: Maybe<Files>;
  /** An array relationship */
  files_checks: Array<Files_Checks>;
  /** An aggregate relationship */
  files_checks_aggregate: Files_Checks_Aggregate;
  /** fetch data from the table: "files_checks" using primary key columns */
  files_checks_by_pk?: Maybe<Files_Checks>;
  /** fetch data from the table: "files_fotodocumentation" */
  files_fotodocumentation: Array<Files_Fotodocumentation>;
  /** fetch aggregated fields from the table: "files_fotodocumentation" */
  files_fotodocumentation_aggregate: Files_Fotodocumentation_Aggregate;
  /** fetch data from the table: "files_fotodocumentation" using primary key columns */
  files_fotodocumentation_by_pk?: Maybe<Files_Fotodocumentation>;
  /** An array relationship */
  files_local_operating_rules: Array<Files_Local_Operating_Rules>;
  /** An aggregate relationship */
  files_local_operating_rules_aggregate: Files_Local_Operating_Rules_Aggregate;
  /** fetch data from the table: "files_local_operating_rules" using primary key columns */
  files_local_operating_rules_by_pk?: Maybe<Files_Local_Operating_Rules>;
  /** An array relationship */
  files_others: Array<Files_Others>;
  /** An aggregate relationship */
  files_others_aggregate: Files_Others_Aggregate;
  /** fetch data from the table: "files_others" using primary key columns */
  files_others_by_pk?: Maybe<Files_Others>;
  /** fetch data from the table: "files_project_documentation" */
  files_project_documentation: Array<Files_Project_Documentation>;
  /** fetch aggregated fields from the table: "files_project_documentation" */
  files_project_documentation_aggregate: Files_Project_Documentation_Aggregate;
  /** fetch data from the table: "files_project_documentation" using primary key columns */
  files_project_documentation_by_pk?: Maybe<Files_Project_Documentation>;
  /** An array relationship */
  files_revisions: Array<Files_Revisions>;
  /** An aggregate relationship */
  files_revisions_aggregate: Files_Revisions_Aggregate;
  /** fetch data from the table: "files_revisions" using primary key columns */
  files_revisions_by_pk?: Maybe<Files_Revisions>;
  /** An array relationship */
  files_risks: Array<Files_Risks>;
  /** An aggregate relationship */
  files_risks_aggregate: Files_Risks_Aggregate;
  /** fetch data from the table: "files_risks" using primary key columns */
  files_risks_by_pk?: Maybe<Files_Risks>;
  /** An array relationship */
  full_checks: Array<Full_Checks>;
  /** An aggregate relationship */
  full_checks_aggregate: Full_Checks_Aggregate;
  /** fetch data from the table: "full_checks" using primary key columns */
  full_checks_by_pk?: Maybe<Full_Checks>;
  /** An array relationship */
  full_revisions: Array<Full_Revisions>;
  /** An aggregate relationship */
  full_revisions_aggregate: Full_Revisions_Aggregate;
  /** fetch data from the table: "full_revisions" using primary key columns */
  full_revisions_by_pk?: Maybe<Full_Revisions>;
  /** An array relationship */
  important_notices: Array<Important_Notices>;
  /** An aggregate relationship */
  important_notices_aggregate: Important_Notices_Aggregate;
  /** fetch data from the table: "important_notices" using primary key columns */
  important_notices_by_pk?: Maybe<Important_Notices>;
  /** An array relationship */
  invoices: Array<Invoices>;
  /** An aggregate relationship */
  invoices_aggregate: Invoices_Aggregate;
  /** fetch data from the table: "invoices" using primary key columns */
  invoices_by_pk?: Maybe<Invoices>;
  /** An array relationship */
  kupr_difficulty_levels: Array<Kupr_Difficulty_Levels>;
  /** An aggregate relationship */
  kupr_difficulty_levels_aggregate: Kupr_Difficulty_Levels_Aggregate;
  /** fetch data from the table: "kupr_difficulty_levels" using primary key columns */
  kupr_difficulty_levels_by_pk?: Maybe<Kupr_Difficulty_Levels>;
  /** An array relationship */
  kupr_posts: Array<Kupr_Posts>;
  /** An aggregate relationship */
  kupr_posts_aggregate: Kupr_Posts_Aggregate;
  /** fetch data from the table: "kupr_posts" using primary key columns */
  kupr_posts_by_pk?: Maybe<Kupr_Posts>;
  /** fetch data from the table: "my_user" */
  my_user: Array<My_User>;
  /** fetch aggregated fields from the table: "my_user" */
  my_user_aggregate: My_User_Aggregate;
  /** An array relationship */
  operation_log_custom_fields: Array<Operation_Log_Custom_Fields>;
  /** An aggregate relationship */
  operation_log_custom_fields_aggregate: Operation_Log_Custom_Fields_Aggregate;
  /** fetch data from the table: "operation_log_custom_fields" using primary key columns */
  operation_log_custom_fields_by_pk?: Maybe<Operation_Log_Custom_Fields>;
  /** An array relationship */
  operation_logs: Array<Operation_Logs>;
  /** An aggregate relationship */
  operation_logs_aggregate: Operation_Logs_Aggregate;
  /** fetch data from the table: "operation_logs" using primary key columns */
  operation_logs_by_pk?: Maybe<Operation_Logs>;
  /** An array relationship */
  other_expenses: Array<Other_Expenses>;
  /** An aggregate relationship */
  other_expenses_aggregate: Other_Expenses_Aggregate;
  /** fetch data from the table: "other_expenses" using primary key columns */
  other_expenses_by_pk?: Maybe<Other_Expenses>;
  /** An array relationship */
  password_reset_requests: Array<Password_Reset_Requests>;
  /** An aggregate relationship */
  password_reset_requests_aggregate: Password_Reset_Requests_Aggregate;
  /** fetch data from the table: "password_reset_requests" using primary key columns */
  password_reset_requests_by_pk?: Maybe<Password_Reset_Requests>;
  /** fetch data from the table: "pricing" */
  pricing: Array<Pricing>;
  /** fetch aggregated fields from the table: "pricing" */
  pricing_aggregate: Pricing_Aggregate;
  /** fetch data from the table: "pricing" using primary key columns */
  pricing_by_pk?: Maybe<Pricing>;
  /** An array relationship */
  revisions: Array<Revisions>;
  /** An aggregate relationship */
  revisions_aggregate: Revisions_Aggregate;
  /** fetch data from the table: "revisions" using primary key columns */
  revisions_by_pk?: Maybe<Revisions>;
  /** An array relationship */
  roles: Array<Roles>;
  /** An aggregate relationship */
  roles_aggregate: Roles_Aggregate;
  /** fetch data from the table: "roles" using primary key columns */
  roles_by_pk?: Maybe<Roles>;
  /** An array relationship */
  service_orders: Array<Service_Orders>;
  /** An aggregate relationship */
  service_orders_aggregate: Service_Orders_Aggregate;
  /** fetch data from the table: "service_orders" using primary key columns */
  service_orders_by_pk?: Maybe<Service_Orders>;
  /** An array relationship */
  support_levels: Array<Support_Levels>;
  /** An aggregate relationship */
  support_levels_aggregate: Support_Levels_Aggregate;
  /** fetch data from the table: "support_levels" using primary key columns */
  support_levels_by_pk?: Maybe<Support_Levels>;
  /** fetch data from the table: "tenant_invitation" */
  tenant_invitation: Array<Tenant_Invitation>;
  /** fetch aggregated fields from the table: "tenant_invitation" */
  tenant_invitation_aggregate: Tenant_Invitation_Aggregate;
  /** fetch data from the table: "tenant_invitation" using primary key columns */
  tenant_invitation_by_pk?: Maybe<Tenant_Invitation>;
  /** fetch data from the table: "tenant_user_access" */
  tenant_user_access: Array<Tenant_User_Access>;
  /** fetch aggregated fields from the table: "tenant_user_access" */
  tenant_user_access_aggregate: Tenant_User_Access_Aggregate;
  /** fetch data from the table: "tenant_user_access" using primary key columns */
  tenant_user_access_by_pk?: Maybe<Tenant_User_Access>;
  /** An array relationship */
  tenants: Array<Tenants>;
  /** An aggregate relationship */
  tenants_aggregate: Tenants_Aggregate;
  /** fetch data from the table: "tenants" using primary key columns */
  tenants_by_pk?: Maybe<Tenants>;
  /** An array relationship */
  time_on_road: Array<Time_On_Road>;
  /** An aggregate relationship */
  time_on_road_aggregate: Time_On_Road_Aggregate;
  /** fetch data from the table: "time_on_road" using primary key columns */
  time_on_road_by_pk?: Maybe<Time_On_Road>;
  /** An array relationship */
  tzb_custom_fields: Array<Tzb_Custom_Fields>;
  /** An aggregate relationship */
  tzb_custom_fields_aggregate: Tzb_Custom_Fields_Aggregate;
  /** fetch data from the table: "tzb_custom_fields" using primary key columns */
  tzb_custom_fields_by_pk?: Maybe<Tzb_Custom_Fields>;
  /** An array relationship */
  tzbs: Array<Tzbs>;
  /** An aggregate relationship */
  tzbs_aggregate: Tzbs_Aggregate;
  /** fetch data from the table: "tzbs" using primary key columns */
  tzbs_by_pk?: Maybe<Tzbs>;
  /** An array relationship */
  users: Array<Users>;
  /** An aggregate relationship */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** An array relationship */
  workers: Array<Workers>;
  /** An aggregate relationship */
  workers_aggregate: Workers_Aggregate;
  /** fetch data from the table: "workers" using primary key columns */
  workers_by_pk?: Maybe<Workers>;
};


export type Query_RootAccidentsArgs = {
  distinct_on?: InputMaybe<Array<Accidents_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Accidents_Order_By>>;
  where?: InputMaybe<Accidents_Bool_Exp>;
};


export type Query_RootAccidents_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Accidents_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Accidents_Order_By>>;
  where?: InputMaybe<Accidents_Bool_Exp>;
};


export type Query_RootAccidents_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootAction_NotesArgs = {
  distinct_on?: InputMaybe<Array<Action_Notes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Action_Notes_Order_By>>;
  where?: InputMaybe<Action_Notes_Bool_Exp>;
};


export type Query_RootAction_Notes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Action_Notes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Action_Notes_Order_By>>;
  where?: InputMaybe<Action_Notes_Bool_Exp>;
};


export type Query_RootAction_Notes_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootActions_Template_JobsArgs = {
  distinct_on?: InputMaybe<Array<Actions_Template_Jobs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Actions_Template_Jobs_Order_By>>;
  where?: InputMaybe<Actions_Template_Jobs_Bool_Exp>;
};


export type Query_RootActions_Template_Jobs_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Actions_Template_Jobs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Actions_Template_Jobs_Order_By>>;
  where?: InputMaybe<Actions_Template_Jobs_Bool_Exp>;
};


export type Query_RootActions_Template_Jobs_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootActions_TemplatesArgs = {
  distinct_on?: InputMaybe<Array<Actions_Templates_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Actions_Templates_Order_By>>;
  where?: InputMaybe<Actions_Templates_Bool_Exp>;
};


export type Query_RootActions_Templates_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Actions_Templates_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Actions_Templates_Order_By>>;
  where?: InputMaybe<Actions_Templates_Bool_Exp>;
};


export type Query_RootActions_Templates_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootBuildingsArgs = {
  distinct_on?: InputMaybe<Array<Buildings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Buildings_Order_By>>;
  where?: InputMaybe<Buildings_Bool_Exp>;
};


export type Query_RootBuildings_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Buildings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Buildings_Order_By>>;
  where?: InputMaybe<Buildings_Bool_Exp>;
};


export type Query_RootBuildings_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootChecksArgs = {
  distinct_on?: InputMaybe<Array<Checks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Checks_Order_By>>;
  where?: InputMaybe<Checks_Bool_Exp>;
};


export type Query_RootChecks_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Checks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Checks_Order_By>>;
  where?: InputMaybe<Checks_Bool_Exp>;
};


export type Query_RootChecks_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootConsumed_MaterialArgs = {
  distinct_on?: InputMaybe<Array<Consumed_Material_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Consumed_Material_Order_By>>;
  where?: InputMaybe<Consumed_Material_Bool_Exp>;
};


export type Query_RootConsumed_Material_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Consumed_Material_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Consumed_Material_Order_By>>;
  where?: InputMaybe<Consumed_Material_Bool_Exp>;
};


export type Query_RootConsumed_Material_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootContactsArgs = {
  distinct_on?: InputMaybe<Array<Contacts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Contacts_Order_By>>;
  where?: InputMaybe<Contacts_Bool_Exp>;
};


export type Query_RootContacts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Contacts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Contacts_Order_By>>;
  where?: InputMaybe<Contacts_Bool_Exp>;
};


export type Query_RootContacts_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootCustomersArgs = {
  distinct_on?: InputMaybe<Array<Customers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Customers_Order_By>>;
  where?: InputMaybe<Customers_Bool_Exp>;
};


export type Query_RootCustomers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Customers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Customers_Order_By>>;
  where?: InputMaybe<Customers_Bool_Exp>;
};


export type Query_RootCustomers_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootDevice_ParametersArgs = {
  distinct_on?: InputMaybe<Array<Device_Parameters_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Device_Parameters_Order_By>>;
  where?: InputMaybe<Device_Parameters_Bool_Exp>;
};


export type Query_RootDevice_Parameters_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Device_Parameters_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Device_Parameters_Order_By>>;
  where?: InputMaybe<Device_Parameters_Bool_Exp>;
};


export type Query_RootDevice_Parameters_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootDevice_UrlsArgs = {
  distinct_on?: InputMaybe<Array<Device_Urls_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Device_Urls_Order_By>>;
  where?: InputMaybe<Device_Urls_Bool_Exp>;
};


export type Query_RootDevice_Urls_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Device_Urls_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Device_Urls_Order_By>>;
  where?: InputMaybe<Device_Urls_Bool_Exp>;
};


export type Query_RootDevice_Urls_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootDevicesArgs = {
  distinct_on?: InputMaybe<Array<Devices_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Devices_Order_By>>;
  where?: InputMaybe<Devices_Bool_Exp>;
};


export type Query_RootDevices_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Devices_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Devices_Order_By>>;
  where?: InputMaybe<Devices_Bool_Exp>;
};


export type Query_RootDevices_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootDevices_CatalogArgs = {
  distinct_on?: InputMaybe<Array<Devices_Catalog_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Devices_Catalog_Order_By>>;
  where?: InputMaybe<Devices_Catalog_Bool_Exp>;
};


export type Query_RootDevices_Catalog_Actions_TemplatesArgs = {
  distinct_on?: InputMaybe<Array<Devices_Catalog_Actions_Templates_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Devices_Catalog_Actions_Templates_Order_By>>;
  where?: InputMaybe<Devices_Catalog_Actions_Templates_Bool_Exp>;
};


export type Query_RootDevices_Catalog_Actions_Templates_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Devices_Catalog_Actions_Templates_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Devices_Catalog_Actions_Templates_Order_By>>;
  where?: InputMaybe<Devices_Catalog_Actions_Templates_Bool_Exp>;
};


export type Query_RootDevices_Catalog_Actions_Templates_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootDevices_Catalog_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Devices_Catalog_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Devices_Catalog_Order_By>>;
  where?: InputMaybe<Devices_Catalog_Bool_Exp>;
};


export type Query_RootDevices_Catalog_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootDevices_Catalog_FilesArgs = {
  distinct_on?: InputMaybe<Array<Devices_Catalog_Files_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Devices_Catalog_Files_Order_By>>;
  where?: InputMaybe<Devices_Catalog_Files_Bool_Exp>;
};


export type Query_RootDevices_Catalog_Files_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Devices_Catalog_Files_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Devices_Catalog_Files_Order_By>>;
  where?: InputMaybe<Devices_Catalog_Files_Bool_Exp>;
};


export type Query_RootDevices_Catalog_Files_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootEducation_VideosArgs = {
  distinct_on?: InputMaybe<Array<Education_Videos_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Education_Videos_Order_By>>;
  where?: InputMaybe<Education_Videos_Bool_Exp>;
};


export type Query_RootEducation_Videos_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Education_Videos_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Education_Videos_Order_By>>;
  where?: InputMaybe<Education_Videos_Bool_Exp>;
};


export type Query_RootEducation_Videos_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootFavoriteArgs = {
  distinct_on?: InputMaybe<Array<Favorite_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Favorite_Order_By>>;
  where?: InputMaybe<Favorite_Bool_Exp>;
};


export type Query_RootFavorite_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Favorite_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Favorite_Order_By>>;
  where?: InputMaybe<Favorite_Bool_Exp>;
};


export type Query_RootFavorite_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootFilesArgs = {
  distinct_on?: InputMaybe<Array<Files_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Files_Order_By>>;
  where?: InputMaybe<Files_Bool_Exp>;
};


export type Query_RootFiles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Files_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Files_Order_By>>;
  where?: InputMaybe<Files_Bool_Exp>;
};


export type Query_RootFiles_BozpArgs = {
  distinct_on?: InputMaybe<Array<Files_Bozp_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Files_Bozp_Order_By>>;
  where?: InputMaybe<Files_Bozp_Bool_Exp>;
};


export type Query_RootFiles_Bozp_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Files_Bozp_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Files_Bozp_Order_By>>;
  where?: InputMaybe<Files_Bozp_Bool_Exp>;
};


export type Query_RootFiles_Bozp_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootFiles_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootFiles_ChecksArgs = {
  distinct_on?: InputMaybe<Array<Files_Checks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Files_Checks_Order_By>>;
  where?: InputMaybe<Files_Checks_Bool_Exp>;
};


export type Query_RootFiles_Checks_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Files_Checks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Files_Checks_Order_By>>;
  where?: InputMaybe<Files_Checks_Bool_Exp>;
};


export type Query_RootFiles_Checks_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootFiles_FotodocumentationArgs = {
  distinct_on?: InputMaybe<Array<Files_Fotodocumentation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Files_Fotodocumentation_Order_By>>;
  where?: InputMaybe<Files_Fotodocumentation_Bool_Exp>;
};


export type Query_RootFiles_Fotodocumentation_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Files_Fotodocumentation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Files_Fotodocumentation_Order_By>>;
  where?: InputMaybe<Files_Fotodocumentation_Bool_Exp>;
};


export type Query_RootFiles_Fotodocumentation_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootFiles_Local_Operating_RulesArgs = {
  distinct_on?: InputMaybe<Array<Files_Local_Operating_Rules_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Files_Local_Operating_Rules_Order_By>>;
  where?: InputMaybe<Files_Local_Operating_Rules_Bool_Exp>;
};


export type Query_RootFiles_Local_Operating_Rules_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Files_Local_Operating_Rules_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Files_Local_Operating_Rules_Order_By>>;
  where?: InputMaybe<Files_Local_Operating_Rules_Bool_Exp>;
};


export type Query_RootFiles_Local_Operating_Rules_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootFiles_OthersArgs = {
  distinct_on?: InputMaybe<Array<Files_Others_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Files_Others_Order_By>>;
  where?: InputMaybe<Files_Others_Bool_Exp>;
};


export type Query_RootFiles_Others_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Files_Others_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Files_Others_Order_By>>;
  where?: InputMaybe<Files_Others_Bool_Exp>;
};


export type Query_RootFiles_Others_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootFiles_Project_DocumentationArgs = {
  distinct_on?: InputMaybe<Array<Files_Project_Documentation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Files_Project_Documentation_Order_By>>;
  where?: InputMaybe<Files_Project_Documentation_Bool_Exp>;
};


export type Query_RootFiles_Project_Documentation_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Files_Project_Documentation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Files_Project_Documentation_Order_By>>;
  where?: InputMaybe<Files_Project_Documentation_Bool_Exp>;
};


export type Query_RootFiles_Project_Documentation_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootFiles_RevisionsArgs = {
  distinct_on?: InputMaybe<Array<Files_Revisions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Files_Revisions_Order_By>>;
  where?: InputMaybe<Files_Revisions_Bool_Exp>;
};


export type Query_RootFiles_Revisions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Files_Revisions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Files_Revisions_Order_By>>;
  where?: InputMaybe<Files_Revisions_Bool_Exp>;
};


export type Query_RootFiles_Revisions_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootFiles_RisksArgs = {
  distinct_on?: InputMaybe<Array<Files_Risks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Files_Risks_Order_By>>;
  where?: InputMaybe<Files_Risks_Bool_Exp>;
};


export type Query_RootFiles_Risks_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Files_Risks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Files_Risks_Order_By>>;
  where?: InputMaybe<Files_Risks_Bool_Exp>;
};


export type Query_RootFiles_Risks_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootFull_ChecksArgs = {
  distinct_on?: InputMaybe<Array<Full_Checks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Full_Checks_Order_By>>;
  where?: InputMaybe<Full_Checks_Bool_Exp>;
};


export type Query_RootFull_Checks_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Full_Checks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Full_Checks_Order_By>>;
  where?: InputMaybe<Full_Checks_Bool_Exp>;
};


export type Query_RootFull_Checks_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootFull_RevisionsArgs = {
  distinct_on?: InputMaybe<Array<Full_Revisions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Full_Revisions_Order_By>>;
  where?: InputMaybe<Full_Revisions_Bool_Exp>;
};


export type Query_RootFull_Revisions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Full_Revisions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Full_Revisions_Order_By>>;
  where?: InputMaybe<Full_Revisions_Bool_Exp>;
};


export type Query_RootFull_Revisions_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootImportant_NoticesArgs = {
  distinct_on?: InputMaybe<Array<Important_Notices_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Important_Notices_Order_By>>;
  where?: InputMaybe<Important_Notices_Bool_Exp>;
};


export type Query_RootImportant_Notices_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Important_Notices_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Important_Notices_Order_By>>;
  where?: InputMaybe<Important_Notices_Bool_Exp>;
};


export type Query_RootImportant_Notices_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootInvoicesArgs = {
  distinct_on?: InputMaybe<Array<Invoices_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Invoices_Order_By>>;
  where?: InputMaybe<Invoices_Bool_Exp>;
};


export type Query_RootInvoices_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Invoices_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Invoices_Order_By>>;
  where?: InputMaybe<Invoices_Bool_Exp>;
};


export type Query_RootInvoices_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootKupr_Difficulty_LevelsArgs = {
  distinct_on?: InputMaybe<Array<Kupr_Difficulty_Levels_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Kupr_Difficulty_Levels_Order_By>>;
  where?: InputMaybe<Kupr_Difficulty_Levels_Bool_Exp>;
};


export type Query_RootKupr_Difficulty_Levels_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Kupr_Difficulty_Levels_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Kupr_Difficulty_Levels_Order_By>>;
  where?: InputMaybe<Kupr_Difficulty_Levels_Bool_Exp>;
};


export type Query_RootKupr_Difficulty_Levels_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootKupr_PostsArgs = {
  distinct_on?: InputMaybe<Array<Kupr_Posts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Kupr_Posts_Order_By>>;
  where?: InputMaybe<Kupr_Posts_Bool_Exp>;
};


export type Query_RootKupr_Posts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Kupr_Posts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Kupr_Posts_Order_By>>;
  where?: InputMaybe<Kupr_Posts_Bool_Exp>;
};


export type Query_RootKupr_Posts_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootMy_UserArgs = {
  distinct_on?: InputMaybe<Array<My_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<My_User_Order_By>>;
  where?: InputMaybe<My_User_Bool_Exp>;
};


export type Query_RootMy_User_AggregateArgs = {
  distinct_on?: InputMaybe<Array<My_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<My_User_Order_By>>;
  where?: InputMaybe<My_User_Bool_Exp>;
};


export type Query_RootOperation_Log_Custom_FieldsArgs = {
  distinct_on?: InputMaybe<Array<Operation_Log_Custom_Fields_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Operation_Log_Custom_Fields_Order_By>>;
  where?: InputMaybe<Operation_Log_Custom_Fields_Bool_Exp>;
};


export type Query_RootOperation_Log_Custom_Fields_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Operation_Log_Custom_Fields_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Operation_Log_Custom_Fields_Order_By>>;
  where?: InputMaybe<Operation_Log_Custom_Fields_Bool_Exp>;
};


export type Query_RootOperation_Log_Custom_Fields_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootOperation_LogsArgs = {
  distinct_on?: InputMaybe<Array<Operation_Logs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Operation_Logs_Order_By>>;
  where?: InputMaybe<Operation_Logs_Bool_Exp>;
};


export type Query_RootOperation_Logs_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Operation_Logs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Operation_Logs_Order_By>>;
  where?: InputMaybe<Operation_Logs_Bool_Exp>;
};


export type Query_RootOperation_Logs_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootOther_ExpensesArgs = {
  distinct_on?: InputMaybe<Array<Other_Expenses_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Other_Expenses_Order_By>>;
  where?: InputMaybe<Other_Expenses_Bool_Exp>;
};


export type Query_RootOther_Expenses_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Other_Expenses_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Other_Expenses_Order_By>>;
  where?: InputMaybe<Other_Expenses_Bool_Exp>;
};


export type Query_RootOther_Expenses_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootPassword_Reset_RequestsArgs = {
  distinct_on?: InputMaybe<Array<Password_Reset_Requests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Password_Reset_Requests_Order_By>>;
  where?: InputMaybe<Password_Reset_Requests_Bool_Exp>;
};


export type Query_RootPassword_Reset_Requests_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Password_Reset_Requests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Password_Reset_Requests_Order_By>>;
  where?: InputMaybe<Password_Reset_Requests_Bool_Exp>;
};


export type Query_RootPassword_Reset_Requests_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootPricingArgs = {
  distinct_on?: InputMaybe<Array<Pricing_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Pricing_Order_By>>;
  where?: InputMaybe<Pricing_Bool_Exp>;
};


export type Query_RootPricing_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Pricing_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Pricing_Order_By>>;
  where?: InputMaybe<Pricing_Bool_Exp>;
};


export type Query_RootPricing_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootRevisionsArgs = {
  distinct_on?: InputMaybe<Array<Revisions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Revisions_Order_By>>;
  where?: InputMaybe<Revisions_Bool_Exp>;
};


export type Query_RootRevisions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Revisions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Revisions_Order_By>>;
  where?: InputMaybe<Revisions_Bool_Exp>;
};


export type Query_RootRevisions_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootRolesArgs = {
  distinct_on?: InputMaybe<Array<Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Roles_Order_By>>;
  where?: InputMaybe<Roles_Bool_Exp>;
};


export type Query_RootRoles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Roles_Order_By>>;
  where?: InputMaybe<Roles_Bool_Exp>;
};


export type Query_RootRoles_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootService_OrdersArgs = {
  distinct_on?: InputMaybe<Array<Service_Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Service_Orders_Order_By>>;
  where?: InputMaybe<Service_Orders_Bool_Exp>;
};


export type Query_RootService_Orders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Service_Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Service_Orders_Order_By>>;
  where?: InputMaybe<Service_Orders_Bool_Exp>;
};


export type Query_RootService_Orders_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootSupport_LevelsArgs = {
  distinct_on?: InputMaybe<Array<Support_Levels_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Support_Levels_Order_By>>;
  where?: InputMaybe<Support_Levels_Bool_Exp>;
};


export type Query_RootSupport_Levels_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Support_Levels_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Support_Levels_Order_By>>;
  where?: InputMaybe<Support_Levels_Bool_Exp>;
};


export type Query_RootSupport_Levels_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootTenant_InvitationArgs = {
  distinct_on?: InputMaybe<Array<Tenant_Invitation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tenant_Invitation_Order_By>>;
  where?: InputMaybe<Tenant_Invitation_Bool_Exp>;
};


export type Query_RootTenant_Invitation_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tenant_Invitation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tenant_Invitation_Order_By>>;
  where?: InputMaybe<Tenant_Invitation_Bool_Exp>;
};


export type Query_RootTenant_Invitation_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootTenant_User_AccessArgs = {
  distinct_on?: InputMaybe<Array<Tenant_User_Access_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tenant_User_Access_Order_By>>;
  where?: InputMaybe<Tenant_User_Access_Bool_Exp>;
};


export type Query_RootTenant_User_Access_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tenant_User_Access_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tenant_User_Access_Order_By>>;
  where?: InputMaybe<Tenant_User_Access_Bool_Exp>;
};


export type Query_RootTenant_User_Access_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootTenantsArgs = {
  distinct_on?: InputMaybe<Array<Tenants_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tenants_Order_By>>;
  where?: InputMaybe<Tenants_Bool_Exp>;
};


export type Query_RootTenants_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tenants_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tenants_Order_By>>;
  where?: InputMaybe<Tenants_Bool_Exp>;
};


export type Query_RootTenants_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootTime_On_RoadArgs = {
  distinct_on?: InputMaybe<Array<Time_On_Road_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Time_On_Road_Order_By>>;
  where?: InputMaybe<Time_On_Road_Bool_Exp>;
};


export type Query_RootTime_On_Road_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Time_On_Road_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Time_On_Road_Order_By>>;
  where?: InputMaybe<Time_On_Road_Bool_Exp>;
};


export type Query_RootTime_On_Road_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootTzb_Custom_FieldsArgs = {
  distinct_on?: InputMaybe<Array<Tzb_Custom_Fields_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tzb_Custom_Fields_Order_By>>;
  where?: InputMaybe<Tzb_Custom_Fields_Bool_Exp>;
};


export type Query_RootTzb_Custom_Fields_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tzb_Custom_Fields_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tzb_Custom_Fields_Order_By>>;
  where?: InputMaybe<Tzb_Custom_Fields_Bool_Exp>;
};


export type Query_RootTzb_Custom_Fields_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootTzbsArgs = {
  distinct_on?: InputMaybe<Array<Tzbs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tzbs_Order_By>>;
  where?: InputMaybe<Tzbs_Bool_Exp>;
};


export type Query_RootTzbs_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tzbs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tzbs_Order_By>>;
  where?: InputMaybe<Tzbs_Bool_Exp>;
};


export type Query_RootTzbs_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootWorkersArgs = {
  distinct_on?: InputMaybe<Array<Workers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Workers_Order_By>>;
  where?: InputMaybe<Workers_Bool_Exp>;
};


export type Query_RootWorkers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Workers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Workers_Order_By>>;
  where?: InputMaybe<Workers_Bool_Exp>;
};


export type Query_RootWorkers_By_PkArgs = {
  id: Scalars['uuid'];
};

/** columns and relationships of "revisions" */
export type Revisions = {
  __typename?: 'revisions';
  action_template: Scalars['uuid'];
  /** An object relationship */
  actions_rel: Actions_Templates;
  created_at: Scalars['date'];
  frequency: Scalars['String'];
  id: Scalars['uuid'];
  /** An array relationship */
  jobs_rel: Array<Actions_Template_Jobs>;
  /** An aggregate relationship */
  jobs_rel_aggregate: Actions_Template_Jobs_Aggregate;
  note?: Maybe<Scalars['String']>;
  tenant: Scalars['uuid'];
  /** An object relationship */
  tenant_rel: Tenants;
  title: Scalars['String'];
  updated_at: Scalars['date'];
};


/** columns and relationships of "revisions" */
export type RevisionsJobs_RelArgs = {
  distinct_on?: InputMaybe<Array<Actions_Template_Jobs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Actions_Template_Jobs_Order_By>>;
  where?: InputMaybe<Actions_Template_Jobs_Bool_Exp>;
};


/** columns and relationships of "revisions" */
export type RevisionsJobs_Rel_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Actions_Template_Jobs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Actions_Template_Jobs_Order_By>>;
  where?: InputMaybe<Actions_Template_Jobs_Bool_Exp>;
};

/** aggregated selection of "revisions" */
export type Revisions_Aggregate = {
  __typename?: 'revisions_aggregate';
  aggregate?: Maybe<Revisions_Aggregate_Fields>;
  nodes: Array<Revisions>;
};

/** aggregate fields of "revisions" */
export type Revisions_Aggregate_Fields = {
  __typename?: 'revisions_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Revisions_Max_Fields>;
  min?: Maybe<Revisions_Min_Fields>;
};


/** aggregate fields of "revisions" */
export type Revisions_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Revisions_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "revisions" */
export type Revisions_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Revisions_Max_Order_By>;
  min?: InputMaybe<Revisions_Min_Order_By>;
};

/** input type for inserting array relation for remote table "revisions" */
export type Revisions_Arr_Rel_Insert_Input = {
  data: Array<Revisions_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Revisions_On_Conflict>;
};

/** Boolean expression to filter rows from the table "revisions". All fields are combined with a logical 'AND'. */
export type Revisions_Bool_Exp = {
  _and?: InputMaybe<Array<Revisions_Bool_Exp>>;
  _not?: InputMaybe<Revisions_Bool_Exp>;
  _or?: InputMaybe<Array<Revisions_Bool_Exp>>;
  action_template?: InputMaybe<Uuid_Comparison_Exp>;
  actions_rel?: InputMaybe<Actions_Templates_Bool_Exp>;
  created_at?: InputMaybe<Date_Comparison_Exp>;
  frequency?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  jobs_rel?: InputMaybe<Actions_Template_Jobs_Bool_Exp>;
  note?: InputMaybe<String_Comparison_Exp>;
  tenant?: InputMaybe<Uuid_Comparison_Exp>;
  tenant_rel?: InputMaybe<Tenants_Bool_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Date_Comparison_Exp>;
};

/** unique or primary key constraints on table "revisions" */
export enum Revisions_Constraint {
  /** unique or primary key constraint on columns "id" */
  RevisionsPkey = 'revisions_pkey'
}

/** input type for inserting data into table "revisions" */
export type Revisions_Insert_Input = {
  action_template?: InputMaybe<Scalars['uuid']>;
  actions_rel?: InputMaybe<Actions_Templates_Obj_Rel_Insert_Input>;
  created_at?: InputMaybe<Scalars['date']>;
  frequency?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  jobs_rel?: InputMaybe<Actions_Template_Jobs_Arr_Rel_Insert_Input>;
  note?: InputMaybe<Scalars['String']>;
  tenant?: InputMaybe<Scalars['uuid']>;
  tenant_rel?: InputMaybe<Tenants_Obj_Rel_Insert_Input>;
  title?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['date']>;
};

/** aggregate max on columns */
export type Revisions_Max_Fields = {
  __typename?: 'revisions_max_fields';
  action_template?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['date']>;
  frequency?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  note?: Maybe<Scalars['String']>;
  tenant?: Maybe<Scalars['uuid']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['date']>;
};

/** order by max() on columns of table "revisions" */
export type Revisions_Max_Order_By = {
  action_template?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  frequency?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  note?: InputMaybe<Order_By>;
  tenant?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Revisions_Min_Fields = {
  __typename?: 'revisions_min_fields';
  action_template?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['date']>;
  frequency?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  note?: Maybe<Scalars['String']>;
  tenant?: Maybe<Scalars['uuid']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['date']>;
};

/** order by min() on columns of table "revisions" */
export type Revisions_Min_Order_By = {
  action_template?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  frequency?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  note?: InputMaybe<Order_By>;
  tenant?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "revisions" */
export type Revisions_Mutation_Response = {
  __typename?: 'revisions_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Revisions>;
};

/** input type for inserting object relation for remote table "revisions" */
export type Revisions_Obj_Rel_Insert_Input = {
  data: Revisions_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Revisions_On_Conflict>;
};

/** on_conflict condition type for table "revisions" */
export type Revisions_On_Conflict = {
  constraint: Revisions_Constraint;
  update_columns?: Array<Revisions_Update_Column>;
  where?: InputMaybe<Revisions_Bool_Exp>;
};

/** Ordering options when selecting data from "revisions". */
export type Revisions_Order_By = {
  action_template?: InputMaybe<Order_By>;
  actions_rel?: InputMaybe<Actions_Templates_Order_By>;
  created_at?: InputMaybe<Order_By>;
  frequency?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  jobs_rel_aggregate?: InputMaybe<Actions_Template_Jobs_Aggregate_Order_By>;
  note?: InputMaybe<Order_By>;
  tenant?: InputMaybe<Order_By>;
  tenant_rel?: InputMaybe<Tenants_Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: revisions */
export type Revisions_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "revisions" */
export enum Revisions_Select_Column {
  /** column name */
  ActionTemplate = 'action_template',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Frequency = 'frequency',
  /** column name */
  Id = 'id',
  /** column name */
  Note = 'note',
  /** column name */
  Tenant = 'tenant',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "revisions" */
export type Revisions_Set_Input = {
  action_template?: InputMaybe<Scalars['uuid']>;
  created_at?: InputMaybe<Scalars['date']>;
  frequency?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  note?: InputMaybe<Scalars['String']>;
  tenant?: InputMaybe<Scalars['uuid']>;
  title?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['date']>;
};

/** update columns of table "revisions" */
export enum Revisions_Update_Column {
  /** column name */
  ActionTemplate = 'action_template',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Frequency = 'frequency',
  /** column name */
  Id = 'id',
  /** column name */
  Note = 'note',
  /** column name */
  Tenant = 'tenant',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** columns and relationships of "roles" */
export type Roles = {
  __typename?: 'roles';
  can_delete_accidents: Scalars['Boolean'];
  can_delete_action_notes: Scalars['Boolean'];
  can_delete_action_templates?: Maybe<Scalars['Boolean']>;
  can_delete_buildings: Scalars['Boolean'];
  can_delete_contacts: Scalars['Boolean'];
  can_delete_customers?: Maybe<Scalars['Boolean']>;
  can_delete_device_catalog: Scalars['Boolean'];
  can_delete_devices: Scalars['Boolean'];
  can_delete_files: Scalars['Boolean'];
  can_delete_full_checks: Scalars['Boolean'];
  can_delete_full_revisions: Scalars['Boolean'];
  can_delete_important_notices?: Maybe<Scalars['Boolean']>;
  can_delete_invoices?: Maybe<Scalars['Boolean']>;
  can_delete_operation_logs?: Maybe<Scalars['Boolean']>;
  can_delete_own_accidents: Scalars['Boolean'];
  can_delete_own_action_notes: Scalars['Boolean'];
  can_delete_own_action_templates?: Maybe<Scalars['Boolean']>;
  can_delete_own_buildings: Scalars['Boolean'];
  can_delete_own_contacts?: Maybe<Scalars['Boolean']>;
  can_delete_own_customers?: Maybe<Scalars['Boolean']>;
  can_delete_own_device_catalog: Scalars['Boolean'];
  can_delete_own_devices: Scalars['Boolean'];
  can_delete_own_files: Scalars['Boolean'];
  can_delete_own_full_checks: Scalars['Boolean'];
  can_delete_own_full_revisions: Scalars['Boolean'];
  can_delete_own_important_notices?: Maybe<Scalars['Boolean']>;
  can_delete_own_invoices?: Maybe<Scalars['Boolean']>;
  can_delete_own_operation_logs?: Maybe<Scalars['Boolean']>;
  can_delete_own_pricing?: Maybe<Scalars['Boolean']>;
  can_delete_own_service_orders?: Maybe<Scalars['Boolean']>;
  can_delete_own_support_levels?: Maybe<Scalars['Boolean']>;
  can_delete_own_tzbs?: Maybe<Scalars['Boolean']>;
  can_delete_pricing?: Maybe<Scalars['Boolean']>;
  can_delete_service_orders?: Maybe<Scalars['Boolean']>;
  can_delete_support_levels?: Maybe<Scalars['Boolean']>;
  can_delete_tzbs?: Maybe<Scalars['Boolean']>;
  can_edit_accidents: Scalars['Boolean'];
  can_edit_action_notes: Scalars['Boolean'];
  can_edit_action_templates?: Maybe<Scalars['Boolean']>;
  can_edit_buildings: Scalars['Boolean'];
  can_edit_contacts: Scalars['Boolean'];
  can_edit_customers?: Maybe<Scalars['Boolean']>;
  can_edit_device_catalog: Scalars['Boolean'];
  can_edit_full_checks: Scalars['Boolean'];
  can_edit_full_revisions: Scalars['Boolean'];
  can_edit_important_notices?: Maybe<Scalars['Boolean']>;
  can_edit_invoices?: Maybe<Scalars['Boolean']>;
  can_edit_operation_logs?: Maybe<Scalars['Boolean']>;
  can_edit_pricing?: Maybe<Scalars['Boolean']>;
  can_edit_service_orders?: Maybe<Scalars['Boolean']>;
  can_edit_support_levels?: Maybe<Scalars['Boolean']>;
  can_edit_tzbs?: Maybe<Scalars['Boolean']>;
  can_edit_users: Scalars['Boolean'];
  can_manage_requirements_row: Scalars['Boolean'];
  can_manage_service_orders_row: Scalars['Boolean'];
  can_read_accidents: Scalars['Boolean'];
  can_read_action_notes: Scalars['Boolean'];
  can_read_action_templates?: Maybe<Scalars['Boolean']>;
  can_read_buildings: Scalars['Boolean'];
  can_read_contacts: Scalars['Boolean'];
  can_read_customers?: Maybe<Scalars['Boolean']>;
  can_read_device_catalog: Scalars['Boolean'];
  can_read_devices: Scalars['Boolean'];
  can_read_files: Scalars['Boolean'];
  can_read_full_checks: Scalars['Boolean'];
  can_read_full_revisions: Scalars['Boolean'];
  can_read_important_notices?: Maybe<Scalars['Boolean']>;
  can_read_invoices?: Maybe<Scalars['Boolean']>;
  can_read_operation_logs?: Maybe<Scalars['Boolean']>;
  can_read_pricing?: Maybe<Scalars['Boolean']>;
  can_read_requirements_row: Scalars['Boolean'];
  can_read_service_orders?: Maybe<Scalars['Boolean']>;
  can_read_service_orders_row?: Maybe<Scalars['Boolean']>;
  can_read_support_levels?: Maybe<Scalars['Boolean']>;
  can_read_tzbs?: Maybe<Scalars['Boolean']>;
  can_read_users: Scalars['Boolean'];
  can_write_accidents: Scalars['Boolean'];
  can_write_action_notes: Scalars['Boolean'];
  can_write_action_templates?: Maybe<Scalars['Boolean']>;
  can_write_buildings: Scalars['Boolean'];
  can_write_contacts: Scalars['Boolean'];
  can_write_customers?: Maybe<Scalars['Boolean']>;
  can_write_device_catalog: Scalars['Boolean'];
  can_write_devices: Scalars['Boolean'];
  can_write_files: Scalars['Boolean'];
  can_write_full_checks: Scalars['Boolean'];
  can_write_full_revisions: Scalars['Boolean'];
  can_write_important_notices?: Maybe<Scalars['Boolean']>;
  can_write_invoices?: Maybe<Scalars['Boolean']>;
  can_write_operation_logs?: Maybe<Scalars['Boolean']>;
  can_write_pricing?: Maybe<Scalars['Boolean']>;
  can_write_service_orders?: Maybe<Scalars['Boolean']>;
  can_write_support_levels?: Maybe<Scalars['Boolean']>;
  can_write_tzbs?: Maybe<Scalars['Boolean']>;
  can_write_users: Scalars['Boolean'];
  created_at: Scalars['date'];
  id: Scalars['uuid'];
  role_name: Scalars['String'];
  tenant: Scalars['uuid'];
  /** An array relationship */
  tenant_invitations: Array<Tenant_Invitation>;
  /** An aggregate relationship */
  tenant_invitations_aggregate: Tenant_Invitation_Aggregate;
  /** An object relationship */
  tenant_rel: Tenants;
  /** An array relationship */
  tenant_user_accesses: Array<Tenant_User_Access>;
  /** An aggregate relationship */
  tenant_user_accesses_aggregate: Tenant_User_Access_Aggregate;
  updated_at: Scalars['date'];
  /** An array relationship */
  users: Array<Users>;
  /** An aggregate relationship */
  users_aggregate: Users_Aggregate;
};


/** columns and relationships of "roles" */
export type RolesTenant_InvitationsArgs = {
  distinct_on?: InputMaybe<Array<Tenant_Invitation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tenant_Invitation_Order_By>>;
  where?: InputMaybe<Tenant_Invitation_Bool_Exp>;
};


/** columns and relationships of "roles" */
export type RolesTenant_Invitations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tenant_Invitation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tenant_Invitation_Order_By>>;
  where?: InputMaybe<Tenant_Invitation_Bool_Exp>;
};


/** columns and relationships of "roles" */
export type RolesTenant_User_AccessesArgs = {
  distinct_on?: InputMaybe<Array<Tenant_User_Access_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tenant_User_Access_Order_By>>;
  where?: InputMaybe<Tenant_User_Access_Bool_Exp>;
};


/** columns and relationships of "roles" */
export type RolesTenant_User_Accesses_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tenant_User_Access_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tenant_User_Access_Order_By>>;
  where?: InputMaybe<Tenant_User_Access_Bool_Exp>;
};


/** columns and relationships of "roles" */
export type RolesUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


/** columns and relationships of "roles" */
export type RolesUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** aggregated selection of "roles" */
export type Roles_Aggregate = {
  __typename?: 'roles_aggregate';
  aggregate?: Maybe<Roles_Aggregate_Fields>;
  nodes: Array<Roles>;
};

/** aggregate fields of "roles" */
export type Roles_Aggregate_Fields = {
  __typename?: 'roles_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Roles_Max_Fields>;
  min?: Maybe<Roles_Min_Fields>;
};


/** aggregate fields of "roles" */
export type Roles_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Roles_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "roles" */
export type Roles_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Roles_Max_Order_By>;
  min?: InputMaybe<Roles_Min_Order_By>;
};

/** input type for inserting array relation for remote table "roles" */
export type Roles_Arr_Rel_Insert_Input = {
  data: Array<Roles_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Roles_On_Conflict>;
};

/** Boolean expression to filter rows from the table "roles". All fields are combined with a logical 'AND'. */
export type Roles_Bool_Exp = {
  _and?: InputMaybe<Array<Roles_Bool_Exp>>;
  _not?: InputMaybe<Roles_Bool_Exp>;
  _or?: InputMaybe<Array<Roles_Bool_Exp>>;
  can_delete_accidents?: InputMaybe<Boolean_Comparison_Exp>;
  can_delete_action_notes?: InputMaybe<Boolean_Comparison_Exp>;
  can_delete_action_templates?: InputMaybe<Boolean_Comparison_Exp>;
  can_delete_buildings?: InputMaybe<Boolean_Comparison_Exp>;
  can_delete_contacts?: InputMaybe<Boolean_Comparison_Exp>;
  can_delete_customers?: InputMaybe<Boolean_Comparison_Exp>;
  can_delete_device_catalog?: InputMaybe<Boolean_Comparison_Exp>;
  can_delete_devices?: InputMaybe<Boolean_Comparison_Exp>;
  can_delete_files?: InputMaybe<Boolean_Comparison_Exp>;
  can_delete_full_checks?: InputMaybe<Boolean_Comparison_Exp>;
  can_delete_full_revisions?: InputMaybe<Boolean_Comparison_Exp>;
  can_delete_important_notices?: InputMaybe<Boolean_Comparison_Exp>;
  can_delete_invoices?: InputMaybe<Boolean_Comparison_Exp>;
  can_delete_operation_logs?: InputMaybe<Boolean_Comparison_Exp>;
  can_delete_own_accidents?: InputMaybe<Boolean_Comparison_Exp>;
  can_delete_own_action_notes?: InputMaybe<Boolean_Comparison_Exp>;
  can_delete_own_action_templates?: InputMaybe<Boolean_Comparison_Exp>;
  can_delete_own_buildings?: InputMaybe<Boolean_Comparison_Exp>;
  can_delete_own_contacts?: InputMaybe<Boolean_Comparison_Exp>;
  can_delete_own_customers?: InputMaybe<Boolean_Comparison_Exp>;
  can_delete_own_device_catalog?: InputMaybe<Boolean_Comparison_Exp>;
  can_delete_own_devices?: InputMaybe<Boolean_Comparison_Exp>;
  can_delete_own_files?: InputMaybe<Boolean_Comparison_Exp>;
  can_delete_own_full_checks?: InputMaybe<Boolean_Comparison_Exp>;
  can_delete_own_full_revisions?: InputMaybe<Boolean_Comparison_Exp>;
  can_delete_own_important_notices?: InputMaybe<Boolean_Comparison_Exp>;
  can_delete_own_invoices?: InputMaybe<Boolean_Comparison_Exp>;
  can_delete_own_operation_logs?: InputMaybe<Boolean_Comparison_Exp>;
  can_delete_own_pricing?: InputMaybe<Boolean_Comparison_Exp>;
  can_delete_own_service_orders?: InputMaybe<Boolean_Comparison_Exp>;
  can_delete_own_support_levels?: InputMaybe<Boolean_Comparison_Exp>;
  can_delete_own_tzbs?: InputMaybe<Boolean_Comparison_Exp>;
  can_delete_pricing?: InputMaybe<Boolean_Comparison_Exp>;
  can_delete_service_orders?: InputMaybe<Boolean_Comparison_Exp>;
  can_delete_support_levels?: InputMaybe<Boolean_Comparison_Exp>;
  can_delete_tzbs?: InputMaybe<Boolean_Comparison_Exp>;
  can_edit_accidents?: InputMaybe<Boolean_Comparison_Exp>;
  can_edit_action_notes?: InputMaybe<Boolean_Comparison_Exp>;
  can_edit_action_templates?: InputMaybe<Boolean_Comparison_Exp>;
  can_edit_buildings?: InputMaybe<Boolean_Comparison_Exp>;
  can_edit_contacts?: InputMaybe<Boolean_Comparison_Exp>;
  can_edit_customers?: InputMaybe<Boolean_Comparison_Exp>;
  can_edit_device_catalog?: InputMaybe<Boolean_Comparison_Exp>;
  can_edit_full_checks?: InputMaybe<Boolean_Comparison_Exp>;
  can_edit_full_revisions?: InputMaybe<Boolean_Comparison_Exp>;
  can_edit_important_notices?: InputMaybe<Boolean_Comparison_Exp>;
  can_edit_invoices?: InputMaybe<Boolean_Comparison_Exp>;
  can_edit_operation_logs?: InputMaybe<Boolean_Comparison_Exp>;
  can_edit_pricing?: InputMaybe<Boolean_Comparison_Exp>;
  can_edit_service_orders?: InputMaybe<Boolean_Comparison_Exp>;
  can_edit_support_levels?: InputMaybe<Boolean_Comparison_Exp>;
  can_edit_tzbs?: InputMaybe<Boolean_Comparison_Exp>;
  can_edit_users?: InputMaybe<Boolean_Comparison_Exp>;
  can_manage_requirements_row?: InputMaybe<Boolean_Comparison_Exp>;
  can_manage_service_orders_row?: InputMaybe<Boolean_Comparison_Exp>;
  can_read_accidents?: InputMaybe<Boolean_Comparison_Exp>;
  can_read_action_notes?: InputMaybe<Boolean_Comparison_Exp>;
  can_read_action_templates?: InputMaybe<Boolean_Comparison_Exp>;
  can_read_buildings?: InputMaybe<Boolean_Comparison_Exp>;
  can_read_contacts?: InputMaybe<Boolean_Comparison_Exp>;
  can_read_customers?: InputMaybe<Boolean_Comparison_Exp>;
  can_read_device_catalog?: InputMaybe<Boolean_Comparison_Exp>;
  can_read_devices?: InputMaybe<Boolean_Comparison_Exp>;
  can_read_files?: InputMaybe<Boolean_Comparison_Exp>;
  can_read_full_checks?: InputMaybe<Boolean_Comparison_Exp>;
  can_read_full_revisions?: InputMaybe<Boolean_Comparison_Exp>;
  can_read_important_notices?: InputMaybe<Boolean_Comparison_Exp>;
  can_read_invoices?: InputMaybe<Boolean_Comparison_Exp>;
  can_read_operation_logs?: InputMaybe<Boolean_Comparison_Exp>;
  can_read_pricing?: InputMaybe<Boolean_Comparison_Exp>;
  can_read_requirements_row?: InputMaybe<Boolean_Comparison_Exp>;
  can_read_service_orders?: InputMaybe<Boolean_Comparison_Exp>;
  can_read_service_orders_row?: InputMaybe<Boolean_Comparison_Exp>;
  can_read_support_levels?: InputMaybe<Boolean_Comparison_Exp>;
  can_read_tzbs?: InputMaybe<Boolean_Comparison_Exp>;
  can_read_users?: InputMaybe<Boolean_Comparison_Exp>;
  can_write_accidents?: InputMaybe<Boolean_Comparison_Exp>;
  can_write_action_notes?: InputMaybe<Boolean_Comparison_Exp>;
  can_write_action_templates?: InputMaybe<Boolean_Comparison_Exp>;
  can_write_buildings?: InputMaybe<Boolean_Comparison_Exp>;
  can_write_contacts?: InputMaybe<Boolean_Comparison_Exp>;
  can_write_customers?: InputMaybe<Boolean_Comparison_Exp>;
  can_write_device_catalog?: InputMaybe<Boolean_Comparison_Exp>;
  can_write_devices?: InputMaybe<Boolean_Comparison_Exp>;
  can_write_files?: InputMaybe<Boolean_Comparison_Exp>;
  can_write_full_checks?: InputMaybe<Boolean_Comparison_Exp>;
  can_write_full_revisions?: InputMaybe<Boolean_Comparison_Exp>;
  can_write_important_notices?: InputMaybe<Boolean_Comparison_Exp>;
  can_write_invoices?: InputMaybe<Boolean_Comparison_Exp>;
  can_write_operation_logs?: InputMaybe<Boolean_Comparison_Exp>;
  can_write_pricing?: InputMaybe<Boolean_Comparison_Exp>;
  can_write_service_orders?: InputMaybe<Boolean_Comparison_Exp>;
  can_write_support_levels?: InputMaybe<Boolean_Comparison_Exp>;
  can_write_tzbs?: InputMaybe<Boolean_Comparison_Exp>;
  can_write_users?: InputMaybe<Boolean_Comparison_Exp>;
  created_at?: InputMaybe<Date_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  role_name?: InputMaybe<String_Comparison_Exp>;
  tenant?: InputMaybe<Uuid_Comparison_Exp>;
  tenant_invitations?: InputMaybe<Tenant_Invitation_Bool_Exp>;
  tenant_rel?: InputMaybe<Tenants_Bool_Exp>;
  tenant_user_accesses?: InputMaybe<Tenant_User_Access_Bool_Exp>;
  updated_at?: InputMaybe<Date_Comparison_Exp>;
  users?: InputMaybe<Users_Bool_Exp>;
};

/** unique or primary key constraints on table "roles" */
export enum Roles_Constraint {
  /** unique or primary key constraint on columns "id" */
  RolesPkey = 'roles_pkey'
}

/** input type for inserting data into table "roles" */
export type Roles_Insert_Input = {
  can_delete_accidents?: InputMaybe<Scalars['Boolean']>;
  can_delete_action_notes?: InputMaybe<Scalars['Boolean']>;
  can_delete_action_templates?: InputMaybe<Scalars['Boolean']>;
  can_delete_buildings?: InputMaybe<Scalars['Boolean']>;
  can_delete_contacts?: InputMaybe<Scalars['Boolean']>;
  can_delete_customers?: InputMaybe<Scalars['Boolean']>;
  can_delete_device_catalog?: InputMaybe<Scalars['Boolean']>;
  can_delete_devices?: InputMaybe<Scalars['Boolean']>;
  can_delete_files?: InputMaybe<Scalars['Boolean']>;
  can_delete_full_checks?: InputMaybe<Scalars['Boolean']>;
  can_delete_full_revisions?: InputMaybe<Scalars['Boolean']>;
  can_delete_important_notices?: InputMaybe<Scalars['Boolean']>;
  can_delete_invoices?: InputMaybe<Scalars['Boolean']>;
  can_delete_operation_logs?: InputMaybe<Scalars['Boolean']>;
  can_delete_own_accidents?: InputMaybe<Scalars['Boolean']>;
  can_delete_own_action_notes?: InputMaybe<Scalars['Boolean']>;
  can_delete_own_action_templates?: InputMaybe<Scalars['Boolean']>;
  can_delete_own_buildings?: InputMaybe<Scalars['Boolean']>;
  can_delete_own_contacts?: InputMaybe<Scalars['Boolean']>;
  can_delete_own_customers?: InputMaybe<Scalars['Boolean']>;
  can_delete_own_device_catalog?: InputMaybe<Scalars['Boolean']>;
  can_delete_own_devices?: InputMaybe<Scalars['Boolean']>;
  can_delete_own_files?: InputMaybe<Scalars['Boolean']>;
  can_delete_own_full_checks?: InputMaybe<Scalars['Boolean']>;
  can_delete_own_full_revisions?: InputMaybe<Scalars['Boolean']>;
  can_delete_own_important_notices?: InputMaybe<Scalars['Boolean']>;
  can_delete_own_invoices?: InputMaybe<Scalars['Boolean']>;
  can_delete_own_operation_logs?: InputMaybe<Scalars['Boolean']>;
  can_delete_own_pricing?: InputMaybe<Scalars['Boolean']>;
  can_delete_own_service_orders?: InputMaybe<Scalars['Boolean']>;
  can_delete_own_support_levels?: InputMaybe<Scalars['Boolean']>;
  can_delete_own_tzbs?: InputMaybe<Scalars['Boolean']>;
  can_delete_pricing?: InputMaybe<Scalars['Boolean']>;
  can_delete_service_orders?: InputMaybe<Scalars['Boolean']>;
  can_delete_support_levels?: InputMaybe<Scalars['Boolean']>;
  can_delete_tzbs?: InputMaybe<Scalars['Boolean']>;
  can_edit_accidents?: InputMaybe<Scalars['Boolean']>;
  can_edit_action_notes?: InputMaybe<Scalars['Boolean']>;
  can_edit_action_templates?: InputMaybe<Scalars['Boolean']>;
  can_edit_buildings?: InputMaybe<Scalars['Boolean']>;
  can_edit_contacts?: InputMaybe<Scalars['Boolean']>;
  can_edit_customers?: InputMaybe<Scalars['Boolean']>;
  can_edit_device_catalog?: InputMaybe<Scalars['Boolean']>;
  can_edit_full_checks?: InputMaybe<Scalars['Boolean']>;
  can_edit_full_revisions?: InputMaybe<Scalars['Boolean']>;
  can_edit_important_notices?: InputMaybe<Scalars['Boolean']>;
  can_edit_invoices?: InputMaybe<Scalars['Boolean']>;
  can_edit_operation_logs?: InputMaybe<Scalars['Boolean']>;
  can_edit_pricing?: InputMaybe<Scalars['Boolean']>;
  can_edit_service_orders?: InputMaybe<Scalars['Boolean']>;
  can_edit_support_levels?: InputMaybe<Scalars['Boolean']>;
  can_edit_tzbs?: InputMaybe<Scalars['Boolean']>;
  can_edit_users?: InputMaybe<Scalars['Boolean']>;
  can_manage_requirements_row?: InputMaybe<Scalars['Boolean']>;
  can_manage_service_orders_row?: InputMaybe<Scalars['Boolean']>;
  can_read_accidents?: InputMaybe<Scalars['Boolean']>;
  can_read_action_notes?: InputMaybe<Scalars['Boolean']>;
  can_read_action_templates?: InputMaybe<Scalars['Boolean']>;
  can_read_buildings?: InputMaybe<Scalars['Boolean']>;
  can_read_contacts?: InputMaybe<Scalars['Boolean']>;
  can_read_customers?: InputMaybe<Scalars['Boolean']>;
  can_read_device_catalog?: InputMaybe<Scalars['Boolean']>;
  can_read_devices?: InputMaybe<Scalars['Boolean']>;
  can_read_files?: InputMaybe<Scalars['Boolean']>;
  can_read_full_checks?: InputMaybe<Scalars['Boolean']>;
  can_read_full_revisions?: InputMaybe<Scalars['Boolean']>;
  can_read_important_notices?: InputMaybe<Scalars['Boolean']>;
  can_read_invoices?: InputMaybe<Scalars['Boolean']>;
  can_read_operation_logs?: InputMaybe<Scalars['Boolean']>;
  can_read_pricing?: InputMaybe<Scalars['Boolean']>;
  can_read_requirements_row?: InputMaybe<Scalars['Boolean']>;
  can_read_service_orders?: InputMaybe<Scalars['Boolean']>;
  can_read_service_orders_row?: InputMaybe<Scalars['Boolean']>;
  can_read_support_levels?: InputMaybe<Scalars['Boolean']>;
  can_read_tzbs?: InputMaybe<Scalars['Boolean']>;
  can_read_users?: InputMaybe<Scalars['Boolean']>;
  can_write_accidents?: InputMaybe<Scalars['Boolean']>;
  can_write_action_notes?: InputMaybe<Scalars['Boolean']>;
  can_write_action_templates?: InputMaybe<Scalars['Boolean']>;
  can_write_buildings?: InputMaybe<Scalars['Boolean']>;
  can_write_contacts?: InputMaybe<Scalars['Boolean']>;
  can_write_customers?: InputMaybe<Scalars['Boolean']>;
  can_write_device_catalog?: InputMaybe<Scalars['Boolean']>;
  can_write_devices?: InputMaybe<Scalars['Boolean']>;
  can_write_files?: InputMaybe<Scalars['Boolean']>;
  can_write_full_checks?: InputMaybe<Scalars['Boolean']>;
  can_write_full_revisions?: InputMaybe<Scalars['Boolean']>;
  can_write_important_notices?: InputMaybe<Scalars['Boolean']>;
  can_write_invoices?: InputMaybe<Scalars['Boolean']>;
  can_write_operation_logs?: InputMaybe<Scalars['Boolean']>;
  can_write_pricing?: InputMaybe<Scalars['Boolean']>;
  can_write_service_orders?: InputMaybe<Scalars['Boolean']>;
  can_write_support_levels?: InputMaybe<Scalars['Boolean']>;
  can_write_tzbs?: InputMaybe<Scalars['Boolean']>;
  can_write_users?: InputMaybe<Scalars['Boolean']>;
  created_at?: InputMaybe<Scalars['date']>;
  id?: InputMaybe<Scalars['uuid']>;
  role_name?: InputMaybe<Scalars['String']>;
  tenant?: InputMaybe<Scalars['uuid']>;
  tenant_invitations?: InputMaybe<Tenant_Invitation_Arr_Rel_Insert_Input>;
  tenant_rel?: InputMaybe<Tenants_Obj_Rel_Insert_Input>;
  tenant_user_accesses?: InputMaybe<Tenant_User_Access_Arr_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['date']>;
  users?: InputMaybe<Users_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Roles_Max_Fields = {
  __typename?: 'roles_max_fields';
  created_at?: Maybe<Scalars['date']>;
  id?: Maybe<Scalars['uuid']>;
  role_name?: Maybe<Scalars['String']>;
  tenant?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['date']>;
};

/** order by max() on columns of table "roles" */
export type Roles_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  role_name?: InputMaybe<Order_By>;
  tenant?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Roles_Min_Fields = {
  __typename?: 'roles_min_fields';
  created_at?: Maybe<Scalars['date']>;
  id?: Maybe<Scalars['uuid']>;
  role_name?: Maybe<Scalars['String']>;
  tenant?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['date']>;
};

/** order by min() on columns of table "roles" */
export type Roles_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  role_name?: InputMaybe<Order_By>;
  tenant?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "roles" */
export type Roles_Mutation_Response = {
  __typename?: 'roles_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Roles>;
};

/** input type for inserting object relation for remote table "roles" */
export type Roles_Obj_Rel_Insert_Input = {
  data: Roles_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Roles_On_Conflict>;
};

/** on_conflict condition type for table "roles" */
export type Roles_On_Conflict = {
  constraint: Roles_Constraint;
  update_columns?: Array<Roles_Update_Column>;
  where?: InputMaybe<Roles_Bool_Exp>;
};

/** Ordering options when selecting data from "roles". */
export type Roles_Order_By = {
  can_delete_accidents?: InputMaybe<Order_By>;
  can_delete_action_notes?: InputMaybe<Order_By>;
  can_delete_action_templates?: InputMaybe<Order_By>;
  can_delete_buildings?: InputMaybe<Order_By>;
  can_delete_contacts?: InputMaybe<Order_By>;
  can_delete_customers?: InputMaybe<Order_By>;
  can_delete_device_catalog?: InputMaybe<Order_By>;
  can_delete_devices?: InputMaybe<Order_By>;
  can_delete_files?: InputMaybe<Order_By>;
  can_delete_full_checks?: InputMaybe<Order_By>;
  can_delete_full_revisions?: InputMaybe<Order_By>;
  can_delete_important_notices?: InputMaybe<Order_By>;
  can_delete_invoices?: InputMaybe<Order_By>;
  can_delete_operation_logs?: InputMaybe<Order_By>;
  can_delete_own_accidents?: InputMaybe<Order_By>;
  can_delete_own_action_notes?: InputMaybe<Order_By>;
  can_delete_own_action_templates?: InputMaybe<Order_By>;
  can_delete_own_buildings?: InputMaybe<Order_By>;
  can_delete_own_contacts?: InputMaybe<Order_By>;
  can_delete_own_customers?: InputMaybe<Order_By>;
  can_delete_own_device_catalog?: InputMaybe<Order_By>;
  can_delete_own_devices?: InputMaybe<Order_By>;
  can_delete_own_files?: InputMaybe<Order_By>;
  can_delete_own_full_checks?: InputMaybe<Order_By>;
  can_delete_own_full_revisions?: InputMaybe<Order_By>;
  can_delete_own_important_notices?: InputMaybe<Order_By>;
  can_delete_own_invoices?: InputMaybe<Order_By>;
  can_delete_own_operation_logs?: InputMaybe<Order_By>;
  can_delete_own_pricing?: InputMaybe<Order_By>;
  can_delete_own_service_orders?: InputMaybe<Order_By>;
  can_delete_own_support_levels?: InputMaybe<Order_By>;
  can_delete_own_tzbs?: InputMaybe<Order_By>;
  can_delete_pricing?: InputMaybe<Order_By>;
  can_delete_service_orders?: InputMaybe<Order_By>;
  can_delete_support_levels?: InputMaybe<Order_By>;
  can_delete_tzbs?: InputMaybe<Order_By>;
  can_edit_accidents?: InputMaybe<Order_By>;
  can_edit_action_notes?: InputMaybe<Order_By>;
  can_edit_action_templates?: InputMaybe<Order_By>;
  can_edit_buildings?: InputMaybe<Order_By>;
  can_edit_contacts?: InputMaybe<Order_By>;
  can_edit_customers?: InputMaybe<Order_By>;
  can_edit_device_catalog?: InputMaybe<Order_By>;
  can_edit_full_checks?: InputMaybe<Order_By>;
  can_edit_full_revisions?: InputMaybe<Order_By>;
  can_edit_important_notices?: InputMaybe<Order_By>;
  can_edit_invoices?: InputMaybe<Order_By>;
  can_edit_operation_logs?: InputMaybe<Order_By>;
  can_edit_pricing?: InputMaybe<Order_By>;
  can_edit_service_orders?: InputMaybe<Order_By>;
  can_edit_support_levels?: InputMaybe<Order_By>;
  can_edit_tzbs?: InputMaybe<Order_By>;
  can_edit_users?: InputMaybe<Order_By>;
  can_manage_requirements_row?: InputMaybe<Order_By>;
  can_manage_service_orders_row?: InputMaybe<Order_By>;
  can_read_accidents?: InputMaybe<Order_By>;
  can_read_action_notes?: InputMaybe<Order_By>;
  can_read_action_templates?: InputMaybe<Order_By>;
  can_read_buildings?: InputMaybe<Order_By>;
  can_read_contacts?: InputMaybe<Order_By>;
  can_read_customers?: InputMaybe<Order_By>;
  can_read_device_catalog?: InputMaybe<Order_By>;
  can_read_devices?: InputMaybe<Order_By>;
  can_read_files?: InputMaybe<Order_By>;
  can_read_full_checks?: InputMaybe<Order_By>;
  can_read_full_revisions?: InputMaybe<Order_By>;
  can_read_important_notices?: InputMaybe<Order_By>;
  can_read_invoices?: InputMaybe<Order_By>;
  can_read_operation_logs?: InputMaybe<Order_By>;
  can_read_pricing?: InputMaybe<Order_By>;
  can_read_requirements_row?: InputMaybe<Order_By>;
  can_read_service_orders?: InputMaybe<Order_By>;
  can_read_service_orders_row?: InputMaybe<Order_By>;
  can_read_support_levels?: InputMaybe<Order_By>;
  can_read_tzbs?: InputMaybe<Order_By>;
  can_read_users?: InputMaybe<Order_By>;
  can_write_accidents?: InputMaybe<Order_By>;
  can_write_action_notes?: InputMaybe<Order_By>;
  can_write_action_templates?: InputMaybe<Order_By>;
  can_write_buildings?: InputMaybe<Order_By>;
  can_write_contacts?: InputMaybe<Order_By>;
  can_write_customers?: InputMaybe<Order_By>;
  can_write_device_catalog?: InputMaybe<Order_By>;
  can_write_devices?: InputMaybe<Order_By>;
  can_write_files?: InputMaybe<Order_By>;
  can_write_full_checks?: InputMaybe<Order_By>;
  can_write_full_revisions?: InputMaybe<Order_By>;
  can_write_important_notices?: InputMaybe<Order_By>;
  can_write_invoices?: InputMaybe<Order_By>;
  can_write_operation_logs?: InputMaybe<Order_By>;
  can_write_pricing?: InputMaybe<Order_By>;
  can_write_service_orders?: InputMaybe<Order_By>;
  can_write_support_levels?: InputMaybe<Order_By>;
  can_write_tzbs?: InputMaybe<Order_By>;
  can_write_users?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  role_name?: InputMaybe<Order_By>;
  tenant?: InputMaybe<Order_By>;
  tenant_invitations_aggregate?: InputMaybe<Tenant_Invitation_Aggregate_Order_By>;
  tenant_rel?: InputMaybe<Tenants_Order_By>;
  tenant_user_accesses_aggregate?: InputMaybe<Tenant_User_Access_Aggregate_Order_By>;
  updated_at?: InputMaybe<Order_By>;
  users_aggregate?: InputMaybe<Users_Aggregate_Order_By>;
};

/** primary key columns input for table: roles */
export type Roles_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "roles" */
export enum Roles_Select_Column {
  /** column name */
  CanDeleteAccidents = 'can_delete_accidents',
  /** column name */
  CanDeleteActionNotes = 'can_delete_action_notes',
  /** column name */
  CanDeleteActionTemplates = 'can_delete_action_templates',
  /** column name */
  CanDeleteBuildings = 'can_delete_buildings',
  /** column name */
  CanDeleteContacts = 'can_delete_contacts',
  /** column name */
  CanDeleteCustomers = 'can_delete_customers',
  /** column name */
  CanDeleteDeviceCatalog = 'can_delete_device_catalog',
  /** column name */
  CanDeleteDevices = 'can_delete_devices',
  /** column name */
  CanDeleteFiles = 'can_delete_files',
  /** column name */
  CanDeleteFullChecks = 'can_delete_full_checks',
  /** column name */
  CanDeleteFullRevisions = 'can_delete_full_revisions',
  /** column name */
  CanDeleteImportantNotices = 'can_delete_important_notices',
  /** column name */
  CanDeleteInvoices = 'can_delete_invoices',
  /** column name */
  CanDeleteOperationLogs = 'can_delete_operation_logs',
  /** column name */
  CanDeleteOwnAccidents = 'can_delete_own_accidents',
  /** column name */
  CanDeleteOwnActionNotes = 'can_delete_own_action_notes',
  /** column name */
  CanDeleteOwnActionTemplates = 'can_delete_own_action_templates',
  /** column name */
  CanDeleteOwnBuildings = 'can_delete_own_buildings',
  /** column name */
  CanDeleteOwnContacts = 'can_delete_own_contacts',
  /** column name */
  CanDeleteOwnCustomers = 'can_delete_own_customers',
  /** column name */
  CanDeleteOwnDeviceCatalog = 'can_delete_own_device_catalog',
  /** column name */
  CanDeleteOwnDevices = 'can_delete_own_devices',
  /** column name */
  CanDeleteOwnFiles = 'can_delete_own_files',
  /** column name */
  CanDeleteOwnFullChecks = 'can_delete_own_full_checks',
  /** column name */
  CanDeleteOwnFullRevisions = 'can_delete_own_full_revisions',
  /** column name */
  CanDeleteOwnImportantNotices = 'can_delete_own_important_notices',
  /** column name */
  CanDeleteOwnInvoices = 'can_delete_own_invoices',
  /** column name */
  CanDeleteOwnOperationLogs = 'can_delete_own_operation_logs',
  /** column name */
  CanDeleteOwnPricing = 'can_delete_own_pricing',
  /** column name */
  CanDeleteOwnServiceOrders = 'can_delete_own_service_orders',
  /** column name */
  CanDeleteOwnSupportLevels = 'can_delete_own_support_levels',
  /** column name */
  CanDeleteOwnTzbs = 'can_delete_own_tzbs',
  /** column name */
  CanDeletePricing = 'can_delete_pricing',
  /** column name */
  CanDeleteServiceOrders = 'can_delete_service_orders',
  /** column name */
  CanDeleteSupportLevels = 'can_delete_support_levels',
  /** column name */
  CanDeleteTzbs = 'can_delete_tzbs',
  /** column name */
  CanEditAccidents = 'can_edit_accidents',
  /** column name */
  CanEditActionNotes = 'can_edit_action_notes',
  /** column name */
  CanEditActionTemplates = 'can_edit_action_templates',
  /** column name */
  CanEditBuildings = 'can_edit_buildings',
  /** column name */
  CanEditContacts = 'can_edit_contacts',
  /** column name */
  CanEditCustomers = 'can_edit_customers',
  /** column name */
  CanEditDeviceCatalog = 'can_edit_device_catalog',
  /** column name */
  CanEditFullChecks = 'can_edit_full_checks',
  /** column name */
  CanEditFullRevisions = 'can_edit_full_revisions',
  /** column name */
  CanEditImportantNotices = 'can_edit_important_notices',
  /** column name */
  CanEditInvoices = 'can_edit_invoices',
  /** column name */
  CanEditOperationLogs = 'can_edit_operation_logs',
  /** column name */
  CanEditPricing = 'can_edit_pricing',
  /** column name */
  CanEditServiceOrders = 'can_edit_service_orders',
  /** column name */
  CanEditSupportLevels = 'can_edit_support_levels',
  /** column name */
  CanEditTzbs = 'can_edit_tzbs',
  /** column name */
  CanEditUsers = 'can_edit_users',
  /** column name */
  CanManageRequirementsRow = 'can_manage_requirements_row',
  /** column name */
  CanManageServiceOrdersRow = 'can_manage_service_orders_row',
  /** column name */
  CanReadAccidents = 'can_read_accidents',
  /** column name */
  CanReadActionNotes = 'can_read_action_notes',
  /** column name */
  CanReadActionTemplates = 'can_read_action_templates',
  /** column name */
  CanReadBuildings = 'can_read_buildings',
  /** column name */
  CanReadContacts = 'can_read_contacts',
  /** column name */
  CanReadCustomers = 'can_read_customers',
  /** column name */
  CanReadDeviceCatalog = 'can_read_device_catalog',
  /** column name */
  CanReadDevices = 'can_read_devices',
  /** column name */
  CanReadFiles = 'can_read_files',
  /** column name */
  CanReadFullChecks = 'can_read_full_checks',
  /** column name */
  CanReadFullRevisions = 'can_read_full_revisions',
  /** column name */
  CanReadImportantNotices = 'can_read_important_notices',
  /** column name */
  CanReadInvoices = 'can_read_invoices',
  /** column name */
  CanReadOperationLogs = 'can_read_operation_logs',
  /** column name */
  CanReadPricing = 'can_read_pricing',
  /** column name */
  CanReadRequirementsRow = 'can_read_requirements_row',
  /** column name */
  CanReadServiceOrders = 'can_read_service_orders',
  /** column name */
  CanReadServiceOrdersRow = 'can_read_service_orders_row',
  /** column name */
  CanReadSupportLevels = 'can_read_support_levels',
  /** column name */
  CanReadTzbs = 'can_read_tzbs',
  /** column name */
  CanReadUsers = 'can_read_users',
  /** column name */
  CanWriteAccidents = 'can_write_accidents',
  /** column name */
  CanWriteActionNotes = 'can_write_action_notes',
  /** column name */
  CanWriteActionTemplates = 'can_write_action_templates',
  /** column name */
  CanWriteBuildings = 'can_write_buildings',
  /** column name */
  CanWriteContacts = 'can_write_contacts',
  /** column name */
  CanWriteCustomers = 'can_write_customers',
  /** column name */
  CanWriteDeviceCatalog = 'can_write_device_catalog',
  /** column name */
  CanWriteDevices = 'can_write_devices',
  /** column name */
  CanWriteFiles = 'can_write_files',
  /** column name */
  CanWriteFullChecks = 'can_write_full_checks',
  /** column name */
  CanWriteFullRevisions = 'can_write_full_revisions',
  /** column name */
  CanWriteImportantNotices = 'can_write_important_notices',
  /** column name */
  CanWriteInvoices = 'can_write_invoices',
  /** column name */
  CanWriteOperationLogs = 'can_write_operation_logs',
  /** column name */
  CanWritePricing = 'can_write_pricing',
  /** column name */
  CanWriteServiceOrders = 'can_write_service_orders',
  /** column name */
  CanWriteSupportLevels = 'can_write_support_levels',
  /** column name */
  CanWriteTzbs = 'can_write_tzbs',
  /** column name */
  CanWriteUsers = 'can_write_users',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  RoleName = 'role_name',
  /** column name */
  Tenant = 'tenant',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "roles" */
export type Roles_Set_Input = {
  can_delete_accidents?: InputMaybe<Scalars['Boolean']>;
  can_delete_action_notes?: InputMaybe<Scalars['Boolean']>;
  can_delete_action_templates?: InputMaybe<Scalars['Boolean']>;
  can_delete_buildings?: InputMaybe<Scalars['Boolean']>;
  can_delete_contacts?: InputMaybe<Scalars['Boolean']>;
  can_delete_customers?: InputMaybe<Scalars['Boolean']>;
  can_delete_device_catalog?: InputMaybe<Scalars['Boolean']>;
  can_delete_devices?: InputMaybe<Scalars['Boolean']>;
  can_delete_files?: InputMaybe<Scalars['Boolean']>;
  can_delete_full_checks?: InputMaybe<Scalars['Boolean']>;
  can_delete_full_revisions?: InputMaybe<Scalars['Boolean']>;
  can_delete_important_notices?: InputMaybe<Scalars['Boolean']>;
  can_delete_invoices?: InputMaybe<Scalars['Boolean']>;
  can_delete_operation_logs?: InputMaybe<Scalars['Boolean']>;
  can_delete_own_accidents?: InputMaybe<Scalars['Boolean']>;
  can_delete_own_action_notes?: InputMaybe<Scalars['Boolean']>;
  can_delete_own_action_templates?: InputMaybe<Scalars['Boolean']>;
  can_delete_own_buildings?: InputMaybe<Scalars['Boolean']>;
  can_delete_own_contacts?: InputMaybe<Scalars['Boolean']>;
  can_delete_own_customers?: InputMaybe<Scalars['Boolean']>;
  can_delete_own_device_catalog?: InputMaybe<Scalars['Boolean']>;
  can_delete_own_devices?: InputMaybe<Scalars['Boolean']>;
  can_delete_own_files?: InputMaybe<Scalars['Boolean']>;
  can_delete_own_full_checks?: InputMaybe<Scalars['Boolean']>;
  can_delete_own_full_revisions?: InputMaybe<Scalars['Boolean']>;
  can_delete_own_important_notices?: InputMaybe<Scalars['Boolean']>;
  can_delete_own_invoices?: InputMaybe<Scalars['Boolean']>;
  can_delete_own_operation_logs?: InputMaybe<Scalars['Boolean']>;
  can_delete_own_pricing?: InputMaybe<Scalars['Boolean']>;
  can_delete_own_service_orders?: InputMaybe<Scalars['Boolean']>;
  can_delete_own_support_levels?: InputMaybe<Scalars['Boolean']>;
  can_delete_own_tzbs?: InputMaybe<Scalars['Boolean']>;
  can_delete_pricing?: InputMaybe<Scalars['Boolean']>;
  can_delete_service_orders?: InputMaybe<Scalars['Boolean']>;
  can_delete_support_levels?: InputMaybe<Scalars['Boolean']>;
  can_delete_tzbs?: InputMaybe<Scalars['Boolean']>;
  can_edit_accidents?: InputMaybe<Scalars['Boolean']>;
  can_edit_action_notes?: InputMaybe<Scalars['Boolean']>;
  can_edit_action_templates?: InputMaybe<Scalars['Boolean']>;
  can_edit_buildings?: InputMaybe<Scalars['Boolean']>;
  can_edit_contacts?: InputMaybe<Scalars['Boolean']>;
  can_edit_customers?: InputMaybe<Scalars['Boolean']>;
  can_edit_device_catalog?: InputMaybe<Scalars['Boolean']>;
  can_edit_full_checks?: InputMaybe<Scalars['Boolean']>;
  can_edit_full_revisions?: InputMaybe<Scalars['Boolean']>;
  can_edit_important_notices?: InputMaybe<Scalars['Boolean']>;
  can_edit_invoices?: InputMaybe<Scalars['Boolean']>;
  can_edit_operation_logs?: InputMaybe<Scalars['Boolean']>;
  can_edit_pricing?: InputMaybe<Scalars['Boolean']>;
  can_edit_service_orders?: InputMaybe<Scalars['Boolean']>;
  can_edit_support_levels?: InputMaybe<Scalars['Boolean']>;
  can_edit_tzbs?: InputMaybe<Scalars['Boolean']>;
  can_edit_users?: InputMaybe<Scalars['Boolean']>;
  can_manage_requirements_row?: InputMaybe<Scalars['Boolean']>;
  can_manage_service_orders_row?: InputMaybe<Scalars['Boolean']>;
  can_read_accidents?: InputMaybe<Scalars['Boolean']>;
  can_read_action_notes?: InputMaybe<Scalars['Boolean']>;
  can_read_action_templates?: InputMaybe<Scalars['Boolean']>;
  can_read_buildings?: InputMaybe<Scalars['Boolean']>;
  can_read_contacts?: InputMaybe<Scalars['Boolean']>;
  can_read_customers?: InputMaybe<Scalars['Boolean']>;
  can_read_device_catalog?: InputMaybe<Scalars['Boolean']>;
  can_read_devices?: InputMaybe<Scalars['Boolean']>;
  can_read_files?: InputMaybe<Scalars['Boolean']>;
  can_read_full_checks?: InputMaybe<Scalars['Boolean']>;
  can_read_full_revisions?: InputMaybe<Scalars['Boolean']>;
  can_read_important_notices?: InputMaybe<Scalars['Boolean']>;
  can_read_invoices?: InputMaybe<Scalars['Boolean']>;
  can_read_operation_logs?: InputMaybe<Scalars['Boolean']>;
  can_read_pricing?: InputMaybe<Scalars['Boolean']>;
  can_read_requirements_row?: InputMaybe<Scalars['Boolean']>;
  can_read_service_orders?: InputMaybe<Scalars['Boolean']>;
  can_read_service_orders_row?: InputMaybe<Scalars['Boolean']>;
  can_read_support_levels?: InputMaybe<Scalars['Boolean']>;
  can_read_tzbs?: InputMaybe<Scalars['Boolean']>;
  can_read_users?: InputMaybe<Scalars['Boolean']>;
  can_write_accidents?: InputMaybe<Scalars['Boolean']>;
  can_write_action_notes?: InputMaybe<Scalars['Boolean']>;
  can_write_action_templates?: InputMaybe<Scalars['Boolean']>;
  can_write_buildings?: InputMaybe<Scalars['Boolean']>;
  can_write_contacts?: InputMaybe<Scalars['Boolean']>;
  can_write_customers?: InputMaybe<Scalars['Boolean']>;
  can_write_device_catalog?: InputMaybe<Scalars['Boolean']>;
  can_write_devices?: InputMaybe<Scalars['Boolean']>;
  can_write_files?: InputMaybe<Scalars['Boolean']>;
  can_write_full_checks?: InputMaybe<Scalars['Boolean']>;
  can_write_full_revisions?: InputMaybe<Scalars['Boolean']>;
  can_write_important_notices?: InputMaybe<Scalars['Boolean']>;
  can_write_invoices?: InputMaybe<Scalars['Boolean']>;
  can_write_operation_logs?: InputMaybe<Scalars['Boolean']>;
  can_write_pricing?: InputMaybe<Scalars['Boolean']>;
  can_write_service_orders?: InputMaybe<Scalars['Boolean']>;
  can_write_support_levels?: InputMaybe<Scalars['Boolean']>;
  can_write_tzbs?: InputMaybe<Scalars['Boolean']>;
  can_write_users?: InputMaybe<Scalars['Boolean']>;
  created_at?: InputMaybe<Scalars['date']>;
  id?: InputMaybe<Scalars['uuid']>;
  role_name?: InputMaybe<Scalars['String']>;
  tenant?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['date']>;
};

/** update columns of table "roles" */
export enum Roles_Update_Column {
  /** column name */
  CanDeleteAccidents = 'can_delete_accidents',
  /** column name */
  CanDeleteActionNotes = 'can_delete_action_notes',
  /** column name */
  CanDeleteActionTemplates = 'can_delete_action_templates',
  /** column name */
  CanDeleteBuildings = 'can_delete_buildings',
  /** column name */
  CanDeleteContacts = 'can_delete_contacts',
  /** column name */
  CanDeleteCustomers = 'can_delete_customers',
  /** column name */
  CanDeleteDeviceCatalog = 'can_delete_device_catalog',
  /** column name */
  CanDeleteDevices = 'can_delete_devices',
  /** column name */
  CanDeleteFiles = 'can_delete_files',
  /** column name */
  CanDeleteFullChecks = 'can_delete_full_checks',
  /** column name */
  CanDeleteFullRevisions = 'can_delete_full_revisions',
  /** column name */
  CanDeleteImportantNotices = 'can_delete_important_notices',
  /** column name */
  CanDeleteInvoices = 'can_delete_invoices',
  /** column name */
  CanDeleteOperationLogs = 'can_delete_operation_logs',
  /** column name */
  CanDeleteOwnAccidents = 'can_delete_own_accidents',
  /** column name */
  CanDeleteOwnActionNotes = 'can_delete_own_action_notes',
  /** column name */
  CanDeleteOwnActionTemplates = 'can_delete_own_action_templates',
  /** column name */
  CanDeleteOwnBuildings = 'can_delete_own_buildings',
  /** column name */
  CanDeleteOwnContacts = 'can_delete_own_contacts',
  /** column name */
  CanDeleteOwnCustomers = 'can_delete_own_customers',
  /** column name */
  CanDeleteOwnDeviceCatalog = 'can_delete_own_device_catalog',
  /** column name */
  CanDeleteOwnDevices = 'can_delete_own_devices',
  /** column name */
  CanDeleteOwnFiles = 'can_delete_own_files',
  /** column name */
  CanDeleteOwnFullChecks = 'can_delete_own_full_checks',
  /** column name */
  CanDeleteOwnFullRevisions = 'can_delete_own_full_revisions',
  /** column name */
  CanDeleteOwnImportantNotices = 'can_delete_own_important_notices',
  /** column name */
  CanDeleteOwnInvoices = 'can_delete_own_invoices',
  /** column name */
  CanDeleteOwnOperationLogs = 'can_delete_own_operation_logs',
  /** column name */
  CanDeleteOwnPricing = 'can_delete_own_pricing',
  /** column name */
  CanDeleteOwnServiceOrders = 'can_delete_own_service_orders',
  /** column name */
  CanDeleteOwnSupportLevels = 'can_delete_own_support_levels',
  /** column name */
  CanDeleteOwnTzbs = 'can_delete_own_tzbs',
  /** column name */
  CanDeletePricing = 'can_delete_pricing',
  /** column name */
  CanDeleteServiceOrders = 'can_delete_service_orders',
  /** column name */
  CanDeleteSupportLevels = 'can_delete_support_levels',
  /** column name */
  CanDeleteTzbs = 'can_delete_tzbs',
  /** column name */
  CanEditAccidents = 'can_edit_accidents',
  /** column name */
  CanEditActionNotes = 'can_edit_action_notes',
  /** column name */
  CanEditActionTemplates = 'can_edit_action_templates',
  /** column name */
  CanEditBuildings = 'can_edit_buildings',
  /** column name */
  CanEditContacts = 'can_edit_contacts',
  /** column name */
  CanEditCustomers = 'can_edit_customers',
  /** column name */
  CanEditDeviceCatalog = 'can_edit_device_catalog',
  /** column name */
  CanEditFullChecks = 'can_edit_full_checks',
  /** column name */
  CanEditFullRevisions = 'can_edit_full_revisions',
  /** column name */
  CanEditImportantNotices = 'can_edit_important_notices',
  /** column name */
  CanEditInvoices = 'can_edit_invoices',
  /** column name */
  CanEditOperationLogs = 'can_edit_operation_logs',
  /** column name */
  CanEditPricing = 'can_edit_pricing',
  /** column name */
  CanEditServiceOrders = 'can_edit_service_orders',
  /** column name */
  CanEditSupportLevels = 'can_edit_support_levels',
  /** column name */
  CanEditTzbs = 'can_edit_tzbs',
  /** column name */
  CanEditUsers = 'can_edit_users',
  /** column name */
  CanManageRequirementsRow = 'can_manage_requirements_row',
  /** column name */
  CanManageServiceOrdersRow = 'can_manage_service_orders_row',
  /** column name */
  CanReadAccidents = 'can_read_accidents',
  /** column name */
  CanReadActionNotes = 'can_read_action_notes',
  /** column name */
  CanReadActionTemplates = 'can_read_action_templates',
  /** column name */
  CanReadBuildings = 'can_read_buildings',
  /** column name */
  CanReadContacts = 'can_read_contacts',
  /** column name */
  CanReadCustomers = 'can_read_customers',
  /** column name */
  CanReadDeviceCatalog = 'can_read_device_catalog',
  /** column name */
  CanReadDevices = 'can_read_devices',
  /** column name */
  CanReadFiles = 'can_read_files',
  /** column name */
  CanReadFullChecks = 'can_read_full_checks',
  /** column name */
  CanReadFullRevisions = 'can_read_full_revisions',
  /** column name */
  CanReadImportantNotices = 'can_read_important_notices',
  /** column name */
  CanReadInvoices = 'can_read_invoices',
  /** column name */
  CanReadOperationLogs = 'can_read_operation_logs',
  /** column name */
  CanReadPricing = 'can_read_pricing',
  /** column name */
  CanReadRequirementsRow = 'can_read_requirements_row',
  /** column name */
  CanReadServiceOrders = 'can_read_service_orders',
  /** column name */
  CanReadServiceOrdersRow = 'can_read_service_orders_row',
  /** column name */
  CanReadSupportLevels = 'can_read_support_levels',
  /** column name */
  CanReadTzbs = 'can_read_tzbs',
  /** column name */
  CanReadUsers = 'can_read_users',
  /** column name */
  CanWriteAccidents = 'can_write_accidents',
  /** column name */
  CanWriteActionNotes = 'can_write_action_notes',
  /** column name */
  CanWriteActionTemplates = 'can_write_action_templates',
  /** column name */
  CanWriteBuildings = 'can_write_buildings',
  /** column name */
  CanWriteContacts = 'can_write_contacts',
  /** column name */
  CanWriteCustomers = 'can_write_customers',
  /** column name */
  CanWriteDeviceCatalog = 'can_write_device_catalog',
  /** column name */
  CanWriteDevices = 'can_write_devices',
  /** column name */
  CanWriteFiles = 'can_write_files',
  /** column name */
  CanWriteFullChecks = 'can_write_full_checks',
  /** column name */
  CanWriteFullRevisions = 'can_write_full_revisions',
  /** column name */
  CanWriteImportantNotices = 'can_write_important_notices',
  /** column name */
  CanWriteInvoices = 'can_write_invoices',
  /** column name */
  CanWriteOperationLogs = 'can_write_operation_logs',
  /** column name */
  CanWritePricing = 'can_write_pricing',
  /** column name */
  CanWriteServiceOrders = 'can_write_service_orders',
  /** column name */
  CanWriteSupportLevels = 'can_write_support_levels',
  /** column name */
  CanWriteTzbs = 'can_write_tzbs',
  /** column name */
  CanWriteUsers = 'can_write_users',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  RoleName = 'role_name',
  /** column name */
  Tenant = 'tenant',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** columns and relationships of "service_orders" */
export type Service_Orders = {
  __typename?: 'service_orders';
  /** An array relationship */
  consumed_materials: Array<Consumed_Material>;
  /** An aggregate relationship */
  consumed_materials_aggregate: Consumed_Material_Aggregate;
  created_at: Scalars['date'];
  date_of_realization: Scalars['date'];
  date_of_signature?: Maybe<Scalars['date']>;
  description?: Maybe<Scalars['String']>;
  /** An object relationship */
  file_rel?: Maybe<Files>;
  id: Scalars['uuid'];
  internal_id: Scalars['Int'];
  is_locked: Scalars['Boolean'];
  /** An array relationship */
  other_expenses: Array<Other_Expenses>;
  /** An aggregate relationship */
  other_expenses_aggregate: Other_Expenses_Aggregate;
  priority: Scalars['String'];
  signature?: Maybe<Scalars['uuid']>;
  signer_first_name?: Maybe<Scalars['String']>;
  signer_last_name?: Maybe<Scalars['String']>;
  tenant: Scalars['uuid'];
  /** An object relationship */
  tenant_rel: Tenants;
  /** An array relationship */
  time_on_road: Array<Time_On_Road>;
  /** An aggregate relationship */
  time_on_road_aggregate: Time_On_Road_Aggregate;
  traveling_city_pcs?: Maybe<Scalars['Int']>;
  traveling_kms: Scalars['Int'];
  type: Scalars['String'];
  tzb: Scalars['uuid'];
  /** An object relationship */
  tzb_rel: Tzbs;
  updated_at: Scalars['date'];
  user: Scalars['uuid'];
  /** An object relationship */
  user_rel: Users;
  work_done_when: Scalars['String'];
  /** An array relationship */
  workers: Array<Workers>;
  /** An aggregate relationship */
  workers_aggregate: Workers_Aggregate;
};


/** columns and relationships of "service_orders" */
export type Service_OrdersConsumed_MaterialsArgs = {
  distinct_on?: InputMaybe<Array<Consumed_Material_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Consumed_Material_Order_By>>;
  where?: InputMaybe<Consumed_Material_Bool_Exp>;
};


/** columns and relationships of "service_orders" */
export type Service_OrdersConsumed_Materials_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Consumed_Material_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Consumed_Material_Order_By>>;
  where?: InputMaybe<Consumed_Material_Bool_Exp>;
};


/** columns and relationships of "service_orders" */
export type Service_OrdersOther_ExpensesArgs = {
  distinct_on?: InputMaybe<Array<Other_Expenses_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Other_Expenses_Order_By>>;
  where?: InputMaybe<Other_Expenses_Bool_Exp>;
};


/** columns and relationships of "service_orders" */
export type Service_OrdersOther_Expenses_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Other_Expenses_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Other_Expenses_Order_By>>;
  where?: InputMaybe<Other_Expenses_Bool_Exp>;
};


/** columns and relationships of "service_orders" */
export type Service_OrdersTime_On_RoadArgs = {
  distinct_on?: InputMaybe<Array<Time_On_Road_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Time_On_Road_Order_By>>;
  where?: InputMaybe<Time_On_Road_Bool_Exp>;
};


/** columns and relationships of "service_orders" */
export type Service_OrdersTime_On_Road_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Time_On_Road_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Time_On_Road_Order_By>>;
  where?: InputMaybe<Time_On_Road_Bool_Exp>;
};


/** columns and relationships of "service_orders" */
export type Service_OrdersWorkersArgs = {
  distinct_on?: InputMaybe<Array<Workers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Workers_Order_By>>;
  where?: InputMaybe<Workers_Bool_Exp>;
};


/** columns and relationships of "service_orders" */
export type Service_OrdersWorkers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Workers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Workers_Order_By>>;
  where?: InputMaybe<Workers_Bool_Exp>;
};

/** aggregated selection of "service_orders" */
export type Service_Orders_Aggregate = {
  __typename?: 'service_orders_aggregate';
  aggregate?: Maybe<Service_Orders_Aggregate_Fields>;
  nodes: Array<Service_Orders>;
};

/** aggregate fields of "service_orders" */
export type Service_Orders_Aggregate_Fields = {
  __typename?: 'service_orders_aggregate_fields';
  avg?: Maybe<Service_Orders_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Service_Orders_Max_Fields>;
  min?: Maybe<Service_Orders_Min_Fields>;
  stddev?: Maybe<Service_Orders_Stddev_Fields>;
  stddev_pop?: Maybe<Service_Orders_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Service_Orders_Stddev_Samp_Fields>;
  sum?: Maybe<Service_Orders_Sum_Fields>;
  var_pop?: Maybe<Service_Orders_Var_Pop_Fields>;
  var_samp?: Maybe<Service_Orders_Var_Samp_Fields>;
  variance?: Maybe<Service_Orders_Variance_Fields>;
};


/** aggregate fields of "service_orders" */
export type Service_Orders_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Service_Orders_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "service_orders" */
export type Service_Orders_Aggregate_Order_By = {
  avg?: InputMaybe<Service_Orders_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Service_Orders_Max_Order_By>;
  min?: InputMaybe<Service_Orders_Min_Order_By>;
  stddev?: InputMaybe<Service_Orders_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Service_Orders_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Service_Orders_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Service_Orders_Sum_Order_By>;
  var_pop?: InputMaybe<Service_Orders_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Service_Orders_Var_Samp_Order_By>;
  variance?: InputMaybe<Service_Orders_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "service_orders" */
export type Service_Orders_Arr_Rel_Insert_Input = {
  data: Array<Service_Orders_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Service_Orders_On_Conflict>;
};

/** aggregate avg on columns */
export type Service_Orders_Avg_Fields = {
  __typename?: 'service_orders_avg_fields';
  internal_id?: Maybe<Scalars['Float']>;
  traveling_city_pcs?: Maybe<Scalars['Float']>;
  traveling_kms?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "service_orders" */
export type Service_Orders_Avg_Order_By = {
  internal_id?: InputMaybe<Order_By>;
  traveling_city_pcs?: InputMaybe<Order_By>;
  traveling_kms?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "service_orders". All fields are combined with a logical 'AND'. */
export type Service_Orders_Bool_Exp = {
  _and?: InputMaybe<Array<Service_Orders_Bool_Exp>>;
  _not?: InputMaybe<Service_Orders_Bool_Exp>;
  _or?: InputMaybe<Array<Service_Orders_Bool_Exp>>;
  consumed_materials?: InputMaybe<Consumed_Material_Bool_Exp>;
  created_at?: InputMaybe<Date_Comparison_Exp>;
  date_of_realization?: InputMaybe<Date_Comparison_Exp>;
  date_of_signature?: InputMaybe<Date_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  file_rel?: InputMaybe<Files_Bool_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  internal_id?: InputMaybe<Int_Comparison_Exp>;
  is_locked?: InputMaybe<Boolean_Comparison_Exp>;
  other_expenses?: InputMaybe<Other_Expenses_Bool_Exp>;
  priority?: InputMaybe<String_Comparison_Exp>;
  signature?: InputMaybe<Uuid_Comparison_Exp>;
  signer_first_name?: InputMaybe<String_Comparison_Exp>;
  signer_last_name?: InputMaybe<String_Comparison_Exp>;
  tenant?: InputMaybe<Uuid_Comparison_Exp>;
  tenant_rel?: InputMaybe<Tenants_Bool_Exp>;
  time_on_road?: InputMaybe<Time_On_Road_Bool_Exp>;
  traveling_city_pcs?: InputMaybe<Int_Comparison_Exp>;
  traveling_kms?: InputMaybe<Int_Comparison_Exp>;
  type?: InputMaybe<String_Comparison_Exp>;
  tzb?: InputMaybe<Uuid_Comparison_Exp>;
  tzb_rel?: InputMaybe<Tzbs_Bool_Exp>;
  updated_at?: InputMaybe<Date_Comparison_Exp>;
  user?: InputMaybe<Uuid_Comparison_Exp>;
  user_rel?: InputMaybe<Users_Bool_Exp>;
  work_done_when?: InputMaybe<String_Comparison_Exp>;
  workers?: InputMaybe<Workers_Bool_Exp>;
};

/** unique or primary key constraints on table "service_orders" */
export enum Service_Orders_Constraint {
  /** unique or primary key constraint on columns "internal_id" */
  ServiceOrderInternalIdKey = 'service_order_internal_id_key',
  /** unique or primary key constraint on columns "id" */
  ServiceOrderPkey = 'service_order_pkey'
}

/** input type for incrementing numeric columns in table "service_orders" */
export type Service_Orders_Inc_Input = {
  internal_id?: InputMaybe<Scalars['Int']>;
  traveling_city_pcs?: InputMaybe<Scalars['Int']>;
  traveling_kms?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "service_orders" */
export type Service_Orders_Insert_Input = {
  consumed_materials?: InputMaybe<Consumed_Material_Arr_Rel_Insert_Input>;
  created_at?: InputMaybe<Scalars['date']>;
  date_of_realization?: InputMaybe<Scalars['date']>;
  date_of_signature?: InputMaybe<Scalars['date']>;
  description?: InputMaybe<Scalars['String']>;
  file_rel?: InputMaybe<Files_Obj_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['uuid']>;
  internal_id?: InputMaybe<Scalars['Int']>;
  is_locked?: InputMaybe<Scalars['Boolean']>;
  other_expenses?: InputMaybe<Other_Expenses_Arr_Rel_Insert_Input>;
  priority?: InputMaybe<Scalars['String']>;
  signature?: InputMaybe<Scalars['uuid']>;
  signer_first_name?: InputMaybe<Scalars['String']>;
  signer_last_name?: InputMaybe<Scalars['String']>;
  tenant?: InputMaybe<Scalars['uuid']>;
  tenant_rel?: InputMaybe<Tenants_Obj_Rel_Insert_Input>;
  time_on_road?: InputMaybe<Time_On_Road_Arr_Rel_Insert_Input>;
  traveling_city_pcs?: InputMaybe<Scalars['Int']>;
  traveling_kms?: InputMaybe<Scalars['Int']>;
  type?: InputMaybe<Scalars['String']>;
  tzb?: InputMaybe<Scalars['uuid']>;
  tzb_rel?: InputMaybe<Tzbs_Obj_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['date']>;
  user?: InputMaybe<Scalars['uuid']>;
  user_rel?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  work_done_when?: InputMaybe<Scalars['String']>;
  workers?: InputMaybe<Workers_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Service_Orders_Max_Fields = {
  __typename?: 'service_orders_max_fields';
  created_at?: Maybe<Scalars['date']>;
  date_of_realization?: Maybe<Scalars['date']>;
  date_of_signature?: Maybe<Scalars['date']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  internal_id?: Maybe<Scalars['Int']>;
  priority?: Maybe<Scalars['String']>;
  signature?: Maybe<Scalars['uuid']>;
  signer_first_name?: Maybe<Scalars['String']>;
  signer_last_name?: Maybe<Scalars['String']>;
  tenant?: Maybe<Scalars['uuid']>;
  traveling_city_pcs?: Maybe<Scalars['Int']>;
  traveling_kms?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
  tzb?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['date']>;
  user?: Maybe<Scalars['uuid']>;
  work_done_when?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "service_orders" */
export type Service_Orders_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  date_of_realization?: InputMaybe<Order_By>;
  date_of_signature?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  internal_id?: InputMaybe<Order_By>;
  priority?: InputMaybe<Order_By>;
  signature?: InputMaybe<Order_By>;
  signer_first_name?: InputMaybe<Order_By>;
  signer_last_name?: InputMaybe<Order_By>;
  tenant?: InputMaybe<Order_By>;
  traveling_city_pcs?: InputMaybe<Order_By>;
  traveling_kms?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  tzb?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Order_By>;
  work_done_when?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Service_Orders_Min_Fields = {
  __typename?: 'service_orders_min_fields';
  created_at?: Maybe<Scalars['date']>;
  date_of_realization?: Maybe<Scalars['date']>;
  date_of_signature?: Maybe<Scalars['date']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  internal_id?: Maybe<Scalars['Int']>;
  priority?: Maybe<Scalars['String']>;
  signature?: Maybe<Scalars['uuid']>;
  signer_first_name?: Maybe<Scalars['String']>;
  signer_last_name?: Maybe<Scalars['String']>;
  tenant?: Maybe<Scalars['uuid']>;
  traveling_city_pcs?: Maybe<Scalars['Int']>;
  traveling_kms?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
  tzb?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['date']>;
  user?: Maybe<Scalars['uuid']>;
  work_done_when?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "service_orders" */
export type Service_Orders_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  date_of_realization?: InputMaybe<Order_By>;
  date_of_signature?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  internal_id?: InputMaybe<Order_By>;
  priority?: InputMaybe<Order_By>;
  signature?: InputMaybe<Order_By>;
  signer_first_name?: InputMaybe<Order_By>;
  signer_last_name?: InputMaybe<Order_By>;
  tenant?: InputMaybe<Order_By>;
  traveling_city_pcs?: InputMaybe<Order_By>;
  traveling_kms?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  tzb?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Order_By>;
  work_done_when?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "service_orders" */
export type Service_Orders_Mutation_Response = {
  __typename?: 'service_orders_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Service_Orders>;
};

/** input type for inserting object relation for remote table "service_orders" */
export type Service_Orders_Obj_Rel_Insert_Input = {
  data: Service_Orders_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Service_Orders_On_Conflict>;
};

/** on_conflict condition type for table "service_orders" */
export type Service_Orders_On_Conflict = {
  constraint: Service_Orders_Constraint;
  update_columns?: Array<Service_Orders_Update_Column>;
  where?: InputMaybe<Service_Orders_Bool_Exp>;
};

/** Ordering options when selecting data from "service_orders". */
export type Service_Orders_Order_By = {
  consumed_materials_aggregate?: InputMaybe<Consumed_Material_Aggregate_Order_By>;
  created_at?: InputMaybe<Order_By>;
  date_of_realization?: InputMaybe<Order_By>;
  date_of_signature?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  file_rel?: InputMaybe<Files_Order_By>;
  id?: InputMaybe<Order_By>;
  internal_id?: InputMaybe<Order_By>;
  is_locked?: InputMaybe<Order_By>;
  other_expenses_aggregate?: InputMaybe<Other_Expenses_Aggregate_Order_By>;
  priority?: InputMaybe<Order_By>;
  signature?: InputMaybe<Order_By>;
  signer_first_name?: InputMaybe<Order_By>;
  signer_last_name?: InputMaybe<Order_By>;
  tenant?: InputMaybe<Order_By>;
  tenant_rel?: InputMaybe<Tenants_Order_By>;
  time_on_road_aggregate?: InputMaybe<Time_On_Road_Aggregate_Order_By>;
  traveling_city_pcs?: InputMaybe<Order_By>;
  traveling_kms?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  tzb?: InputMaybe<Order_By>;
  tzb_rel?: InputMaybe<Tzbs_Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Order_By>;
  user_rel?: InputMaybe<Users_Order_By>;
  work_done_when?: InputMaybe<Order_By>;
  workers_aggregate?: InputMaybe<Workers_Aggregate_Order_By>;
};

/** primary key columns input for table: service_orders */
export type Service_Orders_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "service_orders" */
export enum Service_Orders_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DateOfRealization = 'date_of_realization',
  /** column name */
  DateOfSignature = 'date_of_signature',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  InternalId = 'internal_id',
  /** column name */
  IsLocked = 'is_locked',
  /** column name */
  Priority = 'priority',
  /** column name */
  Signature = 'signature',
  /** column name */
  SignerFirstName = 'signer_first_name',
  /** column name */
  SignerLastName = 'signer_last_name',
  /** column name */
  Tenant = 'tenant',
  /** column name */
  TravelingCityPcs = 'traveling_city_pcs',
  /** column name */
  TravelingKms = 'traveling_kms',
  /** column name */
  Type = 'type',
  /** column name */
  Tzb = 'tzb',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  User = 'user',
  /** column name */
  WorkDoneWhen = 'work_done_when'
}

/** input type for updating data in table "service_orders" */
export type Service_Orders_Set_Input = {
  created_at?: InputMaybe<Scalars['date']>;
  date_of_realization?: InputMaybe<Scalars['date']>;
  date_of_signature?: InputMaybe<Scalars['date']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  internal_id?: InputMaybe<Scalars['Int']>;
  is_locked?: InputMaybe<Scalars['Boolean']>;
  priority?: InputMaybe<Scalars['String']>;
  signature?: InputMaybe<Scalars['uuid']>;
  signer_first_name?: InputMaybe<Scalars['String']>;
  signer_last_name?: InputMaybe<Scalars['String']>;
  tenant?: InputMaybe<Scalars['uuid']>;
  traveling_city_pcs?: InputMaybe<Scalars['Int']>;
  traveling_kms?: InputMaybe<Scalars['Int']>;
  type?: InputMaybe<Scalars['String']>;
  tzb?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['date']>;
  user?: InputMaybe<Scalars['uuid']>;
  work_done_when?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Service_Orders_Stddev_Fields = {
  __typename?: 'service_orders_stddev_fields';
  internal_id?: Maybe<Scalars['Float']>;
  traveling_city_pcs?: Maybe<Scalars['Float']>;
  traveling_kms?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "service_orders" */
export type Service_Orders_Stddev_Order_By = {
  internal_id?: InputMaybe<Order_By>;
  traveling_city_pcs?: InputMaybe<Order_By>;
  traveling_kms?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Service_Orders_Stddev_Pop_Fields = {
  __typename?: 'service_orders_stddev_pop_fields';
  internal_id?: Maybe<Scalars['Float']>;
  traveling_city_pcs?: Maybe<Scalars['Float']>;
  traveling_kms?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "service_orders" */
export type Service_Orders_Stddev_Pop_Order_By = {
  internal_id?: InputMaybe<Order_By>;
  traveling_city_pcs?: InputMaybe<Order_By>;
  traveling_kms?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Service_Orders_Stddev_Samp_Fields = {
  __typename?: 'service_orders_stddev_samp_fields';
  internal_id?: Maybe<Scalars['Float']>;
  traveling_city_pcs?: Maybe<Scalars['Float']>;
  traveling_kms?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "service_orders" */
export type Service_Orders_Stddev_Samp_Order_By = {
  internal_id?: InputMaybe<Order_By>;
  traveling_city_pcs?: InputMaybe<Order_By>;
  traveling_kms?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Service_Orders_Sum_Fields = {
  __typename?: 'service_orders_sum_fields';
  internal_id?: Maybe<Scalars['Int']>;
  traveling_city_pcs?: Maybe<Scalars['Int']>;
  traveling_kms?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "service_orders" */
export type Service_Orders_Sum_Order_By = {
  internal_id?: InputMaybe<Order_By>;
  traveling_city_pcs?: InputMaybe<Order_By>;
  traveling_kms?: InputMaybe<Order_By>;
};

/** update columns of table "service_orders" */
export enum Service_Orders_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DateOfRealization = 'date_of_realization',
  /** column name */
  DateOfSignature = 'date_of_signature',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  InternalId = 'internal_id',
  /** column name */
  IsLocked = 'is_locked',
  /** column name */
  Priority = 'priority',
  /** column name */
  Signature = 'signature',
  /** column name */
  SignerFirstName = 'signer_first_name',
  /** column name */
  SignerLastName = 'signer_last_name',
  /** column name */
  Tenant = 'tenant',
  /** column name */
  TravelingCityPcs = 'traveling_city_pcs',
  /** column name */
  TravelingKms = 'traveling_kms',
  /** column name */
  Type = 'type',
  /** column name */
  Tzb = 'tzb',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  User = 'user',
  /** column name */
  WorkDoneWhen = 'work_done_when'
}

/** aggregate var_pop on columns */
export type Service_Orders_Var_Pop_Fields = {
  __typename?: 'service_orders_var_pop_fields';
  internal_id?: Maybe<Scalars['Float']>;
  traveling_city_pcs?: Maybe<Scalars['Float']>;
  traveling_kms?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "service_orders" */
export type Service_Orders_Var_Pop_Order_By = {
  internal_id?: InputMaybe<Order_By>;
  traveling_city_pcs?: InputMaybe<Order_By>;
  traveling_kms?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Service_Orders_Var_Samp_Fields = {
  __typename?: 'service_orders_var_samp_fields';
  internal_id?: Maybe<Scalars['Float']>;
  traveling_city_pcs?: Maybe<Scalars['Float']>;
  traveling_kms?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "service_orders" */
export type Service_Orders_Var_Samp_Order_By = {
  internal_id?: InputMaybe<Order_By>;
  traveling_city_pcs?: InputMaybe<Order_By>;
  traveling_kms?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Service_Orders_Variance_Fields = {
  __typename?: 'service_orders_variance_fields';
  internal_id?: Maybe<Scalars['Float']>;
  traveling_city_pcs?: Maybe<Scalars['Float']>;
  traveling_kms?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "service_orders" */
export type Service_Orders_Variance_Order_By = {
  internal_id?: InputMaybe<Order_By>;
  traveling_city_pcs?: InputMaybe<Order_By>;
  traveling_kms?: InputMaybe<Order_By>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** An array relationship */
  accidents: Array<Accidents>;
  /** An aggregate relationship */
  accidents_aggregate: Accidents_Aggregate;
  /** fetch data from the table: "accidents" using primary key columns */
  accidents_by_pk?: Maybe<Accidents>;
  /** An array relationship */
  action_notes: Array<Action_Notes>;
  /** An aggregate relationship */
  action_notes_aggregate: Action_Notes_Aggregate;
  /** fetch data from the table: "action_notes" using primary key columns */
  action_notes_by_pk?: Maybe<Action_Notes>;
  /** An array relationship */
  actions_template_jobs: Array<Actions_Template_Jobs>;
  /** An aggregate relationship */
  actions_template_jobs_aggregate: Actions_Template_Jobs_Aggregate;
  /** fetch data from the table: "actions_template_jobs" using primary key columns */
  actions_template_jobs_by_pk?: Maybe<Actions_Template_Jobs>;
  /** An array relationship */
  actions_templates: Array<Actions_Templates>;
  /** An aggregate relationship */
  actions_templates_aggregate: Actions_Templates_Aggregate;
  /** fetch data from the table: "actions_templates" using primary key columns */
  actions_templates_by_pk?: Maybe<Actions_Templates>;
  /** An array relationship */
  buildings: Array<Buildings>;
  /** An aggregate relationship */
  buildings_aggregate: Buildings_Aggregate;
  /** fetch data from the table: "buildings" using primary key columns */
  buildings_by_pk?: Maybe<Buildings>;
  /** An array relationship */
  checks: Array<Checks>;
  /** An aggregate relationship */
  checks_aggregate: Checks_Aggregate;
  /** fetch data from the table: "checks" using primary key columns */
  checks_by_pk?: Maybe<Checks>;
  /** fetch data from the table: "consumed_material" */
  consumed_material: Array<Consumed_Material>;
  /** fetch aggregated fields from the table: "consumed_material" */
  consumed_material_aggregate: Consumed_Material_Aggregate;
  /** fetch data from the table: "consumed_material" using primary key columns */
  consumed_material_by_pk?: Maybe<Consumed_Material>;
  /** An array relationship */
  contacts: Array<Contacts>;
  /** An aggregate relationship */
  contacts_aggregate: Contacts_Aggregate;
  /** fetch data from the table: "contacts" using primary key columns */
  contacts_by_pk?: Maybe<Contacts>;
  /** An array relationship */
  customers: Array<Customers>;
  /** An aggregate relationship */
  customers_aggregate: Customers_Aggregate;
  /** fetch data from the table: "customers" using primary key columns */
  customers_by_pk?: Maybe<Customers>;
  /** An array relationship */
  device_parameters: Array<Device_Parameters>;
  /** An aggregate relationship */
  device_parameters_aggregate: Device_Parameters_Aggregate;
  /** fetch data from the table: "device_parameters" using primary key columns */
  device_parameters_by_pk?: Maybe<Device_Parameters>;
  /** An array relationship */
  device_urls: Array<Device_Urls>;
  /** An aggregate relationship */
  device_urls_aggregate: Device_Urls_Aggregate;
  /** fetch data from the table: "device_urls" using primary key columns */
  device_urls_by_pk?: Maybe<Device_Urls>;
  /** An array relationship */
  devices: Array<Devices>;
  /** An aggregate relationship */
  devices_aggregate: Devices_Aggregate;
  /** fetch data from the table: "devices" using primary key columns */
  devices_by_pk?: Maybe<Devices>;
  /** fetch data from the table: "devices_catalog" */
  devices_catalog: Array<Devices_Catalog>;
  /** An array relationship */
  devices_catalog_actions_templates: Array<Devices_Catalog_Actions_Templates>;
  /** An aggregate relationship */
  devices_catalog_actions_templates_aggregate: Devices_Catalog_Actions_Templates_Aggregate;
  /** fetch data from the table: "devices_catalog_actions_templates" using primary key columns */
  devices_catalog_actions_templates_by_pk?: Maybe<Devices_Catalog_Actions_Templates>;
  /** fetch aggregated fields from the table: "devices_catalog" */
  devices_catalog_aggregate: Devices_Catalog_Aggregate;
  /** fetch data from the table: "devices_catalog" using primary key columns */
  devices_catalog_by_pk?: Maybe<Devices_Catalog>;
  /** An array relationship */
  devices_catalog_files: Array<Devices_Catalog_Files>;
  /** An aggregate relationship */
  devices_catalog_files_aggregate: Devices_Catalog_Files_Aggregate;
  /** fetch data from the table: "devices_catalog_files" using primary key columns */
  devices_catalog_files_by_pk?: Maybe<Devices_Catalog_Files>;
  /** fetch data from the table: "education_videos" */
  education_videos: Array<Education_Videos>;
  /** fetch aggregated fields from the table: "education_videos" */
  education_videos_aggregate: Education_Videos_Aggregate;
  /** fetch data from the table: "education_videos" using primary key columns */
  education_videos_by_pk?: Maybe<Education_Videos>;
  /** fetch data from the table: "favorite" */
  favorite: Array<Favorite>;
  /** fetch aggregated fields from the table: "favorite" */
  favorite_aggregate: Favorite_Aggregate;
  /** fetch data from the table: "favorite" using primary key columns */
  favorite_by_pk?: Maybe<Favorite>;
  /** fetch data from the table: "files" */
  files: Array<Files>;
  /** fetch aggregated fields from the table: "files" */
  files_aggregate: Files_Aggregate;
  /** fetch data from the table: "files_bozp" */
  files_bozp: Array<Files_Bozp>;
  /** fetch aggregated fields from the table: "files_bozp" */
  files_bozp_aggregate: Files_Bozp_Aggregate;
  /** fetch data from the table: "files_bozp" using primary key columns */
  files_bozp_by_pk?: Maybe<Files_Bozp>;
  /** fetch data from the table: "files" using primary key columns */
  files_by_pk?: Maybe<Files>;
  /** An array relationship */
  files_checks: Array<Files_Checks>;
  /** An aggregate relationship */
  files_checks_aggregate: Files_Checks_Aggregate;
  /** fetch data from the table: "files_checks" using primary key columns */
  files_checks_by_pk?: Maybe<Files_Checks>;
  /** fetch data from the table: "files_fotodocumentation" */
  files_fotodocumentation: Array<Files_Fotodocumentation>;
  /** fetch aggregated fields from the table: "files_fotodocumentation" */
  files_fotodocumentation_aggregate: Files_Fotodocumentation_Aggregate;
  /** fetch data from the table: "files_fotodocumentation" using primary key columns */
  files_fotodocumentation_by_pk?: Maybe<Files_Fotodocumentation>;
  /** An array relationship */
  files_local_operating_rules: Array<Files_Local_Operating_Rules>;
  /** An aggregate relationship */
  files_local_operating_rules_aggregate: Files_Local_Operating_Rules_Aggregate;
  /** fetch data from the table: "files_local_operating_rules" using primary key columns */
  files_local_operating_rules_by_pk?: Maybe<Files_Local_Operating_Rules>;
  /** An array relationship */
  files_others: Array<Files_Others>;
  /** An aggregate relationship */
  files_others_aggregate: Files_Others_Aggregate;
  /** fetch data from the table: "files_others" using primary key columns */
  files_others_by_pk?: Maybe<Files_Others>;
  /** fetch data from the table: "files_project_documentation" */
  files_project_documentation: Array<Files_Project_Documentation>;
  /** fetch aggregated fields from the table: "files_project_documentation" */
  files_project_documentation_aggregate: Files_Project_Documentation_Aggregate;
  /** fetch data from the table: "files_project_documentation" using primary key columns */
  files_project_documentation_by_pk?: Maybe<Files_Project_Documentation>;
  /** An array relationship */
  files_revisions: Array<Files_Revisions>;
  /** An aggregate relationship */
  files_revisions_aggregate: Files_Revisions_Aggregate;
  /** fetch data from the table: "files_revisions" using primary key columns */
  files_revisions_by_pk?: Maybe<Files_Revisions>;
  /** An array relationship */
  files_risks: Array<Files_Risks>;
  /** An aggregate relationship */
  files_risks_aggregate: Files_Risks_Aggregate;
  /** fetch data from the table: "files_risks" using primary key columns */
  files_risks_by_pk?: Maybe<Files_Risks>;
  /** An array relationship */
  full_checks: Array<Full_Checks>;
  /** An aggregate relationship */
  full_checks_aggregate: Full_Checks_Aggregate;
  /** fetch data from the table: "full_checks" using primary key columns */
  full_checks_by_pk?: Maybe<Full_Checks>;
  /** An array relationship */
  full_revisions: Array<Full_Revisions>;
  /** An aggregate relationship */
  full_revisions_aggregate: Full_Revisions_Aggregate;
  /** fetch data from the table: "full_revisions" using primary key columns */
  full_revisions_by_pk?: Maybe<Full_Revisions>;
  /** An array relationship */
  important_notices: Array<Important_Notices>;
  /** An aggregate relationship */
  important_notices_aggregate: Important_Notices_Aggregate;
  /** fetch data from the table: "important_notices" using primary key columns */
  important_notices_by_pk?: Maybe<Important_Notices>;
  /** An array relationship */
  invoices: Array<Invoices>;
  /** An aggregate relationship */
  invoices_aggregate: Invoices_Aggregate;
  /** fetch data from the table: "invoices" using primary key columns */
  invoices_by_pk?: Maybe<Invoices>;
  /** An array relationship */
  kupr_difficulty_levels: Array<Kupr_Difficulty_Levels>;
  /** An aggregate relationship */
  kupr_difficulty_levels_aggregate: Kupr_Difficulty_Levels_Aggregate;
  /** fetch data from the table: "kupr_difficulty_levels" using primary key columns */
  kupr_difficulty_levels_by_pk?: Maybe<Kupr_Difficulty_Levels>;
  /** An array relationship */
  kupr_posts: Array<Kupr_Posts>;
  /** An aggregate relationship */
  kupr_posts_aggregate: Kupr_Posts_Aggregate;
  /** fetch data from the table: "kupr_posts" using primary key columns */
  kupr_posts_by_pk?: Maybe<Kupr_Posts>;
  /** fetch data from the table: "my_user" */
  my_user: Array<My_User>;
  /** fetch aggregated fields from the table: "my_user" */
  my_user_aggregate: My_User_Aggregate;
  /** An array relationship */
  operation_log_custom_fields: Array<Operation_Log_Custom_Fields>;
  /** An aggregate relationship */
  operation_log_custom_fields_aggregate: Operation_Log_Custom_Fields_Aggregate;
  /** fetch data from the table: "operation_log_custom_fields" using primary key columns */
  operation_log_custom_fields_by_pk?: Maybe<Operation_Log_Custom_Fields>;
  /** An array relationship */
  operation_logs: Array<Operation_Logs>;
  /** An aggregate relationship */
  operation_logs_aggregate: Operation_Logs_Aggregate;
  /** fetch data from the table: "operation_logs" using primary key columns */
  operation_logs_by_pk?: Maybe<Operation_Logs>;
  /** An array relationship */
  other_expenses: Array<Other_Expenses>;
  /** An aggregate relationship */
  other_expenses_aggregate: Other_Expenses_Aggregate;
  /** fetch data from the table: "other_expenses" using primary key columns */
  other_expenses_by_pk?: Maybe<Other_Expenses>;
  /** An array relationship */
  password_reset_requests: Array<Password_Reset_Requests>;
  /** An aggregate relationship */
  password_reset_requests_aggregate: Password_Reset_Requests_Aggregate;
  /** fetch data from the table: "password_reset_requests" using primary key columns */
  password_reset_requests_by_pk?: Maybe<Password_Reset_Requests>;
  /** fetch data from the table: "pricing" */
  pricing: Array<Pricing>;
  /** fetch aggregated fields from the table: "pricing" */
  pricing_aggregate: Pricing_Aggregate;
  /** fetch data from the table: "pricing" using primary key columns */
  pricing_by_pk?: Maybe<Pricing>;
  /** An array relationship */
  revisions: Array<Revisions>;
  /** An aggregate relationship */
  revisions_aggregate: Revisions_Aggregate;
  /** fetch data from the table: "revisions" using primary key columns */
  revisions_by_pk?: Maybe<Revisions>;
  /** An array relationship */
  roles: Array<Roles>;
  /** An aggregate relationship */
  roles_aggregate: Roles_Aggregate;
  /** fetch data from the table: "roles" using primary key columns */
  roles_by_pk?: Maybe<Roles>;
  /** An array relationship */
  service_orders: Array<Service_Orders>;
  /** An aggregate relationship */
  service_orders_aggregate: Service_Orders_Aggregate;
  /** fetch data from the table: "service_orders" using primary key columns */
  service_orders_by_pk?: Maybe<Service_Orders>;
  /** An array relationship */
  support_levels: Array<Support_Levels>;
  /** An aggregate relationship */
  support_levels_aggregate: Support_Levels_Aggregate;
  /** fetch data from the table: "support_levels" using primary key columns */
  support_levels_by_pk?: Maybe<Support_Levels>;
  /** fetch data from the table: "tenant_invitation" */
  tenant_invitation: Array<Tenant_Invitation>;
  /** fetch aggregated fields from the table: "tenant_invitation" */
  tenant_invitation_aggregate: Tenant_Invitation_Aggregate;
  /** fetch data from the table: "tenant_invitation" using primary key columns */
  tenant_invitation_by_pk?: Maybe<Tenant_Invitation>;
  /** fetch data from the table: "tenant_user_access" */
  tenant_user_access: Array<Tenant_User_Access>;
  /** fetch aggregated fields from the table: "tenant_user_access" */
  tenant_user_access_aggregate: Tenant_User_Access_Aggregate;
  /** fetch data from the table: "tenant_user_access" using primary key columns */
  tenant_user_access_by_pk?: Maybe<Tenant_User_Access>;
  /** An array relationship */
  tenants: Array<Tenants>;
  /** An aggregate relationship */
  tenants_aggregate: Tenants_Aggregate;
  /** fetch data from the table: "tenants" using primary key columns */
  tenants_by_pk?: Maybe<Tenants>;
  /** An array relationship */
  time_on_road: Array<Time_On_Road>;
  /** An aggregate relationship */
  time_on_road_aggregate: Time_On_Road_Aggregate;
  /** fetch data from the table: "time_on_road" using primary key columns */
  time_on_road_by_pk?: Maybe<Time_On_Road>;
  /** An array relationship */
  tzb_custom_fields: Array<Tzb_Custom_Fields>;
  /** An aggregate relationship */
  tzb_custom_fields_aggregate: Tzb_Custom_Fields_Aggregate;
  /** fetch data from the table: "tzb_custom_fields" using primary key columns */
  tzb_custom_fields_by_pk?: Maybe<Tzb_Custom_Fields>;
  /** An array relationship */
  tzbs: Array<Tzbs>;
  /** An aggregate relationship */
  tzbs_aggregate: Tzbs_Aggregate;
  /** fetch data from the table: "tzbs" using primary key columns */
  tzbs_by_pk?: Maybe<Tzbs>;
  /** An array relationship */
  users: Array<Users>;
  /** An aggregate relationship */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** An array relationship */
  workers: Array<Workers>;
  /** An aggregate relationship */
  workers_aggregate: Workers_Aggregate;
  /** fetch data from the table: "workers" using primary key columns */
  workers_by_pk?: Maybe<Workers>;
};


export type Subscription_RootAccidentsArgs = {
  distinct_on?: InputMaybe<Array<Accidents_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Accidents_Order_By>>;
  where?: InputMaybe<Accidents_Bool_Exp>;
};


export type Subscription_RootAccidents_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Accidents_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Accidents_Order_By>>;
  where?: InputMaybe<Accidents_Bool_Exp>;
};


export type Subscription_RootAccidents_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootAction_NotesArgs = {
  distinct_on?: InputMaybe<Array<Action_Notes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Action_Notes_Order_By>>;
  where?: InputMaybe<Action_Notes_Bool_Exp>;
};


export type Subscription_RootAction_Notes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Action_Notes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Action_Notes_Order_By>>;
  where?: InputMaybe<Action_Notes_Bool_Exp>;
};


export type Subscription_RootAction_Notes_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootActions_Template_JobsArgs = {
  distinct_on?: InputMaybe<Array<Actions_Template_Jobs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Actions_Template_Jobs_Order_By>>;
  where?: InputMaybe<Actions_Template_Jobs_Bool_Exp>;
};


export type Subscription_RootActions_Template_Jobs_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Actions_Template_Jobs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Actions_Template_Jobs_Order_By>>;
  where?: InputMaybe<Actions_Template_Jobs_Bool_Exp>;
};


export type Subscription_RootActions_Template_Jobs_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootActions_TemplatesArgs = {
  distinct_on?: InputMaybe<Array<Actions_Templates_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Actions_Templates_Order_By>>;
  where?: InputMaybe<Actions_Templates_Bool_Exp>;
};


export type Subscription_RootActions_Templates_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Actions_Templates_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Actions_Templates_Order_By>>;
  where?: InputMaybe<Actions_Templates_Bool_Exp>;
};


export type Subscription_RootActions_Templates_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootBuildingsArgs = {
  distinct_on?: InputMaybe<Array<Buildings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Buildings_Order_By>>;
  where?: InputMaybe<Buildings_Bool_Exp>;
};


export type Subscription_RootBuildings_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Buildings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Buildings_Order_By>>;
  where?: InputMaybe<Buildings_Bool_Exp>;
};


export type Subscription_RootBuildings_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootChecksArgs = {
  distinct_on?: InputMaybe<Array<Checks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Checks_Order_By>>;
  where?: InputMaybe<Checks_Bool_Exp>;
};


export type Subscription_RootChecks_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Checks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Checks_Order_By>>;
  where?: InputMaybe<Checks_Bool_Exp>;
};


export type Subscription_RootChecks_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootConsumed_MaterialArgs = {
  distinct_on?: InputMaybe<Array<Consumed_Material_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Consumed_Material_Order_By>>;
  where?: InputMaybe<Consumed_Material_Bool_Exp>;
};


export type Subscription_RootConsumed_Material_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Consumed_Material_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Consumed_Material_Order_By>>;
  where?: InputMaybe<Consumed_Material_Bool_Exp>;
};


export type Subscription_RootConsumed_Material_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootContactsArgs = {
  distinct_on?: InputMaybe<Array<Contacts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Contacts_Order_By>>;
  where?: InputMaybe<Contacts_Bool_Exp>;
};


export type Subscription_RootContacts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Contacts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Contacts_Order_By>>;
  where?: InputMaybe<Contacts_Bool_Exp>;
};


export type Subscription_RootContacts_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootCustomersArgs = {
  distinct_on?: InputMaybe<Array<Customers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Customers_Order_By>>;
  where?: InputMaybe<Customers_Bool_Exp>;
};


export type Subscription_RootCustomers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Customers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Customers_Order_By>>;
  where?: InputMaybe<Customers_Bool_Exp>;
};


export type Subscription_RootCustomers_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootDevice_ParametersArgs = {
  distinct_on?: InputMaybe<Array<Device_Parameters_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Device_Parameters_Order_By>>;
  where?: InputMaybe<Device_Parameters_Bool_Exp>;
};


export type Subscription_RootDevice_Parameters_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Device_Parameters_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Device_Parameters_Order_By>>;
  where?: InputMaybe<Device_Parameters_Bool_Exp>;
};


export type Subscription_RootDevice_Parameters_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootDevice_UrlsArgs = {
  distinct_on?: InputMaybe<Array<Device_Urls_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Device_Urls_Order_By>>;
  where?: InputMaybe<Device_Urls_Bool_Exp>;
};


export type Subscription_RootDevice_Urls_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Device_Urls_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Device_Urls_Order_By>>;
  where?: InputMaybe<Device_Urls_Bool_Exp>;
};


export type Subscription_RootDevice_Urls_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootDevicesArgs = {
  distinct_on?: InputMaybe<Array<Devices_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Devices_Order_By>>;
  where?: InputMaybe<Devices_Bool_Exp>;
};


export type Subscription_RootDevices_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Devices_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Devices_Order_By>>;
  where?: InputMaybe<Devices_Bool_Exp>;
};


export type Subscription_RootDevices_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootDevices_CatalogArgs = {
  distinct_on?: InputMaybe<Array<Devices_Catalog_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Devices_Catalog_Order_By>>;
  where?: InputMaybe<Devices_Catalog_Bool_Exp>;
};


export type Subscription_RootDevices_Catalog_Actions_TemplatesArgs = {
  distinct_on?: InputMaybe<Array<Devices_Catalog_Actions_Templates_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Devices_Catalog_Actions_Templates_Order_By>>;
  where?: InputMaybe<Devices_Catalog_Actions_Templates_Bool_Exp>;
};


export type Subscription_RootDevices_Catalog_Actions_Templates_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Devices_Catalog_Actions_Templates_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Devices_Catalog_Actions_Templates_Order_By>>;
  where?: InputMaybe<Devices_Catalog_Actions_Templates_Bool_Exp>;
};


export type Subscription_RootDevices_Catalog_Actions_Templates_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootDevices_Catalog_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Devices_Catalog_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Devices_Catalog_Order_By>>;
  where?: InputMaybe<Devices_Catalog_Bool_Exp>;
};


export type Subscription_RootDevices_Catalog_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootDevices_Catalog_FilesArgs = {
  distinct_on?: InputMaybe<Array<Devices_Catalog_Files_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Devices_Catalog_Files_Order_By>>;
  where?: InputMaybe<Devices_Catalog_Files_Bool_Exp>;
};


export type Subscription_RootDevices_Catalog_Files_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Devices_Catalog_Files_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Devices_Catalog_Files_Order_By>>;
  where?: InputMaybe<Devices_Catalog_Files_Bool_Exp>;
};


export type Subscription_RootDevices_Catalog_Files_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootEducation_VideosArgs = {
  distinct_on?: InputMaybe<Array<Education_Videos_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Education_Videos_Order_By>>;
  where?: InputMaybe<Education_Videos_Bool_Exp>;
};


export type Subscription_RootEducation_Videos_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Education_Videos_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Education_Videos_Order_By>>;
  where?: InputMaybe<Education_Videos_Bool_Exp>;
};


export type Subscription_RootEducation_Videos_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootFavoriteArgs = {
  distinct_on?: InputMaybe<Array<Favorite_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Favorite_Order_By>>;
  where?: InputMaybe<Favorite_Bool_Exp>;
};


export type Subscription_RootFavorite_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Favorite_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Favorite_Order_By>>;
  where?: InputMaybe<Favorite_Bool_Exp>;
};


export type Subscription_RootFavorite_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootFilesArgs = {
  distinct_on?: InputMaybe<Array<Files_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Files_Order_By>>;
  where?: InputMaybe<Files_Bool_Exp>;
};


export type Subscription_RootFiles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Files_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Files_Order_By>>;
  where?: InputMaybe<Files_Bool_Exp>;
};


export type Subscription_RootFiles_BozpArgs = {
  distinct_on?: InputMaybe<Array<Files_Bozp_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Files_Bozp_Order_By>>;
  where?: InputMaybe<Files_Bozp_Bool_Exp>;
};


export type Subscription_RootFiles_Bozp_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Files_Bozp_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Files_Bozp_Order_By>>;
  where?: InputMaybe<Files_Bozp_Bool_Exp>;
};


export type Subscription_RootFiles_Bozp_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootFiles_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootFiles_ChecksArgs = {
  distinct_on?: InputMaybe<Array<Files_Checks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Files_Checks_Order_By>>;
  where?: InputMaybe<Files_Checks_Bool_Exp>;
};


export type Subscription_RootFiles_Checks_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Files_Checks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Files_Checks_Order_By>>;
  where?: InputMaybe<Files_Checks_Bool_Exp>;
};


export type Subscription_RootFiles_Checks_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootFiles_FotodocumentationArgs = {
  distinct_on?: InputMaybe<Array<Files_Fotodocumentation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Files_Fotodocumentation_Order_By>>;
  where?: InputMaybe<Files_Fotodocumentation_Bool_Exp>;
};


export type Subscription_RootFiles_Fotodocumentation_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Files_Fotodocumentation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Files_Fotodocumentation_Order_By>>;
  where?: InputMaybe<Files_Fotodocumentation_Bool_Exp>;
};


export type Subscription_RootFiles_Fotodocumentation_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootFiles_Local_Operating_RulesArgs = {
  distinct_on?: InputMaybe<Array<Files_Local_Operating_Rules_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Files_Local_Operating_Rules_Order_By>>;
  where?: InputMaybe<Files_Local_Operating_Rules_Bool_Exp>;
};


export type Subscription_RootFiles_Local_Operating_Rules_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Files_Local_Operating_Rules_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Files_Local_Operating_Rules_Order_By>>;
  where?: InputMaybe<Files_Local_Operating_Rules_Bool_Exp>;
};


export type Subscription_RootFiles_Local_Operating_Rules_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootFiles_OthersArgs = {
  distinct_on?: InputMaybe<Array<Files_Others_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Files_Others_Order_By>>;
  where?: InputMaybe<Files_Others_Bool_Exp>;
};


export type Subscription_RootFiles_Others_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Files_Others_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Files_Others_Order_By>>;
  where?: InputMaybe<Files_Others_Bool_Exp>;
};


export type Subscription_RootFiles_Others_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootFiles_Project_DocumentationArgs = {
  distinct_on?: InputMaybe<Array<Files_Project_Documentation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Files_Project_Documentation_Order_By>>;
  where?: InputMaybe<Files_Project_Documentation_Bool_Exp>;
};


export type Subscription_RootFiles_Project_Documentation_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Files_Project_Documentation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Files_Project_Documentation_Order_By>>;
  where?: InputMaybe<Files_Project_Documentation_Bool_Exp>;
};


export type Subscription_RootFiles_Project_Documentation_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootFiles_RevisionsArgs = {
  distinct_on?: InputMaybe<Array<Files_Revisions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Files_Revisions_Order_By>>;
  where?: InputMaybe<Files_Revisions_Bool_Exp>;
};


export type Subscription_RootFiles_Revisions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Files_Revisions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Files_Revisions_Order_By>>;
  where?: InputMaybe<Files_Revisions_Bool_Exp>;
};


export type Subscription_RootFiles_Revisions_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootFiles_RisksArgs = {
  distinct_on?: InputMaybe<Array<Files_Risks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Files_Risks_Order_By>>;
  where?: InputMaybe<Files_Risks_Bool_Exp>;
};


export type Subscription_RootFiles_Risks_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Files_Risks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Files_Risks_Order_By>>;
  where?: InputMaybe<Files_Risks_Bool_Exp>;
};


export type Subscription_RootFiles_Risks_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootFull_ChecksArgs = {
  distinct_on?: InputMaybe<Array<Full_Checks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Full_Checks_Order_By>>;
  where?: InputMaybe<Full_Checks_Bool_Exp>;
};


export type Subscription_RootFull_Checks_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Full_Checks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Full_Checks_Order_By>>;
  where?: InputMaybe<Full_Checks_Bool_Exp>;
};


export type Subscription_RootFull_Checks_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootFull_RevisionsArgs = {
  distinct_on?: InputMaybe<Array<Full_Revisions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Full_Revisions_Order_By>>;
  where?: InputMaybe<Full_Revisions_Bool_Exp>;
};


export type Subscription_RootFull_Revisions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Full_Revisions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Full_Revisions_Order_By>>;
  where?: InputMaybe<Full_Revisions_Bool_Exp>;
};


export type Subscription_RootFull_Revisions_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootImportant_NoticesArgs = {
  distinct_on?: InputMaybe<Array<Important_Notices_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Important_Notices_Order_By>>;
  where?: InputMaybe<Important_Notices_Bool_Exp>;
};


export type Subscription_RootImportant_Notices_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Important_Notices_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Important_Notices_Order_By>>;
  where?: InputMaybe<Important_Notices_Bool_Exp>;
};


export type Subscription_RootImportant_Notices_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootInvoicesArgs = {
  distinct_on?: InputMaybe<Array<Invoices_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Invoices_Order_By>>;
  where?: InputMaybe<Invoices_Bool_Exp>;
};


export type Subscription_RootInvoices_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Invoices_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Invoices_Order_By>>;
  where?: InputMaybe<Invoices_Bool_Exp>;
};


export type Subscription_RootInvoices_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootKupr_Difficulty_LevelsArgs = {
  distinct_on?: InputMaybe<Array<Kupr_Difficulty_Levels_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Kupr_Difficulty_Levels_Order_By>>;
  where?: InputMaybe<Kupr_Difficulty_Levels_Bool_Exp>;
};


export type Subscription_RootKupr_Difficulty_Levels_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Kupr_Difficulty_Levels_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Kupr_Difficulty_Levels_Order_By>>;
  where?: InputMaybe<Kupr_Difficulty_Levels_Bool_Exp>;
};


export type Subscription_RootKupr_Difficulty_Levels_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootKupr_PostsArgs = {
  distinct_on?: InputMaybe<Array<Kupr_Posts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Kupr_Posts_Order_By>>;
  where?: InputMaybe<Kupr_Posts_Bool_Exp>;
};


export type Subscription_RootKupr_Posts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Kupr_Posts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Kupr_Posts_Order_By>>;
  where?: InputMaybe<Kupr_Posts_Bool_Exp>;
};


export type Subscription_RootKupr_Posts_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootMy_UserArgs = {
  distinct_on?: InputMaybe<Array<My_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<My_User_Order_By>>;
  where?: InputMaybe<My_User_Bool_Exp>;
};


export type Subscription_RootMy_User_AggregateArgs = {
  distinct_on?: InputMaybe<Array<My_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<My_User_Order_By>>;
  where?: InputMaybe<My_User_Bool_Exp>;
};


export type Subscription_RootOperation_Log_Custom_FieldsArgs = {
  distinct_on?: InputMaybe<Array<Operation_Log_Custom_Fields_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Operation_Log_Custom_Fields_Order_By>>;
  where?: InputMaybe<Operation_Log_Custom_Fields_Bool_Exp>;
};


export type Subscription_RootOperation_Log_Custom_Fields_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Operation_Log_Custom_Fields_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Operation_Log_Custom_Fields_Order_By>>;
  where?: InputMaybe<Operation_Log_Custom_Fields_Bool_Exp>;
};


export type Subscription_RootOperation_Log_Custom_Fields_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootOperation_LogsArgs = {
  distinct_on?: InputMaybe<Array<Operation_Logs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Operation_Logs_Order_By>>;
  where?: InputMaybe<Operation_Logs_Bool_Exp>;
};


export type Subscription_RootOperation_Logs_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Operation_Logs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Operation_Logs_Order_By>>;
  where?: InputMaybe<Operation_Logs_Bool_Exp>;
};


export type Subscription_RootOperation_Logs_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootOther_ExpensesArgs = {
  distinct_on?: InputMaybe<Array<Other_Expenses_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Other_Expenses_Order_By>>;
  where?: InputMaybe<Other_Expenses_Bool_Exp>;
};


export type Subscription_RootOther_Expenses_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Other_Expenses_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Other_Expenses_Order_By>>;
  where?: InputMaybe<Other_Expenses_Bool_Exp>;
};


export type Subscription_RootOther_Expenses_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootPassword_Reset_RequestsArgs = {
  distinct_on?: InputMaybe<Array<Password_Reset_Requests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Password_Reset_Requests_Order_By>>;
  where?: InputMaybe<Password_Reset_Requests_Bool_Exp>;
};


export type Subscription_RootPassword_Reset_Requests_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Password_Reset_Requests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Password_Reset_Requests_Order_By>>;
  where?: InputMaybe<Password_Reset_Requests_Bool_Exp>;
};


export type Subscription_RootPassword_Reset_Requests_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootPricingArgs = {
  distinct_on?: InputMaybe<Array<Pricing_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Pricing_Order_By>>;
  where?: InputMaybe<Pricing_Bool_Exp>;
};


export type Subscription_RootPricing_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Pricing_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Pricing_Order_By>>;
  where?: InputMaybe<Pricing_Bool_Exp>;
};


export type Subscription_RootPricing_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootRevisionsArgs = {
  distinct_on?: InputMaybe<Array<Revisions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Revisions_Order_By>>;
  where?: InputMaybe<Revisions_Bool_Exp>;
};


export type Subscription_RootRevisions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Revisions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Revisions_Order_By>>;
  where?: InputMaybe<Revisions_Bool_Exp>;
};


export type Subscription_RootRevisions_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootRolesArgs = {
  distinct_on?: InputMaybe<Array<Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Roles_Order_By>>;
  where?: InputMaybe<Roles_Bool_Exp>;
};


export type Subscription_RootRoles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Roles_Order_By>>;
  where?: InputMaybe<Roles_Bool_Exp>;
};


export type Subscription_RootRoles_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootService_OrdersArgs = {
  distinct_on?: InputMaybe<Array<Service_Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Service_Orders_Order_By>>;
  where?: InputMaybe<Service_Orders_Bool_Exp>;
};


export type Subscription_RootService_Orders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Service_Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Service_Orders_Order_By>>;
  where?: InputMaybe<Service_Orders_Bool_Exp>;
};


export type Subscription_RootService_Orders_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootSupport_LevelsArgs = {
  distinct_on?: InputMaybe<Array<Support_Levels_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Support_Levels_Order_By>>;
  where?: InputMaybe<Support_Levels_Bool_Exp>;
};


export type Subscription_RootSupport_Levels_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Support_Levels_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Support_Levels_Order_By>>;
  where?: InputMaybe<Support_Levels_Bool_Exp>;
};


export type Subscription_RootSupport_Levels_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootTenant_InvitationArgs = {
  distinct_on?: InputMaybe<Array<Tenant_Invitation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tenant_Invitation_Order_By>>;
  where?: InputMaybe<Tenant_Invitation_Bool_Exp>;
};


export type Subscription_RootTenant_Invitation_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tenant_Invitation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tenant_Invitation_Order_By>>;
  where?: InputMaybe<Tenant_Invitation_Bool_Exp>;
};


export type Subscription_RootTenant_Invitation_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootTenant_User_AccessArgs = {
  distinct_on?: InputMaybe<Array<Tenant_User_Access_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tenant_User_Access_Order_By>>;
  where?: InputMaybe<Tenant_User_Access_Bool_Exp>;
};


export type Subscription_RootTenant_User_Access_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tenant_User_Access_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tenant_User_Access_Order_By>>;
  where?: InputMaybe<Tenant_User_Access_Bool_Exp>;
};


export type Subscription_RootTenant_User_Access_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootTenantsArgs = {
  distinct_on?: InputMaybe<Array<Tenants_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tenants_Order_By>>;
  where?: InputMaybe<Tenants_Bool_Exp>;
};


export type Subscription_RootTenants_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tenants_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tenants_Order_By>>;
  where?: InputMaybe<Tenants_Bool_Exp>;
};


export type Subscription_RootTenants_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootTime_On_RoadArgs = {
  distinct_on?: InputMaybe<Array<Time_On_Road_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Time_On_Road_Order_By>>;
  where?: InputMaybe<Time_On_Road_Bool_Exp>;
};


export type Subscription_RootTime_On_Road_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Time_On_Road_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Time_On_Road_Order_By>>;
  where?: InputMaybe<Time_On_Road_Bool_Exp>;
};


export type Subscription_RootTime_On_Road_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootTzb_Custom_FieldsArgs = {
  distinct_on?: InputMaybe<Array<Tzb_Custom_Fields_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tzb_Custom_Fields_Order_By>>;
  where?: InputMaybe<Tzb_Custom_Fields_Bool_Exp>;
};


export type Subscription_RootTzb_Custom_Fields_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tzb_Custom_Fields_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tzb_Custom_Fields_Order_By>>;
  where?: InputMaybe<Tzb_Custom_Fields_Bool_Exp>;
};


export type Subscription_RootTzb_Custom_Fields_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootTzbsArgs = {
  distinct_on?: InputMaybe<Array<Tzbs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tzbs_Order_By>>;
  where?: InputMaybe<Tzbs_Bool_Exp>;
};


export type Subscription_RootTzbs_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tzbs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tzbs_Order_By>>;
  where?: InputMaybe<Tzbs_Bool_Exp>;
};


export type Subscription_RootTzbs_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootWorkersArgs = {
  distinct_on?: InputMaybe<Array<Workers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Workers_Order_By>>;
  where?: InputMaybe<Workers_Bool_Exp>;
};


export type Subscription_RootWorkers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Workers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Workers_Order_By>>;
  where?: InputMaybe<Workers_Bool_Exp>;
};


export type Subscription_RootWorkers_By_PkArgs = {
  id: Scalars['uuid'];
};

/** columns and relationships of "support_levels" */
export type Support_Levels = {
  __typename?: 'support_levels';
  created_at: Scalars['date'];
  /** An array relationship */
  customers_rel: Array<Customers>;
  /** An aggregate relationship */
  customers_rel_aggregate: Customers_Aggregate;
  email: Scalars['String'];
  id: Scalars['uuid'];
  tel: Scalars['String'];
  tenant: Scalars['uuid'];
  /** An object relationship */
  tenant_rel: Tenants;
  title: Scalars['String'];
  updated_at: Scalars['date'];
  user: Scalars['uuid'];
  /** An object relationship */
  user_rel: Users;
};


/** columns and relationships of "support_levels" */
export type Support_LevelsCustomers_RelArgs = {
  distinct_on?: InputMaybe<Array<Customers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Customers_Order_By>>;
  where?: InputMaybe<Customers_Bool_Exp>;
};


/** columns and relationships of "support_levels" */
export type Support_LevelsCustomers_Rel_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Customers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Customers_Order_By>>;
  where?: InputMaybe<Customers_Bool_Exp>;
};

/** aggregated selection of "support_levels" */
export type Support_Levels_Aggregate = {
  __typename?: 'support_levels_aggregate';
  aggregate?: Maybe<Support_Levels_Aggregate_Fields>;
  nodes: Array<Support_Levels>;
};

/** aggregate fields of "support_levels" */
export type Support_Levels_Aggregate_Fields = {
  __typename?: 'support_levels_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Support_Levels_Max_Fields>;
  min?: Maybe<Support_Levels_Min_Fields>;
};


/** aggregate fields of "support_levels" */
export type Support_Levels_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Support_Levels_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "support_levels" */
export type Support_Levels_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Support_Levels_Max_Order_By>;
  min?: InputMaybe<Support_Levels_Min_Order_By>;
};

/** input type for inserting array relation for remote table "support_levels" */
export type Support_Levels_Arr_Rel_Insert_Input = {
  data: Array<Support_Levels_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Support_Levels_On_Conflict>;
};

/** Boolean expression to filter rows from the table "support_levels". All fields are combined with a logical 'AND'. */
export type Support_Levels_Bool_Exp = {
  _and?: InputMaybe<Array<Support_Levels_Bool_Exp>>;
  _not?: InputMaybe<Support_Levels_Bool_Exp>;
  _or?: InputMaybe<Array<Support_Levels_Bool_Exp>>;
  created_at?: InputMaybe<Date_Comparison_Exp>;
  customers_rel?: InputMaybe<Customers_Bool_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  tel?: InputMaybe<String_Comparison_Exp>;
  tenant?: InputMaybe<Uuid_Comparison_Exp>;
  tenant_rel?: InputMaybe<Tenants_Bool_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Date_Comparison_Exp>;
  user?: InputMaybe<Uuid_Comparison_Exp>;
  user_rel?: InputMaybe<Users_Bool_Exp>;
};

/** unique or primary key constraints on table "support_levels" */
export enum Support_Levels_Constraint {
  /** unique or primary key constraint on columns "id" */
  SupportLevelsPkey = 'support_levels_pkey'
}

/** input type for inserting data into table "support_levels" */
export type Support_Levels_Insert_Input = {
  created_at?: InputMaybe<Scalars['date']>;
  customers_rel?: InputMaybe<Customers_Arr_Rel_Insert_Input>;
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  tel?: InputMaybe<Scalars['String']>;
  tenant?: InputMaybe<Scalars['uuid']>;
  tenant_rel?: InputMaybe<Tenants_Obj_Rel_Insert_Input>;
  title?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['date']>;
  user?: InputMaybe<Scalars['uuid']>;
  user_rel?: InputMaybe<Users_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Support_Levels_Max_Fields = {
  __typename?: 'support_levels_max_fields';
  created_at?: Maybe<Scalars['date']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  tel?: Maybe<Scalars['String']>;
  tenant?: Maybe<Scalars['uuid']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['date']>;
  user?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "support_levels" */
export type Support_Levels_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  tel?: InputMaybe<Order_By>;
  tenant?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Support_Levels_Min_Fields = {
  __typename?: 'support_levels_min_fields';
  created_at?: Maybe<Scalars['date']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  tel?: Maybe<Scalars['String']>;
  tenant?: Maybe<Scalars['uuid']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['date']>;
  user?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "support_levels" */
export type Support_Levels_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  tel?: InputMaybe<Order_By>;
  tenant?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "support_levels" */
export type Support_Levels_Mutation_Response = {
  __typename?: 'support_levels_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Support_Levels>;
};

/** input type for inserting object relation for remote table "support_levels" */
export type Support_Levels_Obj_Rel_Insert_Input = {
  data: Support_Levels_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Support_Levels_On_Conflict>;
};

/** on_conflict condition type for table "support_levels" */
export type Support_Levels_On_Conflict = {
  constraint: Support_Levels_Constraint;
  update_columns?: Array<Support_Levels_Update_Column>;
  where?: InputMaybe<Support_Levels_Bool_Exp>;
};

/** Ordering options when selecting data from "support_levels". */
export type Support_Levels_Order_By = {
  created_at?: InputMaybe<Order_By>;
  customers_rel_aggregate?: InputMaybe<Customers_Aggregate_Order_By>;
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  tel?: InputMaybe<Order_By>;
  tenant?: InputMaybe<Order_By>;
  tenant_rel?: InputMaybe<Tenants_Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Order_By>;
  user_rel?: InputMaybe<Users_Order_By>;
};

/** primary key columns input for table: support_levels */
export type Support_Levels_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "support_levels" */
export enum Support_Levels_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Tel = 'tel',
  /** column name */
  Tenant = 'tenant',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  User = 'user'
}

/** input type for updating data in table "support_levels" */
export type Support_Levels_Set_Input = {
  created_at?: InputMaybe<Scalars['date']>;
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  tel?: InputMaybe<Scalars['String']>;
  tenant?: InputMaybe<Scalars['uuid']>;
  title?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['date']>;
  user?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "support_levels" */
export enum Support_Levels_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Tel = 'tel',
  /** column name */
  Tenant = 'tenant',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  User = 'user'
}

/** columns and relationships of "tenant_invitation" */
export type Tenant_Invitation = {
  __typename?: 'tenant_invitation';
  /** An object relationship */
  createdByRel: Users;
  created_at: Scalars['timestamptz'];
  created_by: Scalars['uuid'];
  id: Scalars['uuid'];
  role?: Maybe<Scalars['uuid']>;
  /** An object relationship */
  roleRel?: Maybe<Roles>;
  tenant: Scalars['uuid'];
  /** An object relationship */
  tenantRel: Tenants;
  updated_at: Scalars['timestamptz'];
  user: Scalars['String'];
  /** An object relationship */
  userRel: Users;
};

/** aggregated selection of "tenant_invitation" */
export type Tenant_Invitation_Aggregate = {
  __typename?: 'tenant_invitation_aggregate';
  aggregate?: Maybe<Tenant_Invitation_Aggregate_Fields>;
  nodes: Array<Tenant_Invitation>;
};

/** aggregate fields of "tenant_invitation" */
export type Tenant_Invitation_Aggregate_Fields = {
  __typename?: 'tenant_invitation_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Tenant_Invitation_Max_Fields>;
  min?: Maybe<Tenant_Invitation_Min_Fields>;
};


/** aggregate fields of "tenant_invitation" */
export type Tenant_Invitation_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Tenant_Invitation_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "tenant_invitation" */
export type Tenant_Invitation_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Tenant_Invitation_Max_Order_By>;
  min?: InputMaybe<Tenant_Invitation_Min_Order_By>;
};

/** input type for inserting array relation for remote table "tenant_invitation" */
export type Tenant_Invitation_Arr_Rel_Insert_Input = {
  data: Array<Tenant_Invitation_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Tenant_Invitation_On_Conflict>;
};

/** Boolean expression to filter rows from the table "tenant_invitation". All fields are combined with a logical 'AND'. */
export type Tenant_Invitation_Bool_Exp = {
  _and?: InputMaybe<Array<Tenant_Invitation_Bool_Exp>>;
  _not?: InputMaybe<Tenant_Invitation_Bool_Exp>;
  _or?: InputMaybe<Array<Tenant_Invitation_Bool_Exp>>;
  createdByRel?: InputMaybe<Users_Bool_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  created_by?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  role?: InputMaybe<Uuid_Comparison_Exp>;
  roleRel?: InputMaybe<Roles_Bool_Exp>;
  tenant?: InputMaybe<Uuid_Comparison_Exp>;
  tenantRel?: InputMaybe<Tenants_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<String_Comparison_Exp>;
  userRel?: InputMaybe<Users_Bool_Exp>;
};

/** unique or primary key constraints on table "tenant_invitation" */
export enum Tenant_Invitation_Constraint {
  /** unique or primary key constraint on columns "id" */
  TenantInvitationPkey = 'tenant_invitation_pkey'
}

/** input type for inserting data into table "tenant_invitation" */
export type Tenant_Invitation_Insert_Input = {
  createdByRel?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  created_by?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  role?: InputMaybe<Scalars['uuid']>;
  roleRel?: InputMaybe<Roles_Obj_Rel_Insert_Input>;
  tenant?: InputMaybe<Scalars['uuid']>;
  tenantRel?: InputMaybe<Tenants_Obj_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user?: InputMaybe<Scalars['String']>;
  userRel?: InputMaybe<Users_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Tenant_Invitation_Max_Fields = {
  __typename?: 'tenant_invitation_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  created_by?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  role?: Maybe<Scalars['uuid']>;
  tenant?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "tenant_invitation" */
export type Tenant_Invitation_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  tenant?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Tenant_Invitation_Min_Fields = {
  __typename?: 'tenant_invitation_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  created_by?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  role?: Maybe<Scalars['uuid']>;
  tenant?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "tenant_invitation" */
export type Tenant_Invitation_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  tenant?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "tenant_invitation" */
export type Tenant_Invitation_Mutation_Response = {
  __typename?: 'tenant_invitation_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Tenant_Invitation>;
};

/** on_conflict condition type for table "tenant_invitation" */
export type Tenant_Invitation_On_Conflict = {
  constraint: Tenant_Invitation_Constraint;
  update_columns?: Array<Tenant_Invitation_Update_Column>;
  where?: InputMaybe<Tenant_Invitation_Bool_Exp>;
};

/** Ordering options when selecting data from "tenant_invitation". */
export type Tenant_Invitation_Order_By = {
  createdByRel?: InputMaybe<Users_Order_By>;
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  roleRel?: InputMaybe<Roles_Order_By>;
  tenant?: InputMaybe<Order_By>;
  tenantRel?: InputMaybe<Tenants_Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Order_By>;
  userRel?: InputMaybe<Users_Order_By>;
};

/** primary key columns input for table: tenant_invitation */
export type Tenant_Invitation_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "tenant_invitation" */
export enum Tenant_Invitation_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  Id = 'id',
  /** column name */
  Role = 'role',
  /** column name */
  Tenant = 'tenant',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  User = 'user'
}

/** input type for updating data in table "tenant_invitation" */
export type Tenant_Invitation_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  created_by?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  role?: InputMaybe<Scalars['uuid']>;
  tenant?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user?: InputMaybe<Scalars['String']>;
};

/** update columns of table "tenant_invitation" */
export enum Tenant_Invitation_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  Id = 'id',
  /** column name */
  Role = 'role',
  /** column name */
  Tenant = 'tenant',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  User = 'user'
}

/** columns and relationships of "tenant_user_access" */
export type Tenant_User_Access = {
  __typename?: 'tenant_user_access';
  created_at: Scalars['date'];
  id: Scalars['uuid'];
  role: Scalars['uuid'];
  /** An object relationship */
  roleRel: Roles;
  tenant: Scalars['uuid'];
  /** An object relationship */
  tenantRel: Tenants;
  updated_at: Scalars['date'];
  user: Scalars['uuid'];
  /** An object relationship */
  userRel: Users;
};

/** aggregated selection of "tenant_user_access" */
export type Tenant_User_Access_Aggregate = {
  __typename?: 'tenant_user_access_aggregate';
  aggregate?: Maybe<Tenant_User_Access_Aggregate_Fields>;
  nodes: Array<Tenant_User_Access>;
};

/** aggregate fields of "tenant_user_access" */
export type Tenant_User_Access_Aggregate_Fields = {
  __typename?: 'tenant_user_access_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Tenant_User_Access_Max_Fields>;
  min?: Maybe<Tenant_User_Access_Min_Fields>;
};


/** aggregate fields of "tenant_user_access" */
export type Tenant_User_Access_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Tenant_User_Access_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "tenant_user_access" */
export type Tenant_User_Access_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Tenant_User_Access_Max_Order_By>;
  min?: InputMaybe<Tenant_User_Access_Min_Order_By>;
};

/** input type for inserting array relation for remote table "tenant_user_access" */
export type Tenant_User_Access_Arr_Rel_Insert_Input = {
  data: Array<Tenant_User_Access_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Tenant_User_Access_On_Conflict>;
};

/** Boolean expression to filter rows from the table "tenant_user_access". All fields are combined with a logical 'AND'. */
export type Tenant_User_Access_Bool_Exp = {
  _and?: InputMaybe<Array<Tenant_User_Access_Bool_Exp>>;
  _not?: InputMaybe<Tenant_User_Access_Bool_Exp>;
  _or?: InputMaybe<Array<Tenant_User_Access_Bool_Exp>>;
  created_at?: InputMaybe<Date_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  role?: InputMaybe<Uuid_Comparison_Exp>;
  roleRel?: InputMaybe<Roles_Bool_Exp>;
  tenant?: InputMaybe<Uuid_Comparison_Exp>;
  tenantRel?: InputMaybe<Tenants_Bool_Exp>;
  updated_at?: InputMaybe<Date_Comparison_Exp>;
  user?: InputMaybe<Uuid_Comparison_Exp>;
  userRel?: InputMaybe<Users_Bool_Exp>;
};

/** unique or primary key constraints on table "tenant_user_access" */
export enum Tenant_User_Access_Constraint {
  /** unique or primary key constraint on columns "id" */
  TenantUserAccessPkey = 'tenant_user_access_pkey'
}

/** input type for inserting data into table "tenant_user_access" */
export type Tenant_User_Access_Insert_Input = {
  created_at?: InputMaybe<Scalars['date']>;
  id?: InputMaybe<Scalars['uuid']>;
  role?: InputMaybe<Scalars['uuid']>;
  roleRel?: InputMaybe<Roles_Obj_Rel_Insert_Input>;
  tenant?: InputMaybe<Scalars['uuid']>;
  tenantRel?: InputMaybe<Tenants_Obj_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['date']>;
  user?: InputMaybe<Scalars['uuid']>;
  userRel?: InputMaybe<Users_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Tenant_User_Access_Max_Fields = {
  __typename?: 'tenant_user_access_max_fields';
  created_at?: Maybe<Scalars['date']>;
  id?: Maybe<Scalars['uuid']>;
  role?: Maybe<Scalars['uuid']>;
  tenant?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['date']>;
  user?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "tenant_user_access" */
export type Tenant_User_Access_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  tenant?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Tenant_User_Access_Min_Fields = {
  __typename?: 'tenant_user_access_min_fields';
  created_at?: Maybe<Scalars['date']>;
  id?: Maybe<Scalars['uuid']>;
  role?: Maybe<Scalars['uuid']>;
  tenant?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['date']>;
  user?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "tenant_user_access" */
export type Tenant_User_Access_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  tenant?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "tenant_user_access" */
export type Tenant_User_Access_Mutation_Response = {
  __typename?: 'tenant_user_access_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Tenant_User_Access>;
};

/** on_conflict condition type for table "tenant_user_access" */
export type Tenant_User_Access_On_Conflict = {
  constraint: Tenant_User_Access_Constraint;
  update_columns?: Array<Tenant_User_Access_Update_Column>;
  where?: InputMaybe<Tenant_User_Access_Bool_Exp>;
};

/** Ordering options when selecting data from "tenant_user_access". */
export type Tenant_User_Access_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  roleRel?: InputMaybe<Roles_Order_By>;
  tenant?: InputMaybe<Order_By>;
  tenantRel?: InputMaybe<Tenants_Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Order_By>;
  userRel?: InputMaybe<Users_Order_By>;
};

/** primary key columns input for table: tenant_user_access */
export type Tenant_User_Access_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "tenant_user_access" */
export enum Tenant_User_Access_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Role = 'role',
  /** column name */
  Tenant = 'tenant',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  User = 'user'
}

/** input type for updating data in table "tenant_user_access" */
export type Tenant_User_Access_Set_Input = {
  created_at?: InputMaybe<Scalars['date']>;
  id?: InputMaybe<Scalars['uuid']>;
  role?: InputMaybe<Scalars['uuid']>;
  tenant?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['date']>;
  user?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "tenant_user_access" */
export enum Tenant_User_Access_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Role = 'role',
  /** column name */
  Tenant = 'tenant',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  User = 'user'
}

/** columns and relationships of "tenants" */
export type Tenants = {
  __typename?: 'tenants';
  /** An array relationship */
  accidents: Array<Accidents>;
  /** An aggregate relationship */
  accidents_aggregate: Accidents_Aggregate;
  /** An array relationship */
  action_notes: Array<Action_Notes>;
  /** An aggregate relationship */
  action_notes_aggregate: Action_Notes_Aggregate;
  /** An array relationship */
  actions_template_jobs: Array<Actions_Template_Jobs>;
  /** An aggregate relationship */
  actions_template_jobs_aggregate: Actions_Template_Jobs_Aggregate;
  /** An array relationship */
  actions_templates: Array<Actions_Templates>;
  /** An aggregate relationship */
  actions_templates_aggregate: Actions_Templates_Aggregate;
  /** An array relationship */
  buildings: Array<Buildings>;
  /** An aggregate relationship */
  buildings_aggregate: Buildings_Aggregate;
  /** An array relationship */
  checks: Array<Checks>;
  /** An aggregate relationship */
  checks_aggregate: Checks_Aggregate;
  /** An array relationship */
  consumed_materials: Array<Consumed_Material>;
  /** An aggregate relationship */
  consumed_materials_aggregate: Consumed_Material_Aggregate;
  /** An array relationship */
  contacts: Array<Contacts>;
  /** An aggregate relationship */
  contacts_aggregate: Contacts_Aggregate;
  created_at: Scalars['timestamptz'];
  /** An array relationship */
  customers: Array<Customers>;
  /** An aggregate relationship */
  customers_aggregate: Customers_Aggregate;
  /** An array relationship */
  device_parameters: Array<Device_Parameters>;
  /** An aggregate relationship */
  device_parameters_aggregate: Device_Parameters_Aggregate;
  /** An array relationship */
  device_urls: Array<Device_Urls>;
  /** An aggregate relationship */
  device_urls_aggregate: Device_Urls_Aggregate;
  /** An array relationship */
  devices_catalog_actions_templates: Array<Devices_Catalog_Actions_Templates>;
  /** An aggregate relationship */
  devices_catalog_actions_templates_aggregate: Devices_Catalog_Actions_Templates_Aggregate;
  /** An array relationship */
  devices_catalogs: Array<Devices_Catalog>;
  /** An aggregate relationship */
  devices_catalogs_aggregate: Devices_Catalog_Aggregate;
  /** An array relationship */
  favorites: Array<Favorite>;
  /** An aggregate relationship */
  favorites_aggregate: Favorite_Aggregate;
  /** An array relationship */
  files_bozps: Array<Files_Bozp>;
  /** An aggregate relationship */
  files_bozps_aggregate: Files_Bozp_Aggregate;
  /** An array relationship */
  files_checks: Array<Files_Checks>;
  /** An aggregate relationship */
  files_checks_aggregate: Files_Checks_Aggregate;
  /** An array relationship */
  files_fotodocumentations: Array<Files_Fotodocumentation>;
  /** An aggregate relationship */
  files_fotodocumentations_aggregate: Files_Fotodocumentation_Aggregate;
  /** An array relationship */
  files_local_operating_rules: Array<Files_Local_Operating_Rules>;
  /** An aggregate relationship */
  files_local_operating_rules_aggregate: Files_Local_Operating_Rules_Aggregate;
  /** An array relationship */
  files_others: Array<Files_Others>;
  /** An aggregate relationship */
  files_others_aggregate: Files_Others_Aggregate;
  /** An array relationship */
  files_project_documentations: Array<Files_Project_Documentation>;
  /** An aggregate relationship */
  files_project_documentations_aggregate: Files_Project_Documentation_Aggregate;
  /** An array relationship */
  files_revisions: Array<Files_Revisions>;
  /** An aggregate relationship */
  files_revisions_aggregate: Files_Revisions_Aggregate;
  /** An array relationship */
  files_risks: Array<Files_Risks>;
  /** An aggregate relationship */
  files_risks_aggregate: Files_Risks_Aggregate;
  /** An array relationship */
  full_checks: Array<Full_Checks>;
  /** An aggregate relationship */
  full_checks_aggregate: Full_Checks_Aggregate;
  ico: Scalars['Int'];
  id: Scalars['uuid'];
  /** An array relationship */
  important_notices: Array<Important_Notices>;
  /** An aggregate relationship */
  important_notices_aggregate: Important_Notices_Aggregate;
  /** An array relationship */
  invoices: Array<Invoices>;
  /** An aggregate relationship */
  invoices_aggregate: Invoices_Aggregate;
  logo?: Maybe<Scalars['uuid']>;
  /** An object relationship */
  logo_rel?: Maybe<Files>;
  name: Scalars['String'];
  /** An array relationship */
  operation_log_custom_fields: Array<Operation_Log_Custom_Fields>;
  /** An aggregate relationship */
  operation_log_custom_fields_aggregate: Operation_Log_Custom_Fields_Aggregate;
  /** An array relationship */
  operation_logs: Array<Operation_Logs>;
  /** An aggregate relationship */
  operation_logs_aggregate: Operation_Logs_Aggregate;
  /** An array relationship */
  other_expenses: Array<Other_Expenses>;
  /** An aggregate relationship */
  other_expenses_aggregate: Other_Expenses_Aggregate;
  /** An array relationship */
  pricings: Array<Pricing>;
  /** An aggregate relationship */
  pricings_aggregate: Pricing_Aggregate;
  /** An array relationship */
  revisions: Array<Revisions>;
  /** An aggregate relationship */
  revisions_aggregate: Revisions_Aggregate;
  /** An array relationship */
  roles: Array<Roles>;
  /** An aggregate relationship */
  roles_aggregate: Roles_Aggregate;
  /** An array relationship */
  service_orders: Array<Service_Orders>;
  /** An aggregate relationship */
  service_orders_aggregate: Service_Orders_Aggregate;
  /** An array relationship */
  support_levels: Array<Support_Levels>;
  /** An aggregate relationship */
  support_levels_aggregate: Support_Levels_Aggregate;
  /** An array relationship */
  tenant_invitations: Array<Tenant_Invitation>;
  /** An aggregate relationship */
  tenant_invitations_aggregate: Tenant_Invitation_Aggregate;
  /** An array relationship */
  tenant_user_accesses: Array<Tenant_User_Access>;
  /** An aggregate relationship */
  tenant_user_accesses_aggregate: Tenant_User_Access_Aggregate;
  /** An array relationship */
  time_on_roads: Array<Time_On_Road>;
  /** An aggregate relationship */
  time_on_roads_aggregate: Time_On_Road_Aggregate;
  /** An array relationship */
  tzb_custom_fields: Array<Tzb_Custom_Fields>;
  /** An aggregate relationship */
  tzb_custom_fields_aggregate: Tzb_Custom_Fields_Aggregate;
  /** An array relationship */
  tzbs: Array<Tzbs>;
  /** An aggregate relationship */
  tzbs_aggregate: Tzbs_Aggregate;
  updated_at: Scalars['timestamptz'];
  /** An array relationship */
  users: Array<Users>;
  /** An aggregate relationship */
  users_aggregate: Users_Aggregate;
  /** An array relationship */
  workers: Array<Workers>;
  /** An aggregate relationship */
  workers_aggregate: Workers_Aggregate;
};


/** columns and relationships of "tenants" */
export type TenantsAccidentsArgs = {
  distinct_on?: InputMaybe<Array<Accidents_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Accidents_Order_By>>;
  where?: InputMaybe<Accidents_Bool_Exp>;
};


/** columns and relationships of "tenants" */
export type TenantsAccidents_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Accidents_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Accidents_Order_By>>;
  where?: InputMaybe<Accidents_Bool_Exp>;
};


/** columns and relationships of "tenants" */
export type TenantsAction_NotesArgs = {
  distinct_on?: InputMaybe<Array<Action_Notes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Action_Notes_Order_By>>;
  where?: InputMaybe<Action_Notes_Bool_Exp>;
};


/** columns and relationships of "tenants" */
export type TenantsAction_Notes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Action_Notes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Action_Notes_Order_By>>;
  where?: InputMaybe<Action_Notes_Bool_Exp>;
};


/** columns and relationships of "tenants" */
export type TenantsActions_Template_JobsArgs = {
  distinct_on?: InputMaybe<Array<Actions_Template_Jobs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Actions_Template_Jobs_Order_By>>;
  where?: InputMaybe<Actions_Template_Jobs_Bool_Exp>;
};


/** columns and relationships of "tenants" */
export type TenantsActions_Template_Jobs_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Actions_Template_Jobs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Actions_Template_Jobs_Order_By>>;
  where?: InputMaybe<Actions_Template_Jobs_Bool_Exp>;
};


/** columns and relationships of "tenants" */
export type TenantsActions_TemplatesArgs = {
  distinct_on?: InputMaybe<Array<Actions_Templates_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Actions_Templates_Order_By>>;
  where?: InputMaybe<Actions_Templates_Bool_Exp>;
};


/** columns and relationships of "tenants" */
export type TenantsActions_Templates_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Actions_Templates_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Actions_Templates_Order_By>>;
  where?: InputMaybe<Actions_Templates_Bool_Exp>;
};


/** columns and relationships of "tenants" */
export type TenantsBuildingsArgs = {
  distinct_on?: InputMaybe<Array<Buildings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Buildings_Order_By>>;
  where?: InputMaybe<Buildings_Bool_Exp>;
};


/** columns and relationships of "tenants" */
export type TenantsBuildings_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Buildings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Buildings_Order_By>>;
  where?: InputMaybe<Buildings_Bool_Exp>;
};


/** columns and relationships of "tenants" */
export type TenantsChecksArgs = {
  distinct_on?: InputMaybe<Array<Checks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Checks_Order_By>>;
  where?: InputMaybe<Checks_Bool_Exp>;
};


/** columns and relationships of "tenants" */
export type TenantsChecks_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Checks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Checks_Order_By>>;
  where?: InputMaybe<Checks_Bool_Exp>;
};


/** columns and relationships of "tenants" */
export type TenantsConsumed_MaterialsArgs = {
  distinct_on?: InputMaybe<Array<Consumed_Material_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Consumed_Material_Order_By>>;
  where?: InputMaybe<Consumed_Material_Bool_Exp>;
};


/** columns and relationships of "tenants" */
export type TenantsConsumed_Materials_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Consumed_Material_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Consumed_Material_Order_By>>;
  where?: InputMaybe<Consumed_Material_Bool_Exp>;
};


/** columns and relationships of "tenants" */
export type TenantsContactsArgs = {
  distinct_on?: InputMaybe<Array<Contacts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Contacts_Order_By>>;
  where?: InputMaybe<Contacts_Bool_Exp>;
};


/** columns and relationships of "tenants" */
export type TenantsContacts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Contacts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Contacts_Order_By>>;
  where?: InputMaybe<Contacts_Bool_Exp>;
};


/** columns and relationships of "tenants" */
export type TenantsCustomersArgs = {
  distinct_on?: InputMaybe<Array<Customers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Customers_Order_By>>;
  where?: InputMaybe<Customers_Bool_Exp>;
};


/** columns and relationships of "tenants" */
export type TenantsCustomers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Customers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Customers_Order_By>>;
  where?: InputMaybe<Customers_Bool_Exp>;
};


/** columns and relationships of "tenants" */
export type TenantsDevice_ParametersArgs = {
  distinct_on?: InputMaybe<Array<Device_Parameters_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Device_Parameters_Order_By>>;
  where?: InputMaybe<Device_Parameters_Bool_Exp>;
};


/** columns and relationships of "tenants" */
export type TenantsDevice_Parameters_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Device_Parameters_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Device_Parameters_Order_By>>;
  where?: InputMaybe<Device_Parameters_Bool_Exp>;
};


/** columns and relationships of "tenants" */
export type TenantsDevice_UrlsArgs = {
  distinct_on?: InputMaybe<Array<Device_Urls_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Device_Urls_Order_By>>;
  where?: InputMaybe<Device_Urls_Bool_Exp>;
};


/** columns and relationships of "tenants" */
export type TenantsDevice_Urls_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Device_Urls_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Device_Urls_Order_By>>;
  where?: InputMaybe<Device_Urls_Bool_Exp>;
};


/** columns and relationships of "tenants" */
export type TenantsDevices_Catalog_Actions_TemplatesArgs = {
  distinct_on?: InputMaybe<Array<Devices_Catalog_Actions_Templates_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Devices_Catalog_Actions_Templates_Order_By>>;
  where?: InputMaybe<Devices_Catalog_Actions_Templates_Bool_Exp>;
};


/** columns and relationships of "tenants" */
export type TenantsDevices_Catalog_Actions_Templates_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Devices_Catalog_Actions_Templates_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Devices_Catalog_Actions_Templates_Order_By>>;
  where?: InputMaybe<Devices_Catalog_Actions_Templates_Bool_Exp>;
};


/** columns and relationships of "tenants" */
export type TenantsDevices_CatalogsArgs = {
  distinct_on?: InputMaybe<Array<Devices_Catalog_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Devices_Catalog_Order_By>>;
  where?: InputMaybe<Devices_Catalog_Bool_Exp>;
};


/** columns and relationships of "tenants" */
export type TenantsDevices_Catalogs_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Devices_Catalog_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Devices_Catalog_Order_By>>;
  where?: InputMaybe<Devices_Catalog_Bool_Exp>;
};


/** columns and relationships of "tenants" */
export type TenantsFavoritesArgs = {
  distinct_on?: InputMaybe<Array<Favorite_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Favorite_Order_By>>;
  where?: InputMaybe<Favorite_Bool_Exp>;
};


/** columns and relationships of "tenants" */
export type TenantsFavorites_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Favorite_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Favorite_Order_By>>;
  where?: InputMaybe<Favorite_Bool_Exp>;
};


/** columns and relationships of "tenants" */
export type TenantsFiles_BozpsArgs = {
  distinct_on?: InputMaybe<Array<Files_Bozp_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Files_Bozp_Order_By>>;
  where?: InputMaybe<Files_Bozp_Bool_Exp>;
};


/** columns and relationships of "tenants" */
export type TenantsFiles_Bozps_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Files_Bozp_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Files_Bozp_Order_By>>;
  where?: InputMaybe<Files_Bozp_Bool_Exp>;
};


/** columns and relationships of "tenants" */
export type TenantsFiles_ChecksArgs = {
  distinct_on?: InputMaybe<Array<Files_Checks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Files_Checks_Order_By>>;
  where?: InputMaybe<Files_Checks_Bool_Exp>;
};


/** columns and relationships of "tenants" */
export type TenantsFiles_Checks_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Files_Checks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Files_Checks_Order_By>>;
  where?: InputMaybe<Files_Checks_Bool_Exp>;
};


/** columns and relationships of "tenants" */
export type TenantsFiles_FotodocumentationsArgs = {
  distinct_on?: InputMaybe<Array<Files_Fotodocumentation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Files_Fotodocumentation_Order_By>>;
  where?: InputMaybe<Files_Fotodocumentation_Bool_Exp>;
};


/** columns and relationships of "tenants" */
export type TenantsFiles_Fotodocumentations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Files_Fotodocumentation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Files_Fotodocumentation_Order_By>>;
  where?: InputMaybe<Files_Fotodocumentation_Bool_Exp>;
};


/** columns and relationships of "tenants" */
export type TenantsFiles_Local_Operating_RulesArgs = {
  distinct_on?: InputMaybe<Array<Files_Local_Operating_Rules_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Files_Local_Operating_Rules_Order_By>>;
  where?: InputMaybe<Files_Local_Operating_Rules_Bool_Exp>;
};


/** columns and relationships of "tenants" */
export type TenantsFiles_Local_Operating_Rules_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Files_Local_Operating_Rules_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Files_Local_Operating_Rules_Order_By>>;
  where?: InputMaybe<Files_Local_Operating_Rules_Bool_Exp>;
};


/** columns and relationships of "tenants" */
export type TenantsFiles_OthersArgs = {
  distinct_on?: InputMaybe<Array<Files_Others_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Files_Others_Order_By>>;
  where?: InputMaybe<Files_Others_Bool_Exp>;
};


/** columns and relationships of "tenants" */
export type TenantsFiles_Others_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Files_Others_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Files_Others_Order_By>>;
  where?: InputMaybe<Files_Others_Bool_Exp>;
};


/** columns and relationships of "tenants" */
export type TenantsFiles_Project_DocumentationsArgs = {
  distinct_on?: InputMaybe<Array<Files_Project_Documentation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Files_Project_Documentation_Order_By>>;
  where?: InputMaybe<Files_Project_Documentation_Bool_Exp>;
};


/** columns and relationships of "tenants" */
export type TenantsFiles_Project_Documentations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Files_Project_Documentation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Files_Project_Documentation_Order_By>>;
  where?: InputMaybe<Files_Project_Documentation_Bool_Exp>;
};


/** columns and relationships of "tenants" */
export type TenantsFiles_RevisionsArgs = {
  distinct_on?: InputMaybe<Array<Files_Revisions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Files_Revisions_Order_By>>;
  where?: InputMaybe<Files_Revisions_Bool_Exp>;
};


/** columns and relationships of "tenants" */
export type TenantsFiles_Revisions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Files_Revisions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Files_Revisions_Order_By>>;
  where?: InputMaybe<Files_Revisions_Bool_Exp>;
};


/** columns and relationships of "tenants" */
export type TenantsFiles_RisksArgs = {
  distinct_on?: InputMaybe<Array<Files_Risks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Files_Risks_Order_By>>;
  where?: InputMaybe<Files_Risks_Bool_Exp>;
};


/** columns and relationships of "tenants" */
export type TenantsFiles_Risks_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Files_Risks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Files_Risks_Order_By>>;
  where?: InputMaybe<Files_Risks_Bool_Exp>;
};


/** columns and relationships of "tenants" */
export type TenantsFull_ChecksArgs = {
  distinct_on?: InputMaybe<Array<Full_Checks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Full_Checks_Order_By>>;
  where?: InputMaybe<Full_Checks_Bool_Exp>;
};


/** columns and relationships of "tenants" */
export type TenantsFull_Checks_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Full_Checks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Full_Checks_Order_By>>;
  where?: InputMaybe<Full_Checks_Bool_Exp>;
};


/** columns and relationships of "tenants" */
export type TenantsImportant_NoticesArgs = {
  distinct_on?: InputMaybe<Array<Important_Notices_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Important_Notices_Order_By>>;
  where?: InputMaybe<Important_Notices_Bool_Exp>;
};


/** columns and relationships of "tenants" */
export type TenantsImportant_Notices_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Important_Notices_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Important_Notices_Order_By>>;
  where?: InputMaybe<Important_Notices_Bool_Exp>;
};


/** columns and relationships of "tenants" */
export type TenantsInvoicesArgs = {
  distinct_on?: InputMaybe<Array<Invoices_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Invoices_Order_By>>;
  where?: InputMaybe<Invoices_Bool_Exp>;
};


/** columns and relationships of "tenants" */
export type TenantsInvoices_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Invoices_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Invoices_Order_By>>;
  where?: InputMaybe<Invoices_Bool_Exp>;
};


/** columns and relationships of "tenants" */
export type TenantsOperation_Log_Custom_FieldsArgs = {
  distinct_on?: InputMaybe<Array<Operation_Log_Custom_Fields_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Operation_Log_Custom_Fields_Order_By>>;
  where?: InputMaybe<Operation_Log_Custom_Fields_Bool_Exp>;
};


/** columns and relationships of "tenants" */
export type TenantsOperation_Log_Custom_Fields_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Operation_Log_Custom_Fields_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Operation_Log_Custom_Fields_Order_By>>;
  where?: InputMaybe<Operation_Log_Custom_Fields_Bool_Exp>;
};


/** columns and relationships of "tenants" */
export type TenantsOperation_LogsArgs = {
  distinct_on?: InputMaybe<Array<Operation_Logs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Operation_Logs_Order_By>>;
  where?: InputMaybe<Operation_Logs_Bool_Exp>;
};


/** columns and relationships of "tenants" */
export type TenantsOperation_Logs_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Operation_Logs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Operation_Logs_Order_By>>;
  where?: InputMaybe<Operation_Logs_Bool_Exp>;
};


/** columns and relationships of "tenants" */
export type TenantsOther_ExpensesArgs = {
  distinct_on?: InputMaybe<Array<Other_Expenses_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Other_Expenses_Order_By>>;
  where?: InputMaybe<Other_Expenses_Bool_Exp>;
};


/** columns and relationships of "tenants" */
export type TenantsOther_Expenses_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Other_Expenses_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Other_Expenses_Order_By>>;
  where?: InputMaybe<Other_Expenses_Bool_Exp>;
};


/** columns and relationships of "tenants" */
export type TenantsPricingsArgs = {
  distinct_on?: InputMaybe<Array<Pricing_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Pricing_Order_By>>;
  where?: InputMaybe<Pricing_Bool_Exp>;
};


/** columns and relationships of "tenants" */
export type TenantsPricings_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Pricing_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Pricing_Order_By>>;
  where?: InputMaybe<Pricing_Bool_Exp>;
};


/** columns and relationships of "tenants" */
export type TenantsRevisionsArgs = {
  distinct_on?: InputMaybe<Array<Revisions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Revisions_Order_By>>;
  where?: InputMaybe<Revisions_Bool_Exp>;
};


/** columns and relationships of "tenants" */
export type TenantsRevisions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Revisions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Revisions_Order_By>>;
  where?: InputMaybe<Revisions_Bool_Exp>;
};


/** columns and relationships of "tenants" */
export type TenantsRolesArgs = {
  distinct_on?: InputMaybe<Array<Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Roles_Order_By>>;
  where?: InputMaybe<Roles_Bool_Exp>;
};


/** columns and relationships of "tenants" */
export type TenantsRoles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Roles_Order_By>>;
  where?: InputMaybe<Roles_Bool_Exp>;
};


/** columns and relationships of "tenants" */
export type TenantsService_OrdersArgs = {
  distinct_on?: InputMaybe<Array<Service_Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Service_Orders_Order_By>>;
  where?: InputMaybe<Service_Orders_Bool_Exp>;
};


/** columns and relationships of "tenants" */
export type TenantsService_Orders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Service_Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Service_Orders_Order_By>>;
  where?: InputMaybe<Service_Orders_Bool_Exp>;
};


/** columns and relationships of "tenants" */
export type TenantsSupport_LevelsArgs = {
  distinct_on?: InputMaybe<Array<Support_Levels_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Support_Levels_Order_By>>;
  where?: InputMaybe<Support_Levels_Bool_Exp>;
};


/** columns and relationships of "tenants" */
export type TenantsSupport_Levels_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Support_Levels_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Support_Levels_Order_By>>;
  where?: InputMaybe<Support_Levels_Bool_Exp>;
};


/** columns and relationships of "tenants" */
export type TenantsTenant_InvitationsArgs = {
  distinct_on?: InputMaybe<Array<Tenant_Invitation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tenant_Invitation_Order_By>>;
  where?: InputMaybe<Tenant_Invitation_Bool_Exp>;
};


/** columns and relationships of "tenants" */
export type TenantsTenant_Invitations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tenant_Invitation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tenant_Invitation_Order_By>>;
  where?: InputMaybe<Tenant_Invitation_Bool_Exp>;
};


/** columns and relationships of "tenants" */
export type TenantsTenant_User_AccessesArgs = {
  distinct_on?: InputMaybe<Array<Tenant_User_Access_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tenant_User_Access_Order_By>>;
  where?: InputMaybe<Tenant_User_Access_Bool_Exp>;
};


/** columns and relationships of "tenants" */
export type TenantsTenant_User_Accesses_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tenant_User_Access_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tenant_User_Access_Order_By>>;
  where?: InputMaybe<Tenant_User_Access_Bool_Exp>;
};


/** columns and relationships of "tenants" */
export type TenantsTime_On_RoadsArgs = {
  distinct_on?: InputMaybe<Array<Time_On_Road_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Time_On_Road_Order_By>>;
  where?: InputMaybe<Time_On_Road_Bool_Exp>;
};


/** columns and relationships of "tenants" */
export type TenantsTime_On_Roads_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Time_On_Road_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Time_On_Road_Order_By>>;
  where?: InputMaybe<Time_On_Road_Bool_Exp>;
};


/** columns and relationships of "tenants" */
export type TenantsTzb_Custom_FieldsArgs = {
  distinct_on?: InputMaybe<Array<Tzb_Custom_Fields_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tzb_Custom_Fields_Order_By>>;
  where?: InputMaybe<Tzb_Custom_Fields_Bool_Exp>;
};


/** columns and relationships of "tenants" */
export type TenantsTzb_Custom_Fields_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tzb_Custom_Fields_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tzb_Custom_Fields_Order_By>>;
  where?: InputMaybe<Tzb_Custom_Fields_Bool_Exp>;
};


/** columns and relationships of "tenants" */
export type TenantsTzbsArgs = {
  distinct_on?: InputMaybe<Array<Tzbs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tzbs_Order_By>>;
  where?: InputMaybe<Tzbs_Bool_Exp>;
};


/** columns and relationships of "tenants" */
export type TenantsTzbs_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tzbs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tzbs_Order_By>>;
  where?: InputMaybe<Tzbs_Bool_Exp>;
};


/** columns and relationships of "tenants" */
export type TenantsUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


/** columns and relationships of "tenants" */
export type TenantsUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


/** columns and relationships of "tenants" */
export type TenantsWorkersArgs = {
  distinct_on?: InputMaybe<Array<Workers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Workers_Order_By>>;
  where?: InputMaybe<Workers_Bool_Exp>;
};


/** columns and relationships of "tenants" */
export type TenantsWorkers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Workers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Workers_Order_By>>;
  where?: InputMaybe<Workers_Bool_Exp>;
};

/** aggregated selection of "tenants" */
export type Tenants_Aggregate = {
  __typename?: 'tenants_aggregate';
  aggregate?: Maybe<Tenants_Aggregate_Fields>;
  nodes: Array<Tenants>;
};

/** aggregate fields of "tenants" */
export type Tenants_Aggregate_Fields = {
  __typename?: 'tenants_aggregate_fields';
  avg?: Maybe<Tenants_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Tenants_Max_Fields>;
  min?: Maybe<Tenants_Min_Fields>;
  stddev?: Maybe<Tenants_Stddev_Fields>;
  stddev_pop?: Maybe<Tenants_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Tenants_Stddev_Samp_Fields>;
  sum?: Maybe<Tenants_Sum_Fields>;
  var_pop?: Maybe<Tenants_Var_Pop_Fields>;
  var_samp?: Maybe<Tenants_Var_Samp_Fields>;
  variance?: Maybe<Tenants_Variance_Fields>;
};


/** aggregate fields of "tenants" */
export type Tenants_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Tenants_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "tenants" */
export type Tenants_Aggregate_Order_By = {
  avg?: InputMaybe<Tenants_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Tenants_Max_Order_By>;
  min?: InputMaybe<Tenants_Min_Order_By>;
  stddev?: InputMaybe<Tenants_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Tenants_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Tenants_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Tenants_Sum_Order_By>;
  var_pop?: InputMaybe<Tenants_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Tenants_Var_Samp_Order_By>;
  variance?: InputMaybe<Tenants_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "tenants" */
export type Tenants_Arr_Rel_Insert_Input = {
  data: Array<Tenants_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Tenants_On_Conflict>;
};

/** aggregate avg on columns */
export type Tenants_Avg_Fields = {
  __typename?: 'tenants_avg_fields';
  ico?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "tenants" */
export type Tenants_Avg_Order_By = {
  ico?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "tenants". All fields are combined with a logical 'AND'. */
export type Tenants_Bool_Exp = {
  _and?: InputMaybe<Array<Tenants_Bool_Exp>>;
  _not?: InputMaybe<Tenants_Bool_Exp>;
  _or?: InputMaybe<Array<Tenants_Bool_Exp>>;
  accidents?: InputMaybe<Accidents_Bool_Exp>;
  action_notes?: InputMaybe<Action_Notes_Bool_Exp>;
  actions_template_jobs?: InputMaybe<Actions_Template_Jobs_Bool_Exp>;
  actions_templates?: InputMaybe<Actions_Templates_Bool_Exp>;
  buildings?: InputMaybe<Buildings_Bool_Exp>;
  checks?: InputMaybe<Checks_Bool_Exp>;
  consumed_materials?: InputMaybe<Consumed_Material_Bool_Exp>;
  contacts?: InputMaybe<Contacts_Bool_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  customers?: InputMaybe<Customers_Bool_Exp>;
  device_parameters?: InputMaybe<Device_Parameters_Bool_Exp>;
  device_urls?: InputMaybe<Device_Urls_Bool_Exp>;
  devices_catalog_actions_templates?: InputMaybe<Devices_Catalog_Actions_Templates_Bool_Exp>;
  devices_catalogs?: InputMaybe<Devices_Catalog_Bool_Exp>;
  favorites?: InputMaybe<Favorite_Bool_Exp>;
  files_bozps?: InputMaybe<Files_Bozp_Bool_Exp>;
  files_checks?: InputMaybe<Files_Checks_Bool_Exp>;
  files_fotodocumentations?: InputMaybe<Files_Fotodocumentation_Bool_Exp>;
  files_local_operating_rules?: InputMaybe<Files_Local_Operating_Rules_Bool_Exp>;
  files_others?: InputMaybe<Files_Others_Bool_Exp>;
  files_project_documentations?: InputMaybe<Files_Project_Documentation_Bool_Exp>;
  files_revisions?: InputMaybe<Files_Revisions_Bool_Exp>;
  files_risks?: InputMaybe<Files_Risks_Bool_Exp>;
  full_checks?: InputMaybe<Full_Checks_Bool_Exp>;
  ico?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  important_notices?: InputMaybe<Important_Notices_Bool_Exp>;
  invoices?: InputMaybe<Invoices_Bool_Exp>;
  logo?: InputMaybe<Uuid_Comparison_Exp>;
  logo_rel?: InputMaybe<Files_Bool_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  operation_log_custom_fields?: InputMaybe<Operation_Log_Custom_Fields_Bool_Exp>;
  operation_logs?: InputMaybe<Operation_Logs_Bool_Exp>;
  other_expenses?: InputMaybe<Other_Expenses_Bool_Exp>;
  pricings?: InputMaybe<Pricing_Bool_Exp>;
  revisions?: InputMaybe<Revisions_Bool_Exp>;
  roles?: InputMaybe<Roles_Bool_Exp>;
  service_orders?: InputMaybe<Service_Orders_Bool_Exp>;
  support_levels?: InputMaybe<Support_Levels_Bool_Exp>;
  tenant_invitations?: InputMaybe<Tenant_Invitation_Bool_Exp>;
  tenant_user_accesses?: InputMaybe<Tenant_User_Access_Bool_Exp>;
  time_on_roads?: InputMaybe<Time_On_Road_Bool_Exp>;
  tzb_custom_fields?: InputMaybe<Tzb_Custom_Fields_Bool_Exp>;
  tzbs?: InputMaybe<Tzbs_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  users?: InputMaybe<Users_Bool_Exp>;
  workers?: InputMaybe<Workers_Bool_Exp>;
};

/** unique or primary key constraints on table "tenants" */
export enum Tenants_Constraint {
  /** unique or primary key constraint on columns "id" */
  TenantsPkey = 'tenants_pkey'
}

/** input type for incrementing numeric columns in table "tenants" */
export type Tenants_Inc_Input = {
  ico?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "tenants" */
export type Tenants_Insert_Input = {
  accidents?: InputMaybe<Accidents_Arr_Rel_Insert_Input>;
  action_notes?: InputMaybe<Action_Notes_Arr_Rel_Insert_Input>;
  actions_template_jobs?: InputMaybe<Actions_Template_Jobs_Arr_Rel_Insert_Input>;
  actions_templates?: InputMaybe<Actions_Templates_Arr_Rel_Insert_Input>;
  buildings?: InputMaybe<Buildings_Arr_Rel_Insert_Input>;
  checks?: InputMaybe<Checks_Arr_Rel_Insert_Input>;
  consumed_materials?: InputMaybe<Consumed_Material_Arr_Rel_Insert_Input>;
  contacts?: InputMaybe<Contacts_Arr_Rel_Insert_Input>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  customers?: InputMaybe<Customers_Arr_Rel_Insert_Input>;
  device_parameters?: InputMaybe<Device_Parameters_Arr_Rel_Insert_Input>;
  device_urls?: InputMaybe<Device_Urls_Arr_Rel_Insert_Input>;
  devices_catalog_actions_templates?: InputMaybe<Devices_Catalog_Actions_Templates_Arr_Rel_Insert_Input>;
  devices_catalogs?: InputMaybe<Devices_Catalog_Arr_Rel_Insert_Input>;
  favorites?: InputMaybe<Favorite_Arr_Rel_Insert_Input>;
  files_bozps?: InputMaybe<Files_Bozp_Arr_Rel_Insert_Input>;
  files_checks?: InputMaybe<Files_Checks_Arr_Rel_Insert_Input>;
  files_fotodocumentations?: InputMaybe<Files_Fotodocumentation_Arr_Rel_Insert_Input>;
  files_local_operating_rules?: InputMaybe<Files_Local_Operating_Rules_Arr_Rel_Insert_Input>;
  files_others?: InputMaybe<Files_Others_Arr_Rel_Insert_Input>;
  files_project_documentations?: InputMaybe<Files_Project_Documentation_Arr_Rel_Insert_Input>;
  files_revisions?: InputMaybe<Files_Revisions_Arr_Rel_Insert_Input>;
  files_risks?: InputMaybe<Files_Risks_Arr_Rel_Insert_Input>;
  full_checks?: InputMaybe<Full_Checks_Arr_Rel_Insert_Input>;
  ico?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['uuid']>;
  important_notices?: InputMaybe<Important_Notices_Arr_Rel_Insert_Input>;
  invoices?: InputMaybe<Invoices_Arr_Rel_Insert_Input>;
  logo?: InputMaybe<Scalars['uuid']>;
  logo_rel?: InputMaybe<Files_Obj_Rel_Insert_Input>;
  name?: InputMaybe<Scalars['String']>;
  operation_log_custom_fields?: InputMaybe<Operation_Log_Custom_Fields_Arr_Rel_Insert_Input>;
  operation_logs?: InputMaybe<Operation_Logs_Arr_Rel_Insert_Input>;
  other_expenses?: InputMaybe<Other_Expenses_Arr_Rel_Insert_Input>;
  pricings?: InputMaybe<Pricing_Arr_Rel_Insert_Input>;
  revisions?: InputMaybe<Revisions_Arr_Rel_Insert_Input>;
  roles?: InputMaybe<Roles_Arr_Rel_Insert_Input>;
  service_orders?: InputMaybe<Service_Orders_Arr_Rel_Insert_Input>;
  support_levels?: InputMaybe<Support_Levels_Arr_Rel_Insert_Input>;
  tenant_invitations?: InputMaybe<Tenant_Invitation_Arr_Rel_Insert_Input>;
  tenant_user_accesses?: InputMaybe<Tenant_User_Access_Arr_Rel_Insert_Input>;
  time_on_roads?: InputMaybe<Time_On_Road_Arr_Rel_Insert_Input>;
  tzb_custom_fields?: InputMaybe<Tzb_Custom_Fields_Arr_Rel_Insert_Input>;
  tzbs?: InputMaybe<Tzbs_Arr_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  users?: InputMaybe<Users_Arr_Rel_Insert_Input>;
  workers?: InputMaybe<Workers_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Tenants_Max_Fields = {
  __typename?: 'tenants_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  ico?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  logo?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "tenants" */
export type Tenants_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  ico?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  logo?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Tenants_Min_Fields = {
  __typename?: 'tenants_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  ico?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  logo?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "tenants" */
export type Tenants_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  ico?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  logo?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "tenants" */
export type Tenants_Mutation_Response = {
  __typename?: 'tenants_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Tenants>;
};

/** input type for inserting object relation for remote table "tenants" */
export type Tenants_Obj_Rel_Insert_Input = {
  data: Tenants_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Tenants_On_Conflict>;
};

/** on_conflict condition type for table "tenants" */
export type Tenants_On_Conflict = {
  constraint: Tenants_Constraint;
  update_columns?: Array<Tenants_Update_Column>;
  where?: InputMaybe<Tenants_Bool_Exp>;
};

/** Ordering options when selecting data from "tenants". */
export type Tenants_Order_By = {
  accidents_aggregate?: InputMaybe<Accidents_Aggregate_Order_By>;
  action_notes_aggregate?: InputMaybe<Action_Notes_Aggregate_Order_By>;
  actions_template_jobs_aggregate?: InputMaybe<Actions_Template_Jobs_Aggregate_Order_By>;
  actions_templates_aggregate?: InputMaybe<Actions_Templates_Aggregate_Order_By>;
  buildings_aggregate?: InputMaybe<Buildings_Aggregate_Order_By>;
  checks_aggregate?: InputMaybe<Checks_Aggregate_Order_By>;
  consumed_materials_aggregate?: InputMaybe<Consumed_Material_Aggregate_Order_By>;
  contacts_aggregate?: InputMaybe<Contacts_Aggregate_Order_By>;
  created_at?: InputMaybe<Order_By>;
  customers_aggregate?: InputMaybe<Customers_Aggregate_Order_By>;
  device_parameters_aggregate?: InputMaybe<Device_Parameters_Aggregate_Order_By>;
  device_urls_aggregate?: InputMaybe<Device_Urls_Aggregate_Order_By>;
  devices_catalog_actions_templates_aggregate?: InputMaybe<Devices_Catalog_Actions_Templates_Aggregate_Order_By>;
  devices_catalogs_aggregate?: InputMaybe<Devices_Catalog_Aggregate_Order_By>;
  favorites_aggregate?: InputMaybe<Favorite_Aggregate_Order_By>;
  files_bozps_aggregate?: InputMaybe<Files_Bozp_Aggregate_Order_By>;
  files_checks_aggregate?: InputMaybe<Files_Checks_Aggregate_Order_By>;
  files_fotodocumentations_aggregate?: InputMaybe<Files_Fotodocumentation_Aggregate_Order_By>;
  files_local_operating_rules_aggregate?: InputMaybe<Files_Local_Operating_Rules_Aggregate_Order_By>;
  files_others_aggregate?: InputMaybe<Files_Others_Aggregate_Order_By>;
  files_project_documentations_aggregate?: InputMaybe<Files_Project_Documentation_Aggregate_Order_By>;
  files_revisions_aggregate?: InputMaybe<Files_Revisions_Aggregate_Order_By>;
  files_risks_aggregate?: InputMaybe<Files_Risks_Aggregate_Order_By>;
  full_checks_aggregate?: InputMaybe<Full_Checks_Aggregate_Order_By>;
  ico?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  important_notices_aggregate?: InputMaybe<Important_Notices_Aggregate_Order_By>;
  invoices_aggregate?: InputMaybe<Invoices_Aggregate_Order_By>;
  logo?: InputMaybe<Order_By>;
  logo_rel?: InputMaybe<Files_Order_By>;
  name?: InputMaybe<Order_By>;
  operation_log_custom_fields_aggregate?: InputMaybe<Operation_Log_Custom_Fields_Aggregate_Order_By>;
  operation_logs_aggregate?: InputMaybe<Operation_Logs_Aggregate_Order_By>;
  other_expenses_aggregate?: InputMaybe<Other_Expenses_Aggregate_Order_By>;
  pricings_aggregate?: InputMaybe<Pricing_Aggregate_Order_By>;
  revisions_aggregate?: InputMaybe<Revisions_Aggregate_Order_By>;
  roles_aggregate?: InputMaybe<Roles_Aggregate_Order_By>;
  service_orders_aggregate?: InputMaybe<Service_Orders_Aggregate_Order_By>;
  support_levels_aggregate?: InputMaybe<Support_Levels_Aggregate_Order_By>;
  tenant_invitations_aggregate?: InputMaybe<Tenant_Invitation_Aggregate_Order_By>;
  tenant_user_accesses_aggregate?: InputMaybe<Tenant_User_Access_Aggregate_Order_By>;
  time_on_roads_aggregate?: InputMaybe<Time_On_Road_Aggregate_Order_By>;
  tzb_custom_fields_aggregate?: InputMaybe<Tzb_Custom_Fields_Aggregate_Order_By>;
  tzbs_aggregate?: InputMaybe<Tzbs_Aggregate_Order_By>;
  updated_at?: InputMaybe<Order_By>;
  users_aggregate?: InputMaybe<Users_Aggregate_Order_By>;
  workers_aggregate?: InputMaybe<Workers_Aggregate_Order_By>;
};

/** primary key columns input for table: tenants */
export type Tenants_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "tenants" */
export enum Tenants_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Ico = 'ico',
  /** column name */
  Id = 'id',
  /** column name */
  Logo = 'logo',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "tenants" */
export type Tenants_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  ico?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['uuid']>;
  logo?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Tenants_Stddev_Fields = {
  __typename?: 'tenants_stddev_fields';
  ico?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "tenants" */
export type Tenants_Stddev_Order_By = {
  ico?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Tenants_Stddev_Pop_Fields = {
  __typename?: 'tenants_stddev_pop_fields';
  ico?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "tenants" */
export type Tenants_Stddev_Pop_Order_By = {
  ico?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Tenants_Stddev_Samp_Fields = {
  __typename?: 'tenants_stddev_samp_fields';
  ico?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "tenants" */
export type Tenants_Stddev_Samp_Order_By = {
  ico?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Tenants_Sum_Fields = {
  __typename?: 'tenants_sum_fields';
  ico?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "tenants" */
export type Tenants_Sum_Order_By = {
  ico?: InputMaybe<Order_By>;
};

/** update columns of table "tenants" */
export enum Tenants_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Ico = 'ico',
  /** column name */
  Id = 'id',
  /** column name */
  Logo = 'logo',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Tenants_Var_Pop_Fields = {
  __typename?: 'tenants_var_pop_fields';
  ico?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "tenants" */
export type Tenants_Var_Pop_Order_By = {
  ico?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Tenants_Var_Samp_Fields = {
  __typename?: 'tenants_var_samp_fields';
  ico?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "tenants" */
export type Tenants_Var_Samp_Order_By = {
  ico?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Tenants_Variance_Fields = {
  __typename?: 'tenants_variance_fields';
  ico?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "tenants" */
export type Tenants_Variance_Order_By = {
  ico?: InputMaybe<Order_By>;
};

/** columns and relationships of "time_on_road" */
export type Time_On_Road = {
  __typename?: 'time_on_road';
  created_at: Scalars['date'];
  date: Scalars['date'];
  hours: Scalars['String'];
  id: Scalars['uuid'];
  person: Scalars['uuid'];
  service_order: Scalars['uuid'];
  /** An object relationship */
  service_order_rel: Service_Orders;
  tenant: Scalars['uuid'];
  /** An object relationship */
  tenant_rel: Tenants;
  updated_at: Scalars['date'];
  /** An object relationship */
  user_rel: Users;
};

/** aggregated selection of "time_on_road" */
export type Time_On_Road_Aggregate = {
  __typename?: 'time_on_road_aggregate';
  aggregate?: Maybe<Time_On_Road_Aggregate_Fields>;
  nodes: Array<Time_On_Road>;
};

/** aggregate fields of "time_on_road" */
export type Time_On_Road_Aggregate_Fields = {
  __typename?: 'time_on_road_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Time_On_Road_Max_Fields>;
  min?: Maybe<Time_On_Road_Min_Fields>;
};


/** aggregate fields of "time_on_road" */
export type Time_On_Road_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Time_On_Road_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "time_on_road" */
export type Time_On_Road_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Time_On_Road_Max_Order_By>;
  min?: InputMaybe<Time_On_Road_Min_Order_By>;
};

/** input type for inserting array relation for remote table "time_on_road" */
export type Time_On_Road_Arr_Rel_Insert_Input = {
  data: Array<Time_On_Road_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Time_On_Road_On_Conflict>;
};

/** Boolean expression to filter rows from the table "time_on_road". All fields are combined with a logical 'AND'. */
export type Time_On_Road_Bool_Exp = {
  _and?: InputMaybe<Array<Time_On_Road_Bool_Exp>>;
  _not?: InputMaybe<Time_On_Road_Bool_Exp>;
  _or?: InputMaybe<Array<Time_On_Road_Bool_Exp>>;
  created_at?: InputMaybe<Date_Comparison_Exp>;
  date?: InputMaybe<Date_Comparison_Exp>;
  hours?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  person?: InputMaybe<Uuid_Comparison_Exp>;
  service_order?: InputMaybe<Uuid_Comparison_Exp>;
  service_order_rel?: InputMaybe<Service_Orders_Bool_Exp>;
  tenant?: InputMaybe<Uuid_Comparison_Exp>;
  tenant_rel?: InputMaybe<Tenants_Bool_Exp>;
  updated_at?: InputMaybe<Date_Comparison_Exp>;
  user_rel?: InputMaybe<Users_Bool_Exp>;
};

/** unique or primary key constraints on table "time_on_road" */
export enum Time_On_Road_Constraint {
  /** unique or primary key constraint on columns "id" */
  TimeOnRoadPkey = 'time_on_road_pkey'
}

/** input type for inserting data into table "time_on_road" */
export type Time_On_Road_Insert_Input = {
  created_at?: InputMaybe<Scalars['date']>;
  date?: InputMaybe<Scalars['date']>;
  hours?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  person?: InputMaybe<Scalars['uuid']>;
  service_order?: InputMaybe<Scalars['uuid']>;
  service_order_rel?: InputMaybe<Service_Orders_Obj_Rel_Insert_Input>;
  tenant?: InputMaybe<Scalars['uuid']>;
  tenant_rel?: InputMaybe<Tenants_Obj_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['date']>;
  user_rel?: InputMaybe<Users_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Time_On_Road_Max_Fields = {
  __typename?: 'time_on_road_max_fields';
  created_at?: Maybe<Scalars['date']>;
  date?: Maybe<Scalars['date']>;
  hours?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  person?: Maybe<Scalars['uuid']>;
  service_order?: Maybe<Scalars['uuid']>;
  tenant?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['date']>;
};

/** order by max() on columns of table "time_on_road" */
export type Time_On_Road_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  date?: InputMaybe<Order_By>;
  hours?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  person?: InputMaybe<Order_By>;
  service_order?: InputMaybe<Order_By>;
  tenant?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Time_On_Road_Min_Fields = {
  __typename?: 'time_on_road_min_fields';
  created_at?: Maybe<Scalars['date']>;
  date?: Maybe<Scalars['date']>;
  hours?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  person?: Maybe<Scalars['uuid']>;
  service_order?: Maybe<Scalars['uuid']>;
  tenant?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['date']>;
};

/** order by min() on columns of table "time_on_road" */
export type Time_On_Road_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  date?: InputMaybe<Order_By>;
  hours?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  person?: InputMaybe<Order_By>;
  service_order?: InputMaybe<Order_By>;
  tenant?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "time_on_road" */
export type Time_On_Road_Mutation_Response = {
  __typename?: 'time_on_road_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Time_On_Road>;
};

/** on_conflict condition type for table "time_on_road" */
export type Time_On_Road_On_Conflict = {
  constraint: Time_On_Road_Constraint;
  update_columns?: Array<Time_On_Road_Update_Column>;
  where?: InputMaybe<Time_On_Road_Bool_Exp>;
};

/** Ordering options when selecting data from "time_on_road". */
export type Time_On_Road_Order_By = {
  created_at?: InputMaybe<Order_By>;
  date?: InputMaybe<Order_By>;
  hours?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  person?: InputMaybe<Order_By>;
  service_order?: InputMaybe<Order_By>;
  service_order_rel?: InputMaybe<Service_Orders_Order_By>;
  tenant?: InputMaybe<Order_By>;
  tenant_rel?: InputMaybe<Tenants_Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_rel?: InputMaybe<Users_Order_By>;
};

/** primary key columns input for table: time_on_road */
export type Time_On_Road_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "time_on_road" */
export enum Time_On_Road_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Date = 'date',
  /** column name */
  Hours = 'hours',
  /** column name */
  Id = 'id',
  /** column name */
  Person = 'person',
  /** column name */
  ServiceOrder = 'service_order',
  /** column name */
  Tenant = 'tenant',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "time_on_road" */
export type Time_On_Road_Set_Input = {
  created_at?: InputMaybe<Scalars['date']>;
  date?: InputMaybe<Scalars['date']>;
  hours?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  person?: InputMaybe<Scalars['uuid']>;
  service_order?: InputMaybe<Scalars['uuid']>;
  tenant?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['date']>;
};

/** update columns of table "time_on_road" */
export enum Time_On_Road_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Date = 'date',
  /** column name */
  Hours = 'hours',
  /** column name */
  Id = 'id',
  /** column name */
  Person = 'person',
  /** column name */
  ServiceOrder = 'service_order',
  /** column name */
  Tenant = 'tenant',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Timestamp_Cast_Exp = {
  String?: InputMaybe<String_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export type Timestamp_Comparison_Exp = {
  _cast?: InputMaybe<Timestamp_Cast_Exp>;
  _eq?: InputMaybe<Scalars['timestamp']>;
  _gt?: InputMaybe<Scalars['timestamp']>;
  _gte?: InputMaybe<Scalars['timestamp']>;
  _in?: InputMaybe<Array<Scalars['timestamp']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamp']>;
  _lte?: InputMaybe<Scalars['timestamp']>;
  _neq?: InputMaybe<Scalars['timestamp']>;
  _nin?: InputMaybe<Array<Scalars['timestamp']>>;
};

export type Timestamptz_Cast_Exp = {
  String?: InputMaybe<String_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _cast?: InputMaybe<Timestamptz_Cast_Exp>;
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "tzb_custom_fields" */
export type Tzb_Custom_Fields = {
  __typename?: 'tzb_custom_fields';
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  index: Scalars['Int'];
  /** An array relationship */
  operation_log_custom_fields_rel: Array<Operation_Log_Custom_Fields>;
  /** An aggregate relationship */
  operation_log_custom_fields_rel_aggregate: Operation_Log_Custom_Fields_Aggregate;
  tenant: Scalars['uuid'];
  /** An object relationship */
  tenant_rel: Tenants;
  title: Scalars['String'];
  tzb_id: Scalars['uuid'];
  /** An object relationship */
  tzb_rel: Tzbs;
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "tzb_custom_fields" */
export type Tzb_Custom_FieldsOperation_Log_Custom_Fields_RelArgs = {
  distinct_on?: InputMaybe<Array<Operation_Log_Custom_Fields_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Operation_Log_Custom_Fields_Order_By>>;
  where?: InputMaybe<Operation_Log_Custom_Fields_Bool_Exp>;
};


/** columns and relationships of "tzb_custom_fields" */
export type Tzb_Custom_FieldsOperation_Log_Custom_Fields_Rel_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Operation_Log_Custom_Fields_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Operation_Log_Custom_Fields_Order_By>>;
  where?: InputMaybe<Operation_Log_Custom_Fields_Bool_Exp>;
};

/** aggregated selection of "tzb_custom_fields" */
export type Tzb_Custom_Fields_Aggregate = {
  __typename?: 'tzb_custom_fields_aggregate';
  aggregate?: Maybe<Tzb_Custom_Fields_Aggregate_Fields>;
  nodes: Array<Tzb_Custom_Fields>;
};

/** aggregate fields of "tzb_custom_fields" */
export type Tzb_Custom_Fields_Aggregate_Fields = {
  __typename?: 'tzb_custom_fields_aggregate_fields';
  avg?: Maybe<Tzb_Custom_Fields_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Tzb_Custom_Fields_Max_Fields>;
  min?: Maybe<Tzb_Custom_Fields_Min_Fields>;
  stddev?: Maybe<Tzb_Custom_Fields_Stddev_Fields>;
  stddev_pop?: Maybe<Tzb_Custom_Fields_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Tzb_Custom_Fields_Stddev_Samp_Fields>;
  sum?: Maybe<Tzb_Custom_Fields_Sum_Fields>;
  var_pop?: Maybe<Tzb_Custom_Fields_Var_Pop_Fields>;
  var_samp?: Maybe<Tzb_Custom_Fields_Var_Samp_Fields>;
  variance?: Maybe<Tzb_Custom_Fields_Variance_Fields>;
};


/** aggregate fields of "tzb_custom_fields" */
export type Tzb_Custom_Fields_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Tzb_Custom_Fields_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "tzb_custom_fields" */
export type Tzb_Custom_Fields_Aggregate_Order_By = {
  avg?: InputMaybe<Tzb_Custom_Fields_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Tzb_Custom_Fields_Max_Order_By>;
  min?: InputMaybe<Tzb_Custom_Fields_Min_Order_By>;
  stddev?: InputMaybe<Tzb_Custom_Fields_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Tzb_Custom_Fields_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Tzb_Custom_Fields_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Tzb_Custom_Fields_Sum_Order_By>;
  var_pop?: InputMaybe<Tzb_Custom_Fields_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Tzb_Custom_Fields_Var_Samp_Order_By>;
  variance?: InputMaybe<Tzb_Custom_Fields_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "tzb_custom_fields" */
export type Tzb_Custom_Fields_Arr_Rel_Insert_Input = {
  data: Array<Tzb_Custom_Fields_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Tzb_Custom_Fields_On_Conflict>;
};

/** aggregate avg on columns */
export type Tzb_Custom_Fields_Avg_Fields = {
  __typename?: 'tzb_custom_fields_avg_fields';
  index?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "tzb_custom_fields" */
export type Tzb_Custom_Fields_Avg_Order_By = {
  index?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "tzb_custom_fields". All fields are combined with a logical 'AND'. */
export type Tzb_Custom_Fields_Bool_Exp = {
  _and?: InputMaybe<Array<Tzb_Custom_Fields_Bool_Exp>>;
  _not?: InputMaybe<Tzb_Custom_Fields_Bool_Exp>;
  _or?: InputMaybe<Array<Tzb_Custom_Fields_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  index?: InputMaybe<Int_Comparison_Exp>;
  operation_log_custom_fields_rel?: InputMaybe<Operation_Log_Custom_Fields_Bool_Exp>;
  tenant?: InputMaybe<Uuid_Comparison_Exp>;
  tenant_rel?: InputMaybe<Tenants_Bool_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  tzb_id?: InputMaybe<Uuid_Comparison_Exp>;
  tzb_rel?: InputMaybe<Tzbs_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "tzb_custom_fields" */
export enum Tzb_Custom_Fields_Constraint {
  /** unique or primary key constraint on columns "id" */
  TzbCustomFieldsPkey = 'tzb_custom_fields_pkey'
}

/** input type for incrementing numeric columns in table "tzb_custom_fields" */
export type Tzb_Custom_Fields_Inc_Input = {
  index?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "tzb_custom_fields" */
export type Tzb_Custom_Fields_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  index?: InputMaybe<Scalars['Int']>;
  operation_log_custom_fields_rel?: InputMaybe<Operation_Log_Custom_Fields_Arr_Rel_Insert_Input>;
  tenant?: InputMaybe<Scalars['uuid']>;
  tenant_rel?: InputMaybe<Tenants_Obj_Rel_Insert_Input>;
  title?: InputMaybe<Scalars['String']>;
  tzb_id?: InputMaybe<Scalars['uuid']>;
  tzb_rel?: InputMaybe<Tzbs_Obj_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Tzb_Custom_Fields_Max_Fields = {
  __typename?: 'tzb_custom_fields_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  index?: Maybe<Scalars['Int']>;
  tenant?: Maybe<Scalars['uuid']>;
  title?: Maybe<Scalars['String']>;
  tzb_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "tzb_custom_fields" */
export type Tzb_Custom_Fields_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  index?: InputMaybe<Order_By>;
  tenant?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  tzb_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Tzb_Custom_Fields_Min_Fields = {
  __typename?: 'tzb_custom_fields_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  index?: Maybe<Scalars['Int']>;
  tenant?: Maybe<Scalars['uuid']>;
  title?: Maybe<Scalars['String']>;
  tzb_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "tzb_custom_fields" */
export type Tzb_Custom_Fields_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  index?: InputMaybe<Order_By>;
  tenant?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  tzb_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "tzb_custom_fields" */
export type Tzb_Custom_Fields_Mutation_Response = {
  __typename?: 'tzb_custom_fields_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Tzb_Custom_Fields>;
};

/** input type for inserting object relation for remote table "tzb_custom_fields" */
export type Tzb_Custom_Fields_Obj_Rel_Insert_Input = {
  data: Tzb_Custom_Fields_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Tzb_Custom_Fields_On_Conflict>;
};

/** on_conflict condition type for table "tzb_custom_fields" */
export type Tzb_Custom_Fields_On_Conflict = {
  constraint: Tzb_Custom_Fields_Constraint;
  update_columns?: Array<Tzb_Custom_Fields_Update_Column>;
  where?: InputMaybe<Tzb_Custom_Fields_Bool_Exp>;
};

/** Ordering options when selecting data from "tzb_custom_fields". */
export type Tzb_Custom_Fields_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  index?: InputMaybe<Order_By>;
  operation_log_custom_fields_rel_aggregate?: InputMaybe<Operation_Log_Custom_Fields_Aggregate_Order_By>;
  tenant?: InputMaybe<Order_By>;
  tenant_rel?: InputMaybe<Tenants_Order_By>;
  title?: InputMaybe<Order_By>;
  tzb_id?: InputMaybe<Order_By>;
  tzb_rel?: InputMaybe<Tzbs_Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: tzb_custom_fields */
export type Tzb_Custom_Fields_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "tzb_custom_fields" */
export enum Tzb_Custom_Fields_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Index = 'index',
  /** column name */
  Tenant = 'tenant',
  /** column name */
  Title = 'title',
  /** column name */
  TzbId = 'tzb_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "tzb_custom_fields" */
export type Tzb_Custom_Fields_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  index?: InputMaybe<Scalars['Int']>;
  tenant?: InputMaybe<Scalars['uuid']>;
  title?: InputMaybe<Scalars['String']>;
  tzb_id?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Tzb_Custom_Fields_Stddev_Fields = {
  __typename?: 'tzb_custom_fields_stddev_fields';
  index?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "tzb_custom_fields" */
export type Tzb_Custom_Fields_Stddev_Order_By = {
  index?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Tzb_Custom_Fields_Stddev_Pop_Fields = {
  __typename?: 'tzb_custom_fields_stddev_pop_fields';
  index?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "tzb_custom_fields" */
export type Tzb_Custom_Fields_Stddev_Pop_Order_By = {
  index?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Tzb_Custom_Fields_Stddev_Samp_Fields = {
  __typename?: 'tzb_custom_fields_stddev_samp_fields';
  index?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "tzb_custom_fields" */
export type Tzb_Custom_Fields_Stddev_Samp_Order_By = {
  index?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Tzb_Custom_Fields_Sum_Fields = {
  __typename?: 'tzb_custom_fields_sum_fields';
  index?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "tzb_custom_fields" */
export type Tzb_Custom_Fields_Sum_Order_By = {
  index?: InputMaybe<Order_By>;
};

/** update columns of table "tzb_custom_fields" */
export enum Tzb_Custom_Fields_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Index = 'index',
  /** column name */
  Tenant = 'tenant',
  /** column name */
  Title = 'title',
  /** column name */
  TzbId = 'tzb_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Tzb_Custom_Fields_Var_Pop_Fields = {
  __typename?: 'tzb_custom_fields_var_pop_fields';
  index?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "tzb_custom_fields" */
export type Tzb_Custom_Fields_Var_Pop_Order_By = {
  index?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Tzb_Custom_Fields_Var_Samp_Fields = {
  __typename?: 'tzb_custom_fields_var_samp_fields';
  index?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "tzb_custom_fields" */
export type Tzb_Custom_Fields_Var_Samp_Order_By = {
  index?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Tzb_Custom_Fields_Variance_Fields = {
  __typename?: 'tzb_custom_fields_variance_fields';
  index?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "tzb_custom_fields" */
export type Tzb_Custom_Fields_Variance_Order_By = {
  index?: InputMaybe<Order_By>;
};

/** columns and relationships of "tzbs" */
export type Tzbs = {
  __typename?: 'tzbs';
  /** An array relationship */
  accidents: Array<Accidents>;
  /** An aggregate relationship */
  accidents_aggregate: Accidents_Aggregate;
  building: Scalars['uuid'];
  /** An object relationship */
  building_rel: Buildings;
  /** An array relationship */
  contacts: Array<Contacts>;
  /** An aggregate relationship */
  contacts_aggregate: Contacts_Aggregate;
  created_at: Scalars['date'];
  /** An array relationship */
  devices: Array<Devices>;
  /** An aggregate relationship */
  devices_aggregate: Devices_Aggregate;
  /** An array relationship */
  favorites: Array<Favorite>;
  /** An aggregate relationship */
  favorites_aggregate: Favorite_Aggregate;
  /** An array relationship */
  files_bozps: Array<Files_Bozp>;
  /** An aggregate relationship */
  files_bozps_aggregate: Files_Bozp_Aggregate;
  /** An array relationship */
  files_checks: Array<Files_Checks>;
  /** An aggregate relationship */
  files_checks_aggregate: Files_Checks_Aggregate;
  /** An array relationship */
  files_fotodocumentations: Array<Files_Fotodocumentation>;
  /** An aggregate relationship */
  files_fotodocumentations_aggregate: Files_Fotodocumentation_Aggregate;
  /** An array relationship */
  files_local_operating_rules: Array<Files_Local_Operating_Rules>;
  /** An aggregate relationship */
  files_local_operating_rules_aggregate: Files_Local_Operating_Rules_Aggregate;
  /** An array relationship */
  files_others: Array<Files_Others>;
  /** An aggregate relationship */
  files_others_aggregate: Files_Others_Aggregate;
  /** An array relationship */
  files_project_documentations: Array<Files_Project_Documentation>;
  /** An aggregate relationship */
  files_project_documentations_aggregate: Files_Project_Documentation_Aggregate;
  /** An array relationship */
  files_revisions: Array<Files_Revisions>;
  /** An aggregate relationship */
  files_revisions_aggregate: Files_Revisions_Aggregate;
  /** An array relationship */
  files_risks: Array<Files_Risks>;
  /** An aggregate relationship */
  files_risks_aggregate: Files_Risks_Aggregate;
  /** An array relationship */
  full_checks: Array<Full_Checks>;
  /** An aggregate relationship */
  full_checks_aggregate: Full_Checks_Aggregate;
  /** An array relationship */
  full_revisions: Array<Full_Revisions>;
  /** An aggregate relationship */
  full_revisions_aggregate: Full_Revisions_Aggregate;
  id: Scalars['uuid'];
  /** An array relationship */
  important_notices: Array<Important_Notices>;
  /** An aggregate relationship */
  important_notices_aggregate: Important_Notices_Aggregate;
  /** An array relationship */
  invoices: Array<Invoices>;
  /** An aggregate relationship */
  invoices_aggregate: Invoices_Aggregate;
  name: Scalars['String'];
  /** An array relationship */
  operation_logs: Array<Operation_Logs>;
  /** An aggregate relationship */
  operation_logs_aggregate: Operation_Logs_Aggregate;
  /** An array relationship */
  service_orders: Array<Service_Orders>;
  /** An aggregate relationship */
  service_orders_aggregate: Service_Orders_Aggregate;
  tenant: Scalars['uuid'];
  /** An object relationship */
  tenant_rel: Tenants;
  /** An array relationship */
  tzb_custom_fields_rel: Array<Tzb_Custom_Fields>;
  /** An aggregate relationship */
  tzb_custom_fields_rel_aggregate: Tzb_Custom_Fields_Aggregate;
  updated_at: Scalars['date'];
  user: Scalars['uuid'];
  /** An object relationship */
  user_rel: Users;
};


/** columns and relationships of "tzbs" */
export type TzbsAccidentsArgs = {
  distinct_on?: InputMaybe<Array<Accidents_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Accidents_Order_By>>;
  where?: InputMaybe<Accidents_Bool_Exp>;
};


/** columns and relationships of "tzbs" */
export type TzbsAccidents_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Accidents_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Accidents_Order_By>>;
  where?: InputMaybe<Accidents_Bool_Exp>;
};


/** columns and relationships of "tzbs" */
export type TzbsContactsArgs = {
  distinct_on?: InputMaybe<Array<Contacts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Contacts_Order_By>>;
  where?: InputMaybe<Contacts_Bool_Exp>;
};


/** columns and relationships of "tzbs" */
export type TzbsContacts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Contacts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Contacts_Order_By>>;
  where?: InputMaybe<Contacts_Bool_Exp>;
};


/** columns and relationships of "tzbs" */
export type TzbsDevicesArgs = {
  distinct_on?: InputMaybe<Array<Devices_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Devices_Order_By>>;
  where?: InputMaybe<Devices_Bool_Exp>;
};


/** columns and relationships of "tzbs" */
export type TzbsDevices_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Devices_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Devices_Order_By>>;
  where?: InputMaybe<Devices_Bool_Exp>;
};


/** columns and relationships of "tzbs" */
export type TzbsFavoritesArgs = {
  distinct_on?: InputMaybe<Array<Favorite_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Favorite_Order_By>>;
  where?: InputMaybe<Favorite_Bool_Exp>;
};


/** columns and relationships of "tzbs" */
export type TzbsFavorites_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Favorite_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Favorite_Order_By>>;
  where?: InputMaybe<Favorite_Bool_Exp>;
};


/** columns and relationships of "tzbs" */
export type TzbsFiles_BozpsArgs = {
  distinct_on?: InputMaybe<Array<Files_Bozp_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Files_Bozp_Order_By>>;
  where?: InputMaybe<Files_Bozp_Bool_Exp>;
};


/** columns and relationships of "tzbs" */
export type TzbsFiles_Bozps_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Files_Bozp_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Files_Bozp_Order_By>>;
  where?: InputMaybe<Files_Bozp_Bool_Exp>;
};


/** columns and relationships of "tzbs" */
export type TzbsFiles_ChecksArgs = {
  distinct_on?: InputMaybe<Array<Files_Checks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Files_Checks_Order_By>>;
  where?: InputMaybe<Files_Checks_Bool_Exp>;
};


/** columns and relationships of "tzbs" */
export type TzbsFiles_Checks_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Files_Checks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Files_Checks_Order_By>>;
  where?: InputMaybe<Files_Checks_Bool_Exp>;
};


/** columns and relationships of "tzbs" */
export type TzbsFiles_FotodocumentationsArgs = {
  distinct_on?: InputMaybe<Array<Files_Fotodocumentation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Files_Fotodocumentation_Order_By>>;
  where?: InputMaybe<Files_Fotodocumentation_Bool_Exp>;
};


/** columns and relationships of "tzbs" */
export type TzbsFiles_Fotodocumentations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Files_Fotodocumentation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Files_Fotodocumentation_Order_By>>;
  where?: InputMaybe<Files_Fotodocumentation_Bool_Exp>;
};


/** columns and relationships of "tzbs" */
export type TzbsFiles_Local_Operating_RulesArgs = {
  distinct_on?: InputMaybe<Array<Files_Local_Operating_Rules_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Files_Local_Operating_Rules_Order_By>>;
  where?: InputMaybe<Files_Local_Operating_Rules_Bool_Exp>;
};


/** columns and relationships of "tzbs" */
export type TzbsFiles_Local_Operating_Rules_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Files_Local_Operating_Rules_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Files_Local_Operating_Rules_Order_By>>;
  where?: InputMaybe<Files_Local_Operating_Rules_Bool_Exp>;
};


/** columns and relationships of "tzbs" */
export type TzbsFiles_OthersArgs = {
  distinct_on?: InputMaybe<Array<Files_Others_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Files_Others_Order_By>>;
  where?: InputMaybe<Files_Others_Bool_Exp>;
};


/** columns and relationships of "tzbs" */
export type TzbsFiles_Others_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Files_Others_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Files_Others_Order_By>>;
  where?: InputMaybe<Files_Others_Bool_Exp>;
};


/** columns and relationships of "tzbs" */
export type TzbsFiles_Project_DocumentationsArgs = {
  distinct_on?: InputMaybe<Array<Files_Project_Documentation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Files_Project_Documentation_Order_By>>;
  where?: InputMaybe<Files_Project_Documentation_Bool_Exp>;
};


/** columns and relationships of "tzbs" */
export type TzbsFiles_Project_Documentations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Files_Project_Documentation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Files_Project_Documentation_Order_By>>;
  where?: InputMaybe<Files_Project_Documentation_Bool_Exp>;
};


/** columns and relationships of "tzbs" */
export type TzbsFiles_RevisionsArgs = {
  distinct_on?: InputMaybe<Array<Files_Revisions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Files_Revisions_Order_By>>;
  where?: InputMaybe<Files_Revisions_Bool_Exp>;
};


/** columns and relationships of "tzbs" */
export type TzbsFiles_Revisions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Files_Revisions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Files_Revisions_Order_By>>;
  where?: InputMaybe<Files_Revisions_Bool_Exp>;
};


/** columns and relationships of "tzbs" */
export type TzbsFiles_RisksArgs = {
  distinct_on?: InputMaybe<Array<Files_Risks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Files_Risks_Order_By>>;
  where?: InputMaybe<Files_Risks_Bool_Exp>;
};


/** columns and relationships of "tzbs" */
export type TzbsFiles_Risks_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Files_Risks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Files_Risks_Order_By>>;
  where?: InputMaybe<Files_Risks_Bool_Exp>;
};


/** columns and relationships of "tzbs" */
export type TzbsFull_ChecksArgs = {
  distinct_on?: InputMaybe<Array<Full_Checks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Full_Checks_Order_By>>;
  where?: InputMaybe<Full_Checks_Bool_Exp>;
};


/** columns and relationships of "tzbs" */
export type TzbsFull_Checks_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Full_Checks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Full_Checks_Order_By>>;
  where?: InputMaybe<Full_Checks_Bool_Exp>;
};


/** columns and relationships of "tzbs" */
export type TzbsFull_RevisionsArgs = {
  distinct_on?: InputMaybe<Array<Full_Revisions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Full_Revisions_Order_By>>;
  where?: InputMaybe<Full_Revisions_Bool_Exp>;
};


/** columns and relationships of "tzbs" */
export type TzbsFull_Revisions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Full_Revisions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Full_Revisions_Order_By>>;
  where?: InputMaybe<Full_Revisions_Bool_Exp>;
};


/** columns and relationships of "tzbs" */
export type TzbsImportant_NoticesArgs = {
  distinct_on?: InputMaybe<Array<Important_Notices_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Important_Notices_Order_By>>;
  where?: InputMaybe<Important_Notices_Bool_Exp>;
};


/** columns and relationships of "tzbs" */
export type TzbsImportant_Notices_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Important_Notices_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Important_Notices_Order_By>>;
  where?: InputMaybe<Important_Notices_Bool_Exp>;
};


/** columns and relationships of "tzbs" */
export type TzbsInvoicesArgs = {
  distinct_on?: InputMaybe<Array<Invoices_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Invoices_Order_By>>;
  where?: InputMaybe<Invoices_Bool_Exp>;
};


/** columns and relationships of "tzbs" */
export type TzbsInvoices_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Invoices_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Invoices_Order_By>>;
  where?: InputMaybe<Invoices_Bool_Exp>;
};


/** columns and relationships of "tzbs" */
export type TzbsOperation_LogsArgs = {
  distinct_on?: InputMaybe<Array<Operation_Logs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Operation_Logs_Order_By>>;
  where?: InputMaybe<Operation_Logs_Bool_Exp>;
};


/** columns and relationships of "tzbs" */
export type TzbsOperation_Logs_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Operation_Logs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Operation_Logs_Order_By>>;
  where?: InputMaybe<Operation_Logs_Bool_Exp>;
};


/** columns and relationships of "tzbs" */
export type TzbsService_OrdersArgs = {
  distinct_on?: InputMaybe<Array<Service_Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Service_Orders_Order_By>>;
  where?: InputMaybe<Service_Orders_Bool_Exp>;
};


/** columns and relationships of "tzbs" */
export type TzbsService_Orders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Service_Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Service_Orders_Order_By>>;
  where?: InputMaybe<Service_Orders_Bool_Exp>;
};


/** columns and relationships of "tzbs" */
export type TzbsTzb_Custom_Fields_RelArgs = {
  distinct_on?: InputMaybe<Array<Tzb_Custom_Fields_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tzb_Custom_Fields_Order_By>>;
  where?: InputMaybe<Tzb_Custom_Fields_Bool_Exp>;
};


/** columns and relationships of "tzbs" */
export type TzbsTzb_Custom_Fields_Rel_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tzb_Custom_Fields_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tzb_Custom_Fields_Order_By>>;
  where?: InputMaybe<Tzb_Custom_Fields_Bool_Exp>;
};

/** aggregated selection of "tzbs" */
export type Tzbs_Aggregate = {
  __typename?: 'tzbs_aggregate';
  aggregate?: Maybe<Tzbs_Aggregate_Fields>;
  nodes: Array<Tzbs>;
};

/** aggregate fields of "tzbs" */
export type Tzbs_Aggregate_Fields = {
  __typename?: 'tzbs_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Tzbs_Max_Fields>;
  min?: Maybe<Tzbs_Min_Fields>;
};


/** aggregate fields of "tzbs" */
export type Tzbs_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Tzbs_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "tzbs" */
export type Tzbs_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Tzbs_Max_Order_By>;
  min?: InputMaybe<Tzbs_Min_Order_By>;
};

/** input type for inserting array relation for remote table "tzbs" */
export type Tzbs_Arr_Rel_Insert_Input = {
  data: Array<Tzbs_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Tzbs_On_Conflict>;
};

/** Boolean expression to filter rows from the table "tzbs". All fields are combined with a logical 'AND'. */
export type Tzbs_Bool_Exp = {
  _and?: InputMaybe<Array<Tzbs_Bool_Exp>>;
  _not?: InputMaybe<Tzbs_Bool_Exp>;
  _or?: InputMaybe<Array<Tzbs_Bool_Exp>>;
  accidents?: InputMaybe<Accidents_Bool_Exp>;
  building?: InputMaybe<Uuid_Comparison_Exp>;
  building_rel?: InputMaybe<Buildings_Bool_Exp>;
  contacts?: InputMaybe<Contacts_Bool_Exp>;
  created_at?: InputMaybe<Date_Comparison_Exp>;
  devices?: InputMaybe<Devices_Bool_Exp>;
  favorites?: InputMaybe<Favorite_Bool_Exp>;
  files_bozps?: InputMaybe<Files_Bozp_Bool_Exp>;
  files_checks?: InputMaybe<Files_Checks_Bool_Exp>;
  files_fotodocumentations?: InputMaybe<Files_Fotodocumentation_Bool_Exp>;
  files_local_operating_rules?: InputMaybe<Files_Local_Operating_Rules_Bool_Exp>;
  files_others?: InputMaybe<Files_Others_Bool_Exp>;
  files_project_documentations?: InputMaybe<Files_Project_Documentation_Bool_Exp>;
  files_revisions?: InputMaybe<Files_Revisions_Bool_Exp>;
  files_risks?: InputMaybe<Files_Risks_Bool_Exp>;
  full_checks?: InputMaybe<Full_Checks_Bool_Exp>;
  full_revisions?: InputMaybe<Full_Revisions_Bool_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  important_notices?: InputMaybe<Important_Notices_Bool_Exp>;
  invoices?: InputMaybe<Invoices_Bool_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  operation_logs?: InputMaybe<Operation_Logs_Bool_Exp>;
  service_orders?: InputMaybe<Service_Orders_Bool_Exp>;
  tenant?: InputMaybe<Uuid_Comparison_Exp>;
  tenant_rel?: InputMaybe<Tenants_Bool_Exp>;
  tzb_custom_fields_rel?: InputMaybe<Tzb_Custom_Fields_Bool_Exp>;
  updated_at?: InputMaybe<Date_Comparison_Exp>;
  user?: InputMaybe<Uuid_Comparison_Exp>;
  user_rel?: InputMaybe<Users_Bool_Exp>;
};

/** unique or primary key constraints on table "tzbs" */
export enum Tzbs_Constraint {
  /** unique or primary key constraint on columns "id" */
  TzbsPkey = 'tzbs_pkey'
}

/** input type for inserting data into table "tzbs" */
export type Tzbs_Insert_Input = {
  accidents?: InputMaybe<Accidents_Arr_Rel_Insert_Input>;
  building?: InputMaybe<Scalars['uuid']>;
  building_rel?: InputMaybe<Buildings_Obj_Rel_Insert_Input>;
  contacts?: InputMaybe<Contacts_Arr_Rel_Insert_Input>;
  created_at?: InputMaybe<Scalars['date']>;
  devices?: InputMaybe<Devices_Arr_Rel_Insert_Input>;
  favorites?: InputMaybe<Favorite_Arr_Rel_Insert_Input>;
  files_bozps?: InputMaybe<Files_Bozp_Arr_Rel_Insert_Input>;
  files_checks?: InputMaybe<Files_Checks_Arr_Rel_Insert_Input>;
  files_fotodocumentations?: InputMaybe<Files_Fotodocumentation_Arr_Rel_Insert_Input>;
  files_local_operating_rules?: InputMaybe<Files_Local_Operating_Rules_Arr_Rel_Insert_Input>;
  files_others?: InputMaybe<Files_Others_Arr_Rel_Insert_Input>;
  files_project_documentations?: InputMaybe<Files_Project_Documentation_Arr_Rel_Insert_Input>;
  files_revisions?: InputMaybe<Files_Revisions_Arr_Rel_Insert_Input>;
  files_risks?: InputMaybe<Files_Risks_Arr_Rel_Insert_Input>;
  full_checks?: InputMaybe<Full_Checks_Arr_Rel_Insert_Input>;
  full_revisions?: InputMaybe<Full_Revisions_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['uuid']>;
  important_notices?: InputMaybe<Important_Notices_Arr_Rel_Insert_Input>;
  invoices?: InputMaybe<Invoices_Arr_Rel_Insert_Input>;
  name?: InputMaybe<Scalars['String']>;
  operation_logs?: InputMaybe<Operation_Logs_Arr_Rel_Insert_Input>;
  service_orders?: InputMaybe<Service_Orders_Arr_Rel_Insert_Input>;
  tenant?: InputMaybe<Scalars['uuid']>;
  tenant_rel?: InputMaybe<Tenants_Obj_Rel_Insert_Input>;
  tzb_custom_fields_rel?: InputMaybe<Tzb_Custom_Fields_Arr_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['date']>;
  user?: InputMaybe<Scalars['uuid']>;
  user_rel?: InputMaybe<Users_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Tzbs_Max_Fields = {
  __typename?: 'tzbs_max_fields';
  building?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['date']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  tenant?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['date']>;
  user?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "tzbs" */
export type Tzbs_Max_Order_By = {
  building?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  tenant?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Tzbs_Min_Fields = {
  __typename?: 'tzbs_min_fields';
  building?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['date']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  tenant?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['date']>;
  user?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "tzbs" */
export type Tzbs_Min_Order_By = {
  building?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  tenant?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "tzbs" */
export type Tzbs_Mutation_Response = {
  __typename?: 'tzbs_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Tzbs>;
};

/** input type for inserting object relation for remote table "tzbs" */
export type Tzbs_Obj_Rel_Insert_Input = {
  data: Tzbs_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Tzbs_On_Conflict>;
};

/** on_conflict condition type for table "tzbs" */
export type Tzbs_On_Conflict = {
  constraint: Tzbs_Constraint;
  update_columns?: Array<Tzbs_Update_Column>;
  where?: InputMaybe<Tzbs_Bool_Exp>;
};

/** Ordering options when selecting data from "tzbs". */
export type Tzbs_Order_By = {
  accidents_aggregate?: InputMaybe<Accidents_Aggregate_Order_By>;
  building?: InputMaybe<Order_By>;
  building_rel?: InputMaybe<Buildings_Order_By>;
  contacts_aggregate?: InputMaybe<Contacts_Aggregate_Order_By>;
  created_at?: InputMaybe<Order_By>;
  devices_aggregate?: InputMaybe<Devices_Aggregate_Order_By>;
  favorites_aggregate?: InputMaybe<Favorite_Aggregate_Order_By>;
  files_bozps_aggregate?: InputMaybe<Files_Bozp_Aggregate_Order_By>;
  files_checks_aggregate?: InputMaybe<Files_Checks_Aggregate_Order_By>;
  files_fotodocumentations_aggregate?: InputMaybe<Files_Fotodocumentation_Aggregate_Order_By>;
  files_local_operating_rules_aggregate?: InputMaybe<Files_Local_Operating_Rules_Aggregate_Order_By>;
  files_others_aggregate?: InputMaybe<Files_Others_Aggregate_Order_By>;
  files_project_documentations_aggregate?: InputMaybe<Files_Project_Documentation_Aggregate_Order_By>;
  files_revisions_aggregate?: InputMaybe<Files_Revisions_Aggregate_Order_By>;
  files_risks_aggregate?: InputMaybe<Files_Risks_Aggregate_Order_By>;
  full_checks_aggregate?: InputMaybe<Full_Checks_Aggregate_Order_By>;
  full_revisions_aggregate?: InputMaybe<Full_Revisions_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  important_notices_aggregate?: InputMaybe<Important_Notices_Aggregate_Order_By>;
  invoices_aggregate?: InputMaybe<Invoices_Aggregate_Order_By>;
  name?: InputMaybe<Order_By>;
  operation_logs_aggregate?: InputMaybe<Operation_Logs_Aggregate_Order_By>;
  service_orders_aggregate?: InputMaybe<Service_Orders_Aggregate_Order_By>;
  tenant?: InputMaybe<Order_By>;
  tenant_rel?: InputMaybe<Tenants_Order_By>;
  tzb_custom_fields_rel_aggregate?: InputMaybe<Tzb_Custom_Fields_Aggregate_Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Order_By>;
  user_rel?: InputMaybe<Users_Order_By>;
};

/** primary key columns input for table: tzbs */
export type Tzbs_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "tzbs" */
export enum Tzbs_Select_Column {
  /** column name */
  Building = 'building',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Tenant = 'tenant',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  User = 'user'
}

/** input type for updating data in table "tzbs" */
export type Tzbs_Set_Input = {
  building?: InputMaybe<Scalars['uuid']>;
  created_at?: InputMaybe<Scalars['date']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  tenant?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['date']>;
  user?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "tzbs" */
export enum Tzbs_Update_Column {
  /** column name */
  Building = 'building',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Tenant = 'tenant',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  User = 'user'
}

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users';
  /** An array relationship */
  accidents: Array<Accidents>;
  /** An array relationship */
  accidentsByUser: Array<Accidents>;
  /** An aggregate relationship */
  accidentsByUser_aggregate: Accidents_Aggregate;
  /** An aggregate relationship */
  accidents_aggregate: Accidents_Aggregate;
  /** An array relationship */
  action_notes: Array<Action_Notes>;
  /** An aggregate relationship */
  action_notes_aggregate: Action_Notes_Aggregate;
  /** An array relationship */
  actions_templates: Array<Actions_Templates>;
  /** An aggregate relationship */
  actions_templates_aggregate: Actions_Templates_Aggregate;
  active: Scalars['Boolean'];
  admin?: Maybe<Scalars['Boolean']>;
  /** An array relationship */
  buildings: Array<Buildings>;
  /** An aggregate relationship */
  buildings_aggregate: Buildings_Aggregate;
  /** An array relationship */
  contacts: Array<Contacts>;
  /** An aggregate relationship */
  contacts_aggregate: Contacts_Aggregate;
  created_at: Scalars['timestamptz'];
  /** An array relationship */
  customers: Array<Customers>;
  /** An array relationship */
  customersByUser: Array<Customers>;
  /** An aggregate relationship */
  customersByUser_aggregate: Customers_Aggregate;
  /** An aggregate relationship */
  customers_aggregate: Customers_Aggregate;
  /** An array relationship */
  devices: Array<Devices>;
  /** An aggregate relationship */
  devices_aggregate: Devices_Aggregate;
  /** An array relationship */
  devices_catalogs: Array<Devices_Catalog>;
  /** An aggregate relationship */
  devices_catalogs_aggregate: Devices_Catalog_Aggregate;
  email: Scalars['String'];
  /** An array relationship */
  favorites: Array<Favorite>;
  /** An aggregate relationship */
  favorites_aggregate: Favorite_Aggregate;
  /** An array relationship */
  files_bozps: Array<Files_Bozp>;
  /** An aggregate relationship */
  files_bozps_aggregate: Files_Bozp_Aggregate;
  /** An array relationship */
  files_checks: Array<Files_Checks>;
  /** An aggregate relationship */
  files_checks_aggregate: Files_Checks_Aggregate;
  /** An array relationship */
  files_fotodocumentations: Array<Files_Fotodocumentation>;
  /** An aggregate relationship */
  files_fotodocumentations_aggregate: Files_Fotodocumentation_Aggregate;
  /** An array relationship */
  files_local_operating_rules: Array<Files_Local_Operating_Rules>;
  /** An aggregate relationship */
  files_local_operating_rules_aggregate: Files_Local_Operating_Rules_Aggregate;
  /** An array relationship */
  files_others: Array<Files_Others>;
  /** An aggregate relationship */
  files_others_aggregate: Files_Others_Aggregate;
  /** An array relationship */
  files_project_documentations: Array<Files_Project_Documentation>;
  /** An aggregate relationship */
  files_project_documentations_aggregate: Files_Project_Documentation_Aggregate;
  /** An array relationship */
  files_revisions: Array<Files_Revisions>;
  /** An aggregate relationship */
  files_revisions_aggregate: Files_Revisions_Aggregate;
  /** An array relationship */
  files_risks: Array<Files_Risks>;
  /** An aggregate relationship */
  files_risks_aggregate: Files_Risks_Aggregate;
  first_name: Scalars['String'];
  /** An array relationship */
  fullChecksByUser: Array<Full_Checks>;
  /** An aggregate relationship */
  fullChecksByUser_aggregate: Full_Checks_Aggregate;
  /** An array relationship */
  fullRevisionsByUser: Array<Full_Revisions>;
  /** An aggregate relationship */
  fullRevisionsByUser_aggregate: Full_Revisions_Aggregate;
  /** An array relationship */
  full_checks: Array<Full_Checks>;
  /** An aggregate relationship */
  full_checks_aggregate: Full_Checks_Aggregate;
  /** An array relationship */
  full_revisions: Array<Full_Revisions>;
  /** An aggregate relationship */
  full_revisions_aggregate: Full_Revisions_Aggregate;
  id: Scalars['uuid'];
  /** An array relationship */
  important_notices: Array<Important_Notices>;
  /** An aggregate relationship */
  important_notices_aggregate: Important_Notices_Aggregate;
  /** An array relationship */
  invoices: Array<Invoices>;
  /** An aggregate relationship */
  invoices_aggregate: Invoices_Aggregate;
  last_name: Scalars['String'];
  /** An array relationship */
  operationLogsByUser: Array<Operation_Logs>;
  /** An aggregate relationship */
  operationLogsByUser_aggregate: Operation_Logs_Aggregate;
  /** An array relationship */
  operation_logs: Array<Operation_Logs>;
  /** An aggregate relationship */
  operation_logs_aggregate: Operation_Logs_Aggregate;
  password: Scalars['String'];
  /** An array relationship */
  password_reset_requests: Array<Password_Reset_Requests>;
  /** An aggregate relationship */
  password_reset_requests_aggregate: Password_Reset_Requests_Aggregate;
  /** An array relationship */
  pricings: Array<Pricing>;
  /** An aggregate relationship */
  pricings_aggregate: Pricing_Aggregate;
  role: Scalars['uuid'];
  /** An object relationship */
  role_rel: Roles;
  /** An array relationship */
  service_orders: Array<Service_Orders>;
  /** An aggregate relationship */
  service_orders_aggregate: Service_Orders_Aggregate;
  super_admin: Scalars['Boolean'];
  /** An array relationship */
  support_levels: Array<Support_Levels>;
  /** An aggregate relationship */
  support_levels_aggregate: Support_Levels_Aggregate;
  tel?: Maybe<Scalars['String']>;
  tenant?: Maybe<Scalars['uuid']>;
  /** An array relationship */
  tenantInvitationsByUser: Array<Tenant_Invitation>;
  /** An aggregate relationship */
  tenantInvitationsByUser_aggregate: Tenant_Invitation_Aggregate;
  /** An array relationship */
  tenant_invitations: Array<Tenant_Invitation>;
  /** An aggregate relationship */
  tenant_invitations_aggregate: Tenant_Invitation_Aggregate;
  /** An object relationship */
  tenant_rel?: Maybe<Tenants>;
  /** An array relationship */
  tenant_user_accesses: Array<Tenant_User_Access>;
  /** An aggregate relationship */
  tenant_user_accesses_aggregate: Tenant_User_Access_Aggregate;
  /** An array relationship */
  time_on_roads: Array<Time_On_Road>;
  /** An aggregate relationship */
  time_on_roads_aggregate: Time_On_Road_Aggregate;
  /** An array relationship */
  tzbs: Array<Tzbs>;
  /** An aggregate relationship */
  tzbs_aggregate: Tzbs_Aggregate;
  updated_at: Scalars['timestamptz'];
  view_onboarding?: Maybe<Scalars['Boolean']>;
  /** An array relationship */
  workers: Array<Workers>;
  /** An aggregate relationship */
  workers_aggregate: Workers_Aggregate;
};


/** columns and relationships of "users" */
export type UsersAccidentsArgs = {
  distinct_on?: InputMaybe<Array<Accidents_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Accidents_Order_By>>;
  where?: InputMaybe<Accidents_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersAccidentsByUserArgs = {
  distinct_on?: InputMaybe<Array<Accidents_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Accidents_Order_By>>;
  where?: InputMaybe<Accidents_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersAccidentsByUser_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Accidents_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Accidents_Order_By>>;
  where?: InputMaybe<Accidents_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersAccidents_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Accidents_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Accidents_Order_By>>;
  where?: InputMaybe<Accidents_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersAction_NotesArgs = {
  distinct_on?: InputMaybe<Array<Action_Notes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Action_Notes_Order_By>>;
  where?: InputMaybe<Action_Notes_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersAction_Notes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Action_Notes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Action_Notes_Order_By>>;
  where?: InputMaybe<Action_Notes_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersActions_TemplatesArgs = {
  distinct_on?: InputMaybe<Array<Actions_Templates_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Actions_Templates_Order_By>>;
  where?: InputMaybe<Actions_Templates_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersActions_Templates_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Actions_Templates_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Actions_Templates_Order_By>>;
  where?: InputMaybe<Actions_Templates_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersBuildingsArgs = {
  distinct_on?: InputMaybe<Array<Buildings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Buildings_Order_By>>;
  where?: InputMaybe<Buildings_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersBuildings_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Buildings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Buildings_Order_By>>;
  where?: InputMaybe<Buildings_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersContactsArgs = {
  distinct_on?: InputMaybe<Array<Contacts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Contacts_Order_By>>;
  where?: InputMaybe<Contacts_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersContacts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Contacts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Contacts_Order_By>>;
  where?: InputMaybe<Contacts_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersCustomersArgs = {
  distinct_on?: InputMaybe<Array<Customers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Customers_Order_By>>;
  where?: InputMaybe<Customers_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersCustomersByUserArgs = {
  distinct_on?: InputMaybe<Array<Customers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Customers_Order_By>>;
  where?: InputMaybe<Customers_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersCustomersByUser_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Customers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Customers_Order_By>>;
  where?: InputMaybe<Customers_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersCustomers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Customers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Customers_Order_By>>;
  where?: InputMaybe<Customers_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersDevicesArgs = {
  distinct_on?: InputMaybe<Array<Devices_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Devices_Order_By>>;
  where?: InputMaybe<Devices_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersDevices_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Devices_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Devices_Order_By>>;
  where?: InputMaybe<Devices_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersDevices_CatalogsArgs = {
  distinct_on?: InputMaybe<Array<Devices_Catalog_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Devices_Catalog_Order_By>>;
  where?: InputMaybe<Devices_Catalog_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersDevices_Catalogs_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Devices_Catalog_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Devices_Catalog_Order_By>>;
  where?: InputMaybe<Devices_Catalog_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersFavoritesArgs = {
  distinct_on?: InputMaybe<Array<Favorite_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Favorite_Order_By>>;
  where?: InputMaybe<Favorite_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersFavorites_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Favorite_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Favorite_Order_By>>;
  where?: InputMaybe<Favorite_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersFiles_BozpsArgs = {
  distinct_on?: InputMaybe<Array<Files_Bozp_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Files_Bozp_Order_By>>;
  where?: InputMaybe<Files_Bozp_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersFiles_Bozps_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Files_Bozp_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Files_Bozp_Order_By>>;
  where?: InputMaybe<Files_Bozp_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersFiles_ChecksArgs = {
  distinct_on?: InputMaybe<Array<Files_Checks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Files_Checks_Order_By>>;
  where?: InputMaybe<Files_Checks_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersFiles_Checks_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Files_Checks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Files_Checks_Order_By>>;
  where?: InputMaybe<Files_Checks_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersFiles_FotodocumentationsArgs = {
  distinct_on?: InputMaybe<Array<Files_Fotodocumentation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Files_Fotodocumentation_Order_By>>;
  where?: InputMaybe<Files_Fotodocumentation_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersFiles_Fotodocumentations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Files_Fotodocumentation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Files_Fotodocumentation_Order_By>>;
  where?: InputMaybe<Files_Fotodocumentation_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersFiles_Local_Operating_RulesArgs = {
  distinct_on?: InputMaybe<Array<Files_Local_Operating_Rules_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Files_Local_Operating_Rules_Order_By>>;
  where?: InputMaybe<Files_Local_Operating_Rules_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersFiles_Local_Operating_Rules_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Files_Local_Operating_Rules_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Files_Local_Operating_Rules_Order_By>>;
  where?: InputMaybe<Files_Local_Operating_Rules_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersFiles_OthersArgs = {
  distinct_on?: InputMaybe<Array<Files_Others_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Files_Others_Order_By>>;
  where?: InputMaybe<Files_Others_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersFiles_Others_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Files_Others_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Files_Others_Order_By>>;
  where?: InputMaybe<Files_Others_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersFiles_Project_DocumentationsArgs = {
  distinct_on?: InputMaybe<Array<Files_Project_Documentation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Files_Project_Documentation_Order_By>>;
  where?: InputMaybe<Files_Project_Documentation_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersFiles_Project_Documentations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Files_Project_Documentation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Files_Project_Documentation_Order_By>>;
  where?: InputMaybe<Files_Project_Documentation_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersFiles_RevisionsArgs = {
  distinct_on?: InputMaybe<Array<Files_Revisions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Files_Revisions_Order_By>>;
  where?: InputMaybe<Files_Revisions_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersFiles_Revisions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Files_Revisions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Files_Revisions_Order_By>>;
  where?: InputMaybe<Files_Revisions_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersFiles_RisksArgs = {
  distinct_on?: InputMaybe<Array<Files_Risks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Files_Risks_Order_By>>;
  where?: InputMaybe<Files_Risks_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersFiles_Risks_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Files_Risks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Files_Risks_Order_By>>;
  where?: InputMaybe<Files_Risks_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersFullChecksByUserArgs = {
  distinct_on?: InputMaybe<Array<Full_Checks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Full_Checks_Order_By>>;
  where?: InputMaybe<Full_Checks_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersFullChecksByUser_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Full_Checks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Full_Checks_Order_By>>;
  where?: InputMaybe<Full_Checks_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersFullRevisionsByUserArgs = {
  distinct_on?: InputMaybe<Array<Full_Revisions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Full_Revisions_Order_By>>;
  where?: InputMaybe<Full_Revisions_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersFullRevisionsByUser_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Full_Revisions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Full_Revisions_Order_By>>;
  where?: InputMaybe<Full_Revisions_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersFull_ChecksArgs = {
  distinct_on?: InputMaybe<Array<Full_Checks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Full_Checks_Order_By>>;
  where?: InputMaybe<Full_Checks_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersFull_Checks_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Full_Checks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Full_Checks_Order_By>>;
  where?: InputMaybe<Full_Checks_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersFull_RevisionsArgs = {
  distinct_on?: InputMaybe<Array<Full_Revisions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Full_Revisions_Order_By>>;
  where?: InputMaybe<Full_Revisions_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersFull_Revisions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Full_Revisions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Full_Revisions_Order_By>>;
  where?: InputMaybe<Full_Revisions_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersImportant_NoticesArgs = {
  distinct_on?: InputMaybe<Array<Important_Notices_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Important_Notices_Order_By>>;
  where?: InputMaybe<Important_Notices_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersImportant_Notices_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Important_Notices_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Important_Notices_Order_By>>;
  where?: InputMaybe<Important_Notices_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersInvoicesArgs = {
  distinct_on?: InputMaybe<Array<Invoices_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Invoices_Order_By>>;
  where?: InputMaybe<Invoices_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersInvoices_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Invoices_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Invoices_Order_By>>;
  where?: InputMaybe<Invoices_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersOperationLogsByUserArgs = {
  distinct_on?: InputMaybe<Array<Operation_Logs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Operation_Logs_Order_By>>;
  where?: InputMaybe<Operation_Logs_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersOperationLogsByUser_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Operation_Logs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Operation_Logs_Order_By>>;
  where?: InputMaybe<Operation_Logs_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersOperation_LogsArgs = {
  distinct_on?: InputMaybe<Array<Operation_Logs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Operation_Logs_Order_By>>;
  where?: InputMaybe<Operation_Logs_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersOperation_Logs_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Operation_Logs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Operation_Logs_Order_By>>;
  where?: InputMaybe<Operation_Logs_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersPassword_Reset_RequestsArgs = {
  distinct_on?: InputMaybe<Array<Password_Reset_Requests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Password_Reset_Requests_Order_By>>;
  where?: InputMaybe<Password_Reset_Requests_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersPassword_Reset_Requests_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Password_Reset_Requests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Password_Reset_Requests_Order_By>>;
  where?: InputMaybe<Password_Reset_Requests_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersPricingsArgs = {
  distinct_on?: InputMaybe<Array<Pricing_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Pricing_Order_By>>;
  where?: InputMaybe<Pricing_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersPricings_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Pricing_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Pricing_Order_By>>;
  where?: InputMaybe<Pricing_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersService_OrdersArgs = {
  distinct_on?: InputMaybe<Array<Service_Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Service_Orders_Order_By>>;
  where?: InputMaybe<Service_Orders_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersService_Orders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Service_Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Service_Orders_Order_By>>;
  where?: InputMaybe<Service_Orders_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersSupport_LevelsArgs = {
  distinct_on?: InputMaybe<Array<Support_Levels_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Support_Levels_Order_By>>;
  where?: InputMaybe<Support_Levels_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersSupport_Levels_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Support_Levels_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Support_Levels_Order_By>>;
  where?: InputMaybe<Support_Levels_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersTenantInvitationsByUserArgs = {
  distinct_on?: InputMaybe<Array<Tenant_Invitation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tenant_Invitation_Order_By>>;
  where?: InputMaybe<Tenant_Invitation_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersTenantInvitationsByUser_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tenant_Invitation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tenant_Invitation_Order_By>>;
  where?: InputMaybe<Tenant_Invitation_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersTenant_InvitationsArgs = {
  distinct_on?: InputMaybe<Array<Tenant_Invitation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tenant_Invitation_Order_By>>;
  where?: InputMaybe<Tenant_Invitation_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersTenant_Invitations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tenant_Invitation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tenant_Invitation_Order_By>>;
  where?: InputMaybe<Tenant_Invitation_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersTenant_User_AccessesArgs = {
  distinct_on?: InputMaybe<Array<Tenant_User_Access_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tenant_User_Access_Order_By>>;
  where?: InputMaybe<Tenant_User_Access_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersTenant_User_Accesses_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tenant_User_Access_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tenant_User_Access_Order_By>>;
  where?: InputMaybe<Tenant_User_Access_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersTime_On_RoadsArgs = {
  distinct_on?: InputMaybe<Array<Time_On_Road_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Time_On_Road_Order_By>>;
  where?: InputMaybe<Time_On_Road_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersTime_On_Roads_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Time_On_Road_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Time_On_Road_Order_By>>;
  where?: InputMaybe<Time_On_Road_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersTzbsArgs = {
  distinct_on?: InputMaybe<Array<Tzbs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tzbs_Order_By>>;
  where?: InputMaybe<Tzbs_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersTzbs_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tzbs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tzbs_Order_By>>;
  where?: InputMaybe<Tzbs_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersWorkersArgs = {
  distinct_on?: InputMaybe<Array<Workers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Workers_Order_By>>;
  where?: InputMaybe<Workers_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersWorkers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Workers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Workers_Order_By>>;
  where?: InputMaybe<Workers_Bool_Exp>;
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
};


/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "users" */
export type Users_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Users_Max_Order_By>;
  min?: InputMaybe<Users_Min_Order_By>;
};

/** input type for inserting array relation for remote table "users" */
export type Users_Arr_Rel_Insert_Input = {
  data: Array<Users_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: InputMaybe<Array<Users_Bool_Exp>>;
  _not?: InputMaybe<Users_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Bool_Exp>>;
  accidents?: InputMaybe<Accidents_Bool_Exp>;
  accidentsByUser?: InputMaybe<Accidents_Bool_Exp>;
  action_notes?: InputMaybe<Action_Notes_Bool_Exp>;
  actions_templates?: InputMaybe<Actions_Templates_Bool_Exp>;
  active?: InputMaybe<Boolean_Comparison_Exp>;
  admin?: InputMaybe<Boolean_Comparison_Exp>;
  buildings?: InputMaybe<Buildings_Bool_Exp>;
  contacts?: InputMaybe<Contacts_Bool_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  customers?: InputMaybe<Customers_Bool_Exp>;
  customersByUser?: InputMaybe<Customers_Bool_Exp>;
  devices?: InputMaybe<Devices_Bool_Exp>;
  devices_catalogs?: InputMaybe<Devices_Catalog_Bool_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  favorites?: InputMaybe<Favorite_Bool_Exp>;
  files_bozps?: InputMaybe<Files_Bozp_Bool_Exp>;
  files_checks?: InputMaybe<Files_Checks_Bool_Exp>;
  files_fotodocumentations?: InputMaybe<Files_Fotodocumentation_Bool_Exp>;
  files_local_operating_rules?: InputMaybe<Files_Local_Operating_Rules_Bool_Exp>;
  files_others?: InputMaybe<Files_Others_Bool_Exp>;
  files_project_documentations?: InputMaybe<Files_Project_Documentation_Bool_Exp>;
  files_revisions?: InputMaybe<Files_Revisions_Bool_Exp>;
  files_risks?: InputMaybe<Files_Risks_Bool_Exp>;
  first_name?: InputMaybe<String_Comparison_Exp>;
  fullChecksByUser?: InputMaybe<Full_Checks_Bool_Exp>;
  fullRevisionsByUser?: InputMaybe<Full_Revisions_Bool_Exp>;
  full_checks?: InputMaybe<Full_Checks_Bool_Exp>;
  full_revisions?: InputMaybe<Full_Revisions_Bool_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  important_notices?: InputMaybe<Important_Notices_Bool_Exp>;
  invoices?: InputMaybe<Invoices_Bool_Exp>;
  last_name?: InputMaybe<String_Comparison_Exp>;
  operationLogsByUser?: InputMaybe<Operation_Logs_Bool_Exp>;
  operation_logs?: InputMaybe<Operation_Logs_Bool_Exp>;
  password?: InputMaybe<String_Comparison_Exp>;
  password_reset_requests?: InputMaybe<Password_Reset_Requests_Bool_Exp>;
  pricings?: InputMaybe<Pricing_Bool_Exp>;
  role?: InputMaybe<Uuid_Comparison_Exp>;
  role_rel?: InputMaybe<Roles_Bool_Exp>;
  service_orders?: InputMaybe<Service_Orders_Bool_Exp>;
  super_admin?: InputMaybe<Boolean_Comparison_Exp>;
  support_levels?: InputMaybe<Support_Levels_Bool_Exp>;
  tel?: InputMaybe<String_Comparison_Exp>;
  tenant?: InputMaybe<Uuid_Comparison_Exp>;
  tenantInvitationsByUser?: InputMaybe<Tenant_Invitation_Bool_Exp>;
  tenant_invitations?: InputMaybe<Tenant_Invitation_Bool_Exp>;
  tenant_rel?: InputMaybe<Tenants_Bool_Exp>;
  tenant_user_accesses?: InputMaybe<Tenant_User_Access_Bool_Exp>;
  time_on_roads?: InputMaybe<Time_On_Road_Bool_Exp>;
  tzbs?: InputMaybe<Tzbs_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  view_onboarding?: InputMaybe<Boolean_Comparison_Exp>;
  workers?: InputMaybe<Workers_Bool_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint on columns "email" */
  UsersEmailKey = 'users_email_key',
  /** unique or primary key constraint on columns "id" */
  UsersPkey = 'users_pkey'
}

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  accidents?: InputMaybe<Accidents_Arr_Rel_Insert_Input>;
  accidentsByUser?: InputMaybe<Accidents_Arr_Rel_Insert_Input>;
  action_notes?: InputMaybe<Action_Notes_Arr_Rel_Insert_Input>;
  actions_templates?: InputMaybe<Actions_Templates_Arr_Rel_Insert_Input>;
  active?: InputMaybe<Scalars['Boolean']>;
  admin?: InputMaybe<Scalars['Boolean']>;
  buildings?: InputMaybe<Buildings_Arr_Rel_Insert_Input>;
  contacts?: InputMaybe<Contacts_Arr_Rel_Insert_Input>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  customers?: InputMaybe<Customers_Arr_Rel_Insert_Input>;
  customersByUser?: InputMaybe<Customers_Arr_Rel_Insert_Input>;
  devices?: InputMaybe<Devices_Arr_Rel_Insert_Input>;
  devices_catalogs?: InputMaybe<Devices_Catalog_Arr_Rel_Insert_Input>;
  email?: InputMaybe<Scalars['String']>;
  favorites?: InputMaybe<Favorite_Arr_Rel_Insert_Input>;
  files_bozps?: InputMaybe<Files_Bozp_Arr_Rel_Insert_Input>;
  files_checks?: InputMaybe<Files_Checks_Arr_Rel_Insert_Input>;
  files_fotodocumentations?: InputMaybe<Files_Fotodocumentation_Arr_Rel_Insert_Input>;
  files_local_operating_rules?: InputMaybe<Files_Local_Operating_Rules_Arr_Rel_Insert_Input>;
  files_others?: InputMaybe<Files_Others_Arr_Rel_Insert_Input>;
  files_project_documentations?: InputMaybe<Files_Project_Documentation_Arr_Rel_Insert_Input>;
  files_revisions?: InputMaybe<Files_Revisions_Arr_Rel_Insert_Input>;
  files_risks?: InputMaybe<Files_Risks_Arr_Rel_Insert_Input>;
  first_name?: InputMaybe<Scalars['String']>;
  fullChecksByUser?: InputMaybe<Full_Checks_Arr_Rel_Insert_Input>;
  fullRevisionsByUser?: InputMaybe<Full_Revisions_Arr_Rel_Insert_Input>;
  full_checks?: InputMaybe<Full_Checks_Arr_Rel_Insert_Input>;
  full_revisions?: InputMaybe<Full_Revisions_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['uuid']>;
  important_notices?: InputMaybe<Important_Notices_Arr_Rel_Insert_Input>;
  invoices?: InputMaybe<Invoices_Arr_Rel_Insert_Input>;
  last_name?: InputMaybe<Scalars['String']>;
  operationLogsByUser?: InputMaybe<Operation_Logs_Arr_Rel_Insert_Input>;
  operation_logs?: InputMaybe<Operation_Logs_Arr_Rel_Insert_Input>;
  password?: InputMaybe<Scalars['String']>;
  password_reset_requests?: InputMaybe<Password_Reset_Requests_Arr_Rel_Insert_Input>;
  pricings?: InputMaybe<Pricing_Arr_Rel_Insert_Input>;
  role?: InputMaybe<Scalars['uuid']>;
  role_rel?: InputMaybe<Roles_Obj_Rel_Insert_Input>;
  service_orders?: InputMaybe<Service_Orders_Arr_Rel_Insert_Input>;
  super_admin?: InputMaybe<Scalars['Boolean']>;
  support_levels?: InputMaybe<Support_Levels_Arr_Rel_Insert_Input>;
  tel?: InputMaybe<Scalars['String']>;
  tenant?: InputMaybe<Scalars['uuid']>;
  tenantInvitationsByUser?: InputMaybe<Tenant_Invitation_Arr_Rel_Insert_Input>;
  tenant_invitations?: InputMaybe<Tenant_Invitation_Arr_Rel_Insert_Input>;
  tenant_rel?: InputMaybe<Tenants_Obj_Rel_Insert_Input>;
  tenant_user_accesses?: InputMaybe<Tenant_User_Access_Arr_Rel_Insert_Input>;
  time_on_roads?: InputMaybe<Time_On_Road_Arr_Rel_Insert_Input>;
  tzbs?: InputMaybe<Tzbs_Arr_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  view_onboarding?: InputMaybe<Scalars['Boolean']>;
  workers?: InputMaybe<Workers_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  last_name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['uuid']>;
  tel?: Maybe<Scalars['String']>;
  tenant?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "users" */
export type Users_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  first_name?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  last_name?: InputMaybe<Order_By>;
  password?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  tel?: InputMaybe<Order_By>;
  tenant?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  last_name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['uuid']>;
  tel?: Maybe<Scalars['String']>;
  tenant?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "users" */
export type Users_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  first_name?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  last_name?: InputMaybe<Order_By>;
  password?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  tel?: InputMaybe<Order_By>;
  tenant?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** on_conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns?: Array<Users_Update_Column>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  accidentsByUser_aggregate?: InputMaybe<Accidents_Aggregate_Order_By>;
  accidents_aggregate?: InputMaybe<Accidents_Aggregate_Order_By>;
  action_notes_aggregate?: InputMaybe<Action_Notes_Aggregate_Order_By>;
  actions_templates_aggregate?: InputMaybe<Actions_Templates_Aggregate_Order_By>;
  active?: InputMaybe<Order_By>;
  admin?: InputMaybe<Order_By>;
  buildings_aggregate?: InputMaybe<Buildings_Aggregate_Order_By>;
  contacts_aggregate?: InputMaybe<Contacts_Aggregate_Order_By>;
  created_at?: InputMaybe<Order_By>;
  customersByUser_aggregate?: InputMaybe<Customers_Aggregate_Order_By>;
  customers_aggregate?: InputMaybe<Customers_Aggregate_Order_By>;
  devices_aggregate?: InputMaybe<Devices_Aggregate_Order_By>;
  devices_catalogs_aggregate?: InputMaybe<Devices_Catalog_Aggregate_Order_By>;
  email?: InputMaybe<Order_By>;
  favorites_aggregate?: InputMaybe<Favorite_Aggregate_Order_By>;
  files_bozps_aggregate?: InputMaybe<Files_Bozp_Aggregate_Order_By>;
  files_checks_aggregate?: InputMaybe<Files_Checks_Aggregate_Order_By>;
  files_fotodocumentations_aggregate?: InputMaybe<Files_Fotodocumentation_Aggregate_Order_By>;
  files_local_operating_rules_aggregate?: InputMaybe<Files_Local_Operating_Rules_Aggregate_Order_By>;
  files_others_aggregate?: InputMaybe<Files_Others_Aggregate_Order_By>;
  files_project_documentations_aggregate?: InputMaybe<Files_Project_Documentation_Aggregate_Order_By>;
  files_revisions_aggregate?: InputMaybe<Files_Revisions_Aggregate_Order_By>;
  files_risks_aggregate?: InputMaybe<Files_Risks_Aggregate_Order_By>;
  first_name?: InputMaybe<Order_By>;
  fullChecksByUser_aggregate?: InputMaybe<Full_Checks_Aggregate_Order_By>;
  fullRevisionsByUser_aggregate?: InputMaybe<Full_Revisions_Aggregate_Order_By>;
  full_checks_aggregate?: InputMaybe<Full_Checks_Aggregate_Order_By>;
  full_revisions_aggregate?: InputMaybe<Full_Revisions_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  important_notices_aggregate?: InputMaybe<Important_Notices_Aggregate_Order_By>;
  invoices_aggregate?: InputMaybe<Invoices_Aggregate_Order_By>;
  last_name?: InputMaybe<Order_By>;
  operationLogsByUser_aggregate?: InputMaybe<Operation_Logs_Aggregate_Order_By>;
  operation_logs_aggregate?: InputMaybe<Operation_Logs_Aggregate_Order_By>;
  password?: InputMaybe<Order_By>;
  password_reset_requests_aggregate?: InputMaybe<Password_Reset_Requests_Aggregate_Order_By>;
  pricings_aggregate?: InputMaybe<Pricing_Aggregate_Order_By>;
  role?: InputMaybe<Order_By>;
  role_rel?: InputMaybe<Roles_Order_By>;
  service_orders_aggregate?: InputMaybe<Service_Orders_Aggregate_Order_By>;
  super_admin?: InputMaybe<Order_By>;
  support_levels_aggregate?: InputMaybe<Support_Levels_Aggregate_Order_By>;
  tel?: InputMaybe<Order_By>;
  tenant?: InputMaybe<Order_By>;
  tenantInvitationsByUser_aggregate?: InputMaybe<Tenant_Invitation_Aggregate_Order_By>;
  tenant_invitations_aggregate?: InputMaybe<Tenant_Invitation_Aggregate_Order_By>;
  tenant_rel?: InputMaybe<Tenants_Order_By>;
  tenant_user_accesses_aggregate?: InputMaybe<Tenant_User_Access_Aggregate_Order_By>;
  time_on_roads_aggregate?: InputMaybe<Time_On_Road_Aggregate_Order_By>;
  tzbs_aggregate?: InputMaybe<Tzbs_Aggregate_Order_By>;
  updated_at?: InputMaybe<Order_By>;
  view_onboarding?: InputMaybe<Order_By>;
  workers_aggregate?: InputMaybe<Workers_Aggregate_Order_By>;
};

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  Active = 'active',
  /** column name */
  Admin = 'admin',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  Id = 'id',
  /** column name */
  LastName = 'last_name',
  /** column name */
  Password = 'password',
  /** column name */
  Role = 'role',
  /** column name */
  SuperAdmin = 'super_admin',
  /** column name */
  Tel = 'tel',
  /** column name */
  Tenant = 'tenant',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  ViewOnboarding = 'view_onboarding'
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  active?: InputMaybe<Scalars['Boolean']>;
  admin?: InputMaybe<Scalars['Boolean']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  email?: InputMaybe<Scalars['String']>;
  first_name?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  last_name?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['uuid']>;
  super_admin?: InputMaybe<Scalars['Boolean']>;
  tel?: InputMaybe<Scalars['String']>;
  tenant?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  view_onboarding?: InputMaybe<Scalars['Boolean']>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  Active = 'active',
  /** column name */
  Admin = 'admin',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  Id = 'id',
  /** column name */
  LastName = 'last_name',
  /** column name */
  Password = 'password',
  /** column name */
  Role = 'role',
  /** column name */
  SuperAdmin = 'super_admin',
  /** column name */
  Tel = 'tel',
  /** column name */
  Tenant = 'tenant',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  ViewOnboarding = 'view_onboarding'
}

export type Uuid_Cast_Exp = {
  String?: InputMaybe<String_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _cast?: InputMaybe<Uuid_Cast_Exp>;
  _eq?: InputMaybe<Scalars['uuid']>;
  _gt?: InputMaybe<Scalars['uuid']>;
  _gte?: InputMaybe<Scalars['uuid']>;
  _in?: InputMaybe<Array<Scalars['uuid']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['uuid']>;
  _lte?: InputMaybe<Scalars['uuid']>;
  _neq?: InputMaybe<Scalars['uuid']>;
  _nin?: InputMaybe<Array<Scalars['uuid']>>;
};

/** columns and relationships of "workers" */
export type Workers = {
  __typename?: 'workers';
  created_at: Scalars['date'];
  hours: Scalars['String'];
  id: Scalars['uuid'];
  service_order: Scalars['uuid'];
  /** An object relationship */
  service_order_rel: Service_Orders;
  tenant: Scalars['uuid'];
  /** An object relationship */
  tenant_rel: Tenants;
  updated_at: Scalars['date'];
  /** An object relationship */
  user_rel: Users;
  worker: Scalars['uuid'];
};

/** aggregated selection of "workers" */
export type Workers_Aggregate = {
  __typename?: 'workers_aggregate';
  aggregate?: Maybe<Workers_Aggregate_Fields>;
  nodes: Array<Workers>;
};

/** aggregate fields of "workers" */
export type Workers_Aggregate_Fields = {
  __typename?: 'workers_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Workers_Max_Fields>;
  min?: Maybe<Workers_Min_Fields>;
};


/** aggregate fields of "workers" */
export type Workers_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Workers_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "workers" */
export type Workers_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Workers_Max_Order_By>;
  min?: InputMaybe<Workers_Min_Order_By>;
};

/** input type for inserting array relation for remote table "workers" */
export type Workers_Arr_Rel_Insert_Input = {
  data: Array<Workers_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Workers_On_Conflict>;
};

/** Boolean expression to filter rows from the table "workers". All fields are combined with a logical 'AND'. */
export type Workers_Bool_Exp = {
  _and?: InputMaybe<Array<Workers_Bool_Exp>>;
  _not?: InputMaybe<Workers_Bool_Exp>;
  _or?: InputMaybe<Array<Workers_Bool_Exp>>;
  created_at?: InputMaybe<Date_Comparison_Exp>;
  hours?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  service_order?: InputMaybe<Uuid_Comparison_Exp>;
  service_order_rel?: InputMaybe<Service_Orders_Bool_Exp>;
  tenant?: InputMaybe<Uuid_Comparison_Exp>;
  tenant_rel?: InputMaybe<Tenants_Bool_Exp>;
  updated_at?: InputMaybe<Date_Comparison_Exp>;
  user_rel?: InputMaybe<Users_Bool_Exp>;
  worker?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "workers" */
export enum Workers_Constraint {
  /** unique or primary key constraint on columns "id" */
  WorkersPkey = 'workers_pkey'
}

/** input type for inserting data into table "workers" */
export type Workers_Insert_Input = {
  created_at?: InputMaybe<Scalars['date']>;
  hours?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  service_order?: InputMaybe<Scalars['uuid']>;
  service_order_rel?: InputMaybe<Service_Orders_Obj_Rel_Insert_Input>;
  tenant?: InputMaybe<Scalars['uuid']>;
  tenant_rel?: InputMaybe<Tenants_Obj_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['date']>;
  user_rel?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  worker?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Workers_Max_Fields = {
  __typename?: 'workers_max_fields';
  created_at?: Maybe<Scalars['date']>;
  hours?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  service_order?: Maybe<Scalars['uuid']>;
  tenant?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['date']>;
  worker?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "workers" */
export type Workers_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  hours?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  service_order?: InputMaybe<Order_By>;
  tenant?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  worker?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Workers_Min_Fields = {
  __typename?: 'workers_min_fields';
  created_at?: Maybe<Scalars['date']>;
  hours?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  service_order?: Maybe<Scalars['uuid']>;
  tenant?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['date']>;
  worker?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "workers" */
export type Workers_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  hours?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  service_order?: InputMaybe<Order_By>;
  tenant?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  worker?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "workers" */
export type Workers_Mutation_Response = {
  __typename?: 'workers_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Workers>;
};

/** on_conflict condition type for table "workers" */
export type Workers_On_Conflict = {
  constraint: Workers_Constraint;
  update_columns?: Array<Workers_Update_Column>;
  where?: InputMaybe<Workers_Bool_Exp>;
};

/** Ordering options when selecting data from "workers". */
export type Workers_Order_By = {
  created_at?: InputMaybe<Order_By>;
  hours?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  service_order?: InputMaybe<Order_By>;
  service_order_rel?: InputMaybe<Service_Orders_Order_By>;
  tenant?: InputMaybe<Order_By>;
  tenant_rel?: InputMaybe<Tenants_Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_rel?: InputMaybe<Users_Order_By>;
  worker?: InputMaybe<Order_By>;
};

/** primary key columns input for table: workers */
export type Workers_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "workers" */
export enum Workers_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Hours = 'hours',
  /** column name */
  Id = 'id',
  /** column name */
  ServiceOrder = 'service_order',
  /** column name */
  Tenant = 'tenant',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Worker = 'worker'
}

/** input type for updating data in table "workers" */
export type Workers_Set_Input = {
  created_at?: InputMaybe<Scalars['date']>;
  hours?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  service_order?: InputMaybe<Scalars['uuid']>;
  tenant?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['date']>;
  worker?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "workers" */
export enum Workers_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Hours = 'hours',
  /** column name */
  Id = 'id',
  /** column name */
  ServiceOrder = 'service_order',
  /** column name */
  Tenant = 'tenant',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Worker = 'worker'
}

export type AddPostMutationVariables = Exact<{
  title: Scalars['String'];
  description: Scalars['String'];
  file: Scalars['uuid'];
}>;


export type AddPostMutation = { __typename?: 'mutation_root', insert_kupr_posts_one?: { __typename?: 'kupr_posts', title: string } | null };

export type LevelQueryVariables = Exact<{
  levelNum: Scalars['Int'];
  levelDif: Scalars['String'];
}>;


export type LevelQuery = { __typename?: 'query_root', kupr_difficulty_levels_aggregate: { __typename?: 'kupr_difficulty_levels_aggregate', nodes: Array<{ __typename?: 'kupr_difficulty_levels', id: any, file: any }> } };

export type PostsQueryVariables = Exact<{ [key: string]: never; }>;


export type PostsQuery = { __typename?: 'query_root', kupr_posts_aggregate: { __typename?: 'kupr_posts_aggregate', nodes: Array<{ __typename?: 'kupr_posts', title: string, file: any, description: string, created_at: any }> } };


export const AddPostDocument = gql`
    mutation AddPost($title: String!, $description: String!, $file: uuid!) {
  insert_kupr_posts_one(
    object: {title: $title, description: $description, file: $file}
  ) {
    title
  }
}
    `;
export type AddPostMutationFn = Apollo.MutationFunction<AddPostMutation, AddPostMutationVariables>;

/**
 * __useAddPostMutation__
 *
 * To run a mutation, you first call `useAddPostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddPostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addPostMutation, { data, loading, error }] = useAddPostMutation({
 *   variables: {
 *      title: // value for 'title'
 *      description: // value for 'description'
 *      file: // value for 'file'
 *   },
 * });
 */
export function useAddPostMutation(baseOptions?: Apollo.MutationHookOptions<AddPostMutation, AddPostMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddPostMutation, AddPostMutationVariables>(AddPostDocument, options);
      }
export type AddPostMutationHookResult = ReturnType<typeof useAddPostMutation>;
export type AddPostMutationResult = Apollo.MutationResult<AddPostMutation>;
export type AddPostMutationOptions = Apollo.BaseMutationOptions<AddPostMutation, AddPostMutationVariables>;
export const LevelDocument = gql`
    query Level($levelNum: Int!, $levelDif: String!) {
  kupr_difficulty_levels_aggregate(
    where: {level: {_eq: $levelNum}, difficulty: {_eq: $levelDif}}
  ) {
    nodes {
      id
      file
    }
  }
}
    `;

/**
 * __useLevelQuery__
 *
 * To run a query within a React component, call `useLevelQuery` and pass it any options that fit your needs.
 * When your component renders, `useLevelQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLevelQuery({
 *   variables: {
 *      levelNum: // value for 'levelNum'
 *      levelDif: // value for 'levelDif'
 *   },
 * });
 */
export function useLevelQuery(baseOptions: Apollo.QueryHookOptions<LevelQuery, LevelQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<LevelQuery, LevelQueryVariables>(LevelDocument, options);
      }
export function useLevelLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LevelQuery, LevelQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<LevelQuery, LevelQueryVariables>(LevelDocument, options);
        }
export type LevelQueryHookResult = ReturnType<typeof useLevelQuery>;
export type LevelLazyQueryHookResult = ReturnType<typeof useLevelLazyQuery>;
export type LevelQueryResult = Apollo.QueryResult<LevelQuery, LevelQueryVariables>;
export const PostsDocument = gql`
    query Posts {
  kupr_posts_aggregate(order_by: {created_at: desc}) {
    nodes {
      title
      file
      description
      created_at
    }
  }
}
    `;

/**
 * __usePostsQuery__
 *
 * To run a query within a React component, call `usePostsQuery` and pass it any options that fit your needs.
 * When your component renders, `usePostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePostsQuery({
 *   variables: {
 *   },
 * });
 */
export function usePostsQuery(baseOptions?: Apollo.QueryHookOptions<PostsQuery, PostsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PostsQuery, PostsQueryVariables>(PostsDocument, options);
      }
export function usePostsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PostsQuery, PostsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PostsQuery, PostsQueryVariables>(PostsDocument, options);
        }
export type PostsQueryHookResult = ReturnType<typeof usePostsQuery>;
export type PostsLazyQueryHookResult = ReturnType<typeof usePostsLazyQuery>;
export type PostsQueryResult = Apollo.QueryResult<PostsQuery, PostsQueryVariables>;