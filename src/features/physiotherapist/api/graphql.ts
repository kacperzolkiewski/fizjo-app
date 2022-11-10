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
  bigint: any;
  bytea: any;
  citext: any;
  jsonb: any;
  timestamptz: any;
  uuid: any;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
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

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
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

/** Oauth requests, inserted before redirecting to the provider's site. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthProviderRequests = {
  __typename?: 'authProviderRequests';
  id: Scalars['uuid'];
  options?: Maybe<Scalars['jsonb']>;
};


/** Oauth requests, inserted before redirecting to the provider's site. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthProviderRequestsOptionsArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "auth.provider_requests" */
export type AuthProviderRequests_Aggregate = {
  __typename?: 'authProviderRequests_aggregate';
  aggregate?: Maybe<AuthProviderRequests_Aggregate_Fields>;
  nodes: Array<AuthProviderRequests>;
};

/** aggregate fields of "auth.provider_requests" */
export type AuthProviderRequests_Aggregate_Fields = {
  __typename?: 'authProviderRequests_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<AuthProviderRequests_Max_Fields>;
  min?: Maybe<AuthProviderRequests_Min_Fields>;
};


/** aggregate fields of "auth.provider_requests" */
export type AuthProviderRequests_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<AuthProviderRequests_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type AuthProviderRequests_Append_Input = {
  options?: InputMaybe<Scalars['jsonb']>;
};

/** Boolean expression to filter rows from the table "auth.provider_requests". All fields are combined with a logical 'AND'. */
export type AuthProviderRequests_Bool_Exp = {
  _and?: InputMaybe<Array<AuthProviderRequests_Bool_Exp>>;
  _not?: InputMaybe<AuthProviderRequests_Bool_Exp>;
  _or?: InputMaybe<Array<AuthProviderRequests_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  options?: InputMaybe<Jsonb_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.provider_requests" */
export enum AuthProviderRequests_Constraint {
  /** unique or primary key constraint on columns "id" */
  ProviderRequestsPkey = 'provider_requests_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type AuthProviderRequests_Delete_At_Path_Input = {
  options?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type AuthProviderRequests_Delete_Elem_Input = {
  options?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type AuthProviderRequests_Delete_Key_Input = {
  options?: InputMaybe<Scalars['String']>;
};

/** input type for inserting data into table "auth.provider_requests" */
export type AuthProviderRequests_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  options?: InputMaybe<Scalars['jsonb']>;
};

/** aggregate max on columns */
export type AuthProviderRequests_Max_Fields = {
  __typename?: 'authProviderRequests_max_fields';
  id?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type AuthProviderRequests_Min_Fields = {
  __typename?: 'authProviderRequests_min_fields';
  id?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "auth.provider_requests" */
export type AuthProviderRequests_Mutation_Response = {
  __typename?: 'authProviderRequests_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthProviderRequests>;
};

/** on_conflict condition type for table "auth.provider_requests" */
export type AuthProviderRequests_On_Conflict = {
  constraint: AuthProviderRequests_Constraint;
  update_columns?: Array<AuthProviderRequests_Update_Column>;
  where?: InputMaybe<AuthProviderRequests_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.provider_requests". */
export type AuthProviderRequests_Order_By = {
  id?: InputMaybe<Order_By>;
  options?: InputMaybe<Order_By>;
};

/** primary key columns input for table: auth.provider_requests */
export type AuthProviderRequests_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type AuthProviderRequests_Prepend_Input = {
  options?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "auth.provider_requests" */
export enum AuthProviderRequests_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Options = 'options'
}

/** input type for updating data in table "auth.provider_requests" */
export type AuthProviderRequests_Set_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  options?: InputMaybe<Scalars['jsonb']>;
};

/** Streaming cursor of the table "authProviderRequests" */
export type AuthProviderRequests_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: AuthProviderRequests_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type AuthProviderRequests_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  options?: InputMaybe<Scalars['jsonb']>;
};

/** update columns of table "auth.provider_requests" */
export enum AuthProviderRequests_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Options = 'options'
}

export type AuthProviderRequests_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<AuthProviderRequests_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<AuthProviderRequests_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<AuthProviderRequests_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<AuthProviderRequests_Delete_Key_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<AuthProviderRequests_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<AuthProviderRequests_Set_Input>;
  where: AuthProviderRequests_Bool_Exp;
};

/** List of available Oauth providers. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthProviders = {
  __typename?: 'authProviders';
  id: Scalars['String'];
  /** An array relationship */
  userProviders: Array<AuthUserProviders>;
  /** An aggregate relationship */
  userProviders_aggregate: AuthUserProviders_Aggregate;
};


/** List of available Oauth providers. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthProvidersUserProvidersArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserProviders_Order_By>>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};


/** List of available Oauth providers. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthProvidersUserProviders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserProviders_Order_By>>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};

/** aggregated selection of "auth.providers" */
export type AuthProviders_Aggregate = {
  __typename?: 'authProviders_aggregate';
  aggregate?: Maybe<AuthProviders_Aggregate_Fields>;
  nodes: Array<AuthProviders>;
};

/** aggregate fields of "auth.providers" */
export type AuthProviders_Aggregate_Fields = {
  __typename?: 'authProviders_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<AuthProviders_Max_Fields>;
  min?: Maybe<AuthProviders_Min_Fields>;
};


/** aggregate fields of "auth.providers" */
export type AuthProviders_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<AuthProviders_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "auth.providers". All fields are combined with a logical 'AND'. */
export type AuthProviders_Bool_Exp = {
  _and?: InputMaybe<Array<AuthProviders_Bool_Exp>>;
  _not?: InputMaybe<AuthProviders_Bool_Exp>;
  _or?: InputMaybe<Array<AuthProviders_Bool_Exp>>;
  id?: InputMaybe<String_Comparison_Exp>;
  userProviders?: InputMaybe<AuthUserProviders_Bool_Exp>;
};

/** unique or primary key constraints on table "auth.providers" */
export enum AuthProviders_Constraint {
  /** unique or primary key constraint on columns "id" */
  ProvidersPkey = 'providers_pkey'
}

/** input type for inserting data into table "auth.providers" */
export type AuthProviders_Insert_Input = {
  id?: InputMaybe<Scalars['String']>;
  userProviders?: InputMaybe<AuthUserProviders_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type AuthProviders_Max_Fields = {
  __typename?: 'authProviders_max_fields';
  id?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type AuthProviders_Min_Fields = {
  __typename?: 'authProviders_min_fields';
  id?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "auth.providers" */
export type AuthProviders_Mutation_Response = {
  __typename?: 'authProviders_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthProviders>;
};

/** input type for inserting object relation for remote table "auth.providers" */
export type AuthProviders_Obj_Rel_Insert_Input = {
  data: AuthProviders_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<AuthProviders_On_Conflict>;
};

/** on_conflict condition type for table "auth.providers" */
export type AuthProviders_On_Conflict = {
  constraint: AuthProviders_Constraint;
  update_columns?: Array<AuthProviders_Update_Column>;
  where?: InputMaybe<AuthProviders_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.providers". */
export type AuthProviders_Order_By = {
  id?: InputMaybe<Order_By>;
  userProviders_aggregate?: InputMaybe<AuthUserProviders_Aggregate_Order_By>;
};

/** primary key columns input for table: auth.providers */
export type AuthProviders_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "auth.providers" */
export enum AuthProviders_Select_Column {
  /** column name */
  Id = 'id'
}

/** input type for updating data in table "auth.providers" */
export type AuthProviders_Set_Input = {
  id?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "authProviders" */
export type AuthProviders_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: AuthProviders_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type AuthProviders_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['String']>;
};

/** update columns of table "auth.providers" */
export enum AuthProviders_Update_Column {
  /** column name */
  Id = 'id'
}

export type AuthProviders_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<AuthProviders_Set_Input>;
  where: AuthProviders_Bool_Exp;
};

/** User refresh tokens. Hasura auth uses them to rotate new access tokens as long as the refresh token is not expired. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthRefreshTokens = {
  __typename?: 'authRefreshTokens';
  createdAt: Scalars['timestamptz'];
  expiresAt: Scalars['timestamptz'];
  refreshToken: Scalars['uuid'];
  /** An object relationship */
  user: Users;
  userId: Scalars['uuid'];
};

/** aggregated selection of "auth.refresh_tokens" */
export type AuthRefreshTokens_Aggregate = {
  __typename?: 'authRefreshTokens_aggregate';
  aggregate?: Maybe<AuthRefreshTokens_Aggregate_Fields>;
  nodes: Array<AuthRefreshTokens>;
};

/** aggregate fields of "auth.refresh_tokens" */
export type AuthRefreshTokens_Aggregate_Fields = {
  __typename?: 'authRefreshTokens_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<AuthRefreshTokens_Max_Fields>;
  min?: Maybe<AuthRefreshTokens_Min_Fields>;
};


/** aggregate fields of "auth.refresh_tokens" */
export type AuthRefreshTokens_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "auth.refresh_tokens" */
export type AuthRefreshTokens_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<AuthRefreshTokens_Max_Order_By>;
  min?: InputMaybe<AuthRefreshTokens_Min_Order_By>;
};

/** input type for inserting array relation for remote table "auth.refresh_tokens" */
export type AuthRefreshTokens_Arr_Rel_Insert_Input = {
  data: Array<AuthRefreshTokens_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<AuthRefreshTokens_On_Conflict>;
};

/** Boolean expression to filter rows from the table "auth.refresh_tokens". All fields are combined with a logical 'AND'. */
export type AuthRefreshTokens_Bool_Exp = {
  _and?: InputMaybe<Array<AuthRefreshTokens_Bool_Exp>>;
  _not?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
  _or?: InputMaybe<Array<AuthRefreshTokens_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  expiresAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  refreshToken?: InputMaybe<Uuid_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  userId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.refresh_tokens" */
export enum AuthRefreshTokens_Constraint {
  /** unique or primary key constraint on columns "refresh_token" */
  RefreshTokensPkey = 'refresh_tokens_pkey'
}

/** input type for inserting data into table "auth.refresh_tokens" */
export type AuthRefreshTokens_Insert_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  expiresAt?: InputMaybe<Scalars['timestamptz']>;
  refreshToken?: InputMaybe<Scalars['uuid']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type AuthRefreshTokens_Max_Fields = {
  __typename?: 'authRefreshTokens_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  expiresAt?: Maybe<Scalars['timestamptz']>;
  refreshToken?: Maybe<Scalars['uuid']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "auth.refresh_tokens" */
export type AuthRefreshTokens_Max_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  expiresAt?: InputMaybe<Order_By>;
  refreshToken?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type AuthRefreshTokens_Min_Fields = {
  __typename?: 'authRefreshTokens_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  expiresAt?: Maybe<Scalars['timestamptz']>;
  refreshToken?: Maybe<Scalars['uuid']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "auth.refresh_tokens" */
export type AuthRefreshTokens_Min_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  expiresAt?: InputMaybe<Order_By>;
  refreshToken?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "auth.refresh_tokens" */
export type AuthRefreshTokens_Mutation_Response = {
  __typename?: 'authRefreshTokens_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthRefreshTokens>;
};

/** on_conflict condition type for table "auth.refresh_tokens" */
export type AuthRefreshTokens_On_Conflict = {
  constraint: AuthRefreshTokens_Constraint;
  update_columns?: Array<AuthRefreshTokens_Update_Column>;
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.refresh_tokens". */
export type AuthRefreshTokens_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  expiresAt?: InputMaybe<Order_By>;
  refreshToken?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: auth.refresh_tokens */
export type AuthRefreshTokens_Pk_Columns_Input = {
  refreshToken: Scalars['uuid'];
};

/** select columns of table "auth.refresh_tokens" */
export enum AuthRefreshTokens_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  ExpiresAt = 'expiresAt',
  /** column name */
  RefreshToken = 'refreshToken',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "auth.refresh_tokens" */
export type AuthRefreshTokens_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  expiresAt?: InputMaybe<Scalars['timestamptz']>;
  refreshToken?: InputMaybe<Scalars['uuid']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "authRefreshTokens" */
export type AuthRefreshTokens_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: AuthRefreshTokens_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type AuthRefreshTokens_Stream_Cursor_Value_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  expiresAt?: InputMaybe<Scalars['timestamptz']>;
  refreshToken?: InputMaybe<Scalars['uuid']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "auth.refresh_tokens" */
export enum AuthRefreshTokens_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  ExpiresAt = 'expiresAt',
  /** column name */
  RefreshToken = 'refreshToken',
  /** column name */
  UserId = 'userId'
}

export type AuthRefreshTokens_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<AuthRefreshTokens_Set_Input>;
  where: AuthRefreshTokens_Bool_Exp;
};

/** Persistent Hasura roles for users. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthRoles = {
  __typename?: 'authRoles';
  role: Scalars['String'];
  /** An array relationship */
  userRoles: Array<AuthUserRoles>;
  /** An aggregate relationship */
  userRoles_aggregate: AuthUserRoles_Aggregate;
  /** An array relationship */
  usersByDefaultRole: Array<Users>;
  /** An aggregate relationship */
  usersByDefaultRole_aggregate: Users_Aggregate;
};


/** Persistent Hasura roles for users. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthRolesUserRolesArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserRoles_Order_By>>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};


/** Persistent Hasura roles for users. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthRolesUserRoles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserRoles_Order_By>>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};


/** Persistent Hasura roles for users. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthRolesUsersByDefaultRoleArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


/** Persistent Hasura roles for users. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthRolesUsersByDefaultRole_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** aggregated selection of "auth.roles" */
export type AuthRoles_Aggregate = {
  __typename?: 'authRoles_aggregate';
  aggregate?: Maybe<AuthRoles_Aggregate_Fields>;
  nodes: Array<AuthRoles>;
};

/** aggregate fields of "auth.roles" */
export type AuthRoles_Aggregate_Fields = {
  __typename?: 'authRoles_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<AuthRoles_Max_Fields>;
  min?: Maybe<AuthRoles_Min_Fields>;
};


/** aggregate fields of "auth.roles" */
export type AuthRoles_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<AuthRoles_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "auth.roles". All fields are combined with a logical 'AND'. */
export type AuthRoles_Bool_Exp = {
  _and?: InputMaybe<Array<AuthRoles_Bool_Exp>>;
  _not?: InputMaybe<AuthRoles_Bool_Exp>;
  _or?: InputMaybe<Array<AuthRoles_Bool_Exp>>;
  role?: InputMaybe<String_Comparison_Exp>;
  userRoles?: InputMaybe<AuthUserRoles_Bool_Exp>;
  usersByDefaultRole?: InputMaybe<Users_Bool_Exp>;
};

/** unique or primary key constraints on table "auth.roles" */
export enum AuthRoles_Constraint {
  /** unique or primary key constraint on columns "role" */
  RolesPkey = 'roles_pkey'
}

/** input type for inserting data into table "auth.roles" */
export type AuthRoles_Insert_Input = {
  role?: InputMaybe<Scalars['String']>;
  userRoles?: InputMaybe<AuthUserRoles_Arr_Rel_Insert_Input>;
  usersByDefaultRole?: InputMaybe<Users_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type AuthRoles_Max_Fields = {
  __typename?: 'authRoles_max_fields';
  role?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type AuthRoles_Min_Fields = {
  __typename?: 'authRoles_min_fields';
  role?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "auth.roles" */
export type AuthRoles_Mutation_Response = {
  __typename?: 'authRoles_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthRoles>;
};

/** input type for inserting object relation for remote table "auth.roles" */
export type AuthRoles_Obj_Rel_Insert_Input = {
  data: AuthRoles_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<AuthRoles_On_Conflict>;
};

/** on_conflict condition type for table "auth.roles" */
export type AuthRoles_On_Conflict = {
  constraint: AuthRoles_Constraint;
  update_columns?: Array<AuthRoles_Update_Column>;
  where?: InputMaybe<AuthRoles_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.roles". */
export type AuthRoles_Order_By = {
  role?: InputMaybe<Order_By>;
  userRoles_aggregate?: InputMaybe<AuthUserRoles_Aggregate_Order_By>;
  usersByDefaultRole_aggregate?: InputMaybe<Users_Aggregate_Order_By>;
};

/** primary key columns input for table: auth.roles */
export type AuthRoles_Pk_Columns_Input = {
  role: Scalars['String'];
};

/** select columns of table "auth.roles" */
export enum AuthRoles_Select_Column {
  /** column name */
  Role = 'role'
}

/** input type for updating data in table "auth.roles" */
export type AuthRoles_Set_Input = {
  role?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "authRoles" */
export type AuthRoles_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: AuthRoles_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type AuthRoles_Stream_Cursor_Value_Input = {
  role?: InputMaybe<Scalars['String']>;
};

/** update columns of table "auth.roles" */
export enum AuthRoles_Update_Column {
  /** column name */
  Role = 'role'
}

export type AuthRoles_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<AuthRoles_Set_Input>;
  where: AuthRoles_Bool_Exp;
};

/** Active providers for a given user. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthUserProviders = {
  __typename?: 'authUserProviders';
  accessToken: Scalars['String'];
  createdAt: Scalars['timestamptz'];
  id: Scalars['uuid'];
  /** An object relationship */
  provider: AuthProviders;
  providerId: Scalars['String'];
  providerUserId: Scalars['String'];
  refreshToken?: Maybe<Scalars['String']>;
  updatedAt: Scalars['timestamptz'];
  /** An object relationship */
  user: Users;
  userId: Scalars['uuid'];
};

/** aggregated selection of "auth.user_providers" */
export type AuthUserProviders_Aggregate = {
  __typename?: 'authUserProviders_aggregate';
  aggregate?: Maybe<AuthUserProviders_Aggregate_Fields>;
  nodes: Array<AuthUserProviders>;
};

/** aggregate fields of "auth.user_providers" */
export type AuthUserProviders_Aggregate_Fields = {
  __typename?: 'authUserProviders_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<AuthUserProviders_Max_Fields>;
  min?: Maybe<AuthUserProviders_Min_Fields>;
};


/** aggregate fields of "auth.user_providers" */
export type AuthUserProviders_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "auth.user_providers" */
export type AuthUserProviders_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<AuthUserProviders_Max_Order_By>;
  min?: InputMaybe<AuthUserProviders_Min_Order_By>;
};

/** input type for inserting array relation for remote table "auth.user_providers" */
export type AuthUserProviders_Arr_Rel_Insert_Input = {
  data: Array<AuthUserProviders_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<AuthUserProviders_On_Conflict>;
};

/** Boolean expression to filter rows from the table "auth.user_providers". All fields are combined with a logical 'AND'. */
export type AuthUserProviders_Bool_Exp = {
  _and?: InputMaybe<Array<AuthUserProviders_Bool_Exp>>;
  _not?: InputMaybe<AuthUserProviders_Bool_Exp>;
  _or?: InputMaybe<Array<AuthUserProviders_Bool_Exp>>;
  accessToken?: InputMaybe<String_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  provider?: InputMaybe<AuthProviders_Bool_Exp>;
  providerId?: InputMaybe<String_Comparison_Exp>;
  providerUserId?: InputMaybe<String_Comparison_Exp>;
  refreshToken?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  userId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.user_providers" */
export enum AuthUserProviders_Constraint {
  /** unique or primary key constraint on columns "id" */
  UserProvidersPkey = 'user_providers_pkey',
  /** unique or primary key constraint on columns "provider_id", "provider_user_id" */
  UserProvidersProviderIdProviderUserIdKey = 'user_providers_provider_id_provider_user_id_key',
  /** unique or primary key constraint on columns "provider_id", "user_id" */
  UserProvidersUserIdProviderIdKey = 'user_providers_user_id_provider_id_key'
}

/** input type for inserting data into table "auth.user_providers" */
export type AuthUserProviders_Insert_Input = {
  accessToken?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  provider?: InputMaybe<AuthProviders_Obj_Rel_Insert_Input>;
  providerId?: InputMaybe<Scalars['String']>;
  providerUserId?: InputMaybe<Scalars['String']>;
  refreshToken?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type AuthUserProviders_Max_Fields = {
  __typename?: 'authUserProviders_max_fields';
  accessToken?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  providerId?: Maybe<Scalars['String']>;
  providerUserId?: Maybe<Scalars['String']>;
  refreshToken?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "auth.user_providers" */
export type AuthUserProviders_Max_Order_By = {
  accessToken?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  providerId?: InputMaybe<Order_By>;
  providerUserId?: InputMaybe<Order_By>;
  refreshToken?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type AuthUserProviders_Min_Fields = {
  __typename?: 'authUserProviders_min_fields';
  accessToken?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  providerId?: Maybe<Scalars['String']>;
  providerUserId?: Maybe<Scalars['String']>;
  refreshToken?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "auth.user_providers" */
export type AuthUserProviders_Min_Order_By = {
  accessToken?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  providerId?: InputMaybe<Order_By>;
  providerUserId?: InputMaybe<Order_By>;
  refreshToken?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "auth.user_providers" */
export type AuthUserProviders_Mutation_Response = {
  __typename?: 'authUserProviders_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthUserProviders>;
};

/** on_conflict condition type for table "auth.user_providers" */
export type AuthUserProviders_On_Conflict = {
  constraint: AuthUserProviders_Constraint;
  update_columns?: Array<AuthUserProviders_Update_Column>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.user_providers". */
export type AuthUserProviders_Order_By = {
  accessToken?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  provider?: InputMaybe<AuthProviders_Order_By>;
  providerId?: InputMaybe<Order_By>;
  providerUserId?: InputMaybe<Order_By>;
  refreshToken?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: auth.user_providers */
export type AuthUserProviders_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "auth.user_providers" */
export enum AuthUserProviders_Select_Column {
  /** column name */
  AccessToken = 'accessToken',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  ProviderId = 'providerId',
  /** column name */
  ProviderUserId = 'providerUserId',
  /** column name */
  RefreshToken = 'refreshToken',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "auth.user_providers" */
export type AuthUserProviders_Set_Input = {
  accessToken?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  providerId?: InputMaybe<Scalars['String']>;
  providerUserId?: InputMaybe<Scalars['String']>;
  refreshToken?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "authUserProviders" */
export type AuthUserProviders_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: AuthUserProviders_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type AuthUserProviders_Stream_Cursor_Value_Input = {
  accessToken?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  providerId?: InputMaybe<Scalars['String']>;
  providerUserId?: InputMaybe<Scalars['String']>;
  refreshToken?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "auth.user_providers" */
export enum AuthUserProviders_Update_Column {
  /** column name */
  AccessToken = 'accessToken',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  ProviderId = 'providerId',
  /** column name */
  ProviderUserId = 'providerUserId',
  /** column name */
  RefreshToken = 'refreshToken',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId'
}

export type AuthUserProviders_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<AuthUserProviders_Set_Input>;
  where: AuthUserProviders_Bool_Exp;
};

/** Roles of users. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthUserRoles = {
  __typename?: 'authUserRoles';
  createdAt: Scalars['timestamptz'];
  id: Scalars['uuid'];
  role: Scalars['String'];
  /** An object relationship */
  roleByRole: AuthRoles;
  /** An object relationship */
  user: Users;
  userId: Scalars['uuid'];
};

/** aggregated selection of "auth.user_roles" */
export type AuthUserRoles_Aggregate = {
  __typename?: 'authUserRoles_aggregate';
  aggregate?: Maybe<AuthUserRoles_Aggregate_Fields>;
  nodes: Array<AuthUserRoles>;
};

/** aggregate fields of "auth.user_roles" */
export type AuthUserRoles_Aggregate_Fields = {
  __typename?: 'authUserRoles_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<AuthUserRoles_Max_Fields>;
  min?: Maybe<AuthUserRoles_Min_Fields>;
};


/** aggregate fields of "auth.user_roles" */
export type AuthUserRoles_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "auth.user_roles" */
export type AuthUserRoles_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<AuthUserRoles_Max_Order_By>;
  min?: InputMaybe<AuthUserRoles_Min_Order_By>;
};

/** input type for inserting array relation for remote table "auth.user_roles" */
export type AuthUserRoles_Arr_Rel_Insert_Input = {
  data: Array<AuthUserRoles_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<AuthUserRoles_On_Conflict>;
};

/** Boolean expression to filter rows from the table "auth.user_roles". All fields are combined with a logical 'AND'. */
export type AuthUserRoles_Bool_Exp = {
  _and?: InputMaybe<Array<AuthUserRoles_Bool_Exp>>;
  _not?: InputMaybe<AuthUserRoles_Bool_Exp>;
  _or?: InputMaybe<Array<AuthUserRoles_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  role?: InputMaybe<String_Comparison_Exp>;
  roleByRole?: InputMaybe<AuthRoles_Bool_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  userId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.user_roles" */
export enum AuthUserRoles_Constraint {
  /** unique or primary key constraint on columns "id" */
  UserRolesPkey = 'user_roles_pkey',
  /** unique or primary key constraint on columns "user_id", "role" */
  UserRolesUserIdRoleKey = 'user_roles_user_id_role_key'
}

/** input type for inserting data into table "auth.user_roles" */
export type AuthUserRoles_Insert_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  role?: InputMaybe<Scalars['String']>;
  roleByRole?: InputMaybe<AuthRoles_Obj_Rel_Insert_Input>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type AuthUserRoles_Max_Fields = {
  __typename?: 'authUserRoles_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  role?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "auth.user_roles" */
export type AuthUserRoles_Max_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type AuthUserRoles_Min_Fields = {
  __typename?: 'authUserRoles_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  role?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "auth.user_roles" */
export type AuthUserRoles_Min_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "auth.user_roles" */
export type AuthUserRoles_Mutation_Response = {
  __typename?: 'authUserRoles_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthUserRoles>;
};

/** on_conflict condition type for table "auth.user_roles" */
export type AuthUserRoles_On_Conflict = {
  constraint: AuthUserRoles_Constraint;
  update_columns?: Array<AuthUserRoles_Update_Column>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.user_roles". */
export type AuthUserRoles_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  roleByRole?: InputMaybe<AuthRoles_Order_By>;
  user?: InputMaybe<Users_Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: auth.user_roles */
export type AuthUserRoles_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "auth.user_roles" */
export enum AuthUserRoles_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Role = 'role',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "auth.user_roles" */
export type AuthUserRoles_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  role?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "authUserRoles" */
export type AuthUserRoles_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: AuthUserRoles_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type AuthUserRoles_Stream_Cursor_Value_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  role?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "auth.user_roles" */
export enum AuthUserRoles_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Role = 'role',
  /** column name */
  UserId = 'userId'
}

export type AuthUserRoles_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<AuthUserRoles_Set_Input>;
  where: AuthUserRoles_Bool_Exp;
};

/** User webauthn security keys. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthUserSecurityKeys = {
  __typename?: 'authUserSecurityKeys';
  counter: Scalars['bigint'];
  credentialId: Scalars['String'];
  credentialPublicKey?: Maybe<Scalars['bytea']>;
  id: Scalars['uuid'];
  nickname?: Maybe<Scalars['String']>;
  transports: Scalars['String'];
  /** An object relationship */
  user: Users;
  userId: Scalars['uuid'];
};

/** aggregated selection of "auth.user_security_keys" */
export type AuthUserSecurityKeys_Aggregate = {
  __typename?: 'authUserSecurityKeys_aggregate';
  aggregate?: Maybe<AuthUserSecurityKeys_Aggregate_Fields>;
  nodes: Array<AuthUserSecurityKeys>;
};

/** aggregate fields of "auth.user_security_keys" */
export type AuthUserSecurityKeys_Aggregate_Fields = {
  __typename?: 'authUserSecurityKeys_aggregate_fields';
  avg?: Maybe<AuthUserSecurityKeys_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<AuthUserSecurityKeys_Max_Fields>;
  min?: Maybe<AuthUserSecurityKeys_Min_Fields>;
  stddev?: Maybe<AuthUserSecurityKeys_Stddev_Fields>;
  stddev_pop?: Maybe<AuthUserSecurityKeys_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<AuthUserSecurityKeys_Stddev_Samp_Fields>;
  sum?: Maybe<AuthUserSecurityKeys_Sum_Fields>;
  var_pop?: Maybe<AuthUserSecurityKeys_Var_Pop_Fields>;
  var_samp?: Maybe<AuthUserSecurityKeys_Var_Samp_Fields>;
  variance?: Maybe<AuthUserSecurityKeys_Variance_Fields>;
};


/** aggregate fields of "auth.user_security_keys" */
export type AuthUserSecurityKeys_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<AuthUserSecurityKeys_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Aggregate_Order_By = {
  avg?: InputMaybe<AuthUserSecurityKeys_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<AuthUserSecurityKeys_Max_Order_By>;
  min?: InputMaybe<AuthUserSecurityKeys_Min_Order_By>;
  stddev?: InputMaybe<AuthUserSecurityKeys_Stddev_Order_By>;
  stddev_pop?: InputMaybe<AuthUserSecurityKeys_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<AuthUserSecurityKeys_Stddev_Samp_Order_By>;
  sum?: InputMaybe<AuthUserSecurityKeys_Sum_Order_By>;
  var_pop?: InputMaybe<AuthUserSecurityKeys_Var_Pop_Order_By>;
  var_samp?: InputMaybe<AuthUserSecurityKeys_Var_Samp_Order_By>;
  variance?: InputMaybe<AuthUserSecurityKeys_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Arr_Rel_Insert_Input = {
  data: Array<AuthUserSecurityKeys_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<AuthUserSecurityKeys_On_Conflict>;
};

/** aggregate avg on columns */
export type AuthUserSecurityKeys_Avg_Fields = {
  __typename?: 'authUserSecurityKeys_avg_fields';
  counter?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Avg_Order_By = {
  counter?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "auth.user_security_keys". All fields are combined with a logical 'AND'. */
export type AuthUserSecurityKeys_Bool_Exp = {
  _and?: InputMaybe<Array<AuthUserSecurityKeys_Bool_Exp>>;
  _not?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>;
  _or?: InputMaybe<Array<AuthUserSecurityKeys_Bool_Exp>>;
  counter?: InputMaybe<Bigint_Comparison_Exp>;
  credentialId?: InputMaybe<String_Comparison_Exp>;
  credentialPublicKey?: InputMaybe<Bytea_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  nickname?: InputMaybe<String_Comparison_Exp>;
  transports?: InputMaybe<String_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  userId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.user_security_keys" */
export enum AuthUserSecurityKeys_Constraint {
  /** unique or primary key constraint on columns "credential_id" */
  UserSecurityKeyCredentialIdKey = 'user_security_key_credential_id_key',
  /** unique or primary key constraint on columns "id" */
  UserSecurityKeysPkey = 'user_security_keys_pkey'
}

/** input type for incrementing numeric columns in table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Inc_Input = {
  counter?: InputMaybe<Scalars['bigint']>;
};

/** input type for inserting data into table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Insert_Input = {
  counter?: InputMaybe<Scalars['bigint']>;
  credentialId?: InputMaybe<Scalars['String']>;
  credentialPublicKey?: InputMaybe<Scalars['bytea']>;
  id?: InputMaybe<Scalars['uuid']>;
  nickname?: InputMaybe<Scalars['String']>;
  transports?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type AuthUserSecurityKeys_Max_Fields = {
  __typename?: 'authUserSecurityKeys_max_fields';
  counter?: Maybe<Scalars['bigint']>;
  credentialId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  nickname?: Maybe<Scalars['String']>;
  transports?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Max_Order_By = {
  counter?: InputMaybe<Order_By>;
  credentialId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  nickname?: InputMaybe<Order_By>;
  transports?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type AuthUserSecurityKeys_Min_Fields = {
  __typename?: 'authUserSecurityKeys_min_fields';
  counter?: Maybe<Scalars['bigint']>;
  credentialId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  nickname?: Maybe<Scalars['String']>;
  transports?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Min_Order_By = {
  counter?: InputMaybe<Order_By>;
  credentialId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  nickname?: InputMaybe<Order_By>;
  transports?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Mutation_Response = {
  __typename?: 'authUserSecurityKeys_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthUserSecurityKeys>;
};

/** on_conflict condition type for table "auth.user_security_keys" */
export type AuthUserSecurityKeys_On_Conflict = {
  constraint: AuthUserSecurityKeys_Constraint;
  update_columns?: Array<AuthUserSecurityKeys_Update_Column>;
  where?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.user_security_keys". */
export type AuthUserSecurityKeys_Order_By = {
  counter?: InputMaybe<Order_By>;
  credentialId?: InputMaybe<Order_By>;
  credentialPublicKey?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  nickname?: InputMaybe<Order_By>;
  transports?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: auth.user_security_keys */
export type AuthUserSecurityKeys_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "auth.user_security_keys" */
export enum AuthUserSecurityKeys_Select_Column {
  /** column name */
  Counter = 'counter',
  /** column name */
  CredentialId = 'credentialId',
  /** column name */
  CredentialPublicKey = 'credentialPublicKey',
  /** column name */
  Id = 'id',
  /** column name */
  Nickname = 'nickname',
  /** column name */
  Transports = 'transports',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Set_Input = {
  counter?: InputMaybe<Scalars['bigint']>;
  credentialId?: InputMaybe<Scalars['String']>;
  credentialPublicKey?: InputMaybe<Scalars['bytea']>;
  id?: InputMaybe<Scalars['uuid']>;
  nickname?: InputMaybe<Scalars['String']>;
  transports?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type AuthUserSecurityKeys_Stddev_Fields = {
  __typename?: 'authUserSecurityKeys_stddev_fields';
  counter?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Stddev_Order_By = {
  counter?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type AuthUserSecurityKeys_Stddev_Pop_Fields = {
  __typename?: 'authUserSecurityKeys_stddev_pop_fields';
  counter?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Stddev_Pop_Order_By = {
  counter?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type AuthUserSecurityKeys_Stddev_Samp_Fields = {
  __typename?: 'authUserSecurityKeys_stddev_samp_fields';
  counter?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Stddev_Samp_Order_By = {
  counter?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "authUserSecurityKeys" */
export type AuthUserSecurityKeys_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: AuthUserSecurityKeys_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type AuthUserSecurityKeys_Stream_Cursor_Value_Input = {
  counter?: InputMaybe<Scalars['bigint']>;
  credentialId?: InputMaybe<Scalars['String']>;
  credentialPublicKey?: InputMaybe<Scalars['bytea']>;
  id?: InputMaybe<Scalars['uuid']>;
  nickname?: InputMaybe<Scalars['String']>;
  transports?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate sum on columns */
export type AuthUserSecurityKeys_Sum_Fields = {
  __typename?: 'authUserSecurityKeys_sum_fields';
  counter?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Sum_Order_By = {
  counter?: InputMaybe<Order_By>;
};

/** update columns of table "auth.user_security_keys" */
export enum AuthUserSecurityKeys_Update_Column {
  /** column name */
  Counter = 'counter',
  /** column name */
  CredentialId = 'credentialId',
  /** column name */
  CredentialPublicKey = 'credentialPublicKey',
  /** column name */
  Id = 'id',
  /** column name */
  Nickname = 'nickname',
  /** column name */
  Transports = 'transports',
  /** column name */
  UserId = 'userId'
}

export type AuthUserSecurityKeys_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<AuthUserSecurityKeys_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<AuthUserSecurityKeys_Set_Input>;
  where: AuthUserSecurityKeys_Bool_Exp;
};

/** aggregate var_pop on columns */
export type AuthUserSecurityKeys_Var_Pop_Fields = {
  __typename?: 'authUserSecurityKeys_var_pop_fields';
  counter?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Var_Pop_Order_By = {
  counter?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type AuthUserSecurityKeys_Var_Samp_Fields = {
  __typename?: 'authUserSecurityKeys_var_samp_fields';
  counter?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Var_Samp_Order_By = {
  counter?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type AuthUserSecurityKeys_Variance_Fields = {
  __typename?: 'authUserSecurityKeys_variance_fields';
  counter?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Variance_Order_By = {
  counter?: InputMaybe<Order_By>;
};

/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export type Bigint_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['bigint']>;
  _gt?: InputMaybe<Scalars['bigint']>;
  _gte?: InputMaybe<Scalars['bigint']>;
  _in?: InputMaybe<Array<Scalars['bigint']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['bigint']>;
  _lte?: InputMaybe<Scalars['bigint']>;
  _neq?: InputMaybe<Scalars['bigint']>;
  _nin?: InputMaybe<Array<Scalars['bigint']>>;
};

/** columns and relationships of "storage.buckets" */
export type Buckets = {
  __typename?: 'buckets';
  cacheControl?: Maybe<Scalars['String']>;
  createdAt: Scalars['timestamptz'];
  downloadExpiration: Scalars['Int'];
  /** An array relationship */
  files: Array<Files>;
  /** An aggregate relationship */
  files_aggregate: Files_Aggregate;
  id: Scalars['String'];
  maxUploadFileSize: Scalars['Int'];
  minUploadFileSize: Scalars['Int'];
  presignedUrlsEnabled: Scalars['Boolean'];
  updatedAt: Scalars['timestamptz'];
};


/** columns and relationships of "storage.buckets" */
export type BucketsFilesArgs = {
  distinct_on?: InputMaybe<Array<Files_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Files_Order_By>>;
  where?: InputMaybe<Files_Bool_Exp>;
};


/** columns and relationships of "storage.buckets" */
export type BucketsFiles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Files_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Files_Order_By>>;
  where?: InputMaybe<Files_Bool_Exp>;
};

/** aggregated selection of "storage.buckets" */
export type Buckets_Aggregate = {
  __typename?: 'buckets_aggregate';
  aggregate?: Maybe<Buckets_Aggregate_Fields>;
  nodes: Array<Buckets>;
};

/** aggregate fields of "storage.buckets" */
export type Buckets_Aggregate_Fields = {
  __typename?: 'buckets_aggregate_fields';
  avg?: Maybe<Buckets_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Buckets_Max_Fields>;
  min?: Maybe<Buckets_Min_Fields>;
  stddev?: Maybe<Buckets_Stddev_Fields>;
  stddev_pop?: Maybe<Buckets_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Buckets_Stddev_Samp_Fields>;
  sum?: Maybe<Buckets_Sum_Fields>;
  var_pop?: Maybe<Buckets_Var_Pop_Fields>;
  var_samp?: Maybe<Buckets_Var_Samp_Fields>;
  variance?: Maybe<Buckets_Variance_Fields>;
};


/** aggregate fields of "storage.buckets" */
export type Buckets_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Buckets_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Buckets_Avg_Fields = {
  __typename?: 'buckets_avg_fields';
  downloadExpiration?: Maybe<Scalars['Float']>;
  maxUploadFileSize?: Maybe<Scalars['Float']>;
  minUploadFileSize?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "storage.buckets". All fields are combined with a logical 'AND'. */
export type Buckets_Bool_Exp = {
  _and?: InputMaybe<Array<Buckets_Bool_Exp>>;
  _not?: InputMaybe<Buckets_Bool_Exp>;
  _or?: InputMaybe<Array<Buckets_Bool_Exp>>;
  cacheControl?: InputMaybe<String_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  downloadExpiration?: InputMaybe<Int_Comparison_Exp>;
  files?: InputMaybe<Files_Bool_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  maxUploadFileSize?: InputMaybe<Int_Comparison_Exp>;
  minUploadFileSize?: InputMaybe<Int_Comparison_Exp>;
  presignedUrlsEnabled?: InputMaybe<Boolean_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "storage.buckets" */
export enum Buckets_Constraint {
  /** unique or primary key constraint on columns "id" */
  BucketsPkey = 'buckets_pkey'
}

/** input type for incrementing numeric columns in table "storage.buckets" */
export type Buckets_Inc_Input = {
  downloadExpiration?: InputMaybe<Scalars['Int']>;
  maxUploadFileSize?: InputMaybe<Scalars['Int']>;
  minUploadFileSize?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "storage.buckets" */
export type Buckets_Insert_Input = {
  cacheControl?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  downloadExpiration?: InputMaybe<Scalars['Int']>;
  files?: InputMaybe<Files_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['String']>;
  maxUploadFileSize?: InputMaybe<Scalars['Int']>;
  minUploadFileSize?: InputMaybe<Scalars['Int']>;
  presignedUrlsEnabled?: InputMaybe<Scalars['Boolean']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Buckets_Max_Fields = {
  __typename?: 'buckets_max_fields';
  cacheControl?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  downloadExpiration?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['String']>;
  maxUploadFileSize?: Maybe<Scalars['Int']>;
  minUploadFileSize?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Buckets_Min_Fields = {
  __typename?: 'buckets_min_fields';
  cacheControl?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  downloadExpiration?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['String']>;
  maxUploadFileSize?: Maybe<Scalars['Int']>;
  minUploadFileSize?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "storage.buckets" */
export type Buckets_Mutation_Response = {
  __typename?: 'buckets_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Buckets>;
};

/** input type for inserting object relation for remote table "storage.buckets" */
export type Buckets_Obj_Rel_Insert_Input = {
  data: Buckets_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Buckets_On_Conflict>;
};

/** on_conflict condition type for table "storage.buckets" */
export type Buckets_On_Conflict = {
  constraint: Buckets_Constraint;
  update_columns?: Array<Buckets_Update_Column>;
  where?: InputMaybe<Buckets_Bool_Exp>;
};

/** Ordering options when selecting data from "storage.buckets". */
export type Buckets_Order_By = {
  cacheControl?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  downloadExpiration?: InputMaybe<Order_By>;
  files_aggregate?: InputMaybe<Files_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  maxUploadFileSize?: InputMaybe<Order_By>;
  minUploadFileSize?: InputMaybe<Order_By>;
  presignedUrlsEnabled?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** primary key columns input for table: storage.buckets */
export type Buckets_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "storage.buckets" */
export enum Buckets_Select_Column {
  /** column name */
  CacheControl = 'cacheControl',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DownloadExpiration = 'downloadExpiration',
  /** column name */
  Id = 'id',
  /** column name */
  MaxUploadFileSize = 'maxUploadFileSize',
  /** column name */
  MinUploadFileSize = 'minUploadFileSize',
  /** column name */
  PresignedUrlsEnabled = 'presignedUrlsEnabled',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "storage.buckets" */
export type Buckets_Set_Input = {
  cacheControl?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  downloadExpiration?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['String']>;
  maxUploadFileSize?: InputMaybe<Scalars['Int']>;
  minUploadFileSize?: InputMaybe<Scalars['Int']>;
  presignedUrlsEnabled?: InputMaybe<Scalars['Boolean']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Buckets_Stddev_Fields = {
  __typename?: 'buckets_stddev_fields';
  downloadExpiration?: Maybe<Scalars['Float']>;
  maxUploadFileSize?: Maybe<Scalars['Float']>;
  minUploadFileSize?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Buckets_Stddev_Pop_Fields = {
  __typename?: 'buckets_stddev_pop_fields';
  downloadExpiration?: Maybe<Scalars['Float']>;
  maxUploadFileSize?: Maybe<Scalars['Float']>;
  minUploadFileSize?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Buckets_Stddev_Samp_Fields = {
  __typename?: 'buckets_stddev_samp_fields';
  downloadExpiration?: Maybe<Scalars['Float']>;
  maxUploadFileSize?: Maybe<Scalars['Float']>;
  minUploadFileSize?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "buckets" */
export type Buckets_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Buckets_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Buckets_Stream_Cursor_Value_Input = {
  cacheControl?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  downloadExpiration?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['String']>;
  maxUploadFileSize?: InputMaybe<Scalars['Int']>;
  minUploadFileSize?: InputMaybe<Scalars['Int']>;
  presignedUrlsEnabled?: InputMaybe<Scalars['Boolean']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate sum on columns */
export type Buckets_Sum_Fields = {
  __typename?: 'buckets_sum_fields';
  downloadExpiration?: Maybe<Scalars['Int']>;
  maxUploadFileSize?: Maybe<Scalars['Int']>;
  minUploadFileSize?: Maybe<Scalars['Int']>;
};

/** update columns of table "storage.buckets" */
export enum Buckets_Update_Column {
  /** column name */
  CacheControl = 'cacheControl',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DownloadExpiration = 'downloadExpiration',
  /** column name */
  Id = 'id',
  /** column name */
  MaxUploadFileSize = 'maxUploadFileSize',
  /** column name */
  MinUploadFileSize = 'minUploadFileSize',
  /** column name */
  PresignedUrlsEnabled = 'presignedUrlsEnabled',
  /** column name */
  UpdatedAt = 'updatedAt'
}

export type Buckets_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Buckets_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Buckets_Set_Input>;
  where: Buckets_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Buckets_Var_Pop_Fields = {
  __typename?: 'buckets_var_pop_fields';
  downloadExpiration?: Maybe<Scalars['Float']>;
  maxUploadFileSize?: Maybe<Scalars['Float']>;
  minUploadFileSize?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Buckets_Var_Samp_Fields = {
  __typename?: 'buckets_var_samp_fields';
  downloadExpiration?: Maybe<Scalars['Float']>;
  maxUploadFileSize?: Maybe<Scalars['Float']>;
  minUploadFileSize?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Buckets_Variance_Fields = {
  __typename?: 'buckets_variance_fields';
  downloadExpiration?: Maybe<Scalars['Float']>;
  maxUploadFileSize?: Maybe<Scalars['Float']>;
  minUploadFileSize?: Maybe<Scalars['Float']>;
};

/** Boolean expression to compare columns of type "bytea". All fields are combined with logical 'AND'. */
export type Bytea_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['bytea']>;
  _gt?: InputMaybe<Scalars['bytea']>;
  _gte?: InputMaybe<Scalars['bytea']>;
  _in?: InputMaybe<Array<Scalars['bytea']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['bytea']>;
  _lte?: InputMaybe<Scalars['bytea']>;
  _neq?: InputMaybe<Scalars['bytea']>;
  _nin?: InputMaybe<Array<Scalars['bytea']>>;
};

/** Boolean expression to compare columns of type "citext". All fields are combined with logical 'AND'. */
export type Citext_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['citext']>;
  _gt?: InputMaybe<Scalars['citext']>;
  _gte?: InputMaybe<Scalars['citext']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['citext']>;
  _in?: InputMaybe<Array<Scalars['citext']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['citext']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['citext']>;
  _lt?: InputMaybe<Scalars['citext']>;
  _lte?: InputMaybe<Scalars['citext']>;
  _neq?: InputMaybe<Scalars['citext']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['citext']>;
  _nin?: InputMaybe<Array<Scalars['citext']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['citext']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['citext']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['citext']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['citext']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['citext']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['citext']>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** columns and relationships of "storage.files" */
export type Files = {
  __typename?: 'files';
  /** An object relationship */
  bucket: Buckets;
  bucketId: Scalars['String'];
  createdAt: Scalars['timestamptz'];
  etag?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  isUploaded?: Maybe<Scalars['Boolean']>;
  mimeType?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Int']>;
  updatedAt: Scalars['timestamptz'];
  uploadedByUserId?: Maybe<Scalars['uuid']>;
};

/** aggregated selection of "storage.files" */
export type Files_Aggregate = {
  __typename?: 'files_aggregate';
  aggregate?: Maybe<Files_Aggregate_Fields>;
  nodes: Array<Files>;
};

/** aggregate fields of "storage.files" */
export type Files_Aggregate_Fields = {
  __typename?: 'files_aggregate_fields';
  avg?: Maybe<Files_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Files_Max_Fields>;
  min?: Maybe<Files_Min_Fields>;
  stddev?: Maybe<Files_Stddev_Fields>;
  stddev_pop?: Maybe<Files_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Files_Stddev_Samp_Fields>;
  sum?: Maybe<Files_Sum_Fields>;
  var_pop?: Maybe<Files_Var_Pop_Fields>;
  var_samp?: Maybe<Files_Var_Samp_Fields>;
  variance?: Maybe<Files_Variance_Fields>;
};


/** aggregate fields of "storage.files" */
export type Files_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Files_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "storage.files" */
export type Files_Aggregate_Order_By = {
  avg?: InputMaybe<Files_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Files_Max_Order_By>;
  min?: InputMaybe<Files_Min_Order_By>;
  stddev?: InputMaybe<Files_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Files_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Files_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Files_Sum_Order_By>;
  var_pop?: InputMaybe<Files_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Files_Var_Samp_Order_By>;
  variance?: InputMaybe<Files_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "storage.files" */
export type Files_Arr_Rel_Insert_Input = {
  data: Array<Files_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Files_On_Conflict>;
};

/** aggregate avg on columns */
export type Files_Avg_Fields = {
  __typename?: 'files_avg_fields';
  size?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "storage.files" */
export type Files_Avg_Order_By = {
  size?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "storage.files". All fields are combined with a logical 'AND'. */
export type Files_Bool_Exp = {
  _and?: InputMaybe<Array<Files_Bool_Exp>>;
  _not?: InputMaybe<Files_Bool_Exp>;
  _or?: InputMaybe<Array<Files_Bool_Exp>>;
  bucket?: InputMaybe<Buckets_Bool_Exp>;
  bucketId?: InputMaybe<String_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  etag?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  isUploaded?: InputMaybe<Boolean_Comparison_Exp>;
  mimeType?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  size?: InputMaybe<Int_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  uploadedByUserId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "storage.files" */
export enum Files_Constraint {
  /** unique or primary key constraint on columns "id" */
  FilesPkey = 'files_pkey'
}

/** input type for incrementing numeric columns in table "storage.files" */
export type Files_Inc_Input = {
  size?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "storage.files" */
export type Files_Insert_Input = {
  bucket?: InputMaybe<Buckets_Obj_Rel_Insert_Input>;
  bucketId?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  etag?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  isUploaded?: InputMaybe<Scalars['Boolean']>;
  mimeType?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  uploadedByUserId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Files_Max_Fields = {
  __typename?: 'files_max_fields';
  bucketId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  etag?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  mimeType?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  uploadedByUserId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "storage.files" */
export type Files_Max_Order_By = {
  bucketId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  etag?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  mimeType?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  size?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  uploadedByUserId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Files_Min_Fields = {
  __typename?: 'files_min_fields';
  bucketId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  etag?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  mimeType?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  uploadedByUserId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "storage.files" */
export type Files_Min_Order_By = {
  bucketId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  etag?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  mimeType?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  size?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  uploadedByUserId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "storage.files" */
export type Files_Mutation_Response = {
  __typename?: 'files_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Files>;
};

/** on_conflict condition type for table "storage.files" */
export type Files_On_Conflict = {
  constraint: Files_Constraint;
  update_columns?: Array<Files_Update_Column>;
  where?: InputMaybe<Files_Bool_Exp>;
};

/** Ordering options when selecting data from "storage.files". */
export type Files_Order_By = {
  bucket?: InputMaybe<Buckets_Order_By>;
  bucketId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  etag?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  isUploaded?: InputMaybe<Order_By>;
  mimeType?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  size?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  uploadedByUserId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: storage.files */
export type Files_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "storage.files" */
export enum Files_Select_Column {
  /** column name */
  BucketId = 'bucketId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Etag = 'etag',
  /** column name */
  Id = 'id',
  /** column name */
  IsUploaded = 'isUploaded',
  /** column name */
  MimeType = 'mimeType',
  /** column name */
  Name = 'name',
  /** column name */
  Size = 'size',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UploadedByUserId = 'uploadedByUserId'
}

/** input type for updating data in table "storage.files" */
export type Files_Set_Input = {
  bucketId?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  etag?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  isUploaded?: InputMaybe<Scalars['Boolean']>;
  mimeType?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  uploadedByUserId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type Files_Stddev_Fields = {
  __typename?: 'files_stddev_fields';
  size?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "storage.files" */
export type Files_Stddev_Order_By = {
  size?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Files_Stddev_Pop_Fields = {
  __typename?: 'files_stddev_pop_fields';
  size?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "storage.files" */
export type Files_Stddev_Pop_Order_By = {
  size?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Files_Stddev_Samp_Fields = {
  __typename?: 'files_stddev_samp_fields';
  size?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "storage.files" */
export type Files_Stddev_Samp_Order_By = {
  size?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "files" */
export type Files_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Files_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Files_Stream_Cursor_Value_Input = {
  bucketId?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  etag?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  isUploaded?: InputMaybe<Scalars['Boolean']>;
  mimeType?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  uploadedByUserId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate sum on columns */
export type Files_Sum_Fields = {
  __typename?: 'files_sum_fields';
  size?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "storage.files" */
export type Files_Sum_Order_By = {
  size?: InputMaybe<Order_By>;
};

/** update columns of table "storage.files" */
export enum Files_Update_Column {
  /** column name */
  BucketId = 'bucketId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Etag = 'etag',
  /** column name */
  Id = 'id',
  /** column name */
  IsUploaded = 'isUploaded',
  /** column name */
  MimeType = 'mimeType',
  /** column name */
  Name = 'name',
  /** column name */
  Size = 'size',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UploadedByUserId = 'uploadedByUserId'
}

export type Files_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Files_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Files_Set_Input>;
  where: Files_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Files_Var_Pop_Fields = {
  __typename?: 'files_var_pop_fields';
  size?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "storage.files" */
export type Files_Var_Pop_Order_By = {
  size?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Files_Var_Samp_Fields = {
  __typename?: 'files_var_samp_fields';
  size?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "storage.files" */
export type Files_Var_Samp_Order_By = {
  size?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Files_Variance_Fields = {
  __typename?: 'files_variance_fields';
  size?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "storage.files" */
export type Files_Variance_Order_By = {
  size?: InputMaybe<Order_By>;
};

export type Jsonb_Cast_Exp = {
  String?: InputMaybe<String_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  _cast?: InputMaybe<Jsonb_Cast_Exp>;
  /** is the column contained in the given json value */
  _contained_in?: InputMaybe<Scalars['jsonb']>;
  /** does the column contain the given json value at the top level */
  _contains?: InputMaybe<Scalars['jsonb']>;
  _eq?: InputMaybe<Scalars['jsonb']>;
  _gt?: InputMaybe<Scalars['jsonb']>;
  _gte?: InputMaybe<Scalars['jsonb']>;
  /** does the string exist as a top-level key in the column */
  _has_key?: InputMaybe<Scalars['String']>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: InputMaybe<Array<Scalars['String']>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: InputMaybe<Array<Scalars['String']>>;
  _in?: InputMaybe<Array<Scalars['jsonb']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['jsonb']>;
  _lte?: InputMaybe<Scalars['jsonb']>;
  _neq?: InputMaybe<Scalars['jsonb']>;
  _nin?: InputMaybe<Array<Scalars['jsonb']>>;
};

/** columns and relationships of "locations" */
export type Locations = {
  __typename?: 'locations';
  id: Scalars['uuid'];
  latitude: Scalars['String'];
  longitude: Scalars['String'];
  /** An array relationship */
  physiotherapists: Array<Physiotherapists>;
  /** An aggregate relationship */
  physiotherapists_aggregate: Physiotherapists_Aggregate;
};


/** columns and relationships of "locations" */
export type LocationsPhysiotherapistsArgs = {
  distinct_on?: InputMaybe<Array<Physiotherapists_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Physiotherapists_Order_By>>;
  where?: InputMaybe<Physiotherapists_Bool_Exp>;
};


/** columns and relationships of "locations" */
export type LocationsPhysiotherapists_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Physiotherapists_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Physiotherapists_Order_By>>;
  where?: InputMaybe<Physiotherapists_Bool_Exp>;
};

/** aggregated selection of "locations" */
export type Locations_Aggregate = {
  __typename?: 'locations_aggregate';
  aggregate?: Maybe<Locations_Aggregate_Fields>;
  nodes: Array<Locations>;
};

/** aggregate fields of "locations" */
export type Locations_Aggregate_Fields = {
  __typename?: 'locations_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Locations_Max_Fields>;
  min?: Maybe<Locations_Min_Fields>;
};


/** aggregate fields of "locations" */
export type Locations_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Locations_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "locations". All fields are combined with a logical 'AND'. */
export type Locations_Bool_Exp = {
  _and?: InputMaybe<Array<Locations_Bool_Exp>>;
  _not?: InputMaybe<Locations_Bool_Exp>;
  _or?: InputMaybe<Array<Locations_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  latitude?: InputMaybe<String_Comparison_Exp>;
  longitude?: InputMaybe<String_Comparison_Exp>;
  physiotherapists?: InputMaybe<Physiotherapists_Bool_Exp>;
};

/** unique or primary key constraints on table "locations" */
export enum Locations_Constraint {
  /** unique or primary key constraint on columns "id" */
  LocationsPkey = 'locations_pkey'
}

/** input type for inserting data into table "locations" */
export type Locations_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  latitude?: InputMaybe<Scalars['String']>;
  longitude?: InputMaybe<Scalars['String']>;
  physiotherapists?: InputMaybe<Physiotherapists_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Locations_Max_Fields = {
  __typename?: 'locations_max_fields';
  id?: Maybe<Scalars['uuid']>;
  latitude?: Maybe<Scalars['String']>;
  longitude?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Locations_Min_Fields = {
  __typename?: 'locations_min_fields';
  id?: Maybe<Scalars['uuid']>;
  latitude?: Maybe<Scalars['String']>;
  longitude?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "locations" */
export type Locations_Mutation_Response = {
  __typename?: 'locations_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Locations>;
};

/** input type for inserting object relation for remote table "locations" */
export type Locations_Obj_Rel_Insert_Input = {
  data: Locations_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Locations_On_Conflict>;
};

/** on_conflict condition type for table "locations" */
export type Locations_On_Conflict = {
  constraint: Locations_Constraint;
  update_columns?: Array<Locations_Update_Column>;
  where?: InputMaybe<Locations_Bool_Exp>;
};

/** Ordering options when selecting data from "locations". */
export type Locations_Order_By = {
  id?: InputMaybe<Order_By>;
  latitude?: InputMaybe<Order_By>;
  longitude?: InputMaybe<Order_By>;
  physiotherapists_aggregate?: InputMaybe<Physiotherapists_Aggregate_Order_By>;
};

/** primary key columns input for table: locations */
export type Locations_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "locations" */
export enum Locations_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Latitude = 'latitude',
  /** column name */
  Longitude = 'longitude'
}

/** input type for updating data in table "locations" */
export type Locations_Set_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  latitude?: InputMaybe<Scalars['String']>;
  longitude?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "locations" */
export type Locations_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Locations_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Locations_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  latitude?: InputMaybe<Scalars['String']>;
  longitude?: InputMaybe<Scalars['String']>;
};

/** update columns of table "locations" */
export enum Locations_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Latitude = 'latitude',
  /** column name */
  Longitude = 'longitude'
}

export type Locations_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Locations_Set_Input>;
  where: Locations_Bool_Exp;
};

/** columns and relationships of "messages" */
export type Messages = {
  __typename?: 'messages';
  created_at: Scalars['timestamptz'];
  created_by?: Maybe<Scalars['uuid']>;
  displayed: Scalars['Boolean'];
  id: Scalars['uuid'];
  message: Scalars['String'];
  /** An object relationship */
  patient?: Maybe<Patients>;
  patient_id?: Maybe<Scalars['uuid']>;
  /** An object relationship */
  physiotherapist?: Maybe<Physiotherapists>;
  physiotherapist_id?: Maybe<Scalars['uuid']>;
};

/** aggregated selection of "messages" */
export type Messages_Aggregate = {
  __typename?: 'messages_aggregate';
  aggregate?: Maybe<Messages_Aggregate_Fields>;
  nodes: Array<Messages>;
};

/** aggregate fields of "messages" */
export type Messages_Aggregate_Fields = {
  __typename?: 'messages_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Messages_Max_Fields>;
  min?: Maybe<Messages_Min_Fields>;
};


/** aggregate fields of "messages" */
export type Messages_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Messages_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "messages" */
export type Messages_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Messages_Max_Order_By>;
  min?: InputMaybe<Messages_Min_Order_By>;
};

/** input type for inserting array relation for remote table "messages" */
export type Messages_Arr_Rel_Insert_Input = {
  data: Array<Messages_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Messages_On_Conflict>;
};

/** Boolean expression to filter rows from the table "messages". All fields are combined with a logical 'AND'. */
export type Messages_Bool_Exp = {
  _and?: InputMaybe<Array<Messages_Bool_Exp>>;
  _not?: InputMaybe<Messages_Bool_Exp>;
  _or?: InputMaybe<Array<Messages_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  created_by?: InputMaybe<Uuid_Comparison_Exp>;
  displayed?: InputMaybe<Boolean_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  message?: InputMaybe<String_Comparison_Exp>;
  patient?: InputMaybe<Patients_Bool_Exp>;
  patient_id?: InputMaybe<Uuid_Comparison_Exp>;
  physiotherapist?: InputMaybe<Physiotherapists_Bool_Exp>;
  physiotherapist_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "messages" */
export enum Messages_Constraint {
  /** unique or primary key constraint on columns "id" */
  MessagesPkey = 'messages_pkey'
}

/** input type for inserting data into table "messages" */
export type Messages_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  created_by?: InputMaybe<Scalars['uuid']>;
  displayed?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['uuid']>;
  message?: InputMaybe<Scalars['String']>;
  patient?: InputMaybe<Patients_Obj_Rel_Insert_Input>;
  patient_id?: InputMaybe<Scalars['uuid']>;
  physiotherapist?: InputMaybe<Physiotherapists_Obj_Rel_Insert_Input>;
  physiotherapist_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Messages_Max_Fields = {
  __typename?: 'messages_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  created_by?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  message?: Maybe<Scalars['String']>;
  patient_id?: Maybe<Scalars['uuid']>;
  physiotherapist_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "messages" */
export type Messages_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  message?: InputMaybe<Order_By>;
  patient_id?: InputMaybe<Order_By>;
  physiotherapist_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Messages_Min_Fields = {
  __typename?: 'messages_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  created_by?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  message?: Maybe<Scalars['String']>;
  patient_id?: Maybe<Scalars['uuid']>;
  physiotherapist_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "messages" */
export type Messages_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  message?: InputMaybe<Order_By>;
  patient_id?: InputMaybe<Order_By>;
  physiotherapist_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "messages" */
export type Messages_Mutation_Response = {
  __typename?: 'messages_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Messages>;
};

/** on_conflict condition type for table "messages" */
export type Messages_On_Conflict = {
  constraint: Messages_Constraint;
  update_columns?: Array<Messages_Update_Column>;
  where?: InputMaybe<Messages_Bool_Exp>;
};

/** Ordering options when selecting data from "messages". */
export type Messages_Order_By = {
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  displayed?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  message?: InputMaybe<Order_By>;
  patient?: InputMaybe<Patients_Order_By>;
  patient_id?: InputMaybe<Order_By>;
  physiotherapist?: InputMaybe<Physiotherapists_Order_By>;
  physiotherapist_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: messages */
export type Messages_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "messages" */
export enum Messages_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  Displayed = 'displayed',
  /** column name */
  Id = 'id',
  /** column name */
  Message = 'message',
  /** column name */
  PatientId = 'patient_id',
  /** column name */
  PhysiotherapistId = 'physiotherapist_id'
}

/** input type for updating data in table "messages" */
export type Messages_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  created_by?: InputMaybe<Scalars['uuid']>;
  displayed?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['uuid']>;
  message?: InputMaybe<Scalars['String']>;
  patient_id?: InputMaybe<Scalars['uuid']>;
  physiotherapist_id?: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "messages" */
export type Messages_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Messages_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Messages_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  created_by?: InputMaybe<Scalars['uuid']>;
  displayed?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['uuid']>;
  message?: InputMaybe<Scalars['String']>;
  patient_id?: InputMaybe<Scalars['uuid']>;
  physiotherapist_id?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "messages" */
export enum Messages_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  Displayed = 'displayed',
  /** column name */
  Id = 'id',
  /** column name */
  Message = 'message',
  /** column name */
  PatientId = 'patient_id',
  /** column name */
  PhysiotherapistId = 'physiotherapist_id'
}

export type Messages_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Messages_Set_Input>;
  where: Messages_Bool_Exp;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete single row from the table: "auth.providers" */
  deleteAuthProvider?: Maybe<AuthProviders>;
  /** delete single row from the table: "auth.provider_requests" */
  deleteAuthProviderRequest?: Maybe<AuthProviderRequests>;
  /** delete data from the table: "auth.provider_requests" */
  deleteAuthProviderRequests?: Maybe<AuthProviderRequests_Mutation_Response>;
  /** delete data from the table: "auth.providers" */
  deleteAuthProviders?: Maybe<AuthProviders_Mutation_Response>;
  /** delete single row from the table: "auth.refresh_tokens" */
  deleteAuthRefreshToken?: Maybe<AuthRefreshTokens>;
  /** delete data from the table: "auth.refresh_tokens" */
  deleteAuthRefreshTokens?: Maybe<AuthRefreshTokens_Mutation_Response>;
  /** delete single row from the table: "auth.roles" */
  deleteAuthRole?: Maybe<AuthRoles>;
  /** delete data from the table: "auth.roles" */
  deleteAuthRoles?: Maybe<AuthRoles_Mutation_Response>;
  /** delete single row from the table: "auth.user_providers" */
  deleteAuthUserProvider?: Maybe<AuthUserProviders>;
  /** delete data from the table: "auth.user_providers" */
  deleteAuthUserProviders?: Maybe<AuthUserProviders_Mutation_Response>;
  /** delete single row from the table: "auth.user_roles" */
  deleteAuthUserRole?: Maybe<AuthUserRoles>;
  /** delete data from the table: "auth.user_roles" */
  deleteAuthUserRoles?: Maybe<AuthUserRoles_Mutation_Response>;
  /** delete single row from the table: "auth.user_security_keys" */
  deleteAuthUserSecurityKey?: Maybe<AuthUserSecurityKeys>;
  /** delete data from the table: "auth.user_security_keys" */
  deleteAuthUserSecurityKeys?: Maybe<AuthUserSecurityKeys_Mutation_Response>;
  /** delete single row from the table: "storage.buckets" */
  deleteBucket?: Maybe<Buckets>;
  /** delete data from the table: "storage.buckets" */
  deleteBuckets?: Maybe<Buckets_Mutation_Response>;
  /** delete single row from the table: "storage.files" */
  deleteFile?: Maybe<Files>;
  /** delete data from the table: "storage.files" */
  deleteFiles?: Maybe<Files_Mutation_Response>;
  /** delete single row from the table: "auth.users" */
  deleteUser?: Maybe<Users>;
  /** delete data from the table: "auth.users" */
  deleteUsers?: Maybe<Users_Mutation_Response>;
  /** delete data from the table: "locations" */
  delete_locations?: Maybe<Locations_Mutation_Response>;
  /** delete single row from the table: "locations" */
  delete_locations_by_pk?: Maybe<Locations>;
  /** delete data from the table: "messages" */
  delete_messages?: Maybe<Messages_Mutation_Response>;
  /** delete single row from the table: "messages" */
  delete_messages_by_pk?: Maybe<Messages>;
  /** delete data from the table: "opinions" */
  delete_opinions?: Maybe<Opinions_Mutation_Response>;
  /** delete single row from the table: "opinions" */
  delete_opinions_by_pk?: Maybe<Opinions>;
  /** delete data from the table: "patients" */
  delete_patients?: Maybe<Patients_Mutation_Response>;
  /** delete single row from the table: "patients" */
  delete_patients_by_pk?: Maybe<Patients>;
  /** delete data from the table: "physiotherapists" */
  delete_physiotherapists?: Maybe<Physiotherapists_Mutation_Response>;
  /** delete single row from the table: "physiotherapists" */
  delete_physiotherapists_by_pk?: Maybe<Physiotherapists>;
  /** delete data from the table: "visit_types" */
  delete_visit_types?: Maybe<Visit_Types_Mutation_Response>;
  /** delete single row from the table: "visit_types" */
  delete_visit_types_by_pk?: Maybe<Visit_Types>;
  /** delete data from the table: "visits" */
  delete_visits?: Maybe<Visits_Mutation_Response>;
  /** delete single row from the table: "visits" */
  delete_visits_by_pk?: Maybe<Visits>;
  /** insert a single row into the table: "auth.providers" */
  insertAuthProvider?: Maybe<AuthProviders>;
  /** insert a single row into the table: "auth.provider_requests" */
  insertAuthProviderRequest?: Maybe<AuthProviderRequests>;
  /** insert data into the table: "auth.provider_requests" */
  insertAuthProviderRequests?: Maybe<AuthProviderRequests_Mutation_Response>;
  /** insert data into the table: "auth.providers" */
  insertAuthProviders?: Maybe<AuthProviders_Mutation_Response>;
  /** insert a single row into the table: "auth.refresh_tokens" */
  insertAuthRefreshToken?: Maybe<AuthRefreshTokens>;
  /** insert data into the table: "auth.refresh_tokens" */
  insertAuthRefreshTokens?: Maybe<AuthRefreshTokens_Mutation_Response>;
  /** insert a single row into the table: "auth.roles" */
  insertAuthRole?: Maybe<AuthRoles>;
  /** insert data into the table: "auth.roles" */
  insertAuthRoles?: Maybe<AuthRoles_Mutation_Response>;
  /** insert a single row into the table: "auth.user_providers" */
  insertAuthUserProvider?: Maybe<AuthUserProviders>;
  /** insert data into the table: "auth.user_providers" */
  insertAuthUserProviders?: Maybe<AuthUserProviders_Mutation_Response>;
  /** insert a single row into the table: "auth.user_roles" */
  insertAuthUserRole?: Maybe<AuthUserRoles>;
  /** insert data into the table: "auth.user_roles" */
  insertAuthUserRoles?: Maybe<AuthUserRoles_Mutation_Response>;
  /** insert a single row into the table: "auth.user_security_keys" */
  insertAuthUserSecurityKey?: Maybe<AuthUserSecurityKeys>;
  /** insert data into the table: "auth.user_security_keys" */
  insertAuthUserSecurityKeys?: Maybe<AuthUserSecurityKeys_Mutation_Response>;
  /** insert a single row into the table: "storage.buckets" */
  insertBucket?: Maybe<Buckets>;
  /** insert data into the table: "storage.buckets" */
  insertBuckets?: Maybe<Buckets_Mutation_Response>;
  /** insert a single row into the table: "storage.files" */
  insertFile?: Maybe<Files>;
  /** insert data into the table: "storage.files" */
  insertFiles?: Maybe<Files_Mutation_Response>;
  /** insert a single row into the table: "auth.users" */
  insertUser?: Maybe<Users>;
  /** insert data into the table: "auth.users" */
  insertUsers?: Maybe<Users_Mutation_Response>;
  /** insert data into the table: "locations" */
  insert_locations?: Maybe<Locations_Mutation_Response>;
  /** insert a single row into the table: "locations" */
  insert_locations_one?: Maybe<Locations>;
  /** insert data into the table: "messages" */
  insert_messages?: Maybe<Messages_Mutation_Response>;
  /** insert a single row into the table: "messages" */
  insert_messages_one?: Maybe<Messages>;
  /** insert data into the table: "opinions" */
  insert_opinions?: Maybe<Opinions_Mutation_Response>;
  /** insert a single row into the table: "opinions" */
  insert_opinions_one?: Maybe<Opinions>;
  /** insert data into the table: "patients" */
  insert_patients?: Maybe<Patients_Mutation_Response>;
  /** insert a single row into the table: "patients" */
  insert_patients_one?: Maybe<Patients>;
  /** insert data into the table: "physiotherapists" */
  insert_physiotherapists?: Maybe<Physiotherapists_Mutation_Response>;
  /** insert a single row into the table: "physiotherapists" */
  insert_physiotherapists_one?: Maybe<Physiotherapists>;
  /** insert data into the table: "visit_types" */
  insert_visit_types?: Maybe<Visit_Types_Mutation_Response>;
  /** insert a single row into the table: "visit_types" */
  insert_visit_types_one?: Maybe<Visit_Types>;
  /** insert data into the table: "visits" */
  insert_visits?: Maybe<Visits_Mutation_Response>;
  /** insert a single row into the table: "visits" */
  insert_visits_one?: Maybe<Visits>;
  /** update single row of the table: "auth.providers" */
  updateAuthProvider?: Maybe<AuthProviders>;
  /** update single row of the table: "auth.provider_requests" */
  updateAuthProviderRequest?: Maybe<AuthProviderRequests>;
  /** update data of the table: "auth.provider_requests" */
  updateAuthProviderRequests?: Maybe<AuthProviderRequests_Mutation_Response>;
  /** update data of the table: "auth.providers" */
  updateAuthProviders?: Maybe<AuthProviders_Mutation_Response>;
  /** update single row of the table: "auth.refresh_tokens" */
  updateAuthRefreshToken?: Maybe<AuthRefreshTokens>;
  /** update data of the table: "auth.refresh_tokens" */
  updateAuthRefreshTokens?: Maybe<AuthRefreshTokens_Mutation_Response>;
  /** update single row of the table: "auth.roles" */
  updateAuthRole?: Maybe<AuthRoles>;
  /** update data of the table: "auth.roles" */
  updateAuthRoles?: Maybe<AuthRoles_Mutation_Response>;
  /** update single row of the table: "auth.user_providers" */
  updateAuthUserProvider?: Maybe<AuthUserProviders>;
  /** update data of the table: "auth.user_providers" */
  updateAuthUserProviders?: Maybe<AuthUserProviders_Mutation_Response>;
  /** update single row of the table: "auth.user_roles" */
  updateAuthUserRole?: Maybe<AuthUserRoles>;
  /** update data of the table: "auth.user_roles" */
  updateAuthUserRoles?: Maybe<AuthUserRoles_Mutation_Response>;
  /** update single row of the table: "auth.user_security_keys" */
  updateAuthUserSecurityKey?: Maybe<AuthUserSecurityKeys>;
  /** update data of the table: "auth.user_security_keys" */
  updateAuthUserSecurityKeys?: Maybe<AuthUserSecurityKeys_Mutation_Response>;
  /** update single row of the table: "storage.buckets" */
  updateBucket?: Maybe<Buckets>;
  /** update data of the table: "storage.buckets" */
  updateBuckets?: Maybe<Buckets_Mutation_Response>;
  /** update single row of the table: "storage.files" */
  updateFile?: Maybe<Files>;
  /** update data of the table: "storage.files" */
  updateFiles?: Maybe<Files_Mutation_Response>;
  /** update single row of the table: "auth.users" */
  updateUser?: Maybe<Users>;
  /** update data of the table: "auth.users" */
  updateUsers?: Maybe<Users_Mutation_Response>;
  /** update multiples rows of table: "auth.provider_requests" */
  update_authProviderRequests_many?: Maybe<Array<Maybe<AuthProviderRequests_Mutation_Response>>>;
  /** update multiples rows of table: "auth.providers" */
  update_authProviders_many?: Maybe<Array<Maybe<AuthProviders_Mutation_Response>>>;
  /** update multiples rows of table: "auth.refresh_tokens" */
  update_authRefreshTokens_many?: Maybe<Array<Maybe<AuthRefreshTokens_Mutation_Response>>>;
  /** update multiples rows of table: "auth.roles" */
  update_authRoles_many?: Maybe<Array<Maybe<AuthRoles_Mutation_Response>>>;
  /** update multiples rows of table: "auth.user_providers" */
  update_authUserProviders_many?: Maybe<Array<Maybe<AuthUserProviders_Mutation_Response>>>;
  /** update multiples rows of table: "auth.user_roles" */
  update_authUserRoles_many?: Maybe<Array<Maybe<AuthUserRoles_Mutation_Response>>>;
  /** update multiples rows of table: "auth.user_security_keys" */
  update_authUserSecurityKeys_many?: Maybe<Array<Maybe<AuthUserSecurityKeys_Mutation_Response>>>;
  /** update multiples rows of table: "storage.buckets" */
  update_buckets_many?: Maybe<Array<Maybe<Buckets_Mutation_Response>>>;
  /** update multiples rows of table: "storage.files" */
  update_files_many?: Maybe<Array<Maybe<Files_Mutation_Response>>>;
  /** update data of the table: "locations" */
  update_locations?: Maybe<Locations_Mutation_Response>;
  /** update single row of the table: "locations" */
  update_locations_by_pk?: Maybe<Locations>;
  /** update multiples rows of table: "locations" */
  update_locations_many?: Maybe<Array<Maybe<Locations_Mutation_Response>>>;
  /** update data of the table: "messages" */
  update_messages?: Maybe<Messages_Mutation_Response>;
  /** update single row of the table: "messages" */
  update_messages_by_pk?: Maybe<Messages>;
  /** update multiples rows of table: "messages" */
  update_messages_many?: Maybe<Array<Maybe<Messages_Mutation_Response>>>;
  /** update data of the table: "opinions" */
  update_opinions?: Maybe<Opinions_Mutation_Response>;
  /** update single row of the table: "opinions" */
  update_opinions_by_pk?: Maybe<Opinions>;
  /** update multiples rows of table: "opinions" */
  update_opinions_many?: Maybe<Array<Maybe<Opinions_Mutation_Response>>>;
  /** update data of the table: "patients" */
  update_patients?: Maybe<Patients_Mutation_Response>;
  /** update single row of the table: "patients" */
  update_patients_by_pk?: Maybe<Patients>;
  /** update multiples rows of table: "patients" */
  update_patients_many?: Maybe<Array<Maybe<Patients_Mutation_Response>>>;
  /** update data of the table: "physiotherapists" */
  update_physiotherapists?: Maybe<Physiotherapists_Mutation_Response>;
  /** update single row of the table: "physiotherapists" */
  update_physiotherapists_by_pk?: Maybe<Physiotherapists>;
  /** update multiples rows of table: "physiotherapists" */
  update_physiotherapists_many?: Maybe<Array<Maybe<Physiotherapists_Mutation_Response>>>;
  /** update multiples rows of table: "auth.users" */
  update_users_many?: Maybe<Array<Maybe<Users_Mutation_Response>>>;
  /** update data of the table: "visit_types" */
  update_visit_types?: Maybe<Visit_Types_Mutation_Response>;
  /** update single row of the table: "visit_types" */
  update_visit_types_by_pk?: Maybe<Visit_Types>;
  /** update multiples rows of table: "visit_types" */
  update_visit_types_many?: Maybe<Array<Maybe<Visit_Types_Mutation_Response>>>;
  /** update data of the table: "visits" */
  update_visits?: Maybe<Visits_Mutation_Response>;
  /** update single row of the table: "visits" */
  update_visits_by_pk?: Maybe<Visits>;
  /** update multiples rows of table: "visits" */
  update_visits_many?: Maybe<Array<Maybe<Visits_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDeleteAuthProviderArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDeleteAuthProviderRequestArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteAuthProviderRequestsArgs = {
  where: AuthProviderRequests_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteAuthProvidersArgs = {
  where: AuthProviders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteAuthRefreshTokenArgs = {
  refreshToken: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteAuthRefreshTokensArgs = {
  where: AuthRefreshTokens_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteAuthRoleArgs = {
  role: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDeleteAuthRolesArgs = {
  where: AuthRoles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteAuthUserProviderArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteAuthUserProvidersArgs = {
  where: AuthUserProviders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteAuthUserRoleArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteAuthUserRolesArgs = {
  where: AuthUserRoles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteAuthUserSecurityKeyArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteAuthUserSecurityKeysArgs = {
  where: AuthUserSecurityKeys_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteBucketArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDeleteBucketsArgs = {
  where: Buckets_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteFileArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteFilesArgs = {
  where: Files_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteUserArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteUsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_LocationsArgs = {
  where: Locations_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Locations_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_MessagesArgs = {
  where: Messages_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Messages_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_OpinionsArgs = {
  where: Opinions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Opinions_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_PatientsArgs = {
  where: Patients_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Patients_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_PhysiotherapistsArgs = {
  where: Physiotherapists_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Physiotherapists_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Visit_TypesArgs = {
  where: Visit_Types_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Visit_Types_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_VisitsArgs = {
  where: Visits_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Visits_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootInsertAuthProviderArgs = {
  object: AuthProviders_Insert_Input;
  on_conflict?: InputMaybe<AuthProviders_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthProviderRequestArgs = {
  object: AuthProviderRequests_Insert_Input;
  on_conflict?: InputMaybe<AuthProviderRequests_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthProviderRequestsArgs = {
  objects: Array<AuthProviderRequests_Insert_Input>;
  on_conflict?: InputMaybe<AuthProviderRequests_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthProvidersArgs = {
  objects: Array<AuthProviders_Insert_Input>;
  on_conflict?: InputMaybe<AuthProviders_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthRefreshTokenArgs = {
  object: AuthRefreshTokens_Insert_Input;
  on_conflict?: InputMaybe<AuthRefreshTokens_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthRefreshTokensArgs = {
  objects: Array<AuthRefreshTokens_Insert_Input>;
  on_conflict?: InputMaybe<AuthRefreshTokens_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthRoleArgs = {
  object: AuthRoles_Insert_Input;
  on_conflict?: InputMaybe<AuthRoles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthRolesArgs = {
  objects: Array<AuthRoles_Insert_Input>;
  on_conflict?: InputMaybe<AuthRoles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthUserProviderArgs = {
  object: AuthUserProviders_Insert_Input;
  on_conflict?: InputMaybe<AuthUserProviders_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthUserProvidersArgs = {
  objects: Array<AuthUserProviders_Insert_Input>;
  on_conflict?: InputMaybe<AuthUserProviders_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthUserRoleArgs = {
  object: AuthUserRoles_Insert_Input;
  on_conflict?: InputMaybe<AuthUserRoles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthUserRolesArgs = {
  objects: Array<AuthUserRoles_Insert_Input>;
  on_conflict?: InputMaybe<AuthUserRoles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthUserSecurityKeyArgs = {
  object: AuthUserSecurityKeys_Insert_Input;
  on_conflict?: InputMaybe<AuthUserSecurityKeys_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthUserSecurityKeysArgs = {
  objects: Array<AuthUserSecurityKeys_Insert_Input>;
  on_conflict?: InputMaybe<AuthUserSecurityKeys_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertBucketArgs = {
  object: Buckets_Insert_Input;
  on_conflict?: InputMaybe<Buckets_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertBucketsArgs = {
  objects: Array<Buckets_Insert_Input>;
  on_conflict?: InputMaybe<Buckets_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertFileArgs = {
  object: Files_Insert_Input;
  on_conflict?: InputMaybe<Files_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertFilesArgs = {
  objects: Array<Files_Insert_Input>;
  on_conflict?: InputMaybe<Files_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertUserArgs = {
  object: Users_Insert_Input;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertUsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_LocationsArgs = {
  objects: Array<Locations_Insert_Input>;
  on_conflict?: InputMaybe<Locations_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Locations_OneArgs = {
  object: Locations_Insert_Input;
  on_conflict?: InputMaybe<Locations_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_MessagesArgs = {
  objects: Array<Messages_Insert_Input>;
  on_conflict?: InputMaybe<Messages_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Messages_OneArgs = {
  object: Messages_Insert_Input;
  on_conflict?: InputMaybe<Messages_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_OpinionsArgs = {
  objects: Array<Opinions_Insert_Input>;
  on_conflict?: InputMaybe<Opinions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Opinions_OneArgs = {
  object: Opinions_Insert_Input;
  on_conflict?: InputMaybe<Opinions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_PatientsArgs = {
  objects: Array<Patients_Insert_Input>;
  on_conflict?: InputMaybe<Patients_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Patients_OneArgs = {
  object: Patients_Insert_Input;
  on_conflict?: InputMaybe<Patients_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_PhysiotherapistsArgs = {
  objects: Array<Physiotherapists_Insert_Input>;
  on_conflict?: InputMaybe<Physiotherapists_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Physiotherapists_OneArgs = {
  object: Physiotherapists_Insert_Input;
  on_conflict?: InputMaybe<Physiotherapists_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Visit_TypesArgs = {
  objects: Array<Visit_Types_Insert_Input>;
  on_conflict?: InputMaybe<Visit_Types_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Visit_Types_OneArgs = {
  object: Visit_Types_Insert_Input;
  on_conflict?: InputMaybe<Visit_Types_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_VisitsArgs = {
  objects: Array<Visits_Insert_Input>;
  on_conflict?: InputMaybe<Visits_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Visits_OneArgs = {
  object: Visits_Insert_Input;
  on_conflict?: InputMaybe<Visits_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdateAuthProviderArgs = {
  _set?: InputMaybe<AuthProviders_Set_Input>;
  pk_columns: AuthProviders_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateAuthProviderRequestArgs = {
  _append?: InputMaybe<AuthProviderRequests_Append_Input>;
  _delete_at_path?: InputMaybe<AuthProviderRequests_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<AuthProviderRequests_Delete_Elem_Input>;
  _delete_key?: InputMaybe<AuthProviderRequests_Delete_Key_Input>;
  _prepend?: InputMaybe<AuthProviderRequests_Prepend_Input>;
  _set?: InputMaybe<AuthProviderRequests_Set_Input>;
  pk_columns: AuthProviderRequests_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateAuthProviderRequestsArgs = {
  _append?: InputMaybe<AuthProviderRequests_Append_Input>;
  _delete_at_path?: InputMaybe<AuthProviderRequests_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<AuthProviderRequests_Delete_Elem_Input>;
  _delete_key?: InputMaybe<AuthProviderRequests_Delete_Key_Input>;
  _prepend?: InputMaybe<AuthProviderRequests_Prepend_Input>;
  _set?: InputMaybe<AuthProviderRequests_Set_Input>;
  where: AuthProviderRequests_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateAuthProvidersArgs = {
  _set?: InputMaybe<AuthProviders_Set_Input>;
  where: AuthProviders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateAuthRefreshTokenArgs = {
  _set?: InputMaybe<AuthRefreshTokens_Set_Input>;
  pk_columns: AuthRefreshTokens_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateAuthRefreshTokensArgs = {
  _set?: InputMaybe<AuthRefreshTokens_Set_Input>;
  where: AuthRefreshTokens_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateAuthRoleArgs = {
  _set?: InputMaybe<AuthRoles_Set_Input>;
  pk_columns: AuthRoles_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateAuthRolesArgs = {
  _set?: InputMaybe<AuthRoles_Set_Input>;
  where: AuthRoles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateAuthUserProviderArgs = {
  _set?: InputMaybe<AuthUserProviders_Set_Input>;
  pk_columns: AuthUserProviders_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateAuthUserProvidersArgs = {
  _set?: InputMaybe<AuthUserProviders_Set_Input>;
  where: AuthUserProviders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateAuthUserRoleArgs = {
  _set?: InputMaybe<AuthUserRoles_Set_Input>;
  pk_columns: AuthUserRoles_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateAuthUserRolesArgs = {
  _set?: InputMaybe<AuthUserRoles_Set_Input>;
  where: AuthUserRoles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateAuthUserSecurityKeyArgs = {
  _inc?: InputMaybe<AuthUserSecurityKeys_Inc_Input>;
  _set?: InputMaybe<AuthUserSecurityKeys_Set_Input>;
  pk_columns: AuthUserSecurityKeys_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateAuthUserSecurityKeysArgs = {
  _inc?: InputMaybe<AuthUserSecurityKeys_Inc_Input>;
  _set?: InputMaybe<AuthUserSecurityKeys_Set_Input>;
  where: AuthUserSecurityKeys_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateBucketArgs = {
  _inc?: InputMaybe<Buckets_Inc_Input>;
  _set?: InputMaybe<Buckets_Set_Input>;
  pk_columns: Buckets_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateBucketsArgs = {
  _inc?: InputMaybe<Buckets_Inc_Input>;
  _set?: InputMaybe<Buckets_Set_Input>;
  where: Buckets_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateFileArgs = {
  _inc?: InputMaybe<Files_Inc_Input>;
  _set?: InputMaybe<Files_Set_Input>;
  pk_columns: Files_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateFilesArgs = {
  _inc?: InputMaybe<Files_Inc_Input>;
  _set?: InputMaybe<Files_Set_Input>;
  where: Files_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateUserArgs = {
  _append?: InputMaybe<Users_Append_Input>;
  _delete_at_path?: InputMaybe<Users_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Users_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Users_Delete_Key_Input>;
  _prepend?: InputMaybe<Users_Prepend_Input>;
  _set?: InputMaybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateUsersArgs = {
  _append?: InputMaybe<Users_Append_Input>;
  _delete_at_path?: InputMaybe<Users_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Users_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Users_Delete_Key_Input>;
  _prepend?: InputMaybe<Users_Prepend_Input>;
  _set?: InputMaybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_AuthProviderRequests_ManyArgs = {
  updates: Array<AuthProviderRequests_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_AuthProviders_ManyArgs = {
  updates: Array<AuthProviders_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_AuthRefreshTokens_ManyArgs = {
  updates: Array<AuthRefreshTokens_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_AuthRoles_ManyArgs = {
  updates: Array<AuthRoles_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_AuthUserProviders_ManyArgs = {
  updates: Array<AuthUserProviders_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_AuthUserRoles_ManyArgs = {
  updates: Array<AuthUserRoles_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_AuthUserSecurityKeys_ManyArgs = {
  updates: Array<AuthUserSecurityKeys_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Buckets_ManyArgs = {
  updates: Array<Buckets_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Files_ManyArgs = {
  updates: Array<Files_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_LocationsArgs = {
  _set?: InputMaybe<Locations_Set_Input>;
  where: Locations_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Locations_By_PkArgs = {
  _set?: InputMaybe<Locations_Set_Input>;
  pk_columns: Locations_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Locations_ManyArgs = {
  updates: Array<Locations_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_MessagesArgs = {
  _set?: InputMaybe<Messages_Set_Input>;
  where: Messages_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Messages_By_PkArgs = {
  _set?: InputMaybe<Messages_Set_Input>;
  pk_columns: Messages_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Messages_ManyArgs = {
  updates: Array<Messages_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_OpinionsArgs = {
  _set?: InputMaybe<Opinions_Set_Input>;
  where: Opinions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Opinions_By_PkArgs = {
  _set?: InputMaybe<Opinions_Set_Input>;
  pk_columns: Opinions_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Opinions_ManyArgs = {
  updates: Array<Opinions_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_PatientsArgs = {
  _set?: InputMaybe<Patients_Set_Input>;
  where: Patients_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Patients_By_PkArgs = {
  _set?: InputMaybe<Patients_Set_Input>;
  pk_columns: Patients_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Patients_ManyArgs = {
  updates: Array<Patients_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_PhysiotherapistsArgs = {
  _inc?: InputMaybe<Physiotherapists_Inc_Input>;
  _set?: InputMaybe<Physiotherapists_Set_Input>;
  where: Physiotherapists_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Physiotherapists_By_PkArgs = {
  _inc?: InputMaybe<Physiotherapists_Inc_Input>;
  _set?: InputMaybe<Physiotherapists_Set_Input>;
  pk_columns: Physiotherapists_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Physiotherapists_ManyArgs = {
  updates: Array<Physiotherapists_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Users_ManyArgs = {
  updates: Array<Users_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Visit_TypesArgs = {
  _set?: InputMaybe<Visit_Types_Set_Input>;
  where: Visit_Types_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Visit_Types_By_PkArgs = {
  _set?: InputMaybe<Visit_Types_Set_Input>;
  pk_columns: Visit_Types_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Visit_Types_ManyArgs = {
  updates: Array<Visit_Types_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_VisitsArgs = {
  _set?: InputMaybe<Visits_Set_Input>;
  where: Visits_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Visits_By_PkArgs = {
  _set?: InputMaybe<Visits_Set_Input>;
  pk_columns: Visits_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Visits_ManyArgs = {
  updates: Array<Visits_Updates>;
};

/** columns and relationships of "opinions" */
export type Opinions = {
  __typename?: 'opinions';
  comment: Scalars['String'];
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  /** An object relationship */
  patient?: Maybe<Patients>;
  patient_id?: Maybe<Scalars['uuid']>;
  /** An object relationship */
  physiotherapist?: Maybe<Physiotherapists>;
  physiotherapist_id?: Maybe<Scalars['uuid']>;
};

/** aggregated selection of "opinions" */
export type Opinions_Aggregate = {
  __typename?: 'opinions_aggregate';
  aggregate?: Maybe<Opinions_Aggregate_Fields>;
  nodes: Array<Opinions>;
};

/** aggregate fields of "opinions" */
export type Opinions_Aggregate_Fields = {
  __typename?: 'opinions_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Opinions_Max_Fields>;
  min?: Maybe<Opinions_Min_Fields>;
};


/** aggregate fields of "opinions" */
export type Opinions_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Opinions_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "opinions" */
export type Opinions_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Opinions_Max_Order_By>;
  min?: InputMaybe<Opinions_Min_Order_By>;
};

/** input type for inserting array relation for remote table "opinions" */
export type Opinions_Arr_Rel_Insert_Input = {
  data: Array<Opinions_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Opinions_On_Conflict>;
};

/** Boolean expression to filter rows from the table "opinions". All fields are combined with a logical 'AND'. */
export type Opinions_Bool_Exp = {
  _and?: InputMaybe<Array<Opinions_Bool_Exp>>;
  _not?: InputMaybe<Opinions_Bool_Exp>;
  _or?: InputMaybe<Array<Opinions_Bool_Exp>>;
  comment?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  patient?: InputMaybe<Patients_Bool_Exp>;
  patient_id?: InputMaybe<Uuid_Comparison_Exp>;
  physiotherapist?: InputMaybe<Physiotherapists_Bool_Exp>;
  physiotherapist_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "opinions" */
export enum Opinions_Constraint {
  /** unique or primary key constraint on columns "id" */
  OpinionsPkey = 'opinions_pkey'
}

/** input type for inserting data into table "opinions" */
export type Opinions_Insert_Input = {
  comment?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  patient?: InputMaybe<Patients_Obj_Rel_Insert_Input>;
  patient_id?: InputMaybe<Scalars['uuid']>;
  physiotherapist?: InputMaybe<Physiotherapists_Obj_Rel_Insert_Input>;
  physiotherapist_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Opinions_Max_Fields = {
  __typename?: 'opinions_max_fields';
  comment?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  patient_id?: Maybe<Scalars['uuid']>;
  physiotherapist_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "opinions" */
export type Opinions_Max_Order_By = {
  comment?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  patient_id?: InputMaybe<Order_By>;
  physiotherapist_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Opinions_Min_Fields = {
  __typename?: 'opinions_min_fields';
  comment?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  patient_id?: Maybe<Scalars['uuid']>;
  physiotherapist_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "opinions" */
export type Opinions_Min_Order_By = {
  comment?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  patient_id?: InputMaybe<Order_By>;
  physiotherapist_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "opinions" */
export type Opinions_Mutation_Response = {
  __typename?: 'opinions_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Opinions>;
};

/** on_conflict condition type for table "opinions" */
export type Opinions_On_Conflict = {
  constraint: Opinions_Constraint;
  update_columns?: Array<Opinions_Update_Column>;
  where?: InputMaybe<Opinions_Bool_Exp>;
};

/** Ordering options when selecting data from "opinions". */
export type Opinions_Order_By = {
  comment?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  patient?: InputMaybe<Patients_Order_By>;
  patient_id?: InputMaybe<Order_By>;
  physiotherapist?: InputMaybe<Physiotherapists_Order_By>;
  physiotherapist_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: opinions */
export type Opinions_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "opinions" */
export enum Opinions_Select_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  PatientId = 'patient_id',
  /** column name */
  PhysiotherapistId = 'physiotherapist_id'
}

/** input type for updating data in table "opinions" */
export type Opinions_Set_Input = {
  comment?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  patient_id?: InputMaybe<Scalars['uuid']>;
  physiotherapist_id?: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "opinions" */
export type Opinions_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Opinions_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Opinions_Stream_Cursor_Value_Input = {
  comment?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  patient_id?: InputMaybe<Scalars['uuid']>;
  physiotherapist_id?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "opinions" */
export enum Opinions_Update_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  PatientId = 'patient_id',
  /** column name */
  PhysiotherapistId = 'physiotherapist_id'
}

export type Opinions_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Opinions_Set_Input>;
  where: Opinions_Bool_Exp;
};

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

/** columns and relationships of "patients" */
export type Patients = {
  __typename?: 'patients';
  id: Scalars['uuid'];
  /** An array relationship */
  messages: Array<Messages>;
  /** An aggregate relationship */
  messages_aggregate: Messages_Aggregate;
  name: Scalars['String'];
  /** An array relationship */
  opinions: Array<Opinions>;
  /** An aggregate relationship */
  opinions_aggregate: Opinions_Aggregate;
  pesel: Scalars['String'];
  phone: Scalars['String'];
  surname: Scalars['String'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['uuid'];
  /** An array relationship */
  visits: Array<Visits>;
  /** An aggregate relationship */
  visits_aggregate: Visits_Aggregate;
};


/** columns and relationships of "patients" */
export type PatientsMessagesArgs = {
  distinct_on?: InputMaybe<Array<Messages_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Messages_Order_By>>;
  where?: InputMaybe<Messages_Bool_Exp>;
};


/** columns and relationships of "patients" */
export type PatientsMessages_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Messages_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Messages_Order_By>>;
  where?: InputMaybe<Messages_Bool_Exp>;
};


/** columns and relationships of "patients" */
export type PatientsOpinionsArgs = {
  distinct_on?: InputMaybe<Array<Opinions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Opinions_Order_By>>;
  where?: InputMaybe<Opinions_Bool_Exp>;
};


/** columns and relationships of "patients" */
export type PatientsOpinions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Opinions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Opinions_Order_By>>;
  where?: InputMaybe<Opinions_Bool_Exp>;
};


/** columns and relationships of "patients" */
export type PatientsVisitsArgs = {
  distinct_on?: InputMaybe<Array<Visits_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Visits_Order_By>>;
  where?: InputMaybe<Visits_Bool_Exp>;
};


/** columns and relationships of "patients" */
export type PatientsVisits_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Visits_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Visits_Order_By>>;
  where?: InputMaybe<Visits_Bool_Exp>;
};

/** aggregated selection of "patients" */
export type Patients_Aggregate = {
  __typename?: 'patients_aggregate';
  aggregate?: Maybe<Patients_Aggregate_Fields>;
  nodes: Array<Patients>;
};

/** aggregate fields of "patients" */
export type Patients_Aggregate_Fields = {
  __typename?: 'patients_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Patients_Max_Fields>;
  min?: Maybe<Patients_Min_Fields>;
};


/** aggregate fields of "patients" */
export type Patients_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Patients_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "patients". All fields are combined with a logical 'AND'. */
export type Patients_Bool_Exp = {
  _and?: InputMaybe<Array<Patients_Bool_Exp>>;
  _not?: InputMaybe<Patients_Bool_Exp>;
  _or?: InputMaybe<Array<Patients_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  messages?: InputMaybe<Messages_Bool_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  opinions?: InputMaybe<Opinions_Bool_Exp>;
  pesel?: InputMaybe<String_Comparison_Exp>;
  phone?: InputMaybe<String_Comparison_Exp>;
  surname?: InputMaybe<String_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
  visits?: InputMaybe<Visits_Bool_Exp>;
};

/** unique or primary key constraints on table "patients" */
export enum Patients_Constraint {
  /** unique or primary key constraint on columns "id" */
  PatientsPkey = 'patients_pkey'
}

/** input type for inserting data into table "patients" */
export type Patients_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  messages?: InputMaybe<Messages_Arr_Rel_Insert_Input>;
  name?: InputMaybe<Scalars['String']>;
  opinions?: InputMaybe<Opinions_Arr_Rel_Insert_Input>;
  pesel?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  surname?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['uuid']>;
  visits?: InputMaybe<Visits_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Patients_Max_Fields = {
  __typename?: 'patients_max_fields';
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  pesel?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  surname?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type Patients_Min_Fields = {
  __typename?: 'patients_min_fields';
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  pesel?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  surname?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "patients" */
export type Patients_Mutation_Response = {
  __typename?: 'patients_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Patients>;
};

/** input type for inserting object relation for remote table "patients" */
export type Patients_Obj_Rel_Insert_Input = {
  data: Patients_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Patients_On_Conflict>;
};

/** on_conflict condition type for table "patients" */
export type Patients_On_Conflict = {
  constraint: Patients_Constraint;
  update_columns?: Array<Patients_Update_Column>;
  where?: InputMaybe<Patients_Bool_Exp>;
};

/** Ordering options when selecting data from "patients". */
export type Patients_Order_By = {
  id?: InputMaybe<Order_By>;
  messages_aggregate?: InputMaybe<Messages_Aggregate_Order_By>;
  name?: InputMaybe<Order_By>;
  opinions_aggregate?: InputMaybe<Opinions_Aggregate_Order_By>;
  pesel?: InputMaybe<Order_By>;
  phone?: InputMaybe<Order_By>;
  surname?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
  visits_aggregate?: InputMaybe<Visits_Aggregate_Order_By>;
};

/** primary key columns input for table: patients */
export type Patients_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "patients" */
export enum Patients_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Pesel = 'pesel',
  /** column name */
  Phone = 'phone',
  /** column name */
  Surname = 'surname',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "patients" */
export type Patients_Set_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  pesel?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  surname?: InputMaybe<Scalars['String']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "patients" */
export type Patients_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Patients_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Patients_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  pesel?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  surname?: InputMaybe<Scalars['String']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "patients" */
export enum Patients_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Pesel = 'pesel',
  /** column name */
  Phone = 'phone',
  /** column name */
  Surname = 'surname',
  /** column name */
  UserId = 'user_id'
}

export type Patients_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Patients_Set_Input>;
  where: Patients_Bool_Exp;
};

/** columns and relationships of "physiotherapists" */
export type Physiotherapists = {
  __typename?: 'physiotherapists';
  aboutMe?: Maybe<Scalars['String']>;
  adress?: Maybe<Scalars['String']>;
  endWork: Scalars['Int'];
  id: Scalars['uuid'];
  /** An object relationship */
  location?: Maybe<Locations>;
  location_id?: Maybe<Scalars['uuid']>;
  /** An array relationship */
  messages: Array<Messages>;
  /** An aggregate relationship */
  messages_aggregate: Messages_Aggregate;
  name: Scalars['String'];
  /** An array relationship */
  opinions: Array<Opinions>;
  /** An aggregate relationship */
  opinions_aggregate: Opinions_Aggregate;
  phone?: Maybe<Scalars['String']>;
  startWork: Scalars['Int'];
  surname: Scalars['String'];
  /** An object relationship */
  user?: Maybe<Users>;
  user_id?: Maybe<Scalars['uuid']>;
  /** An array relationship */
  visit_types: Array<Visit_Types>;
  /** An aggregate relationship */
  visit_types_aggregate: Visit_Types_Aggregate;
  /** An array relationship */
  visits: Array<Visits>;
  /** An aggregate relationship */
  visits_aggregate: Visits_Aggregate;
};


/** columns and relationships of "physiotherapists" */
export type PhysiotherapistsMessagesArgs = {
  distinct_on?: InputMaybe<Array<Messages_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Messages_Order_By>>;
  where?: InputMaybe<Messages_Bool_Exp>;
};


/** columns and relationships of "physiotherapists" */
export type PhysiotherapistsMessages_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Messages_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Messages_Order_By>>;
  where?: InputMaybe<Messages_Bool_Exp>;
};


/** columns and relationships of "physiotherapists" */
export type PhysiotherapistsOpinionsArgs = {
  distinct_on?: InputMaybe<Array<Opinions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Opinions_Order_By>>;
  where?: InputMaybe<Opinions_Bool_Exp>;
};


/** columns and relationships of "physiotherapists" */
export type PhysiotherapistsOpinions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Opinions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Opinions_Order_By>>;
  where?: InputMaybe<Opinions_Bool_Exp>;
};


/** columns and relationships of "physiotherapists" */
export type PhysiotherapistsVisit_TypesArgs = {
  distinct_on?: InputMaybe<Array<Visit_Types_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Visit_Types_Order_By>>;
  where?: InputMaybe<Visit_Types_Bool_Exp>;
};


/** columns and relationships of "physiotherapists" */
export type PhysiotherapistsVisit_Types_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Visit_Types_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Visit_Types_Order_By>>;
  where?: InputMaybe<Visit_Types_Bool_Exp>;
};


/** columns and relationships of "physiotherapists" */
export type PhysiotherapistsVisitsArgs = {
  distinct_on?: InputMaybe<Array<Visits_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Visits_Order_By>>;
  where?: InputMaybe<Visits_Bool_Exp>;
};


/** columns and relationships of "physiotherapists" */
export type PhysiotherapistsVisits_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Visits_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Visits_Order_By>>;
  where?: InputMaybe<Visits_Bool_Exp>;
};

/** aggregated selection of "physiotherapists" */
export type Physiotherapists_Aggregate = {
  __typename?: 'physiotherapists_aggregate';
  aggregate?: Maybe<Physiotherapists_Aggregate_Fields>;
  nodes: Array<Physiotherapists>;
};

/** aggregate fields of "physiotherapists" */
export type Physiotherapists_Aggregate_Fields = {
  __typename?: 'physiotherapists_aggregate_fields';
  avg?: Maybe<Physiotherapists_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Physiotherapists_Max_Fields>;
  min?: Maybe<Physiotherapists_Min_Fields>;
  stddev?: Maybe<Physiotherapists_Stddev_Fields>;
  stddev_pop?: Maybe<Physiotherapists_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Physiotherapists_Stddev_Samp_Fields>;
  sum?: Maybe<Physiotherapists_Sum_Fields>;
  var_pop?: Maybe<Physiotherapists_Var_Pop_Fields>;
  var_samp?: Maybe<Physiotherapists_Var_Samp_Fields>;
  variance?: Maybe<Physiotherapists_Variance_Fields>;
};


/** aggregate fields of "physiotherapists" */
export type Physiotherapists_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Physiotherapists_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "physiotherapists" */
export type Physiotherapists_Aggregate_Order_By = {
  avg?: InputMaybe<Physiotherapists_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Physiotherapists_Max_Order_By>;
  min?: InputMaybe<Physiotherapists_Min_Order_By>;
  stddev?: InputMaybe<Physiotherapists_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Physiotherapists_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Physiotherapists_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Physiotherapists_Sum_Order_By>;
  var_pop?: InputMaybe<Physiotherapists_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Physiotherapists_Var_Samp_Order_By>;
  variance?: InputMaybe<Physiotherapists_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "physiotherapists" */
export type Physiotherapists_Arr_Rel_Insert_Input = {
  data: Array<Physiotherapists_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Physiotherapists_On_Conflict>;
};

/** aggregate avg on columns */
export type Physiotherapists_Avg_Fields = {
  __typename?: 'physiotherapists_avg_fields';
  endWork?: Maybe<Scalars['Float']>;
  startWork?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "physiotherapists" */
export type Physiotherapists_Avg_Order_By = {
  endWork?: InputMaybe<Order_By>;
  startWork?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "physiotherapists". All fields are combined with a logical 'AND'. */
export type Physiotherapists_Bool_Exp = {
  _and?: InputMaybe<Array<Physiotherapists_Bool_Exp>>;
  _not?: InputMaybe<Physiotherapists_Bool_Exp>;
  _or?: InputMaybe<Array<Physiotherapists_Bool_Exp>>;
  aboutMe?: InputMaybe<String_Comparison_Exp>;
  adress?: InputMaybe<String_Comparison_Exp>;
  endWork?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  location?: InputMaybe<Locations_Bool_Exp>;
  location_id?: InputMaybe<Uuid_Comparison_Exp>;
  messages?: InputMaybe<Messages_Bool_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  opinions?: InputMaybe<Opinions_Bool_Exp>;
  phone?: InputMaybe<String_Comparison_Exp>;
  startWork?: InputMaybe<Int_Comparison_Exp>;
  surname?: InputMaybe<String_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
  visit_types?: InputMaybe<Visit_Types_Bool_Exp>;
  visits?: InputMaybe<Visits_Bool_Exp>;
};

/** unique or primary key constraints on table "physiotherapists" */
export enum Physiotherapists_Constraint {
  /** unique or primary key constraint on columns "id" */
  PhysiotherapistsPkey = 'physiotherapists_pkey'
}

/** input type for incrementing numeric columns in table "physiotherapists" */
export type Physiotherapists_Inc_Input = {
  endWork?: InputMaybe<Scalars['Int']>;
  startWork?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "physiotherapists" */
export type Physiotherapists_Insert_Input = {
  aboutMe?: InputMaybe<Scalars['String']>;
  adress?: InputMaybe<Scalars['String']>;
  endWork?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['uuid']>;
  location?: InputMaybe<Locations_Obj_Rel_Insert_Input>;
  location_id?: InputMaybe<Scalars['uuid']>;
  messages?: InputMaybe<Messages_Arr_Rel_Insert_Input>;
  name?: InputMaybe<Scalars['String']>;
  opinions?: InputMaybe<Opinions_Arr_Rel_Insert_Input>;
  phone?: InputMaybe<Scalars['String']>;
  startWork?: InputMaybe<Scalars['Int']>;
  surname?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['uuid']>;
  visit_types?: InputMaybe<Visit_Types_Arr_Rel_Insert_Input>;
  visits?: InputMaybe<Visits_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Physiotherapists_Max_Fields = {
  __typename?: 'physiotherapists_max_fields';
  aboutMe?: Maybe<Scalars['String']>;
  adress?: Maybe<Scalars['String']>;
  endWork?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  location_id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  startWork?: Maybe<Scalars['Int']>;
  surname?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "physiotherapists" */
export type Physiotherapists_Max_Order_By = {
  aboutMe?: InputMaybe<Order_By>;
  adress?: InputMaybe<Order_By>;
  endWork?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  location_id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  phone?: InputMaybe<Order_By>;
  startWork?: InputMaybe<Order_By>;
  surname?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Physiotherapists_Min_Fields = {
  __typename?: 'physiotherapists_min_fields';
  aboutMe?: Maybe<Scalars['String']>;
  adress?: Maybe<Scalars['String']>;
  endWork?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  location_id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  startWork?: Maybe<Scalars['Int']>;
  surname?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "physiotherapists" */
export type Physiotherapists_Min_Order_By = {
  aboutMe?: InputMaybe<Order_By>;
  adress?: InputMaybe<Order_By>;
  endWork?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  location_id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  phone?: InputMaybe<Order_By>;
  startWork?: InputMaybe<Order_By>;
  surname?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "physiotherapists" */
export type Physiotherapists_Mutation_Response = {
  __typename?: 'physiotherapists_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Physiotherapists>;
};

/** input type for inserting object relation for remote table "physiotherapists" */
export type Physiotherapists_Obj_Rel_Insert_Input = {
  data: Physiotherapists_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Physiotherapists_On_Conflict>;
};

/** on_conflict condition type for table "physiotherapists" */
export type Physiotherapists_On_Conflict = {
  constraint: Physiotherapists_Constraint;
  update_columns?: Array<Physiotherapists_Update_Column>;
  where?: InputMaybe<Physiotherapists_Bool_Exp>;
};

/** Ordering options when selecting data from "physiotherapists". */
export type Physiotherapists_Order_By = {
  aboutMe?: InputMaybe<Order_By>;
  adress?: InputMaybe<Order_By>;
  endWork?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  location?: InputMaybe<Locations_Order_By>;
  location_id?: InputMaybe<Order_By>;
  messages_aggregate?: InputMaybe<Messages_Aggregate_Order_By>;
  name?: InputMaybe<Order_By>;
  opinions_aggregate?: InputMaybe<Opinions_Aggregate_Order_By>;
  phone?: InputMaybe<Order_By>;
  startWork?: InputMaybe<Order_By>;
  surname?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
  visit_types_aggregate?: InputMaybe<Visit_Types_Aggregate_Order_By>;
  visits_aggregate?: InputMaybe<Visits_Aggregate_Order_By>;
};

/** primary key columns input for table: physiotherapists */
export type Physiotherapists_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "physiotherapists" */
export enum Physiotherapists_Select_Column {
  /** column name */
  AboutMe = 'aboutMe',
  /** column name */
  Adress = 'adress',
  /** column name */
  EndWork = 'endWork',
  /** column name */
  Id = 'id',
  /** column name */
  LocationId = 'location_id',
  /** column name */
  Name = 'name',
  /** column name */
  Phone = 'phone',
  /** column name */
  StartWork = 'startWork',
  /** column name */
  Surname = 'surname',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "physiotherapists" */
export type Physiotherapists_Set_Input = {
  aboutMe?: InputMaybe<Scalars['String']>;
  adress?: InputMaybe<Scalars['String']>;
  endWork?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['uuid']>;
  location_id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  startWork?: InputMaybe<Scalars['Int']>;
  surname?: InputMaybe<Scalars['String']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type Physiotherapists_Stddev_Fields = {
  __typename?: 'physiotherapists_stddev_fields';
  endWork?: Maybe<Scalars['Float']>;
  startWork?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "physiotherapists" */
export type Physiotherapists_Stddev_Order_By = {
  endWork?: InputMaybe<Order_By>;
  startWork?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Physiotherapists_Stddev_Pop_Fields = {
  __typename?: 'physiotherapists_stddev_pop_fields';
  endWork?: Maybe<Scalars['Float']>;
  startWork?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "physiotherapists" */
export type Physiotherapists_Stddev_Pop_Order_By = {
  endWork?: InputMaybe<Order_By>;
  startWork?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Physiotherapists_Stddev_Samp_Fields = {
  __typename?: 'physiotherapists_stddev_samp_fields';
  endWork?: Maybe<Scalars['Float']>;
  startWork?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "physiotherapists" */
export type Physiotherapists_Stddev_Samp_Order_By = {
  endWork?: InputMaybe<Order_By>;
  startWork?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "physiotherapists" */
export type Physiotherapists_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Physiotherapists_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Physiotherapists_Stream_Cursor_Value_Input = {
  aboutMe?: InputMaybe<Scalars['String']>;
  adress?: InputMaybe<Scalars['String']>;
  endWork?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['uuid']>;
  location_id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  startWork?: InputMaybe<Scalars['Int']>;
  surname?: InputMaybe<Scalars['String']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate sum on columns */
export type Physiotherapists_Sum_Fields = {
  __typename?: 'physiotherapists_sum_fields';
  endWork?: Maybe<Scalars['Int']>;
  startWork?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "physiotherapists" */
export type Physiotherapists_Sum_Order_By = {
  endWork?: InputMaybe<Order_By>;
  startWork?: InputMaybe<Order_By>;
};

/** update columns of table "physiotherapists" */
export enum Physiotherapists_Update_Column {
  /** column name */
  AboutMe = 'aboutMe',
  /** column name */
  Adress = 'adress',
  /** column name */
  EndWork = 'endWork',
  /** column name */
  Id = 'id',
  /** column name */
  LocationId = 'location_id',
  /** column name */
  Name = 'name',
  /** column name */
  Phone = 'phone',
  /** column name */
  StartWork = 'startWork',
  /** column name */
  Surname = 'surname',
  /** column name */
  UserId = 'user_id'
}

export type Physiotherapists_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Physiotherapists_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Physiotherapists_Set_Input>;
  where: Physiotherapists_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Physiotherapists_Var_Pop_Fields = {
  __typename?: 'physiotherapists_var_pop_fields';
  endWork?: Maybe<Scalars['Float']>;
  startWork?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "physiotherapists" */
export type Physiotherapists_Var_Pop_Order_By = {
  endWork?: InputMaybe<Order_By>;
  startWork?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Physiotherapists_Var_Samp_Fields = {
  __typename?: 'physiotherapists_var_samp_fields';
  endWork?: Maybe<Scalars['Float']>;
  startWork?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "physiotherapists" */
export type Physiotherapists_Var_Samp_Order_By = {
  endWork?: InputMaybe<Order_By>;
  startWork?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Physiotherapists_Variance_Fields = {
  __typename?: 'physiotherapists_variance_fields';
  endWork?: Maybe<Scalars['Float']>;
  startWork?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "physiotherapists" */
export type Physiotherapists_Variance_Order_By = {
  endWork?: InputMaybe<Order_By>;
  startWork?: InputMaybe<Order_By>;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "auth.providers" using primary key columns */
  authProvider?: Maybe<AuthProviders>;
  /** fetch data from the table: "auth.provider_requests" using primary key columns */
  authProviderRequest?: Maybe<AuthProviderRequests>;
  /** fetch data from the table: "auth.provider_requests" */
  authProviderRequests: Array<AuthProviderRequests>;
  /** fetch aggregated fields from the table: "auth.provider_requests" */
  authProviderRequestsAggregate: AuthProviderRequests_Aggregate;
  /** fetch data from the table: "auth.providers" */
  authProviders: Array<AuthProviders>;
  /** fetch aggregated fields from the table: "auth.providers" */
  authProvidersAggregate: AuthProviders_Aggregate;
  /** fetch data from the table: "auth.refresh_tokens" using primary key columns */
  authRefreshToken?: Maybe<AuthRefreshTokens>;
  /** fetch data from the table: "auth.refresh_tokens" */
  authRefreshTokens: Array<AuthRefreshTokens>;
  /** fetch aggregated fields from the table: "auth.refresh_tokens" */
  authRefreshTokensAggregate: AuthRefreshTokens_Aggregate;
  /** fetch data from the table: "auth.roles" using primary key columns */
  authRole?: Maybe<AuthRoles>;
  /** fetch data from the table: "auth.roles" */
  authRoles: Array<AuthRoles>;
  /** fetch aggregated fields from the table: "auth.roles" */
  authRolesAggregate: AuthRoles_Aggregate;
  /** fetch data from the table: "auth.user_providers" using primary key columns */
  authUserProvider?: Maybe<AuthUserProviders>;
  /** fetch data from the table: "auth.user_providers" */
  authUserProviders: Array<AuthUserProviders>;
  /** fetch aggregated fields from the table: "auth.user_providers" */
  authUserProvidersAggregate: AuthUserProviders_Aggregate;
  /** fetch data from the table: "auth.user_roles" using primary key columns */
  authUserRole?: Maybe<AuthUserRoles>;
  /** fetch data from the table: "auth.user_roles" */
  authUserRoles: Array<AuthUserRoles>;
  /** fetch aggregated fields from the table: "auth.user_roles" */
  authUserRolesAggregate: AuthUserRoles_Aggregate;
  /** fetch data from the table: "auth.user_security_keys" using primary key columns */
  authUserSecurityKey?: Maybe<AuthUserSecurityKeys>;
  /** fetch data from the table: "auth.user_security_keys" */
  authUserSecurityKeys: Array<AuthUserSecurityKeys>;
  /** fetch aggregated fields from the table: "auth.user_security_keys" */
  authUserSecurityKeysAggregate: AuthUserSecurityKeys_Aggregate;
  /** fetch data from the table: "storage.buckets" using primary key columns */
  bucket?: Maybe<Buckets>;
  /** fetch data from the table: "storage.buckets" */
  buckets: Array<Buckets>;
  /** fetch aggregated fields from the table: "storage.buckets" */
  bucketsAggregate: Buckets_Aggregate;
  /** fetch data from the table: "storage.files" using primary key columns */
  file?: Maybe<Files>;
  /** An array relationship */
  files: Array<Files>;
  /** fetch aggregated fields from the table: "storage.files" */
  filesAggregate: Files_Aggregate;
  /** fetch data from the table: "locations" */
  locations: Array<Locations>;
  /** fetch aggregated fields from the table: "locations" */
  locations_aggregate: Locations_Aggregate;
  /** fetch data from the table: "locations" using primary key columns */
  locations_by_pk?: Maybe<Locations>;
  /** An array relationship */
  messages: Array<Messages>;
  /** An aggregate relationship */
  messages_aggregate: Messages_Aggregate;
  /** fetch data from the table: "messages" using primary key columns */
  messages_by_pk?: Maybe<Messages>;
  /** An array relationship */
  opinions: Array<Opinions>;
  /** An aggregate relationship */
  opinions_aggregate: Opinions_Aggregate;
  /** fetch data from the table: "opinions" using primary key columns */
  opinions_by_pk?: Maybe<Opinions>;
  /** fetch data from the table: "patients" */
  patients: Array<Patients>;
  /** fetch aggregated fields from the table: "patients" */
  patients_aggregate: Patients_Aggregate;
  /** fetch data from the table: "patients" using primary key columns */
  patients_by_pk?: Maybe<Patients>;
  /** An array relationship */
  physiotherapists: Array<Physiotherapists>;
  /** An aggregate relationship */
  physiotherapists_aggregate: Physiotherapists_Aggregate;
  /** fetch data from the table: "physiotherapists" using primary key columns */
  physiotherapists_by_pk?: Maybe<Physiotherapists>;
  /** fetch data from the table: "auth.users" using primary key columns */
  user?: Maybe<Users>;
  /** fetch data from the table: "auth.users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "auth.users" */
  usersAggregate: Users_Aggregate;
  /** An array relationship */
  visit_types: Array<Visit_Types>;
  /** An aggregate relationship */
  visit_types_aggregate: Visit_Types_Aggregate;
  /** fetch data from the table: "visit_types" using primary key columns */
  visit_types_by_pk?: Maybe<Visit_Types>;
  /** An array relationship */
  visits: Array<Visits>;
  /** An aggregate relationship */
  visits_aggregate: Visits_Aggregate;
  /** fetch data from the table: "visits" using primary key columns */
  visits_by_pk?: Maybe<Visits>;
};


export type Query_RootAuthProviderArgs = {
  id: Scalars['String'];
};


export type Query_RootAuthProviderRequestArgs = {
  id: Scalars['uuid'];
};


export type Query_RootAuthProviderRequestsArgs = {
  distinct_on?: InputMaybe<Array<AuthProviderRequests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthProviderRequests_Order_By>>;
  where?: InputMaybe<AuthProviderRequests_Bool_Exp>;
};


export type Query_RootAuthProviderRequestsAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthProviderRequests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthProviderRequests_Order_By>>;
  where?: InputMaybe<AuthProviderRequests_Bool_Exp>;
};


export type Query_RootAuthProvidersArgs = {
  distinct_on?: InputMaybe<Array<AuthProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthProviders_Order_By>>;
  where?: InputMaybe<AuthProviders_Bool_Exp>;
};


export type Query_RootAuthProvidersAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthProviders_Order_By>>;
  where?: InputMaybe<AuthProviders_Bool_Exp>;
};


export type Query_RootAuthRefreshTokenArgs = {
  refreshToken: Scalars['uuid'];
};


export type Query_RootAuthRefreshTokensArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthRefreshTokens_Order_By>>;
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};


export type Query_RootAuthRefreshTokensAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthRefreshTokens_Order_By>>;
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};


export type Query_RootAuthRoleArgs = {
  role: Scalars['String'];
};


export type Query_RootAuthRolesArgs = {
  distinct_on?: InputMaybe<Array<AuthRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthRoles_Order_By>>;
  where?: InputMaybe<AuthRoles_Bool_Exp>;
};


export type Query_RootAuthRolesAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthRoles_Order_By>>;
  where?: InputMaybe<AuthRoles_Bool_Exp>;
};


export type Query_RootAuthUserProviderArgs = {
  id: Scalars['uuid'];
};


export type Query_RootAuthUserProvidersArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserProviders_Order_By>>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};


export type Query_RootAuthUserProvidersAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserProviders_Order_By>>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};


export type Query_RootAuthUserRoleArgs = {
  id: Scalars['uuid'];
};


export type Query_RootAuthUserRolesArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserRoles_Order_By>>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};


export type Query_RootAuthUserRolesAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserRoles_Order_By>>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};


export type Query_RootAuthUserSecurityKeyArgs = {
  id: Scalars['uuid'];
};


export type Query_RootAuthUserSecurityKeysArgs = {
  distinct_on?: InputMaybe<Array<AuthUserSecurityKeys_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserSecurityKeys_Order_By>>;
  where?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>;
};


export type Query_RootAuthUserSecurityKeysAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserSecurityKeys_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserSecurityKeys_Order_By>>;
  where?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>;
};


export type Query_RootBucketArgs = {
  id: Scalars['String'];
};


export type Query_RootBucketsArgs = {
  distinct_on?: InputMaybe<Array<Buckets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Buckets_Order_By>>;
  where?: InputMaybe<Buckets_Bool_Exp>;
};


export type Query_RootBucketsAggregateArgs = {
  distinct_on?: InputMaybe<Array<Buckets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Buckets_Order_By>>;
  where?: InputMaybe<Buckets_Bool_Exp>;
};


export type Query_RootFileArgs = {
  id: Scalars['uuid'];
};


export type Query_RootFilesArgs = {
  distinct_on?: InputMaybe<Array<Files_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Files_Order_By>>;
  where?: InputMaybe<Files_Bool_Exp>;
};


export type Query_RootFilesAggregateArgs = {
  distinct_on?: InputMaybe<Array<Files_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Files_Order_By>>;
  where?: InputMaybe<Files_Bool_Exp>;
};


export type Query_RootLocationsArgs = {
  distinct_on?: InputMaybe<Array<Locations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Locations_Order_By>>;
  where?: InputMaybe<Locations_Bool_Exp>;
};


export type Query_RootLocations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Locations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Locations_Order_By>>;
  where?: InputMaybe<Locations_Bool_Exp>;
};


export type Query_RootLocations_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootMessagesArgs = {
  distinct_on?: InputMaybe<Array<Messages_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Messages_Order_By>>;
  where?: InputMaybe<Messages_Bool_Exp>;
};


export type Query_RootMessages_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Messages_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Messages_Order_By>>;
  where?: InputMaybe<Messages_Bool_Exp>;
};


export type Query_RootMessages_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootOpinionsArgs = {
  distinct_on?: InputMaybe<Array<Opinions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Opinions_Order_By>>;
  where?: InputMaybe<Opinions_Bool_Exp>;
};


export type Query_RootOpinions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Opinions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Opinions_Order_By>>;
  where?: InputMaybe<Opinions_Bool_Exp>;
};


export type Query_RootOpinions_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootPatientsArgs = {
  distinct_on?: InputMaybe<Array<Patients_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Patients_Order_By>>;
  where?: InputMaybe<Patients_Bool_Exp>;
};


export type Query_RootPatients_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Patients_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Patients_Order_By>>;
  where?: InputMaybe<Patients_Bool_Exp>;
};


export type Query_RootPatients_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootPhysiotherapistsArgs = {
  distinct_on?: InputMaybe<Array<Physiotherapists_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Physiotherapists_Order_By>>;
  where?: InputMaybe<Physiotherapists_Bool_Exp>;
};


export type Query_RootPhysiotherapists_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Physiotherapists_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Physiotherapists_Order_By>>;
  where?: InputMaybe<Physiotherapists_Bool_Exp>;
};


export type Query_RootPhysiotherapists_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootUserArgs = {
  id: Scalars['uuid'];
};


export type Query_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsersAggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootVisit_TypesArgs = {
  distinct_on?: InputMaybe<Array<Visit_Types_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Visit_Types_Order_By>>;
  where?: InputMaybe<Visit_Types_Bool_Exp>;
};


export type Query_RootVisit_Types_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Visit_Types_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Visit_Types_Order_By>>;
  where?: InputMaybe<Visit_Types_Bool_Exp>;
};


export type Query_RootVisit_Types_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootVisitsArgs = {
  distinct_on?: InputMaybe<Array<Visits_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Visits_Order_By>>;
  where?: InputMaybe<Visits_Bool_Exp>;
};


export type Query_RootVisits_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Visits_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Visits_Order_By>>;
  where?: InputMaybe<Visits_Bool_Exp>;
};


export type Query_RootVisits_By_PkArgs = {
  id: Scalars['uuid'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "auth.providers" using primary key columns */
  authProvider?: Maybe<AuthProviders>;
  /** fetch data from the table: "auth.provider_requests" using primary key columns */
  authProviderRequest?: Maybe<AuthProviderRequests>;
  /** fetch data from the table: "auth.provider_requests" */
  authProviderRequests: Array<AuthProviderRequests>;
  /** fetch aggregated fields from the table: "auth.provider_requests" */
  authProviderRequestsAggregate: AuthProviderRequests_Aggregate;
  /** fetch data from the table in a streaming manner : "auth.provider_requests" */
  authProviderRequests_stream: Array<AuthProviderRequests>;
  /** fetch data from the table: "auth.providers" */
  authProviders: Array<AuthProviders>;
  /** fetch aggregated fields from the table: "auth.providers" */
  authProvidersAggregate: AuthProviders_Aggregate;
  /** fetch data from the table in a streaming manner : "auth.providers" */
  authProviders_stream: Array<AuthProviders>;
  /** fetch data from the table: "auth.refresh_tokens" using primary key columns */
  authRefreshToken?: Maybe<AuthRefreshTokens>;
  /** fetch data from the table: "auth.refresh_tokens" */
  authRefreshTokens: Array<AuthRefreshTokens>;
  /** fetch aggregated fields from the table: "auth.refresh_tokens" */
  authRefreshTokensAggregate: AuthRefreshTokens_Aggregate;
  /** fetch data from the table in a streaming manner : "auth.refresh_tokens" */
  authRefreshTokens_stream: Array<AuthRefreshTokens>;
  /** fetch data from the table: "auth.roles" using primary key columns */
  authRole?: Maybe<AuthRoles>;
  /** fetch data from the table: "auth.roles" */
  authRoles: Array<AuthRoles>;
  /** fetch aggregated fields from the table: "auth.roles" */
  authRolesAggregate: AuthRoles_Aggregate;
  /** fetch data from the table in a streaming manner : "auth.roles" */
  authRoles_stream: Array<AuthRoles>;
  /** fetch data from the table: "auth.user_providers" using primary key columns */
  authUserProvider?: Maybe<AuthUserProviders>;
  /** fetch data from the table: "auth.user_providers" */
  authUserProviders: Array<AuthUserProviders>;
  /** fetch aggregated fields from the table: "auth.user_providers" */
  authUserProvidersAggregate: AuthUserProviders_Aggregate;
  /** fetch data from the table in a streaming manner : "auth.user_providers" */
  authUserProviders_stream: Array<AuthUserProviders>;
  /** fetch data from the table: "auth.user_roles" using primary key columns */
  authUserRole?: Maybe<AuthUserRoles>;
  /** fetch data from the table: "auth.user_roles" */
  authUserRoles: Array<AuthUserRoles>;
  /** fetch aggregated fields from the table: "auth.user_roles" */
  authUserRolesAggregate: AuthUserRoles_Aggregate;
  /** fetch data from the table in a streaming manner : "auth.user_roles" */
  authUserRoles_stream: Array<AuthUserRoles>;
  /** fetch data from the table: "auth.user_security_keys" using primary key columns */
  authUserSecurityKey?: Maybe<AuthUserSecurityKeys>;
  /** fetch data from the table: "auth.user_security_keys" */
  authUserSecurityKeys: Array<AuthUserSecurityKeys>;
  /** fetch aggregated fields from the table: "auth.user_security_keys" */
  authUserSecurityKeysAggregate: AuthUserSecurityKeys_Aggregate;
  /** fetch data from the table in a streaming manner : "auth.user_security_keys" */
  authUserSecurityKeys_stream: Array<AuthUserSecurityKeys>;
  /** fetch data from the table: "storage.buckets" using primary key columns */
  bucket?: Maybe<Buckets>;
  /** fetch data from the table: "storage.buckets" */
  buckets: Array<Buckets>;
  /** fetch aggregated fields from the table: "storage.buckets" */
  bucketsAggregate: Buckets_Aggregate;
  /** fetch data from the table in a streaming manner : "storage.buckets" */
  buckets_stream: Array<Buckets>;
  /** fetch data from the table: "storage.files" using primary key columns */
  file?: Maybe<Files>;
  /** An array relationship */
  files: Array<Files>;
  /** fetch aggregated fields from the table: "storage.files" */
  filesAggregate: Files_Aggregate;
  /** fetch data from the table in a streaming manner : "storage.files" */
  files_stream: Array<Files>;
  /** fetch data from the table: "locations" */
  locations: Array<Locations>;
  /** fetch aggregated fields from the table: "locations" */
  locations_aggregate: Locations_Aggregate;
  /** fetch data from the table: "locations" using primary key columns */
  locations_by_pk?: Maybe<Locations>;
  /** fetch data from the table in a streaming manner : "locations" */
  locations_stream: Array<Locations>;
  /** An array relationship */
  messages: Array<Messages>;
  /** An aggregate relationship */
  messages_aggregate: Messages_Aggregate;
  /** fetch data from the table: "messages" using primary key columns */
  messages_by_pk?: Maybe<Messages>;
  /** fetch data from the table in a streaming manner : "messages" */
  messages_stream: Array<Messages>;
  /** An array relationship */
  opinions: Array<Opinions>;
  /** An aggregate relationship */
  opinions_aggregate: Opinions_Aggregate;
  /** fetch data from the table: "opinions" using primary key columns */
  opinions_by_pk?: Maybe<Opinions>;
  /** fetch data from the table in a streaming manner : "opinions" */
  opinions_stream: Array<Opinions>;
  /** fetch data from the table: "patients" */
  patients: Array<Patients>;
  /** fetch aggregated fields from the table: "patients" */
  patients_aggregate: Patients_Aggregate;
  /** fetch data from the table: "patients" using primary key columns */
  patients_by_pk?: Maybe<Patients>;
  /** fetch data from the table in a streaming manner : "patients" */
  patients_stream: Array<Patients>;
  /** An array relationship */
  physiotherapists: Array<Physiotherapists>;
  /** An aggregate relationship */
  physiotherapists_aggregate: Physiotherapists_Aggregate;
  /** fetch data from the table: "physiotherapists" using primary key columns */
  physiotherapists_by_pk?: Maybe<Physiotherapists>;
  /** fetch data from the table in a streaming manner : "physiotherapists" */
  physiotherapists_stream: Array<Physiotherapists>;
  /** fetch data from the table: "auth.users" using primary key columns */
  user?: Maybe<Users>;
  /** fetch data from the table: "auth.users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "auth.users" */
  usersAggregate: Users_Aggregate;
  /** fetch data from the table in a streaming manner : "auth.users" */
  users_stream: Array<Users>;
  /** An array relationship */
  visit_types: Array<Visit_Types>;
  /** An aggregate relationship */
  visit_types_aggregate: Visit_Types_Aggregate;
  /** fetch data from the table: "visit_types" using primary key columns */
  visit_types_by_pk?: Maybe<Visit_Types>;
  /** fetch data from the table in a streaming manner : "visit_types" */
  visit_types_stream: Array<Visit_Types>;
  /** An array relationship */
  visits: Array<Visits>;
  /** An aggregate relationship */
  visits_aggregate: Visits_Aggregate;
  /** fetch data from the table: "visits" using primary key columns */
  visits_by_pk?: Maybe<Visits>;
  /** fetch data from the table in a streaming manner : "visits" */
  visits_stream: Array<Visits>;
};


export type Subscription_RootAuthProviderArgs = {
  id: Scalars['String'];
};


export type Subscription_RootAuthProviderRequestArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootAuthProviderRequestsArgs = {
  distinct_on?: InputMaybe<Array<AuthProviderRequests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthProviderRequests_Order_By>>;
  where?: InputMaybe<AuthProviderRequests_Bool_Exp>;
};


export type Subscription_RootAuthProviderRequestsAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthProviderRequests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthProviderRequests_Order_By>>;
  where?: InputMaybe<AuthProviderRequests_Bool_Exp>;
};


export type Subscription_RootAuthProviderRequests_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<AuthProviderRequests_Stream_Cursor_Input>>;
  where?: InputMaybe<AuthProviderRequests_Bool_Exp>;
};


export type Subscription_RootAuthProvidersArgs = {
  distinct_on?: InputMaybe<Array<AuthProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthProviders_Order_By>>;
  where?: InputMaybe<AuthProviders_Bool_Exp>;
};


export type Subscription_RootAuthProvidersAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthProviders_Order_By>>;
  where?: InputMaybe<AuthProviders_Bool_Exp>;
};


export type Subscription_RootAuthProviders_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<AuthProviders_Stream_Cursor_Input>>;
  where?: InputMaybe<AuthProviders_Bool_Exp>;
};


export type Subscription_RootAuthRefreshTokenArgs = {
  refreshToken: Scalars['uuid'];
};


export type Subscription_RootAuthRefreshTokensArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthRefreshTokens_Order_By>>;
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};


export type Subscription_RootAuthRefreshTokensAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthRefreshTokens_Order_By>>;
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};


export type Subscription_RootAuthRefreshTokens_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<AuthRefreshTokens_Stream_Cursor_Input>>;
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};


export type Subscription_RootAuthRoleArgs = {
  role: Scalars['String'];
};


export type Subscription_RootAuthRolesArgs = {
  distinct_on?: InputMaybe<Array<AuthRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthRoles_Order_By>>;
  where?: InputMaybe<AuthRoles_Bool_Exp>;
};


export type Subscription_RootAuthRolesAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthRoles_Order_By>>;
  where?: InputMaybe<AuthRoles_Bool_Exp>;
};


export type Subscription_RootAuthRoles_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<AuthRoles_Stream_Cursor_Input>>;
  where?: InputMaybe<AuthRoles_Bool_Exp>;
};


export type Subscription_RootAuthUserProviderArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootAuthUserProvidersArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserProviders_Order_By>>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};


export type Subscription_RootAuthUserProvidersAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserProviders_Order_By>>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};


export type Subscription_RootAuthUserProviders_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<AuthUserProviders_Stream_Cursor_Input>>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};


export type Subscription_RootAuthUserRoleArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootAuthUserRolesArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserRoles_Order_By>>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};


export type Subscription_RootAuthUserRolesAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserRoles_Order_By>>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};


export type Subscription_RootAuthUserRoles_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<AuthUserRoles_Stream_Cursor_Input>>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};


export type Subscription_RootAuthUserSecurityKeyArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootAuthUserSecurityKeysArgs = {
  distinct_on?: InputMaybe<Array<AuthUserSecurityKeys_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserSecurityKeys_Order_By>>;
  where?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>;
};


export type Subscription_RootAuthUserSecurityKeysAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserSecurityKeys_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserSecurityKeys_Order_By>>;
  where?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>;
};


export type Subscription_RootAuthUserSecurityKeys_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<AuthUserSecurityKeys_Stream_Cursor_Input>>;
  where?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>;
};


export type Subscription_RootBucketArgs = {
  id: Scalars['String'];
};


export type Subscription_RootBucketsArgs = {
  distinct_on?: InputMaybe<Array<Buckets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Buckets_Order_By>>;
  where?: InputMaybe<Buckets_Bool_Exp>;
};


export type Subscription_RootBucketsAggregateArgs = {
  distinct_on?: InputMaybe<Array<Buckets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Buckets_Order_By>>;
  where?: InputMaybe<Buckets_Bool_Exp>;
};


export type Subscription_RootBuckets_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Buckets_Stream_Cursor_Input>>;
  where?: InputMaybe<Buckets_Bool_Exp>;
};


export type Subscription_RootFileArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootFilesArgs = {
  distinct_on?: InputMaybe<Array<Files_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Files_Order_By>>;
  where?: InputMaybe<Files_Bool_Exp>;
};


export type Subscription_RootFilesAggregateArgs = {
  distinct_on?: InputMaybe<Array<Files_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Files_Order_By>>;
  where?: InputMaybe<Files_Bool_Exp>;
};


export type Subscription_RootFiles_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Files_Stream_Cursor_Input>>;
  where?: InputMaybe<Files_Bool_Exp>;
};


export type Subscription_RootLocationsArgs = {
  distinct_on?: InputMaybe<Array<Locations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Locations_Order_By>>;
  where?: InputMaybe<Locations_Bool_Exp>;
};


export type Subscription_RootLocations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Locations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Locations_Order_By>>;
  where?: InputMaybe<Locations_Bool_Exp>;
};


export type Subscription_RootLocations_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootLocations_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Locations_Stream_Cursor_Input>>;
  where?: InputMaybe<Locations_Bool_Exp>;
};


export type Subscription_RootMessagesArgs = {
  distinct_on?: InputMaybe<Array<Messages_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Messages_Order_By>>;
  where?: InputMaybe<Messages_Bool_Exp>;
};


export type Subscription_RootMessages_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Messages_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Messages_Order_By>>;
  where?: InputMaybe<Messages_Bool_Exp>;
};


export type Subscription_RootMessages_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootMessages_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Messages_Stream_Cursor_Input>>;
  where?: InputMaybe<Messages_Bool_Exp>;
};


export type Subscription_RootOpinionsArgs = {
  distinct_on?: InputMaybe<Array<Opinions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Opinions_Order_By>>;
  where?: InputMaybe<Opinions_Bool_Exp>;
};


export type Subscription_RootOpinions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Opinions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Opinions_Order_By>>;
  where?: InputMaybe<Opinions_Bool_Exp>;
};


export type Subscription_RootOpinions_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootOpinions_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Opinions_Stream_Cursor_Input>>;
  where?: InputMaybe<Opinions_Bool_Exp>;
};


export type Subscription_RootPatientsArgs = {
  distinct_on?: InputMaybe<Array<Patients_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Patients_Order_By>>;
  where?: InputMaybe<Patients_Bool_Exp>;
};


export type Subscription_RootPatients_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Patients_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Patients_Order_By>>;
  where?: InputMaybe<Patients_Bool_Exp>;
};


export type Subscription_RootPatients_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootPatients_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Patients_Stream_Cursor_Input>>;
  where?: InputMaybe<Patients_Bool_Exp>;
};


export type Subscription_RootPhysiotherapistsArgs = {
  distinct_on?: InputMaybe<Array<Physiotherapists_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Physiotherapists_Order_By>>;
  where?: InputMaybe<Physiotherapists_Bool_Exp>;
};


export type Subscription_RootPhysiotherapists_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Physiotherapists_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Physiotherapists_Order_By>>;
  where?: InputMaybe<Physiotherapists_Bool_Exp>;
};


export type Subscription_RootPhysiotherapists_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootPhysiotherapists_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Physiotherapists_Stream_Cursor_Input>>;
  where?: InputMaybe<Physiotherapists_Bool_Exp>;
};


export type Subscription_RootUserArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsersAggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Users_Stream_Cursor_Input>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootVisit_TypesArgs = {
  distinct_on?: InputMaybe<Array<Visit_Types_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Visit_Types_Order_By>>;
  where?: InputMaybe<Visit_Types_Bool_Exp>;
};


export type Subscription_RootVisit_Types_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Visit_Types_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Visit_Types_Order_By>>;
  where?: InputMaybe<Visit_Types_Bool_Exp>;
};


export type Subscription_RootVisit_Types_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootVisit_Types_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Visit_Types_Stream_Cursor_Input>>;
  where?: InputMaybe<Visit_Types_Bool_Exp>;
};


export type Subscription_RootVisitsArgs = {
  distinct_on?: InputMaybe<Array<Visits_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Visits_Order_By>>;
  where?: InputMaybe<Visits_Bool_Exp>;
};


export type Subscription_RootVisits_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Visits_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Visits_Order_By>>;
  where?: InputMaybe<Visits_Bool_Exp>;
};


export type Subscription_RootVisits_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootVisits_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Visits_Stream_Cursor_Input>>;
  where?: InputMaybe<Visits_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
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

/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type Users = {
  __typename?: 'users';
  activeMfaType?: Maybe<Scalars['String']>;
  avatarUrl: Scalars['String'];
  createdAt: Scalars['timestamptz'];
  currentChallenge?: Maybe<Scalars['String']>;
  defaultRole: Scalars['String'];
  /** An object relationship */
  defaultRoleByRole: AuthRoles;
  disabled: Scalars['Boolean'];
  displayName: Scalars['String'];
  email?: Maybe<Scalars['citext']>;
  emailVerified: Scalars['Boolean'];
  id: Scalars['uuid'];
  isAnonymous: Scalars['Boolean'];
  lastSeen?: Maybe<Scalars['timestamptz']>;
  locale: Scalars['String'];
  metadata?: Maybe<Scalars['jsonb']>;
  newEmail?: Maybe<Scalars['citext']>;
  otpHash?: Maybe<Scalars['String']>;
  otpHashExpiresAt: Scalars['timestamptz'];
  otpMethodLastUsed?: Maybe<Scalars['String']>;
  passwordHash?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  phoneNumberVerified: Scalars['Boolean'];
  /** An array relationship */
  physiotherapists: Array<Physiotherapists>;
  /** An aggregate relationship */
  physiotherapists_aggregate: Physiotherapists_Aggregate;
  /** An array relationship */
  refreshTokens: Array<AuthRefreshTokens>;
  /** An aggregate relationship */
  refreshTokens_aggregate: AuthRefreshTokens_Aggregate;
  /** An array relationship */
  roles: Array<AuthUserRoles>;
  /** An aggregate relationship */
  roles_aggregate: AuthUserRoles_Aggregate;
  /** An array relationship */
  securityKeys: Array<AuthUserSecurityKeys>;
  /** An aggregate relationship */
  securityKeys_aggregate: AuthUserSecurityKeys_Aggregate;
  ticket?: Maybe<Scalars['String']>;
  ticketExpiresAt: Scalars['timestamptz'];
  totpSecret?: Maybe<Scalars['String']>;
  updatedAt: Scalars['timestamptz'];
  /** An array relationship */
  userProviders: Array<AuthUserProviders>;
  /** An aggregate relationship */
  userProviders_aggregate: AuthUserProviders_Aggregate;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersMetadataArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersPhysiotherapistsArgs = {
  distinct_on?: InputMaybe<Array<Physiotherapists_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Physiotherapists_Order_By>>;
  where?: InputMaybe<Physiotherapists_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersPhysiotherapists_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Physiotherapists_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Physiotherapists_Order_By>>;
  where?: InputMaybe<Physiotherapists_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersRefreshTokensArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthRefreshTokens_Order_By>>;
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersRefreshTokens_AggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthRefreshTokens_Order_By>>;
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersRolesArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserRoles_Order_By>>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersRoles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserRoles_Order_By>>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersSecurityKeysArgs = {
  distinct_on?: InputMaybe<Array<AuthUserSecurityKeys_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserSecurityKeys_Order_By>>;
  where?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersSecurityKeys_AggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserSecurityKeys_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserSecurityKeys_Order_By>>;
  where?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersUserProvidersArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserProviders_Order_By>>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersUserProviders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserProviders_Order_By>>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};

/** aggregated selection of "auth.users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "auth.users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
};


/** aggregate fields of "auth.users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "auth.users" */
export type Users_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Users_Max_Order_By>;
  min?: InputMaybe<Users_Min_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Users_Append_Input = {
  metadata?: InputMaybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "auth.users" */
export type Users_Arr_Rel_Insert_Input = {
  data: Array<Users_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** Boolean expression to filter rows from the table "auth.users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: InputMaybe<Array<Users_Bool_Exp>>;
  _not?: InputMaybe<Users_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Bool_Exp>>;
  activeMfaType?: InputMaybe<String_Comparison_Exp>;
  avatarUrl?: InputMaybe<String_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  currentChallenge?: InputMaybe<String_Comparison_Exp>;
  defaultRole?: InputMaybe<String_Comparison_Exp>;
  defaultRoleByRole?: InputMaybe<AuthRoles_Bool_Exp>;
  disabled?: InputMaybe<Boolean_Comparison_Exp>;
  displayName?: InputMaybe<String_Comparison_Exp>;
  email?: InputMaybe<Citext_Comparison_Exp>;
  emailVerified?: InputMaybe<Boolean_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  isAnonymous?: InputMaybe<Boolean_Comparison_Exp>;
  lastSeen?: InputMaybe<Timestamptz_Comparison_Exp>;
  locale?: InputMaybe<String_Comparison_Exp>;
  metadata?: InputMaybe<Jsonb_Comparison_Exp>;
  newEmail?: InputMaybe<Citext_Comparison_Exp>;
  otpHash?: InputMaybe<String_Comparison_Exp>;
  otpHashExpiresAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  otpMethodLastUsed?: InputMaybe<String_Comparison_Exp>;
  passwordHash?: InputMaybe<String_Comparison_Exp>;
  phoneNumber?: InputMaybe<String_Comparison_Exp>;
  phoneNumberVerified?: InputMaybe<Boolean_Comparison_Exp>;
  physiotherapists?: InputMaybe<Physiotherapists_Bool_Exp>;
  refreshTokens?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
  roles?: InputMaybe<AuthUserRoles_Bool_Exp>;
  securityKeys?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>;
  ticket?: InputMaybe<String_Comparison_Exp>;
  ticketExpiresAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  totpSecret?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  userProviders?: InputMaybe<AuthUserProviders_Bool_Exp>;
};

/** unique or primary key constraints on table "auth.users" */
export enum Users_Constraint {
  /** unique or primary key constraint on columns "email" */
  UsersEmailKey = 'users_email_key',
  /** unique or primary key constraint on columns "phone_number" */
  UsersPhoneNumberKey = 'users_phone_number_key',
  /** unique or primary key constraint on columns "id" */
  UsersPkey = 'users_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Users_Delete_At_Path_Input = {
  metadata?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Users_Delete_Elem_Input = {
  metadata?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Users_Delete_Key_Input = {
  metadata?: InputMaybe<Scalars['String']>;
};

/** input type for inserting data into table "auth.users" */
export type Users_Insert_Input = {
  activeMfaType?: InputMaybe<Scalars['String']>;
  avatarUrl?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  currentChallenge?: InputMaybe<Scalars['String']>;
  defaultRole?: InputMaybe<Scalars['String']>;
  defaultRoleByRole?: InputMaybe<AuthRoles_Obj_Rel_Insert_Input>;
  disabled?: InputMaybe<Scalars['Boolean']>;
  displayName?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['citext']>;
  emailVerified?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['uuid']>;
  isAnonymous?: InputMaybe<Scalars['Boolean']>;
  lastSeen?: InputMaybe<Scalars['timestamptz']>;
  locale?: InputMaybe<Scalars['String']>;
  metadata?: InputMaybe<Scalars['jsonb']>;
  newEmail?: InputMaybe<Scalars['citext']>;
  otpHash?: InputMaybe<Scalars['String']>;
  otpHashExpiresAt?: InputMaybe<Scalars['timestamptz']>;
  otpMethodLastUsed?: InputMaybe<Scalars['String']>;
  passwordHash?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  phoneNumberVerified?: InputMaybe<Scalars['Boolean']>;
  physiotherapists?: InputMaybe<Physiotherapists_Arr_Rel_Insert_Input>;
  refreshTokens?: InputMaybe<AuthRefreshTokens_Arr_Rel_Insert_Input>;
  roles?: InputMaybe<AuthUserRoles_Arr_Rel_Insert_Input>;
  securityKeys?: InputMaybe<AuthUserSecurityKeys_Arr_Rel_Insert_Input>;
  ticket?: InputMaybe<Scalars['String']>;
  ticketExpiresAt?: InputMaybe<Scalars['timestamptz']>;
  totpSecret?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  userProviders?: InputMaybe<AuthUserProviders_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  activeMfaType?: Maybe<Scalars['String']>;
  avatarUrl?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  currentChallenge?: Maybe<Scalars['String']>;
  defaultRole?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['citext']>;
  id?: Maybe<Scalars['uuid']>;
  lastSeen?: Maybe<Scalars['timestamptz']>;
  locale?: Maybe<Scalars['String']>;
  newEmail?: Maybe<Scalars['citext']>;
  otpHash?: Maybe<Scalars['String']>;
  otpHashExpiresAt?: Maybe<Scalars['timestamptz']>;
  otpMethodLastUsed?: Maybe<Scalars['String']>;
  passwordHash?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  ticket?: Maybe<Scalars['String']>;
  ticketExpiresAt?: Maybe<Scalars['timestamptz']>;
  totpSecret?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "auth.users" */
export type Users_Max_Order_By = {
  activeMfaType?: InputMaybe<Order_By>;
  avatarUrl?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  currentChallenge?: InputMaybe<Order_By>;
  defaultRole?: InputMaybe<Order_By>;
  displayName?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lastSeen?: InputMaybe<Order_By>;
  locale?: InputMaybe<Order_By>;
  newEmail?: InputMaybe<Order_By>;
  otpHash?: InputMaybe<Order_By>;
  otpHashExpiresAt?: InputMaybe<Order_By>;
  otpMethodLastUsed?: InputMaybe<Order_By>;
  passwordHash?: InputMaybe<Order_By>;
  phoneNumber?: InputMaybe<Order_By>;
  ticket?: InputMaybe<Order_By>;
  ticketExpiresAt?: InputMaybe<Order_By>;
  totpSecret?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  activeMfaType?: Maybe<Scalars['String']>;
  avatarUrl?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  currentChallenge?: Maybe<Scalars['String']>;
  defaultRole?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['citext']>;
  id?: Maybe<Scalars['uuid']>;
  lastSeen?: Maybe<Scalars['timestamptz']>;
  locale?: Maybe<Scalars['String']>;
  newEmail?: Maybe<Scalars['citext']>;
  otpHash?: Maybe<Scalars['String']>;
  otpHashExpiresAt?: Maybe<Scalars['timestamptz']>;
  otpMethodLastUsed?: Maybe<Scalars['String']>;
  passwordHash?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  ticket?: Maybe<Scalars['String']>;
  ticketExpiresAt?: Maybe<Scalars['timestamptz']>;
  totpSecret?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "auth.users" */
export type Users_Min_Order_By = {
  activeMfaType?: InputMaybe<Order_By>;
  avatarUrl?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  currentChallenge?: InputMaybe<Order_By>;
  defaultRole?: InputMaybe<Order_By>;
  displayName?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lastSeen?: InputMaybe<Order_By>;
  locale?: InputMaybe<Order_By>;
  newEmail?: InputMaybe<Order_By>;
  otpHash?: InputMaybe<Order_By>;
  otpHashExpiresAt?: InputMaybe<Order_By>;
  otpMethodLastUsed?: InputMaybe<Order_By>;
  passwordHash?: InputMaybe<Order_By>;
  phoneNumber?: InputMaybe<Order_By>;
  ticket?: InputMaybe<Order_By>;
  ticketExpiresAt?: InputMaybe<Order_By>;
  totpSecret?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "auth.users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "auth.users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** on_conflict condition type for table "auth.users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns?: Array<Users_Update_Column>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.users". */
export type Users_Order_By = {
  activeMfaType?: InputMaybe<Order_By>;
  avatarUrl?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  currentChallenge?: InputMaybe<Order_By>;
  defaultRole?: InputMaybe<Order_By>;
  defaultRoleByRole?: InputMaybe<AuthRoles_Order_By>;
  disabled?: InputMaybe<Order_By>;
  displayName?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  emailVerified?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  isAnonymous?: InputMaybe<Order_By>;
  lastSeen?: InputMaybe<Order_By>;
  locale?: InputMaybe<Order_By>;
  metadata?: InputMaybe<Order_By>;
  newEmail?: InputMaybe<Order_By>;
  otpHash?: InputMaybe<Order_By>;
  otpHashExpiresAt?: InputMaybe<Order_By>;
  otpMethodLastUsed?: InputMaybe<Order_By>;
  passwordHash?: InputMaybe<Order_By>;
  phoneNumber?: InputMaybe<Order_By>;
  phoneNumberVerified?: InputMaybe<Order_By>;
  physiotherapists_aggregate?: InputMaybe<Physiotherapists_Aggregate_Order_By>;
  refreshTokens_aggregate?: InputMaybe<AuthRefreshTokens_Aggregate_Order_By>;
  roles_aggregate?: InputMaybe<AuthUserRoles_Aggregate_Order_By>;
  securityKeys_aggregate?: InputMaybe<AuthUserSecurityKeys_Aggregate_Order_By>;
  ticket?: InputMaybe<Order_By>;
  ticketExpiresAt?: InputMaybe<Order_By>;
  totpSecret?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  userProviders_aggregate?: InputMaybe<AuthUserProviders_Aggregate_Order_By>;
};

/** primary key columns input for table: auth.users */
export type Users_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Users_Prepend_Input = {
  metadata?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "auth.users" */
export enum Users_Select_Column {
  /** column name */
  ActiveMfaType = 'activeMfaType',
  /** column name */
  AvatarUrl = 'avatarUrl',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CurrentChallenge = 'currentChallenge',
  /** column name */
  DefaultRole = 'defaultRole',
  /** column name */
  Disabled = 'disabled',
  /** column name */
  DisplayName = 'displayName',
  /** column name */
  Email = 'email',
  /** column name */
  EmailVerified = 'emailVerified',
  /** column name */
  Id = 'id',
  /** column name */
  IsAnonymous = 'isAnonymous',
  /** column name */
  LastSeen = 'lastSeen',
  /** column name */
  Locale = 'locale',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  NewEmail = 'newEmail',
  /** column name */
  OtpHash = 'otpHash',
  /** column name */
  OtpHashExpiresAt = 'otpHashExpiresAt',
  /** column name */
  OtpMethodLastUsed = 'otpMethodLastUsed',
  /** column name */
  PasswordHash = 'passwordHash',
  /** column name */
  PhoneNumber = 'phoneNumber',
  /** column name */
  PhoneNumberVerified = 'phoneNumberVerified',
  /** column name */
  Ticket = 'ticket',
  /** column name */
  TicketExpiresAt = 'ticketExpiresAt',
  /** column name */
  TotpSecret = 'totpSecret',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "auth.users" */
export type Users_Set_Input = {
  activeMfaType?: InputMaybe<Scalars['String']>;
  avatarUrl?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  currentChallenge?: InputMaybe<Scalars['String']>;
  defaultRole?: InputMaybe<Scalars['String']>;
  disabled?: InputMaybe<Scalars['Boolean']>;
  displayName?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['citext']>;
  emailVerified?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['uuid']>;
  isAnonymous?: InputMaybe<Scalars['Boolean']>;
  lastSeen?: InputMaybe<Scalars['timestamptz']>;
  locale?: InputMaybe<Scalars['String']>;
  metadata?: InputMaybe<Scalars['jsonb']>;
  newEmail?: InputMaybe<Scalars['citext']>;
  otpHash?: InputMaybe<Scalars['String']>;
  otpHashExpiresAt?: InputMaybe<Scalars['timestamptz']>;
  otpMethodLastUsed?: InputMaybe<Scalars['String']>;
  passwordHash?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  phoneNumberVerified?: InputMaybe<Scalars['Boolean']>;
  ticket?: InputMaybe<Scalars['String']>;
  ticketExpiresAt?: InputMaybe<Scalars['timestamptz']>;
  totpSecret?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** Streaming cursor of the table "users" */
export type Users_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Users_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Users_Stream_Cursor_Value_Input = {
  activeMfaType?: InputMaybe<Scalars['String']>;
  avatarUrl?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  currentChallenge?: InputMaybe<Scalars['String']>;
  defaultRole?: InputMaybe<Scalars['String']>;
  disabled?: InputMaybe<Scalars['Boolean']>;
  displayName?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['citext']>;
  emailVerified?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['uuid']>;
  isAnonymous?: InputMaybe<Scalars['Boolean']>;
  lastSeen?: InputMaybe<Scalars['timestamptz']>;
  locale?: InputMaybe<Scalars['String']>;
  metadata?: InputMaybe<Scalars['jsonb']>;
  newEmail?: InputMaybe<Scalars['citext']>;
  otpHash?: InputMaybe<Scalars['String']>;
  otpHashExpiresAt?: InputMaybe<Scalars['timestamptz']>;
  otpMethodLastUsed?: InputMaybe<Scalars['String']>;
  passwordHash?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  phoneNumberVerified?: InputMaybe<Scalars['Boolean']>;
  ticket?: InputMaybe<Scalars['String']>;
  ticketExpiresAt?: InputMaybe<Scalars['timestamptz']>;
  totpSecret?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "auth.users" */
export enum Users_Update_Column {
  /** column name */
  ActiveMfaType = 'activeMfaType',
  /** column name */
  AvatarUrl = 'avatarUrl',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CurrentChallenge = 'currentChallenge',
  /** column name */
  DefaultRole = 'defaultRole',
  /** column name */
  Disabled = 'disabled',
  /** column name */
  DisplayName = 'displayName',
  /** column name */
  Email = 'email',
  /** column name */
  EmailVerified = 'emailVerified',
  /** column name */
  Id = 'id',
  /** column name */
  IsAnonymous = 'isAnonymous',
  /** column name */
  LastSeen = 'lastSeen',
  /** column name */
  Locale = 'locale',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  NewEmail = 'newEmail',
  /** column name */
  OtpHash = 'otpHash',
  /** column name */
  OtpHashExpiresAt = 'otpHashExpiresAt',
  /** column name */
  OtpMethodLastUsed = 'otpMethodLastUsed',
  /** column name */
  PasswordHash = 'passwordHash',
  /** column name */
  PhoneNumber = 'phoneNumber',
  /** column name */
  PhoneNumberVerified = 'phoneNumberVerified',
  /** column name */
  Ticket = 'ticket',
  /** column name */
  TicketExpiresAt = 'ticketExpiresAt',
  /** column name */
  TotpSecret = 'totpSecret',
  /** column name */
  UpdatedAt = 'updatedAt'
}

export type Users_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Users_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Users_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Users_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Users_Delete_Key_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Users_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
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

/** columns and relationships of "visit_types" */
export type Visit_Types = {
  __typename?: 'visit_types';
  id: Scalars['uuid'];
  name: Scalars['String'];
  physiotherapist_id?: Maybe<Scalars['uuid']>;
  price: Scalars['String'];
};

/** aggregated selection of "visit_types" */
export type Visit_Types_Aggregate = {
  __typename?: 'visit_types_aggregate';
  aggregate?: Maybe<Visit_Types_Aggregate_Fields>;
  nodes: Array<Visit_Types>;
};

/** aggregate fields of "visit_types" */
export type Visit_Types_Aggregate_Fields = {
  __typename?: 'visit_types_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Visit_Types_Max_Fields>;
  min?: Maybe<Visit_Types_Min_Fields>;
};


/** aggregate fields of "visit_types" */
export type Visit_Types_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Visit_Types_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "visit_types" */
export type Visit_Types_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Visit_Types_Max_Order_By>;
  min?: InputMaybe<Visit_Types_Min_Order_By>;
};

/** input type for inserting array relation for remote table "visit_types" */
export type Visit_Types_Arr_Rel_Insert_Input = {
  data: Array<Visit_Types_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Visit_Types_On_Conflict>;
};

/** Boolean expression to filter rows from the table "visit_types". All fields are combined with a logical 'AND'. */
export type Visit_Types_Bool_Exp = {
  _and?: InputMaybe<Array<Visit_Types_Bool_Exp>>;
  _not?: InputMaybe<Visit_Types_Bool_Exp>;
  _or?: InputMaybe<Array<Visit_Types_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  physiotherapist_id?: InputMaybe<Uuid_Comparison_Exp>;
  price?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "visit_types" */
export enum Visit_Types_Constraint {
  /** unique or primary key constraint on columns "id" */
  VisitTypesPkey = 'visit_types_pkey'
}

/** input type for inserting data into table "visit_types" */
export type Visit_Types_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  physiotherapist_id?: InputMaybe<Scalars['uuid']>;
  price?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Visit_Types_Max_Fields = {
  __typename?: 'visit_types_max_fields';
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  physiotherapist_id?: Maybe<Scalars['uuid']>;
  price?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "visit_types" */
export type Visit_Types_Max_Order_By = {
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  physiotherapist_id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Visit_Types_Min_Fields = {
  __typename?: 'visit_types_min_fields';
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  physiotherapist_id?: Maybe<Scalars['uuid']>;
  price?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "visit_types" */
export type Visit_Types_Min_Order_By = {
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  physiotherapist_id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "visit_types" */
export type Visit_Types_Mutation_Response = {
  __typename?: 'visit_types_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Visit_Types>;
};

/** input type for inserting object relation for remote table "visit_types" */
export type Visit_Types_Obj_Rel_Insert_Input = {
  data: Visit_Types_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Visit_Types_On_Conflict>;
};

/** on_conflict condition type for table "visit_types" */
export type Visit_Types_On_Conflict = {
  constraint: Visit_Types_Constraint;
  update_columns?: Array<Visit_Types_Update_Column>;
  where?: InputMaybe<Visit_Types_Bool_Exp>;
};

/** Ordering options when selecting data from "visit_types". */
export type Visit_Types_Order_By = {
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  physiotherapist_id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
};

/** primary key columns input for table: visit_types */
export type Visit_Types_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "visit_types" */
export enum Visit_Types_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  PhysiotherapistId = 'physiotherapist_id',
  /** column name */
  Price = 'price'
}

/** input type for updating data in table "visit_types" */
export type Visit_Types_Set_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  physiotherapist_id?: InputMaybe<Scalars['uuid']>;
  price?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "visit_types" */
export type Visit_Types_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Visit_Types_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Visit_Types_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  physiotherapist_id?: InputMaybe<Scalars['uuid']>;
  price?: InputMaybe<Scalars['String']>;
};

/** update columns of table "visit_types" */
export enum Visit_Types_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  PhysiotherapistId = 'physiotherapist_id',
  /** column name */
  Price = 'price'
}

export type Visit_Types_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Visit_Types_Set_Input>;
  where: Visit_Types_Bool_Exp;
};

/** columns and relationships of "visits" */
export type Visits = {
  __typename?: 'visits';
  end_timestamp: Scalars['timestamptz'];
  id: Scalars['uuid'];
  /** An object relationship */
  patient?: Maybe<Patients>;
  patient_id?: Maybe<Scalars['uuid']>;
  /** An object relationship */
  physiotherapist?: Maybe<Physiotherapists>;
  physiotherapist_id?: Maybe<Scalars['uuid']>;
  start_timestamp: Scalars['timestamptz'];
  /** An object relationship */
  visit_type?: Maybe<Visit_Types>;
  visit_type_id?: Maybe<Scalars['uuid']>;
};

/** aggregated selection of "visits" */
export type Visits_Aggregate = {
  __typename?: 'visits_aggregate';
  aggregate?: Maybe<Visits_Aggregate_Fields>;
  nodes: Array<Visits>;
};

/** aggregate fields of "visits" */
export type Visits_Aggregate_Fields = {
  __typename?: 'visits_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Visits_Max_Fields>;
  min?: Maybe<Visits_Min_Fields>;
};


/** aggregate fields of "visits" */
export type Visits_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Visits_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "visits" */
export type Visits_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Visits_Max_Order_By>;
  min?: InputMaybe<Visits_Min_Order_By>;
};

/** input type for inserting array relation for remote table "visits" */
export type Visits_Arr_Rel_Insert_Input = {
  data: Array<Visits_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Visits_On_Conflict>;
};

/** Boolean expression to filter rows from the table "visits". All fields are combined with a logical 'AND'. */
export type Visits_Bool_Exp = {
  _and?: InputMaybe<Array<Visits_Bool_Exp>>;
  _not?: InputMaybe<Visits_Bool_Exp>;
  _or?: InputMaybe<Array<Visits_Bool_Exp>>;
  end_timestamp?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  patient?: InputMaybe<Patients_Bool_Exp>;
  patient_id?: InputMaybe<Uuid_Comparison_Exp>;
  physiotherapist?: InputMaybe<Physiotherapists_Bool_Exp>;
  physiotherapist_id?: InputMaybe<Uuid_Comparison_Exp>;
  start_timestamp?: InputMaybe<Timestamptz_Comparison_Exp>;
  visit_type?: InputMaybe<Visit_Types_Bool_Exp>;
  visit_type_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "visits" */
export enum Visits_Constraint {
  /** unique or primary key constraint on columns "id" */
  VisitsPkey = 'Visits_pkey'
}

/** input type for inserting data into table "visits" */
export type Visits_Insert_Input = {
  end_timestamp?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  patient?: InputMaybe<Patients_Obj_Rel_Insert_Input>;
  patient_id?: InputMaybe<Scalars['uuid']>;
  physiotherapist?: InputMaybe<Physiotherapists_Obj_Rel_Insert_Input>;
  physiotherapist_id?: InputMaybe<Scalars['uuid']>;
  start_timestamp?: InputMaybe<Scalars['timestamptz']>;
  visit_type?: InputMaybe<Visit_Types_Obj_Rel_Insert_Input>;
  visit_type_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Visits_Max_Fields = {
  __typename?: 'visits_max_fields';
  end_timestamp?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  patient_id?: Maybe<Scalars['uuid']>;
  physiotherapist_id?: Maybe<Scalars['uuid']>;
  start_timestamp?: Maybe<Scalars['timestamptz']>;
  visit_type_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "visits" */
export type Visits_Max_Order_By = {
  end_timestamp?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  patient_id?: InputMaybe<Order_By>;
  physiotherapist_id?: InputMaybe<Order_By>;
  start_timestamp?: InputMaybe<Order_By>;
  visit_type_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Visits_Min_Fields = {
  __typename?: 'visits_min_fields';
  end_timestamp?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  patient_id?: Maybe<Scalars['uuid']>;
  physiotherapist_id?: Maybe<Scalars['uuid']>;
  start_timestamp?: Maybe<Scalars['timestamptz']>;
  visit_type_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "visits" */
export type Visits_Min_Order_By = {
  end_timestamp?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  patient_id?: InputMaybe<Order_By>;
  physiotherapist_id?: InputMaybe<Order_By>;
  start_timestamp?: InputMaybe<Order_By>;
  visit_type_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "visits" */
export type Visits_Mutation_Response = {
  __typename?: 'visits_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Visits>;
};

/** on_conflict condition type for table "visits" */
export type Visits_On_Conflict = {
  constraint: Visits_Constraint;
  update_columns?: Array<Visits_Update_Column>;
  where?: InputMaybe<Visits_Bool_Exp>;
};

/** Ordering options when selecting data from "visits". */
export type Visits_Order_By = {
  end_timestamp?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  patient?: InputMaybe<Patients_Order_By>;
  patient_id?: InputMaybe<Order_By>;
  physiotherapist?: InputMaybe<Physiotherapists_Order_By>;
  physiotherapist_id?: InputMaybe<Order_By>;
  start_timestamp?: InputMaybe<Order_By>;
  visit_type?: InputMaybe<Visit_Types_Order_By>;
  visit_type_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: visits */
export type Visits_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "visits" */
export enum Visits_Select_Column {
  /** column name */
  EndTimestamp = 'end_timestamp',
  /** column name */
  Id = 'id',
  /** column name */
  PatientId = 'patient_id',
  /** column name */
  PhysiotherapistId = 'physiotherapist_id',
  /** column name */
  StartTimestamp = 'start_timestamp',
  /** column name */
  VisitTypeId = 'visit_type_id'
}

/** input type for updating data in table "visits" */
export type Visits_Set_Input = {
  end_timestamp?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  patient_id?: InputMaybe<Scalars['uuid']>;
  physiotherapist_id?: InputMaybe<Scalars['uuid']>;
  start_timestamp?: InputMaybe<Scalars['timestamptz']>;
  visit_type_id?: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "visits" */
export type Visits_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Visits_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Visits_Stream_Cursor_Value_Input = {
  end_timestamp?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  patient_id?: InputMaybe<Scalars['uuid']>;
  physiotherapist_id?: InputMaybe<Scalars['uuid']>;
  start_timestamp?: InputMaybe<Scalars['timestamptz']>;
  visit_type_id?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "visits" */
export enum Visits_Update_Column {
  /** column name */
  EndTimestamp = 'end_timestamp',
  /** column name */
  Id = 'id',
  /** column name */
  PatientId = 'patient_id',
  /** column name */
  PhysiotherapistId = 'physiotherapist_id',
  /** column name */
  StartTimestamp = 'start_timestamp',
  /** column name */
  VisitTypeId = 'visit_type_id'
}

export type Visits_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Visits_Set_Input>;
  where: Visits_Bool_Exp;
};

export type CreatePhysiotherapistMutationVariables = Exact<{
  name?: InputMaybe<Scalars['String']>;
  surname?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  adress?: InputMaybe<Scalars['String']>;
  aboutMe?: InputMaybe<Scalars['String']>;
  user_id?: InputMaybe<Scalars['uuid']>;
}>;


export type CreatePhysiotherapistMutation = { __typename?: 'mutation_root', insert_physiotherapists?: { __typename?: 'physiotherapists_mutation_response', returning: Array<{ __typename?: 'physiotherapists', id: any }> } | null };

export type CreateVisitTypeMutationVariables = Exact<{
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['String']>;
  physiotherapist_id?: InputMaybe<Scalars['uuid']>;
}>;


export type CreateVisitTypeMutation = { __typename?: 'mutation_root', insert_visit_types_one?: { __typename?: 'visit_types', id: any } | null };

export type UpdatePhysiotherapistAboutMeMutationVariables = Exact<{
  id?: InputMaybe<Scalars['uuid']>;
  aboutMe?: InputMaybe<Scalars['String']>;
}>;


export type UpdatePhysiotherapistAboutMeMutation = { __typename?: 'mutation_root', update_physiotherapists_by_pk?: { __typename?: 'physiotherapists', id: any } | null };

export type UpdatePhysiotherapistAdressMutationVariables = Exact<{
  id?: InputMaybe<Scalars['uuid']>;
  adress?: InputMaybe<Scalars['String']>;
}>;


export type UpdatePhysiotherapistAdressMutation = { __typename?: 'mutation_root', update_physiotherapists_by_pk?: { __typename?: 'physiotherapists', id: any } | null };

export type UpdatePhysiotherapistEmailMutationVariables = Exact<{
  user_id?: InputMaybe<Scalars['uuid']>;
  email?: InputMaybe<Scalars['citext']>;
}>;


export type UpdatePhysiotherapistEmailMutation = { __typename?: 'mutation_root', updateUser?: { __typename?: 'users', id: any } | null };

export type UpdatePhysiotherapistEndWorkMutationVariables = Exact<{
  id?: InputMaybe<Scalars['uuid']>;
  endWork?: InputMaybe<Scalars['Int']>;
}>;


export type UpdatePhysiotherapistEndWorkMutation = { __typename?: 'mutation_root', update_physiotherapists_by_pk?: { __typename?: 'physiotherapists', id: any } | null };

export type UpdatePhysiotherapistPhoneMutationVariables = Exact<{
  id?: InputMaybe<Scalars['uuid']>;
  phone?: InputMaybe<Scalars['String']>;
}>;


export type UpdatePhysiotherapistPhoneMutation = { __typename?: 'mutation_root', update_physiotherapists_by_pk?: { __typename?: 'physiotherapists', id: any } | null };

export type UpdatePhysiotherapistStartWorkMutationVariables = Exact<{
  id?: InputMaybe<Scalars['uuid']>;
  startWork?: InputMaybe<Scalars['Int']>;
}>;


export type UpdatePhysiotherapistStartWorkMutation = { __typename?: 'mutation_root', update_physiotherapists_by_pk?: { __typename?: 'physiotherapists', id: any } | null };

export type GetUserByIdQueryVariables = Exact<{
  user_id?: InputMaybe<Scalars['uuid']>;
}>;


export type GetUserByIdQuery = { __typename?: 'query_root', physiotherapists: Array<{ __typename?: 'physiotherapists', id: any, adress?: string | null, aboutMe?: string | null, name: string, surname: string, phone?: string | null, startWork: number, endWork: number, user?: { __typename?: 'users', email?: any | null } | null }> };

export type PhysiotherapistQueryVariables = Exact<{
  id?: InputMaybe<Scalars['uuid']>;
}>;


export type PhysiotherapistQuery = { __typename?: 'query_root', physiotherapists_by_pk?: { __typename?: 'physiotherapists', adress?: string | null, aboutMe?: string | null, name: string, phone?: string | null, surname: string, startWork: number, endWork: number, user?: { __typename?: 'users', email?: any | null } | null } | null };

export type VisitTypesQueryVariables = Exact<{
  physiotherapist_id?: InputMaybe<Scalars['uuid']>;
}>;


export type VisitTypesQuery = { __typename?: 'query_root', visit_types: Array<{ __typename?: 'visit_types', id: any, name: string, price: string }> };


export const CreatePhysiotherapistDocument = gql`
    mutation CreatePhysiotherapist($name: String = "", $surname: String = "", $phone: String = "", $adress: String = "", $aboutMe: String = "", $user_id: uuid = "") {
  insert_physiotherapists(
    objects: {name: $name, surname: $surname, phone: $phone, adress: $adress, aboutMe: $aboutMe, user_id: $user_id}
  ) {
    returning {
      id
    }
  }
}
    `;
export type CreatePhysiotherapistMutationFn = Apollo.MutationFunction<CreatePhysiotherapistMutation, CreatePhysiotherapistMutationVariables>;

/**
 * __useCreatePhysiotherapistMutation__
 *
 * To run a mutation, you first call `useCreatePhysiotherapistMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePhysiotherapistMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPhysiotherapistMutation, { data, loading, error }] = useCreatePhysiotherapistMutation({
 *   variables: {
 *      name: // value for 'name'
 *      surname: // value for 'surname'
 *      phone: // value for 'phone'
 *      adress: // value for 'adress'
 *      aboutMe: // value for 'aboutMe'
 *      user_id: // value for 'user_id'
 *   },
 * });
 */
export function useCreatePhysiotherapistMutation(baseOptions?: Apollo.MutationHookOptions<CreatePhysiotherapistMutation, CreatePhysiotherapistMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreatePhysiotherapistMutation, CreatePhysiotherapistMutationVariables>(CreatePhysiotherapistDocument, options);
      }
export type CreatePhysiotherapistMutationHookResult = ReturnType<typeof useCreatePhysiotherapistMutation>;
export type CreatePhysiotherapistMutationResult = Apollo.MutationResult<CreatePhysiotherapistMutation>;
export type CreatePhysiotherapistMutationOptions = Apollo.BaseMutationOptions<CreatePhysiotherapistMutation, CreatePhysiotherapistMutationVariables>;
export const CreateVisitTypeDocument = gql`
    mutation CreateVisitType($name: String = "", $price: String = "", $physiotherapist_id: uuid = "") {
  insert_visit_types_one(
    object: {name: $name, price: $price, physiotherapist_id: $physiotherapist_id}
  ) {
    id
  }
}
    `;
export type CreateVisitTypeMutationFn = Apollo.MutationFunction<CreateVisitTypeMutation, CreateVisitTypeMutationVariables>;

/**
 * __useCreateVisitTypeMutation__
 *
 * To run a mutation, you first call `useCreateVisitTypeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateVisitTypeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createVisitTypeMutation, { data, loading, error }] = useCreateVisitTypeMutation({
 *   variables: {
 *      name: // value for 'name'
 *      price: // value for 'price'
 *      physiotherapist_id: // value for 'physiotherapist_id'
 *   },
 * });
 */
export function useCreateVisitTypeMutation(baseOptions?: Apollo.MutationHookOptions<CreateVisitTypeMutation, CreateVisitTypeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateVisitTypeMutation, CreateVisitTypeMutationVariables>(CreateVisitTypeDocument, options);
      }
export type CreateVisitTypeMutationHookResult = ReturnType<typeof useCreateVisitTypeMutation>;
export type CreateVisitTypeMutationResult = Apollo.MutationResult<CreateVisitTypeMutation>;
export type CreateVisitTypeMutationOptions = Apollo.BaseMutationOptions<CreateVisitTypeMutation, CreateVisitTypeMutationVariables>;
export const UpdatePhysiotherapistAboutMeDocument = gql`
    mutation UpdatePhysiotherapistAboutMe($id: uuid = "", $aboutMe: String = "") {
  update_physiotherapists_by_pk(pk_columns: {id: $id}, _set: {aboutMe: $aboutMe}) {
    id
  }
}
    `;
export type UpdatePhysiotherapistAboutMeMutationFn = Apollo.MutationFunction<UpdatePhysiotherapistAboutMeMutation, UpdatePhysiotherapistAboutMeMutationVariables>;

/**
 * __useUpdatePhysiotherapistAboutMeMutation__
 *
 * To run a mutation, you first call `useUpdatePhysiotherapistAboutMeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePhysiotherapistAboutMeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePhysiotherapistAboutMeMutation, { data, loading, error }] = useUpdatePhysiotherapistAboutMeMutation({
 *   variables: {
 *      id: // value for 'id'
 *      aboutMe: // value for 'aboutMe'
 *   },
 * });
 */
export function useUpdatePhysiotherapistAboutMeMutation(baseOptions?: Apollo.MutationHookOptions<UpdatePhysiotherapistAboutMeMutation, UpdatePhysiotherapistAboutMeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdatePhysiotherapistAboutMeMutation, UpdatePhysiotherapistAboutMeMutationVariables>(UpdatePhysiotherapistAboutMeDocument, options);
      }
export type UpdatePhysiotherapistAboutMeMutationHookResult = ReturnType<typeof useUpdatePhysiotherapistAboutMeMutation>;
export type UpdatePhysiotherapistAboutMeMutationResult = Apollo.MutationResult<UpdatePhysiotherapistAboutMeMutation>;
export type UpdatePhysiotherapistAboutMeMutationOptions = Apollo.BaseMutationOptions<UpdatePhysiotherapistAboutMeMutation, UpdatePhysiotherapistAboutMeMutationVariables>;
export const UpdatePhysiotherapistAdressDocument = gql`
    mutation UpdatePhysiotherapistAdress($id: uuid = "", $adress: String = "") {
  update_physiotherapists_by_pk(pk_columns: {id: $id}, _set: {adress: $adress}) {
    id
  }
}
    `;
export type UpdatePhysiotherapistAdressMutationFn = Apollo.MutationFunction<UpdatePhysiotherapistAdressMutation, UpdatePhysiotherapistAdressMutationVariables>;

/**
 * __useUpdatePhysiotherapistAdressMutation__
 *
 * To run a mutation, you first call `useUpdatePhysiotherapistAdressMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePhysiotherapistAdressMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePhysiotherapistAdressMutation, { data, loading, error }] = useUpdatePhysiotherapistAdressMutation({
 *   variables: {
 *      id: // value for 'id'
 *      adress: // value for 'adress'
 *   },
 * });
 */
export function useUpdatePhysiotherapistAdressMutation(baseOptions?: Apollo.MutationHookOptions<UpdatePhysiotherapistAdressMutation, UpdatePhysiotherapistAdressMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdatePhysiotherapistAdressMutation, UpdatePhysiotherapistAdressMutationVariables>(UpdatePhysiotherapistAdressDocument, options);
      }
export type UpdatePhysiotherapistAdressMutationHookResult = ReturnType<typeof useUpdatePhysiotherapistAdressMutation>;
export type UpdatePhysiotherapistAdressMutationResult = Apollo.MutationResult<UpdatePhysiotherapistAdressMutation>;
export type UpdatePhysiotherapistAdressMutationOptions = Apollo.BaseMutationOptions<UpdatePhysiotherapistAdressMutation, UpdatePhysiotherapistAdressMutationVariables>;
export const UpdatePhysiotherapistEmailDocument = gql`
    mutation UpdatePhysiotherapistEmail($user_id: uuid = "", $email: citext = "") {
  updateUser(pk_columns: {id: $user_id}, _set: {email: $email}) {
    id
  }
}
    `;
export type UpdatePhysiotherapistEmailMutationFn = Apollo.MutationFunction<UpdatePhysiotherapistEmailMutation, UpdatePhysiotherapistEmailMutationVariables>;

/**
 * __useUpdatePhysiotherapistEmailMutation__
 *
 * To run a mutation, you first call `useUpdatePhysiotherapistEmailMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePhysiotherapistEmailMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePhysiotherapistEmailMutation, { data, loading, error }] = useUpdatePhysiotherapistEmailMutation({
 *   variables: {
 *      user_id: // value for 'user_id'
 *      email: // value for 'email'
 *   },
 * });
 */
export function useUpdatePhysiotherapistEmailMutation(baseOptions?: Apollo.MutationHookOptions<UpdatePhysiotherapistEmailMutation, UpdatePhysiotherapistEmailMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdatePhysiotherapistEmailMutation, UpdatePhysiotherapistEmailMutationVariables>(UpdatePhysiotherapistEmailDocument, options);
      }
export type UpdatePhysiotherapistEmailMutationHookResult = ReturnType<typeof useUpdatePhysiotherapistEmailMutation>;
export type UpdatePhysiotherapistEmailMutationResult = Apollo.MutationResult<UpdatePhysiotherapistEmailMutation>;
export type UpdatePhysiotherapistEmailMutationOptions = Apollo.BaseMutationOptions<UpdatePhysiotherapistEmailMutation, UpdatePhysiotherapistEmailMutationVariables>;
export const UpdatePhysiotherapistEndWorkDocument = gql`
    mutation UpdatePhysiotherapistEndWork($id: uuid = "", $endWork: Int) {
  update_physiotherapists_by_pk(pk_columns: {id: $id}, _set: {endWork: $endWork}) {
    id
  }
}
    `;
export type UpdatePhysiotherapistEndWorkMutationFn = Apollo.MutationFunction<UpdatePhysiotherapistEndWorkMutation, UpdatePhysiotherapistEndWorkMutationVariables>;

/**
 * __useUpdatePhysiotherapistEndWorkMutation__
 *
 * To run a mutation, you first call `useUpdatePhysiotherapistEndWorkMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePhysiotherapistEndWorkMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePhysiotherapistEndWorkMutation, { data, loading, error }] = useUpdatePhysiotherapistEndWorkMutation({
 *   variables: {
 *      id: // value for 'id'
 *      endWork: // value for 'endWork'
 *   },
 * });
 */
export function useUpdatePhysiotherapistEndWorkMutation(baseOptions?: Apollo.MutationHookOptions<UpdatePhysiotherapistEndWorkMutation, UpdatePhysiotherapistEndWorkMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdatePhysiotherapistEndWorkMutation, UpdatePhysiotherapistEndWorkMutationVariables>(UpdatePhysiotherapistEndWorkDocument, options);
      }
export type UpdatePhysiotherapistEndWorkMutationHookResult = ReturnType<typeof useUpdatePhysiotherapistEndWorkMutation>;
export type UpdatePhysiotherapistEndWorkMutationResult = Apollo.MutationResult<UpdatePhysiotherapistEndWorkMutation>;
export type UpdatePhysiotherapistEndWorkMutationOptions = Apollo.BaseMutationOptions<UpdatePhysiotherapistEndWorkMutation, UpdatePhysiotherapistEndWorkMutationVariables>;
export const UpdatePhysiotherapistPhoneDocument = gql`
    mutation UpdatePhysiotherapistPhone($id: uuid = "", $phone: String = "") {
  update_physiotherapists_by_pk(pk_columns: {id: $id}, _set: {phone: $phone}) {
    id
  }
}
    `;
export type UpdatePhysiotherapistPhoneMutationFn = Apollo.MutationFunction<UpdatePhysiotherapistPhoneMutation, UpdatePhysiotherapistPhoneMutationVariables>;

/**
 * __useUpdatePhysiotherapistPhoneMutation__
 *
 * To run a mutation, you first call `useUpdatePhysiotherapistPhoneMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePhysiotherapistPhoneMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePhysiotherapistPhoneMutation, { data, loading, error }] = useUpdatePhysiotherapistPhoneMutation({
 *   variables: {
 *      id: // value for 'id'
 *      phone: // value for 'phone'
 *   },
 * });
 */
export function useUpdatePhysiotherapistPhoneMutation(baseOptions?: Apollo.MutationHookOptions<UpdatePhysiotherapistPhoneMutation, UpdatePhysiotherapistPhoneMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdatePhysiotherapistPhoneMutation, UpdatePhysiotherapistPhoneMutationVariables>(UpdatePhysiotherapistPhoneDocument, options);
      }
export type UpdatePhysiotherapistPhoneMutationHookResult = ReturnType<typeof useUpdatePhysiotherapistPhoneMutation>;
export type UpdatePhysiotherapistPhoneMutationResult = Apollo.MutationResult<UpdatePhysiotherapistPhoneMutation>;
export type UpdatePhysiotherapistPhoneMutationOptions = Apollo.BaseMutationOptions<UpdatePhysiotherapistPhoneMutation, UpdatePhysiotherapistPhoneMutationVariables>;
export const UpdatePhysiotherapistStartWorkDocument = gql`
    mutation UpdatePhysiotherapistStartWork($id: uuid = "", $startWork: Int) {
  update_physiotherapists_by_pk(
    pk_columns: {id: $id}
    _set: {startWork: $startWork}
  ) {
    id
  }
}
    `;
export type UpdatePhysiotherapistStartWorkMutationFn = Apollo.MutationFunction<UpdatePhysiotherapistStartWorkMutation, UpdatePhysiotherapistStartWorkMutationVariables>;

/**
 * __useUpdatePhysiotherapistStartWorkMutation__
 *
 * To run a mutation, you first call `useUpdatePhysiotherapistStartWorkMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePhysiotherapistStartWorkMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePhysiotherapistStartWorkMutation, { data, loading, error }] = useUpdatePhysiotherapistStartWorkMutation({
 *   variables: {
 *      id: // value for 'id'
 *      startWork: // value for 'startWork'
 *   },
 * });
 */
export function useUpdatePhysiotherapistStartWorkMutation(baseOptions?: Apollo.MutationHookOptions<UpdatePhysiotherapistStartWorkMutation, UpdatePhysiotherapistStartWorkMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdatePhysiotherapistStartWorkMutation, UpdatePhysiotherapistStartWorkMutationVariables>(UpdatePhysiotherapistStartWorkDocument, options);
      }
export type UpdatePhysiotherapistStartWorkMutationHookResult = ReturnType<typeof useUpdatePhysiotherapistStartWorkMutation>;
export type UpdatePhysiotherapistStartWorkMutationResult = Apollo.MutationResult<UpdatePhysiotherapistStartWorkMutation>;
export type UpdatePhysiotherapistStartWorkMutationOptions = Apollo.BaseMutationOptions<UpdatePhysiotherapistStartWorkMutation, UpdatePhysiotherapistStartWorkMutationVariables>;
export const GetUserByIdDocument = gql`
    query GetUserById($user_id: uuid = "") {
  physiotherapists(where: {user_id: {_eq: $user_id}}) {
    id
    adress
    aboutMe
    name
    surname
    phone
    startWork
    endWork
    user {
      email
    }
  }
}
    `;

/**
 * __useGetUserByIdQuery__
 *
 * To run a query within a React component, call `useGetUserByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserByIdQuery({
 *   variables: {
 *      user_id: // value for 'user_id'
 *   },
 * });
 */
export function useGetUserByIdQuery(baseOptions?: Apollo.QueryHookOptions<GetUserByIdQuery, GetUserByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserByIdQuery, GetUserByIdQueryVariables>(GetUserByIdDocument, options);
      }
export function useGetUserByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserByIdQuery, GetUserByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserByIdQuery, GetUserByIdQueryVariables>(GetUserByIdDocument, options);
        }
export type GetUserByIdQueryHookResult = ReturnType<typeof useGetUserByIdQuery>;
export type GetUserByIdLazyQueryHookResult = ReturnType<typeof useGetUserByIdLazyQuery>;
export type GetUserByIdQueryResult = Apollo.QueryResult<GetUserByIdQuery, GetUserByIdQueryVariables>;
export function refetchGetUserByIdQuery(variables?: GetUserByIdQueryVariables) {
      return { query: GetUserByIdDocument, variables: variables }
    }
export const PhysiotherapistDocument = gql`
    query Physiotherapist($id: uuid = "") {
  physiotherapists_by_pk(id: $id) {
    adress
    aboutMe
    name
    phone
    surname
    user {
      email
    }
    startWork
    endWork
  }
}
    `;

/**
 * __usePhysiotherapistQuery__
 *
 * To run a query within a React component, call `usePhysiotherapistQuery` and pass it any options that fit your needs.
 * When your component renders, `usePhysiotherapistQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePhysiotherapistQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function usePhysiotherapistQuery(baseOptions?: Apollo.QueryHookOptions<PhysiotherapistQuery, PhysiotherapistQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PhysiotherapistQuery, PhysiotherapistQueryVariables>(PhysiotherapistDocument, options);
      }
export function usePhysiotherapistLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PhysiotherapistQuery, PhysiotherapistQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PhysiotherapistQuery, PhysiotherapistQueryVariables>(PhysiotherapistDocument, options);
        }
export type PhysiotherapistQueryHookResult = ReturnType<typeof usePhysiotherapistQuery>;
export type PhysiotherapistLazyQueryHookResult = ReturnType<typeof usePhysiotherapistLazyQuery>;
export type PhysiotherapistQueryResult = Apollo.QueryResult<PhysiotherapistQuery, PhysiotherapistQueryVariables>;
export function refetchPhysiotherapistQuery(variables?: PhysiotherapistQueryVariables) {
      return { query: PhysiotherapistDocument, variables: variables }
    }
export const VisitTypesDocument = gql`
    query VisitTypes($physiotherapist_id: uuid = "") {
  visit_types(where: {physiotherapist_id: {_eq: $physiotherapist_id}}) {
    id
    name
    price
  }
}
    `;

/**
 * __useVisitTypesQuery__
 *
 * To run a query within a React component, call `useVisitTypesQuery` and pass it any options that fit your needs.
 * When your component renders, `useVisitTypesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useVisitTypesQuery({
 *   variables: {
 *      physiotherapist_id: // value for 'physiotherapist_id'
 *   },
 * });
 */
export function useVisitTypesQuery(baseOptions?: Apollo.QueryHookOptions<VisitTypesQuery, VisitTypesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<VisitTypesQuery, VisitTypesQueryVariables>(VisitTypesDocument, options);
      }
export function useVisitTypesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<VisitTypesQuery, VisitTypesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<VisitTypesQuery, VisitTypesQueryVariables>(VisitTypesDocument, options);
        }
export type VisitTypesQueryHookResult = ReturnType<typeof useVisitTypesQuery>;
export type VisitTypesLazyQueryHookResult = ReturnType<typeof useVisitTypesLazyQuery>;
export type VisitTypesQueryResult = Apollo.QueryResult<VisitTypesQuery, VisitTypesQueryVariables>;
export function refetchVisitTypesQuery(variables?: VisitTypesQueryVariables) {
      return { query: VisitTypesDocument, variables: variables }
    }