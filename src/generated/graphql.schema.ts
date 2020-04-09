export type Maybe<T> = T | null;
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

export type Mutation = {
   __typename?: 'Mutation';
  addUser?: Maybe<User>;
};


export type MutationAddUserArgs = {
  userData?: Maybe<UserInput>;
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

export type Person = {
   __typename?: 'Person';
  name?: Maybe<Scalars['String']>;
  age?: Maybe<Scalars['Int']>;
};

export type Query = {
   __typename?: 'Query';
  getUser?: Maybe<User>;
  say?: Maybe<Person>;
};


export type QueryGetUserArgs = {
  id?: Maybe<Scalars['Int']>;
};

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

export type UserInput = {
  username: Scalars['String'];
  password?: Maybe<Scalars['String']>;
};

