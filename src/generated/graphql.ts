import { GraphQLResolveInfo } from 'graphql';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Scalars['Int']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _nin?: Maybe<Array<Scalars['Int']>>;
};

export type Mutation_Root = {
   __typename?: 'mutation_root';
  delete_role?: Maybe<Role_Mutation_Response>;
  delete_user?: Maybe<User_Mutation_Response>;
  delete_user_role?: Maybe<User_Role_Mutation_Response>;
  insert_role?: Maybe<Role_Mutation_Response>;
  insert_user?: Maybe<User_Mutation_Response>;
  insert_user_role?: Maybe<User_Role_Mutation_Response>;
  update_role?: Maybe<Role_Mutation_Response>;
  update_user?: Maybe<User_Mutation_Response>;
  update_user_role?: Maybe<User_Role_Mutation_Response>;
};


export type Mutation_RootDelete_RoleArgs = {
  where: Role_Bool_Exp;
};


export type Mutation_RootDelete_UserArgs = {
  where: User_Bool_Exp;
};


export type Mutation_RootDelete_User_RoleArgs = {
  where: User_Role_Bool_Exp;
};


export type Mutation_RootInsert_RoleArgs = {
  objects: Array<Role_Insert_Input>;
  on_conflict?: Maybe<Role_On_Conflict>;
};


export type Mutation_RootInsert_UserArgs = {
  objects: Array<User_Insert_Input>;
  on_conflict?: Maybe<User_On_Conflict>;
};


export type Mutation_RootInsert_User_RoleArgs = {
  objects: Array<User_Role_Insert_Input>;
  on_conflict?: Maybe<User_Role_On_Conflict>;
};


export type Mutation_RootUpdate_RoleArgs = {
  _inc?: Maybe<Role_Inc_Input>;
  _set?: Maybe<Role_Set_Input>;
  where: Role_Bool_Exp;
};


export type Mutation_RootUpdate_UserArgs = {
  _inc?: Maybe<User_Inc_Input>;
  _set?: Maybe<User_Set_Input>;
  where: User_Bool_Exp;
};


export type Mutation_RootUpdate_User_RoleArgs = {
  _inc?: Maybe<User_Role_Inc_Input>;
  _set?: Maybe<User_Role_Set_Input>;
  where: User_Role_Bool_Exp;
};

export enum Order_By {
  Asc = 'asc',
  AscNullsFirst = 'asc_nulls_first',
  AscNullsLast = 'asc_nulls_last',
  Desc = 'desc',
  DescNullsFirst = 'desc_nulls_first',
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
   __typename?: 'query_root';
  role: Array<Role>;
  role_aggregate: Role_Aggregate;
  role_by_pk?: Maybe<Role>;
  user: Array<User>;
  user_aggregate: User_Aggregate;
  user_by_pk?: Maybe<User>;
  user_role: Array<User_Role>;
  user_role_aggregate: User_Role_Aggregate;
  user_role_by_pk?: Maybe<User_Role>;
};


export type Query_RootRoleArgs = {
  distinct_on?: Maybe<Array<Role_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Role_Order_By>>;
  where?: Maybe<Role_Bool_Exp>;
};


export type Query_RootRole_AggregateArgs = {
  distinct_on?: Maybe<Array<Role_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Role_Order_By>>;
  where?: Maybe<Role_Bool_Exp>;
};


export type Query_RootRole_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootUserArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};


export type Query_RootUser_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};


export type Query_RootUser_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootUser_RoleArgs = {
  distinct_on?: Maybe<Array<User_Role_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Role_Order_By>>;
  where?: Maybe<User_Role_Bool_Exp>;
};


export type Query_RootUser_Role_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Role_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Role_Order_By>>;
  where?: Maybe<User_Role_Bool_Exp>;
};


export type Query_RootUser_Role_By_PkArgs = {
  id: Scalars['Int'];
};

export type Role = {
   __typename?: 'role';
  id: Scalars['Int'];
  name: Scalars['String'];
};

export type Role_Aggregate = {
   __typename?: 'role_aggregate';
  aggregate?: Maybe<Role_Aggregate_Fields>;
  nodes: Array<Role>;
};

export type Role_Aggregate_Fields = {
   __typename?: 'role_aggregate_fields';
  avg?: Maybe<Role_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Role_Max_Fields>;
  min?: Maybe<Role_Min_Fields>;
  stddev?: Maybe<Role_Stddev_Fields>;
  stddev_pop?: Maybe<Role_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Role_Stddev_Samp_Fields>;
  sum?: Maybe<Role_Sum_Fields>;
  var_pop?: Maybe<Role_Var_Pop_Fields>;
  var_samp?: Maybe<Role_Var_Samp_Fields>;
  variance?: Maybe<Role_Variance_Fields>;
};


export type Role_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Role_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type Role_Aggregate_Order_By = {
  avg?: Maybe<Role_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Role_Max_Order_By>;
  min?: Maybe<Role_Min_Order_By>;
  stddev?: Maybe<Role_Stddev_Order_By>;
  stddev_pop?: Maybe<Role_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Role_Stddev_Samp_Order_By>;
  sum?: Maybe<Role_Sum_Order_By>;
  var_pop?: Maybe<Role_Var_Pop_Order_By>;
  var_samp?: Maybe<Role_Var_Samp_Order_By>;
  variance?: Maybe<Role_Variance_Order_By>;
};

export type Role_Arr_Rel_Insert_Input = {
  data: Array<Role_Insert_Input>;
  on_conflict?: Maybe<Role_On_Conflict>;
};

export type Role_Avg_Fields = {
   __typename?: 'role_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Role_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

export type Role_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Role_Bool_Exp>>>;
  _not?: Maybe<Role_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Role_Bool_Exp>>>;
  id?: Maybe<Int_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
};

export enum Role_Constraint {
  RoleNameKey = 'role_name_key',
  RolePkey = 'role_pkey'
}

export type Role_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

export type Role_Insert_Input = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export type Role_Max_Fields = {
   __typename?: 'role_max_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export type Role_Max_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

export type Role_Min_Fields = {
   __typename?: 'role_min_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export type Role_Min_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

export type Role_Mutation_Response = {
   __typename?: 'role_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<Role>;
};

export type Role_Obj_Rel_Insert_Input = {
  data: Role_Insert_Input;
  on_conflict?: Maybe<Role_On_Conflict>;
};

export type Role_On_Conflict = {
  constraint: Role_Constraint;
  update_columns: Array<Role_Update_Column>;
  where?: Maybe<Role_Bool_Exp>;
};

export type Role_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

export enum Role_Select_Column {
  Id = 'id',
  Name = 'name'
}

export type Role_Set_Input = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export type Role_Stddev_Fields = {
   __typename?: 'role_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Role_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

export type Role_Stddev_Pop_Fields = {
   __typename?: 'role_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Role_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

export type Role_Stddev_Samp_Fields = {
   __typename?: 'role_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Role_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

export type Role_Sum_Fields = {
   __typename?: 'role_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

export type Role_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

export enum Role_Update_Column {
  Id = 'id',
  Name = 'name'
}

export type Role_Var_Pop_Fields = {
   __typename?: 'role_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Role_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

export type Role_Var_Samp_Fields = {
   __typename?: 'role_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Role_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

export type Role_Variance_Fields = {
   __typename?: 'role_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Role_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  _nlike?: Maybe<Scalars['String']>;
  _nsimilar?: Maybe<Scalars['String']>;
  _similar?: Maybe<Scalars['String']>;
};

export type Subscription_Root = {
   __typename?: 'subscription_root';
  role: Array<Role>;
  role_aggregate: Role_Aggregate;
  role_by_pk?: Maybe<Role>;
  user: Array<User>;
  user_aggregate: User_Aggregate;
  user_by_pk?: Maybe<User>;
  user_role: Array<User_Role>;
  user_role_aggregate: User_Role_Aggregate;
  user_role_by_pk?: Maybe<User_Role>;
};


export type Subscription_RootRoleArgs = {
  distinct_on?: Maybe<Array<Role_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Role_Order_By>>;
  where?: Maybe<Role_Bool_Exp>;
};


export type Subscription_RootRole_AggregateArgs = {
  distinct_on?: Maybe<Array<Role_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Role_Order_By>>;
  where?: Maybe<Role_Bool_Exp>;
};


export type Subscription_RootRole_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootUserArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};


export type Subscription_RootUser_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};


export type Subscription_RootUser_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootUser_RoleArgs = {
  distinct_on?: Maybe<Array<User_Role_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Role_Order_By>>;
  where?: Maybe<User_Role_Bool_Exp>;
};


export type Subscription_RootUser_Role_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Role_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Role_Order_By>>;
  where?: Maybe<User_Role_Bool_Exp>;
};


export type Subscription_RootUser_Role_By_PkArgs = {
  id: Scalars['Int'];
};

export type User = {
   __typename?: 'user';
  id: Scalars['Int'];
  password?: Maybe<Scalars['String']>;
  salt?: Maybe<Scalars['String']>;
  user_role?: Maybe<User_Role>;
  username: Scalars['String'];
};

export type User_Aggregate = {
   __typename?: 'user_aggregate';
  aggregate?: Maybe<User_Aggregate_Fields>;
  nodes: Array<User>;
};

export type User_Aggregate_Fields = {
   __typename?: 'user_aggregate_fields';
  avg?: Maybe<User_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<User_Max_Fields>;
  min?: Maybe<User_Min_Fields>;
  stddev?: Maybe<User_Stddev_Fields>;
  stddev_pop?: Maybe<User_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<User_Stddev_Samp_Fields>;
  sum?: Maybe<User_Sum_Fields>;
  var_pop?: Maybe<User_Var_Pop_Fields>;
  var_samp?: Maybe<User_Var_Samp_Fields>;
  variance?: Maybe<User_Variance_Fields>;
};


export type User_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<User_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type User_Aggregate_Order_By = {
  avg?: Maybe<User_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<User_Max_Order_By>;
  min?: Maybe<User_Min_Order_By>;
  stddev?: Maybe<User_Stddev_Order_By>;
  stddev_pop?: Maybe<User_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<User_Stddev_Samp_Order_By>;
  sum?: Maybe<User_Sum_Order_By>;
  var_pop?: Maybe<User_Var_Pop_Order_By>;
  var_samp?: Maybe<User_Var_Samp_Order_By>;
  variance?: Maybe<User_Variance_Order_By>;
};

export type User_Arr_Rel_Insert_Input = {
  data: Array<User_Insert_Input>;
  on_conflict?: Maybe<User_On_Conflict>;
};

export type User_Avg_Fields = {
   __typename?: 'user_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

export type User_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

export type User_Bool_Exp = {
  _and?: Maybe<Array<Maybe<User_Bool_Exp>>>;
  _not?: Maybe<User_Bool_Exp>;
  _or?: Maybe<Array<Maybe<User_Bool_Exp>>>;
  id?: Maybe<Int_Comparison_Exp>;
  password?: Maybe<String_Comparison_Exp>;
  salt?: Maybe<String_Comparison_Exp>;
  user_role?: Maybe<User_Role_Bool_Exp>;
  username?: Maybe<String_Comparison_Exp>;
};

export enum User_Constraint {
  UserPkey = 'user_pkey'
}

export type User_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

export type User_Insert_Input = {
  id?: Maybe<Scalars['Int']>;
  password?: Maybe<Scalars['String']>;
  salt?: Maybe<Scalars['String']>;
  user_role?: Maybe<User_Role_Obj_Rel_Insert_Input>;
  username?: Maybe<Scalars['String']>;
};

export type User_Max_Fields = {
   __typename?: 'user_max_fields';
  id?: Maybe<Scalars['Int']>;
  password?: Maybe<Scalars['String']>;
  salt?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

export type User_Max_Order_By = {
  id?: Maybe<Order_By>;
  password?: Maybe<Order_By>;
  salt?: Maybe<Order_By>;
  username?: Maybe<Order_By>;
};

export type User_Min_Fields = {
   __typename?: 'user_min_fields';
  id?: Maybe<Scalars['Int']>;
  password?: Maybe<Scalars['String']>;
  salt?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

export type User_Min_Order_By = {
  id?: Maybe<Order_By>;
  password?: Maybe<Order_By>;
  salt?: Maybe<Order_By>;
  username?: Maybe<Order_By>;
};

export type User_Mutation_Response = {
   __typename?: 'user_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<User>;
};

export type User_Obj_Rel_Insert_Input = {
  data: User_Insert_Input;
  on_conflict?: Maybe<User_On_Conflict>;
};

export type User_On_Conflict = {
  constraint: User_Constraint;
  update_columns: Array<User_Update_Column>;
  where?: Maybe<User_Bool_Exp>;
};

export type User_Order_By = {
  id?: Maybe<Order_By>;
  password?: Maybe<Order_By>;
  salt?: Maybe<Order_By>;
  user_role?: Maybe<User_Role_Order_By>;
  username?: Maybe<Order_By>;
};

export type User_Role = {
   __typename?: 'user_role';
  id: Scalars['Int'];
  role: Role;
  role_id: Scalars['Int'];
  user: User;
  user_id: Scalars['Int'];
};

export type User_Role_Aggregate = {
   __typename?: 'user_role_aggregate';
  aggregate?: Maybe<User_Role_Aggregate_Fields>;
  nodes: Array<User_Role>;
};

export type User_Role_Aggregate_Fields = {
   __typename?: 'user_role_aggregate_fields';
  avg?: Maybe<User_Role_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<User_Role_Max_Fields>;
  min?: Maybe<User_Role_Min_Fields>;
  stddev?: Maybe<User_Role_Stddev_Fields>;
  stddev_pop?: Maybe<User_Role_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<User_Role_Stddev_Samp_Fields>;
  sum?: Maybe<User_Role_Sum_Fields>;
  var_pop?: Maybe<User_Role_Var_Pop_Fields>;
  var_samp?: Maybe<User_Role_Var_Samp_Fields>;
  variance?: Maybe<User_Role_Variance_Fields>;
};


export type User_Role_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<User_Role_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type User_Role_Aggregate_Order_By = {
  avg?: Maybe<User_Role_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<User_Role_Max_Order_By>;
  min?: Maybe<User_Role_Min_Order_By>;
  stddev?: Maybe<User_Role_Stddev_Order_By>;
  stddev_pop?: Maybe<User_Role_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<User_Role_Stddev_Samp_Order_By>;
  sum?: Maybe<User_Role_Sum_Order_By>;
  var_pop?: Maybe<User_Role_Var_Pop_Order_By>;
  var_samp?: Maybe<User_Role_Var_Samp_Order_By>;
  variance?: Maybe<User_Role_Variance_Order_By>;
};

export type User_Role_Arr_Rel_Insert_Input = {
  data: Array<User_Role_Insert_Input>;
  on_conflict?: Maybe<User_Role_On_Conflict>;
};

export type User_Role_Avg_Fields = {
   __typename?: 'user_role_avg_fields';
  id?: Maybe<Scalars['Float']>;
  role_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

export type User_Role_Avg_Order_By = {
  id?: Maybe<Order_By>;
  role_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

export type User_Role_Bool_Exp = {
  _and?: Maybe<Array<Maybe<User_Role_Bool_Exp>>>;
  _not?: Maybe<User_Role_Bool_Exp>;
  _or?: Maybe<Array<Maybe<User_Role_Bool_Exp>>>;
  id?: Maybe<Int_Comparison_Exp>;
  role?: Maybe<Role_Bool_Exp>;
  role_id?: Maybe<Int_Comparison_Exp>;
  user?: Maybe<User_Bool_Exp>;
  user_id?: Maybe<Int_Comparison_Exp>;
};

export enum User_Role_Constraint {
  UserRolePkey = 'user_role_pkey',
  UserRoleUserIdRoleIdKey = 'user_role_user_id_role_id_key'
}

export type User_Role_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  role_id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

export type User_Role_Insert_Input = {
  id?: Maybe<Scalars['Int']>;
  role?: Maybe<Role_Obj_Rel_Insert_Input>;
  role_id?: Maybe<Scalars['Int']>;
  user?: Maybe<User_Obj_Rel_Insert_Input>;
  user_id?: Maybe<Scalars['Int']>;
};

export type User_Role_Max_Fields = {
   __typename?: 'user_role_max_fields';
  id?: Maybe<Scalars['Int']>;
  role_id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

export type User_Role_Max_Order_By = {
  id?: Maybe<Order_By>;
  role_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

export type User_Role_Min_Fields = {
   __typename?: 'user_role_min_fields';
  id?: Maybe<Scalars['Int']>;
  role_id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

export type User_Role_Min_Order_By = {
  id?: Maybe<Order_By>;
  role_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

export type User_Role_Mutation_Response = {
   __typename?: 'user_role_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<User_Role>;
};

export type User_Role_Obj_Rel_Insert_Input = {
  data: User_Role_Insert_Input;
  on_conflict?: Maybe<User_Role_On_Conflict>;
};

export type User_Role_On_Conflict = {
  constraint: User_Role_Constraint;
  update_columns: Array<User_Role_Update_Column>;
  where?: Maybe<User_Role_Bool_Exp>;
};

export type User_Role_Order_By = {
  id?: Maybe<Order_By>;
  role?: Maybe<Role_Order_By>;
  role_id?: Maybe<Order_By>;
  user?: Maybe<User_Order_By>;
  user_id?: Maybe<Order_By>;
};

export enum User_Role_Select_Column {
  Id = 'id',
  RoleId = 'role_id',
  UserId = 'user_id'
}

export type User_Role_Set_Input = {
  id?: Maybe<Scalars['Int']>;
  role_id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

export type User_Role_Stddev_Fields = {
   __typename?: 'user_role_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  role_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

export type User_Role_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  role_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

export type User_Role_Stddev_Pop_Fields = {
   __typename?: 'user_role_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  role_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

export type User_Role_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  role_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

export type User_Role_Stddev_Samp_Fields = {
   __typename?: 'user_role_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  role_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

export type User_Role_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  role_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

export type User_Role_Sum_Fields = {
   __typename?: 'user_role_sum_fields';
  id?: Maybe<Scalars['Int']>;
  role_id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

export type User_Role_Sum_Order_By = {
  id?: Maybe<Order_By>;
  role_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

export enum User_Role_Update_Column {
  Id = 'id',
  RoleId = 'role_id',
  UserId = 'user_id'
}

export type User_Role_Var_Pop_Fields = {
   __typename?: 'user_role_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  role_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

export type User_Role_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  role_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

export type User_Role_Var_Samp_Fields = {
   __typename?: 'user_role_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  role_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

export type User_Role_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  role_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

export type User_Role_Variance_Fields = {
   __typename?: 'user_role_variance_fields';
  id?: Maybe<Scalars['Float']>;
  role_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

export type User_Role_Variance_Order_By = {
  id?: Maybe<Order_By>;
  role_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

export enum User_Select_Column {
  Id = 'id',
  Password = 'password',
  Salt = 'salt',
  Username = 'username'
}

export type User_Set_Input = {
  id?: Maybe<Scalars['Int']>;
  password?: Maybe<Scalars['String']>;
  salt?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

export type User_Stddev_Fields = {
   __typename?: 'user_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

export type User_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

export type User_Stddev_Pop_Fields = {
   __typename?: 'user_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

export type User_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

export type User_Stddev_Samp_Fields = {
   __typename?: 'user_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

export type User_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

export type User_Sum_Fields = {
   __typename?: 'user_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

export type User_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

export enum User_Update_Column {
  Id = 'id',
  Password = 'password',
  Salt = 'salt',
  Username = 'username'
}

export type User_Var_Pop_Fields = {
   __typename?: 'user_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

export type User_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

export type User_Var_Samp_Fields = {
   __typename?: 'user_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

export type User_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

export type User_Variance_Fields = {
   __typename?: 'user_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

export type User_Variance_Order_By = {
  id?: Maybe<Order_By>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type isTypeOfResolverFn<T = {}> = (obj: T, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  query_root: ResolverTypeWrapper<{}>,
  role_select_column: Role_Select_Column,
  Int: ResolverTypeWrapper<Scalars['Int']>,
  role_order_by: Role_Order_By,
  order_by: Order_By,
  role_bool_exp: Role_Bool_Exp,
  Int_comparison_exp: Int_Comparison_Exp,
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>,
  String_comparison_exp: String_Comparison_Exp,
  String: ResolverTypeWrapper<Scalars['String']>,
  role: ResolverTypeWrapper<Role>,
  role_aggregate: ResolverTypeWrapper<Role_Aggregate>,
  role_aggregate_fields: ResolverTypeWrapper<Role_Aggregate_Fields>,
  role_avg_fields: ResolverTypeWrapper<Role_Avg_Fields>,
  Float: ResolverTypeWrapper<Scalars['Float']>,
  role_max_fields: ResolverTypeWrapper<Role_Max_Fields>,
  role_min_fields: ResolverTypeWrapper<Role_Min_Fields>,
  role_stddev_fields: ResolverTypeWrapper<Role_Stddev_Fields>,
  role_stddev_pop_fields: ResolverTypeWrapper<Role_Stddev_Pop_Fields>,
  role_stddev_samp_fields: ResolverTypeWrapper<Role_Stddev_Samp_Fields>,
  role_sum_fields: ResolverTypeWrapper<Role_Sum_Fields>,
  role_var_pop_fields: ResolverTypeWrapper<Role_Var_Pop_Fields>,
  role_var_samp_fields: ResolverTypeWrapper<Role_Var_Samp_Fields>,
  role_variance_fields: ResolverTypeWrapper<Role_Variance_Fields>,
  user_select_column: User_Select_Column,
  user_order_by: User_Order_By,
  user_role_order_by: User_Role_Order_By,
  user_bool_exp: User_Bool_Exp,
  user_role_bool_exp: User_Role_Bool_Exp,
  user: ResolverTypeWrapper<User>,
  user_role: ResolverTypeWrapper<User_Role>,
  user_aggregate: ResolverTypeWrapper<User_Aggregate>,
  user_aggregate_fields: ResolverTypeWrapper<User_Aggregate_Fields>,
  user_avg_fields: ResolverTypeWrapper<User_Avg_Fields>,
  user_max_fields: ResolverTypeWrapper<User_Max_Fields>,
  user_min_fields: ResolverTypeWrapper<User_Min_Fields>,
  user_stddev_fields: ResolverTypeWrapper<User_Stddev_Fields>,
  user_stddev_pop_fields: ResolverTypeWrapper<User_Stddev_Pop_Fields>,
  user_stddev_samp_fields: ResolverTypeWrapper<User_Stddev_Samp_Fields>,
  user_sum_fields: ResolverTypeWrapper<User_Sum_Fields>,
  user_var_pop_fields: ResolverTypeWrapper<User_Var_Pop_Fields>,
  user_var_samp_fields: ResolverTypeWrapper<User_Var_Samp_Fields>,
  user_variance_fields: ResolverTypeWrapper<User_Variance_Fields>,
  user_role_select_column: User_Role_Select_Column,
  user_role_aggregate: ResolverTypeWrapper<User_Role_Aggregate>,
  user_role_aggregate_fields: ResolverTypeWrapper<User_Role_Aggregate_Fields>,
  user_role_avg_fields: ResolverTypeWrapper<User_Role_Avg_Fields>,
  user_role_max_fields: ResolverTypeWrapper<User_Role_Max_Fields>,
  user_role_min_fields: ResolverTypeWrapper<User_Role_Min_Fields>,
  user_role_stddev_fields: ResolverTypeWrapper<User_Role_Stddev_Fields>,
  user_role_stddev_pop_fields: ResolverTypeWrapper<User_Role_Stddev_Pop_Fields>,
  user_role_stddev_samp_fields: ResolverTypeWrapper<User_Role_Stddev_Samp_Fields>,
  user_role_sum_fields: ResolverTypeWrapper<User_Role_Sum_Fields>,
  user_role_var_pop_fields: ResolverTypeWrapper<User_Role_Var_Pop_Fields>,
  user_role_var_samp_fields: ResolverTypeWrapper<User_Role_Var_Samp_Fields>,
  user_role_variance_fields: ResolverTypeWrapper<User_Role_Variance_Fields>,
  mutation_root: ResolverTypeWrapper<{}>,
  role_mutation_response: ResolverTypeWrapper<Role_Mutation_Response>,
  user_mutation_response: ResolverTypeWrapper<User_Mutation_Response>,
  user_role_mutation_response: ResolverTypeWrapper<User_Role_Mutation_Response>,
  role_insert_input: Role_Insert_Input,
  role_on_conflict: Role_On_Conflict,
  role_constraint: Role_Constraint,
  role_update_column: Role_Update_Column,
  user_insert_input: User_Insert_Input,
  user_role_obj_rel_insert_input: User_Role_Obj_Rel_Insert_Input,
  user_role_insert_input: User_Role_Insert_Input,
  role_obj_rel_insert_input: Role_Obj_Rel_Insert_Input,
  user_obj_rel_insert_input: User_Obj_Rel_Insert_Input,
  user_on_conflict: User_On_Conflict,
  user_constraint: User_Constraint,
  user_update_column: User_Update_Column,
  user_role_on_conflict: User_Role_On_Conflict,
  user_role_constraint: User_Role_Constraint,
  user_role_update_column: User_Role_Update_Column,
  role_inc_input: Role_Inc_Input,
  role_set_input: Role_Set_Input,
  user_inc_input: User_Inc_Input,
  user_set_input: User_Set_Input,
  user_role_inc_input: User_Role_Inc_Input,
  user_role_set_input: User_Role_Set_Input,
  subscription_root: ResolverTypeWrapper<{}>,
  role_aggregate_order_by: Role_Aggregate_Order_By,
  role_avg_order_by: Role_Avg_Order_By,
  role_max_order_by: Role_Max_Order_By,
  role_min_order_by: Role_Min_Order_By,
  role_stddev_order_by: Role_Stddev_Order_By,
  role_stddev_pop_order_by: Role_Stddev_Pop_Order_By,
  role_stddev_samp_order_by: Role_Stddev_Samp_Order_By,
  role_sum_order_by: Role_Sum_Order_By,
  role_var_pop_order_by: Role_Var_Pop_Order_By,
  role_var_samp_order_by: Role_Var_Samp_Order_By,
  role_variance_order_by: Role_Variance_Order_By,
  role_arr_rel_insert_input: Role_Arr_Rel_Insert_Input,
  user_aggregate_order_by: User_Aggregate_Order_By,
  user_avg_order_by: User_Avg_Order_By,
  user_max_order_by: User_Max_Order_By,
  user_min_order_by: User_Min_Order_By,
  user_stddev_order_by: User_Stddev_Order_By,
  user_stddev_pop_order_by: User_Stddev_Pop_Order_By,
  user_stddev_samp_order_by: User_Stddev_Samp_Order_By,
  user_sum_order_by: User_Sum_Order_By,
  user_var_pop_order_by: User_Var_Pop_Order_By,
  user_var_samp_order_by: User_Var_Samp_Order_By,
  user_variance_order_by: User_Variance_Order_By,
  user_arr_rel_insert_input: User_Arr_Rel_Insert_Input,
  user_role_aggregate_order_by: User_Role_Aggregate_Order_By,
  user_role_avg_order_by: User_Role_Avg_Order_By,
  user_role_max_order_by: User_Role_Max_Order_By,
  user_role_min_order_by: User_Role_Min_Order_By,
  user_role_stddev_order_by: User_Role_Stddev_Order_By,
  user_role_stddev_pop_order_by: User_Role_Stddev_Pop_Order_By,
  user_role_stddev_samp_order_by: User_Role_Stddev_Samp_Order_By,
  user_role_sum_order_by: User_Role_Sum_Order_By,
  user_role_var_pop_order_by: User_Role_Var_Pop_Order_By,
  user_role_var_samp_order_by: User_Role_Var_Samp_Order_By,
  user_role_variance_order_by: User_Role_Variance_Order_By,
  user_role_arr_rel_insert_input: User_Role_Arr_Rel_Insert_Input,
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  query_root: {},
  role_select_column: Role_Select_Column,
  Int: Scalars['Int'],
  role_order_by: Role_Order_By,
  order_by: Order_By,
  role_bool_exp: Role_Bool_Exp,
  Int_comparison_exp: Int_Comparison_Exp,
  Boolean: Scalars['Boolean'],
  String_comparison_exp: String_Comparison_Exp,
  String: Scalars['String'],
  role: Role,
  role_aggregate: Role_Aggregate,
  role_aggregate_fields: Role_Aggregate_Fields,
  role_avg_fields: Role_Avg_Fields,
  Float: Scalars['Float'],
  role_max_fields: Role_Max_Fields,
  role_min_fields: Role_Min_Fields,
  role_stddev_fields: Role_Stddev_Fields,
  role_stddev_pop_fields: Role_Stddev_Pop_Fields,
  role_stddev_samp_fields: Role_Stddev_Samp_Fields,
  role_sum_fields: Role_Sum_Fields,
  role_var_pop_fields: Role_Var_Pop_Fields,
  role_var_samp_fields: Role_Var_Samp_Fields,
  role_variance_fields: Role_Variance_Fields,
  user_select_column: User_Select_Column,
  user_order_by: User_Order_By,
  user_role_order_by: User_Role_Order_By,
  user_bool_exp: User_Bool_Exp,
  user_role_bool_exp: User_Role_Bool_Exp,
  user: User,
  user_role: User_Role,
  user_aggregate: User_Aggregate,
  user_aggregate_fields: User_Aggregate_Fields,
  user_avg_fields: User_Avg_Fields,
  user_max_fields: User_Max_Fields,
  user_min_fields: User_Min_Fields,
  user_stddev_fields: User_Stddev_Fields,
  user_stddev_pop_fields: User_Stddev_Pop_Fields,
  user_stddev_samp_fields: User_Stddev_Samp_Fields,
  user_sum_fields: User_Sum_Fields,
  user_var_pop_fields: User_Var_Pop_Fields,
  user_var_samp_fields: User_Var_Samp_Fields,
  user_variance_fields: User_Variance_Fields,
  user_role_select_column: User_Role_Select_Column,
  user_role_aggregate: User_Role_Aggregate,
  user_role_aggregate_fields: User_Role_Aggregate_Fields,
  user_role_avg_fields: User_Role_Avg_Fields,
  user_role_max_fields: User_Role_Max_Fields,
  user_role_min_fields: User_Role_Min_Fields,
  user_role_stddev_fields: User_Role_Stddev_Fields,
  user_role_stddev_pop_fields: User_Role_Stddev_Pop_Fields,
  user_role_stddev_samp_fields: User_Role_Stddev_Samp_Fields,
  user_role_sum_fields: User_Role_Sum_Fields,
  user_role_var_pop_fields: User_Role_Var_Pop_Fields,
  user_role_var_samp_fields: User_Role_Var_Samp_Fields,
  user_role_variance_fields: User_Role_Variance_Fields,
  mutation_root: {},
  role_mutation_response: Role_Mutation_Response,
  user_mutation_response: User_Mutation_Response,
  user_role_mutation_response: User_Role_Mutation_Response,
  role_insert_input: Role_Insert_Input,
  role_on_conflict: Role_On_Conflict,
  role_constraint: Role_Constraint,
  role_update_column: Role_Update_Column,
  user_insert_input: User_Insert_Input,
  user_role_obj_rel_insert_input: User_Role_Obj_Rel_Insert_Input,
  user_role_insert_input: User_Role_Insert_Input,
  role_obj_rel_insert_input: Role_Obj_Rel_Insert_Input,
  user_obj_rel_insert_input: User_Obj_Rel_Insert_Input,
  user_on_conflict: User_On_Conflict,
  user_constraint: User_Constraint,
  user_update_column: User_Update_Column,
  user_role_on_conflict: User_Role_On_Conflict,
  user_role_constraint: User_Role_Constraint,
  user_role_update_column: User_Role_Update_Column,
  role_inc_input: Role_Inc_Input,
  role_set_input: Role_Set_Input,
  user_inc_input: User_Inc_Input,
  user_set_input: User_Set_Input,
  user_role_inc_input: User_Role_Inc_Input,
  user_role_set_input: User_Role_Set_Input,
  subscription_root: {},
  role_aggregate_order_by: Role_Aggregate_Order_By,
  role_avg_order_by: Role_Avg_Order_By,
  role_max_order_by: Role_Max_Order_By,
  role_min_order_by: Role_Min_Order_By,
  role_stddev_order_by: Role_Stddev_Order_By,
  role_stddev_pop_order_by: Role_Stddev_Pop_Order_By,
  role_stddev_samp_order_by: Role_Stddev_Samp_Order_By,
  role_sum_order_by: Role_Sum_Order_By,
  role_var_pop_order_by: Role_Var_Pop_Order_By,
  role_var_samp_order_by: Role_Var_Samp_Order_By,
  role_variance_order_by: Role_Variance_Order_By,
  role_arr_rel_insert_input: Role_Arr_Rel_Insert_Input,
  user_aggregate_order_by: User_Aggregate_Order_By,
  user_avg_order_by: User_Avg_Order_By,
  user_max_order_by: User_Max_Order_By,
  user_min_order_by: User_Min_Order_By,
  user_stddev_order_by: User_Stddev_Order_By,
  user_stddev_pop_order_by: User_Stddev_Pop_Order_By,
  user_stddev_samp_order_by: User_Stddev_Samp_Order_By,
  user_sum_order_by: User_Sum_Order_By,
  user_var_pop_order_by: User_Var_Pop_Order_By,
  user_var_samp_order_by: User_Var_Samp_Order_By,
  user_variance_order_by: User_Variance_Order_By,
  user_arr_rel_insert_input: User_Arr_Rel_Insert_Input,
  user_role_aggregate_order_by: User_Role_Aggregate_Order_By,
  user_role_avg_order_by: User_Role_Avg_Order_By,
  user_role_max_order_by: User_Role_Max_Order_By,
  user_role_min_order_by: User_Role_Min_Order_By,
  user_role_stddev_order_by: User_Role_Stddev_Order_By,
  user_role_stddev_pop_order_by: User_Role_Stddev_Pop_Order_By,
  user_role_stddev_samp_order_by: User_Role_Stddev_Samp_Order_By,
  user_role_sum_order_by: User_Role_Sum_Order_By,
  user_role_var_pop_order_by: User_Role_Var_Pop_Order_By,
  user_role_var_samp_order_by: User_Role_Var_Samp_Order_By,
  user_role_variance_order_by: User_Role_Variance_Order_By,
  user_role_arr_rel_insert_input: User_Role_Arr_Rel_Insert_Input,
};

export type Mutation_RootResolvers<ContextType = any, ParentType extends ResolversParentTypes['mutation_root'] = ResolversParentTypes['mutation_root']> = {
  delete_role?: Resolver<Maybe<ResolversTypes['role_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_RoleArgs, 'where'>>,
  delete_user?: Resolver<Maybe<ResolversTypes['user_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_UserArgs, 'where'>>,
  delete_user_role?: Resolver<Maybe<ResolversTypes['user_role_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_User_RoleArgs, 'where'>>,
  insert_role?: Resolver<Maybe<ResolversTypes['role_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_RoleArgs, 'objects'>>,
  insert_user?: Resolver<Maybe<ResolversTypes['user_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_UserArgs, 'objects'>>,
  insert_user_role?: Resolver<Maybe<ResolversTypes['user_role_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_User_RoleArgs, 'objects'>>,
  update_role?: Resolver<Maybe<ResolversTypes['role_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_RoleArgs, 'where'>>,
  update_user?: Resolver<Maybe<ResolversTypes['user_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_UserArgs, 'where'>>,
  update_user_role?: Resolver<Maybe<ResolversTypes['user_role_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_User_RoleArgs, 'where'>>,
};

export type Query_RootResolvers<ContextType = any, ParentType extends ResolversParentTypes['query_root'] = ResolversParentTypes['query_root']> = {
  role?: Resolver<Array<ResolversTypes['role']>, ParentType, ContextType, RequireFields<Query_RootRoleArgs, never>>,
  role_aggregate?: Resolver<ResolversTypes['role_aggregate'], ParentType, ContextType, RequireFields<Query_RootRole_AggregateArgs, never>>,
  role_by_pk?: Resolver<Maybe<ResolversTypes['role']>, ParentType, ContextType, RequireFields<Query_RootRole_By_PkArgs, 'id'>>,
  user?: Resolver<Array<ResolversTypes['user']>, ParentType, ContextType, RequireFields<Query_RootUserArgs, never>>,
  user_aggregate?: Resolver<ResolversTypes['user_aggregate'], ParentType, ContextType, RequireFields<Query_RootUser_AggregateArgs, never>>,
  user_by_pk?: Resolver<Maybe<ResolversTypes['user']>, ParentType, ContextType, RequireFields<Query_RootUser_By_PkArgs, 'id'>>,
  user_role?: Resolver<Array<ResolversTypes['user_role']>, ParentType, ContextType, RequireFields<Query_RootUser_RoleArgs, never>>,
  user_role_aggregate?: Resolver<ResolversTypes['user_role_aggregate'], ParentType, ContextType, RequireFields<Query_RootUser_Role_AggregateArgs, never>>,
  user_role_by_pk?: Resolver<Maybe<ResolversTypes['user_role']>, ParentType, ContextType, RequireFields<Query_RootUser_Role_By_PkArgs, 'id'>>,
};

export type RoleResolvers<ContextType = any, ParentType extends ResolversParentTypes['role'] = ResolversParentTypes['role']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type Role_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['role_aggregate'] = ResolversParentTypes['role_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['role_aggregate_fields']>, ParentType, ContextType>,
  nodes?: Resolver<Array<ResolversTypes['role']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type Role_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['role_aggregate_fields'] = ResolversParentTypes['role_aggregate_fields']> = {
  avg?: Resolver<Maybe<ResolversTypes['role_avg_fields']>, ParentType, ContextType>,
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<Role_Aggregate_FieldsCountArgs, never>>,
  max?: Resolver<Maybe<ResolversTypes['role_max_fields']>, ParentType, ContextType>,
  min?: Resolver<Maybe<ResolversTypes['role_min_fields']>, ParentType, ContextType>,
  stddev?: Resolver<Maybe<ResolversTypes['role_stddev_fields']>, ParentType, ContextType>,
  stddev_pop?: Resolver<Maybe<ResolversTypes['role_stddev_pop_fields']>, ParentType, ContextType>,
  stddev_samp?: Resolver<Maybe<ResolversTypes['role_stddev_samp_fields']>, ParentType, ContextType>,
  sum?: Resolver<Maybe<ResolversTypes['role_sum_fields']>, ParentType, ContextType>,
  var_pop?: Resolver<Maybe<ResolversTypes['role_var_pop_fields']>, ParentType, ContextType>,
  var_samp?: Resolver<Maybe<ResolversTypes['role_var_samp_fields']>, ParentType, ContextType>,
  variance?: Resolver<Maybe<ResolversTypes['role_variance_fields']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type Role_Avg_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['role_avg_fields'] = ResolversParentTypes['role_avg_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type Role_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['role_max_fields'] = ResolversParentTypes['role_max_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type Role_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['role_min_fields'] = ResolversParentTypes['role_min_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type Role_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['role_mutation_response'] = ResolversParentTypes['role_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  returning?: Resolver<Array<ResolversTypes['role']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type Role_Stddev_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['role_stddev_fields'] = ResolversParentTypes['role_stddev_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type Role_Stddev_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['role_stddev_pop_fields'] = ResolversParentTypes['role_stddev_pop_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type Role_Stddev_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['role_stddev_samp_fields'] = ResolversParentTypes['role_stddev_samp_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type Role_Sum_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['role_sum_fields'] = ResolversParentTypes['role_sum_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type Role_Var_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['role_var_pop_fields'] = ResolversParentTypes['role_var_pop_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type Role_Var_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['role_var_samp_fields'] = ResolversParentTypes['role_var_samp_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type Role_Variance_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['role_variance_fields'] = ResolversParentTypes['role_variance_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type Subscription_RootResolvers<ContextType = any, ParentType extends ResolversParentTypes['subscription_root'] = ResolversParentTypes['subscription_root']> = {
  role?: SubscriptionResolver<Array<ResolversTypes['role']>, "role", ParentType, ContextType, RequireFields<Subscription_RootRoleArgs, never>>,
  role_aggregate?: SubscriptionResolver<ResolversTypes['role_aggregate'], "role_aggregate", ParentType, ContextType, RequireFields<Subscription_RootRole_AggregateArgs, never>>,
  role_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['role']>, "role_by_pk", ParentType, ContextType, RequireFields<Subscription_RootRole_By_PkArgs, 'id'>>,
  user?: SubscriptionResolver<Array<ResolversTypes['user']>, "user", ParentType, ContextType, RequireFields<Subscription_RootUserArgs, never>>,
  user_aggregate?: SubscriptionResolver<ResolversTypes['user_aggregate'], "user_aggregate", ParentType, ContextType, RequireFields<Subscription_RootUser_AggregateArgs, never>>,
  user_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['user']>, "user_by_pk", ParentType, ContextType, RequireFields<Subscription_RootUser_By_PkArgs, 'id'>>,
  user_role?: SubscriptionResolver<Array<ResolversTypes['user_role']>, "user_role", ParentType, ContextType, RequireFields<Subscription_RootUser_RoleArgs, never>>,
  user_role_aggregate?: SubscriptionResolver<ResolversTypes['user_role_aggregate'], "user_role_aggregate", ParentType, ContextType, RequireFields<Subscription_RootUser_Role_AggregateArgs, never>>,
  user_role_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['user_role']>, "user_role_by_pk", ParentType, ContextType, RequireFields<Subscription_RootUser_Role_By_PkArgs, 'id'>>,
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['user'] = ResolversParentTypes['user']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  password?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  salt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  user_role?: Resolver<Maybe<ResolversTypes['user_role']>, ParentType, ContextType>,
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type User_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['user_aggregate'] = ResolversParentTypes['user_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['user_aggregate_fields']>, ParentType, ContextType>,
  nodes?: Resolver<Array<ResolversTypes['user']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type User_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['user_aggregate_fields'] = ResolversParentTypes['user_aggregate_fields']> = {
  avg?: Resolver<Maybe<ResolversTypes['user_avg_fields']>, ParentType, ContextType>,
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<User_Aggregate_FieldsCountArgs, never>>,
  max?: Resolver<Maybe<ResolversTypes['user_max_fields']>, ParentType, ContextType>,
  min?: Resolver<Maybe<ResolversTypes['user_min_fields']>, ParentType, ContextType>,
  stddev?: Resolver<Maybe<ResolversTypes['user_stddev_fields']>, ParentType, ContextType>,
  stddev_pop?: Resolver<Maybe<ResolversTypes['user_stddev_pop_fields']>, ParentType, ContextType>,
  stddev_samp?: Resolver<Maybe<ResolversTypes['user_stddev_samp_fields']>, ParentType, ContextType>,
  sum?: Resolver<Maybe<ResolversTypes['user_sum_fields']>, ParentType, ContextType>,
  var_pop?: Resolver<Maybe<ResolversTypes['user_var_pop_fields']>, ParentType, ContextType>,
  var_samp?: Resolver<Maybe<ResolversTypes['user_var_samp_fields']>, ParentType, ContextType>,
  variance?: Resolver<Maybe<ResolversTypes['user_variance_fields']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type User_Avg_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['user_avg_fields'] = ResolversParentTypes['user_avg_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type User_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['user_max_fields'] = ResolversParentTypes['user_max_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  password?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  salt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  username?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type User_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['user_min_fields'] = ResolversParentTypes['user_min_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  password?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  salt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  username?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type User_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['user_mutation_response'] = ResolversParentTypes['user_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  returning?: Resolver<Array<ResolversTypes['user']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type User_RoleResolvers<ContextType = any, ParentType extends ResolversParentTypes['user_role'] = ResolversParentTypes['user_role']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  role?: Resolver<ResolversTypes['role'], ParentType, ContextType>,
  role_id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  user?: Resolver<ResolversTypes['user'], ParentType, ContextType>,
  user_id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type User_Role_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['user_role_aggregate'] = ResolversParentTypes['user_role_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['user_role_aggregate_fields']>, ParentType, ContextType>,
  nodes?: Resolver<Array<ResolversTypes['user_role']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type User_Role_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['user_role_aggregate_fields'] = ResolversParentTypes['user_role_aggregate_fields']> = {
  avg?: Resolver<Maybe<ResolversTypes['user_role_avg_fields']>, ParentType, ContextType>,
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<User_Role_Aggregate_FieldsCountArgs, never>>,
  max?: Resolver<Maybe<ResolversTypes['user_role_max_fields']>, ParentType, ContextType>,
  min?: Resolver<Maybe<ResolversTypes['user_role_min_fields']>, ParentType, ContextType>,
  stddev?: Resolver<Maybe<ResolversTypes['user_role_stddev_fields']>, ParentType, ContextType>,
  stddev_pop?: Resolver<Maybe<ResolversTypes['user_role_stddev_pop_fields']>, ParentType, ContextType>,
  stddev_samp?: Resolver<Maybe<ResolversTypes['user_role_stddev_samp_fields']>, ParentType, ContextType>,
  sum?: Resolver<Maybe<ResolversTypes['user_role_sum_fields']>, ParentType, ContextType>,
  var_pop?: Resolver<Maybe<ResolversTypes['user_role_var_pop_fields']>, ParentType, ContextType>,
  var_samp?: Resolver<Maybe<ResolversTypes['user_role_var_samp_fields']>, ParentType, ContextType>,
  variance?: Resolver<Maybe<ResolversTypes['user_role_variance_fields']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type User_Role_Avg_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['user_role_avg_fields'] = ResolversParentTypes['user_role_avg_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  role_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  user_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type User_Role_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['user_role_max_fields'] = ResolversParentTypes['user_role_max_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  role_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  user_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type User_Role_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['user_role_min_fields'] = ResolversParentTypes['user_role_min_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  role_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  user_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type User_Role_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['user_role_mutation_response'] = ResolversParentTypes['user_role_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  returning?: Resolver<Array<ResolversTypes['user_role']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type User_Role_Stddev_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['user_role_stddev_fields'] = ResolversParentTypes['user_role_stddev_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  role_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  user_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type User_Role_Stddev_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['user_role_stddev_pop_fields'] = ResolversParentTypes['user_role_stddev_pop_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  role_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  user_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type User_Role_Stddev_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['user_role_stddev_samp_fields'] = ResolversParentTypes['user_role_stddev_samp_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  role_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  user_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type User_Role_Sum_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['user_role_sum_fields'] = ResolversParentTypes['user_role_sum_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  role_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  user_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type User_Role_Var_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['user_role_var_pop_fields'] = ResolversParentTypes['user_role_var_pop_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  role_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  user_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type User_Role_Var_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['user_role_var_samp_fields'] = ResolversParentTypes['user_role_var_samp_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  role_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  user_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type User_Role_Variance_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['user_role_variance_fields'] = ResolversParentTypes['user_role_variance_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  role_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  user_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type User_Stddev_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['user_stddev_fields'] = ResolversParentTypes['user_stddev_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type User_Stddev_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['user_stddev_pop_fields'] = ResolversParentTypes['user_stddev_pop_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type User_Stddev_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['user_stddev_samp_fields'] = ResolversParentTypes['user_stddev_samp_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type User_Sum_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['user_sum_fields'] = ResolversParentTypes['user_sum_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type User_Var_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['user_var_pop_fields'] = ResolversParentTypes['user_var_pop_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type User_Var_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['user_var_samp_fields'] = ResolversParentTypes['user_var_samp_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type User_Variance_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['user_variance_fields'] = ResolversParentTypes['user_variance_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type Resolvers<ContextType = any> = {
  mutation_root?: Mutation_RootResolvers<ContextType>,
  query_root?: Query_RootResolvers<ContextType>,
  role?: RoleResolvers<ContextType>,
  role_aggregate?: Role_AggregateResolvers<ContextType>,
  role_aggregate_fields?: Role_Aggregate_FieldsResolvers<ContextType>,
  role_avg_fields?: Role_Avg_FieldsResolvers<ContextType>,
  role_max_fields?: Role_Max_FieldsResolvers<ContextType>,
  role_min_fields?: Role_Min_FieldsResolvers<ContextType>,
  role_mutation_response?: Role_Mutation_ResponseResolvers<ContextType>,
  role_stddev_fields?: Role_Stddev_FieldsResolvers<ContextType>,
  role_stddev_pop_fields?: Role_Stddev_Pop_FieldsResolvers<ContextType>,
  role_stddev_samp_fields?: Role_Stddev_Samp_FieldsResolvers<ContextType>,
  role_sum_fields?: Role_Sum_FieldsResolvers<ContextType>,
  role_var_pop_fields?: Role_Var_Pop_FieldsResolvers<ContextType>,
  role_var_samp_fields?: Role_Var_Samp_FieldsResolvers<ContextType>,
  role_variance_fields?: Role_Variance_FieldsResolvers<ContextType>,
  subscription_root?: Subscription_RootResolvers<ContextType>,
  user?: UserResolvers<ContextType>,
  user_aggregate?: User_AggregateResolvers<ContextType>,
  user_aggregate_fields?: User_Aggregate_FieldsResolvers<ContextType>,
  user_avg_fields?: User_Avg_FieldsResolvers<ContextType>,
  user_max_fields?: User_Max_FieldsResolvers<ContextType>,
  user_min_fields?: User_Min_FieldsResolvers<ContextType>,
  user_mutation_response?: User_Mutation_ResponseResolvers<ContextType>,
  user_role?: User_RoleResolvers<ContextType>,
  user_role_aggregate?: User_Role_AggregateResolvers<ContextType>,
  user_role_aggregate_fields?: User_Role_Aggregate_FieldsResolvers<ContextType>,
  user_role_avg_fields?: User_Role_Avg_FieldsResolvers<ContextType>,
  user_role_max_fields?: User_Role_Max_FieldsResolvers<ContextType>,
  user_role_min_fields?: User_Role_Min_FieldsResolvers<ContextType>,
  user_role_mutation_response?: User_Role_Mutation_ResponseResolvers<ContextType>,
  user_role_stddev_fields?: User_Role_Stddev_FieldsResolvers<ContextType>,
  user_role_stddev_pop_fields?: User_Role_Stddev_Pop_FieldsResolvers<ContextType>,
  user_role_stddev_samp_fields?: User_Role_Stddev_Samp_FieldsResolvers<ContextType>,
  user_role_sum_fields?: User_Role_Sum_FieldsResolvers<ContextType>,
  user_role_var_pop_fields?: User_Role_Var_Pop_FieldsResolvers<ContextType>,
  user_role_var_samp_fields?: User_Role_Var_Samp_FieldsResolvers<ContextType>,
  user_role_variance_fields?: User_Role_Variance_FieldsResolvers<ContextType>,
  user_stddev_fields?: User_Stddev_FieldsResolvers<ContextType>,
  user_stddev_pop_fields?: User_Stddev_Pop_FieldsResolvers<ContextType>,
  user_stddev_samp_fields?: User_Stddev_Samp_FieldsResolvers<ContextType>,
  user_sum_fields?: User_Sum_FieldsResolvers<ContextType>,
  user_var_pop_fields?: User_Var_Pop_FieldsResolvers<ContextType>,
  user_var_samp_fields?: User_Var_Samp_FieldsResolvers<ContextType>,
  user_variance_fields?: User_Variance_FieldsResolvers<ContextType>,
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
*/
export type IResolvers<ContextType = any> = Resolvers<ContextType>;

