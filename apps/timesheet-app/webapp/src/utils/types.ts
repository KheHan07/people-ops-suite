// Copyright (c) 2025 WSO2 LLC. (https://www.wso2.com).
//
// WSO2 LLC. licenses this file to you under the Apache License,
// Version 2.0 (the "License"); you may not use this file except
// in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// KIND, either express or implied.  See the License for the
// specific language governing permissions and limitations
// under the License.

import CancelIcon from "@mui/icons-material/Cancel";
import PendingIcon from "@mui/icons-material/Pending";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { BasicUserInfo, DecodedIDTokenPayload } from "@asgardeo/auth-spa";
import React from "react";

export interface AuthState {
  status: State;
  mode: "active" | "maintenance";
  statusMessage: string | null;
  isAuthenticated: boolean;
  userInfo: BasicUserInfo | null;
  decodedIdToken: DecodedIDTokenPayload | null;
  roles: Roles[];
}

export interface AuthData {
  userInfo: BasicUserInfo;
  idToken: string;
  decodedIdToken: DecodedIDTokenPayload;
}

export interface Employee {
  workEmail: string;
  firstName: string;
  lastName: string;
  jobBand: number;
  employeeThumbnail: string;
}

export interface Header {
  title: string;
  size: number;
  align: "left" | "right" | "center";
}

export enum ThemeMode {
  Light = "light",
  Dark = "dark",
}

export interface PreLoaderProps {
  message: string | null;
  hideLogo?: boolean;
  isLoading?: boolean;
}

export interface ErrorHandlerProps {
  message: string | null;
}

export enum State {
  failed = "failed",
  success = "success",
  loading = "loading",
  idle = "idle",
}

export enum ConfirmationType {
  update = "update",
  send = "send",
  upload = "upload",
  accept = "accept",
}

export enum Roles {
  ADMIN = "ADMIN",
  EMPLOYEE = "EMPLOYEE",
  LEAD = "LEAD",
}

export enum TimesheetStatus {
  PENDING = "PENDING",
  APPROVED = "APPROVED",
  REJECTED = "REJECTED",
}

export interface TimesheetRecord {
  recordId: number;
  employeeEmail: string;
  recordDate: number;
  companyName: string;
  clockInTime: number;
  clockOutTime: number;
  isLunchIncluded: boolean;
  overtimeDuration: number;
  overtimeReason: string | null;
  leadEmail: string;
  overtimeRejectReason: string | null;
  timeLogStatus: TimesheetStatus;
}

export interface CreateUITimesheetRecord {
  recordId: number;
  recordDate: Date | null;
  clockInTime: Date | null;
  clockOutTime: Date | null;
  isLunchIncluded: boolean;
  overtimeDuration: number;
  overtimeReason: string | null;
}

export interface CreateTimeLogs {
  isLunchIncluded: number;
  recordDate: string;
  clockInTime: string;
  clockOutTime: string;
  recordId: number;
  overtimeDuration: number;
  overtimeReason: string | null;
}

export interface CreateTimeLogsPayload {
  timeLogs: CreateTimeLogs[];
  employeeEmail: string;
}

export interface TimesheetData {
  totalRecordCount: number;
  timeLogs: TimesheetRecord[];
  timesheetStats: TimesheetInfo;
}

export interface WorkPolicies {
  otHoursPerYear: number;
  workingHoursPerDay: number;
  lunchHoursPerDay: number;
}

export interface TimesheetInfo {
  approvedRecords?: number;
  overTimeLeft: number;
  pendingRecords?: number;
  rejectedRecords?: number;
  totalOverTimeTaken?: number;
  totalRecords?: number;
}

export interface TimesheetUpdate {
  recordId: number;
  recordDate?: string;
  clockInTime?: number;
  clockOutTime?: number;
  isLunchIncluded?: boolean;
  overtimeDuration?: string;
  overtimeReason?: string;
  overtimeRejectReason?: string;
}

export const statusChipStyles = {
  [TimesheetStatus.APPROVED]: {
    icon: React.createElement(CheckCircleIcon, { fontSize: "small" }),
    color: "success",
  },
  [TimesheetStatus.PENDING]: {
    icon: React.createElement(PendingIcon, { fontSize: "small" }),
    color: "warning",
  },
  [TimesheetStatus.REJECTED]: {
    icon: React.createElement(CancelIcon, { fontSize: "small" }),
    color: "error",
  },
};

export interface Filter {
  id: string;
  field: string;
  operator: string;
  value: any;
}

export interface TimeLogReview {
  recordIds: number[];
  timeLogStatus: TimesheetStatus;
  overtimeRejectReason?: string;
}

export interface NoDataViewProps {
  message?: string;
  description?: string;
  actionLabel?: string;
  onAction?: () => void;
  type?: "empty" | "search" | "error";
  svgIcon?: React.ReactNode;
}

export interface StateWithImageProps {
  message: string;
  imageUrl: string;
}
