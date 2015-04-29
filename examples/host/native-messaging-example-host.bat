@echo mshta vbscript:execute("CreateObject(""Scripting.FileSystemObject"").GetStandardStream(1).Write( Chr(0016) ):Close")
@echo {"text": "This is a response message"}
@echo off
:: Copyright (c) 2013 The Chromium Authors. All rights reserved.
:: Use of this source code is governed by a BSD-style license that can be
:: found in the LICENSE file.

::python "%~dp0/native-messaging-example-host" %*
