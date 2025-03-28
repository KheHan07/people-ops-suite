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
import ballerina/http;

configurable string calendarBaseUrl = ?;
configurable CalendarRetryConfig retryConfig = ?;
configurable Oauth2Config oauthConfig = ?;

# Hr Entity -> HRIS Calendar Event Service Credentials.
@display {
    label: "Google Meet Scheduler Service",
    id: "hris/google-meet-scheduler-service"
}

final http:Client calendarClient = check new (calendarBaseUrl, {
    auth: {
        ...oauthConfig
    },
    httpVersion: http:HTTP_1_1,
    http1Settings: {keepAlive: http:KEEPALIVE_NEVER},
    retryConfig: {
        ...retryConfig
    }
});
