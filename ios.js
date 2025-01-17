// Copyright 2016 wkh237@github. All rights reserved.
// Use of this source code is governed by a MIT-style license that can be
// found in the LICENSE file.

import { Platform } from "react-native";
import ReactNativeBlobUtil from "./codegenSpecs/NativeBlobUtils";

/**
 * Displays an options menu using UIDocumentInteractionController.presentOptionsMenu
 * @param  {string} path Path of the file to be open.
 * @param  {string} scheme URI scheme that needs to support, optional
 * @return {Promise}
 */
function presentOptionsMenu(path: string, scheme: string) {
  if (Platform.OS === "ios")
    return ReactNativeBlobUtil.presentOptionsMenu("file://" + path, scheme);
  else return Promise.reject("ReactNativeBlobUtil.openDocument only supports IOS.");
}

/**
 * Displays a menu for opening the document using UIDocumentInteractionController.presentOpenInMenu
 * @param  {string} path Path of the file to be open.
 * @param  {string} scheme URI scheme that needs to support, optional
 * @return {Promise}
 */
function presentOpenInMenu(path: string, scheme: string) {
  if (Platform.OS === "ios")
    return ReactNativeBlobUtil.presentOpenInMenu("file://" + path, scheme);
  else return Promise.reject("ReactNativeBlobUtil.openDocument only supports IOS.");
}

/**
 * Displays a full-screen preview of the target document using UIDocumentInteractionController.presentPreview
 * @param  {string} path Path of the file to be open.
 * @param  {string} scheme URI scheme that needs to support, optional
 * @return {Promise}
 */
function presentPreview(path: string, scheme: string) {
  if (Platform.OS === "ios" || Platform.OS === "harmony")
    return ReactNativeBlobUtil.presentPreview("file://" + path, scheme);
  else return Promise.reject("ReactNativeBlobUtil.previewDocument only supports IOS and harmony.");
}

/**
 * Set excludeFromBackupKey to a URL to prevent the resource to be backuped to
 * iCloud.
 * @param  {string} url URL of the resource, only file URL is supported
 * @return {Promise}
 */
function excludeFromBackupKey(path: string) {
  return ReactNativeBlobUtil.excludeFromBackupKey("file://" + path);
}

export default {
  presentPreview,
  openDocument: presentPreview, // legacy alias
  presentOptionsMenu,
  previewDocument: presentOptionsMenu, // legacy alias
  presentOpenInMenu,
  excludeFromBackupKey
};
