/*
 * Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
 * See LICENSE in the project root for license information.
 */

/* global Office */

Office.onReady(() => {
  // If needed, Office.js is ready to be called.
  if (info.host === Office.HostType.Outlook) {
    // Office is ready
    fetchEmailContent();
}
});


function fetchEmailContent() {
    const item = Office.context.mailbox.item;

    // Access the subject of the item
    const subject = item.subject;

    // Get body content
    item.body.getAsync(Office.CoercionType.Text, (result) => {
        if (result.status === Office.AsyncResultStatus.Succeeded) {
            console.log('Email Body:', result.value);

            Office.context.mailbox.item.customProperties.set("emailItem", result.value);
            Office.context.mailbox.item.customProperties.saveAsync(function (asyncResult) {
    if (asyncResult.status === Office.AsyncResultStatus.Failed) {
        console.error("Failed to save custom property: " + asyncResult.error.message);
    } else {
        console.log("Custom property saved successfully.");
    }
});

            // Do something with the email body
        } else {
            console.error('Error:', result.error);
        }
    });

    // You can also access other properties like sender, to, cc, etc.
}


// Outlook.Explorer.explorer = this.Application.ActiveExplorer();
// Outlook.Selection.selection = explorer.Selection;

// if (selection.Count > 0)   // Check that selection is not empty.
// {
//     object.selectedItem = selection[1];   // Index is one-based.
//     Outlook.MailItem mailItem = selectedItem as Outlook.MailItem;

//     if (mailItem != null)    // Check that selected item is a message.
//     {
//         // Process mail item here.
//     }
// }


/**
 * Shows a notification when the add-in command is executed.
 * @param event {Office.AddinCommands.Event}
 */
function action(event) {
  const message = {
    type: Office.MailboxEnums.ItemNotificationMessageType.InformationalMessage,
    message: "Performed action.",
    icon: "Icon.80x80",
    persistent: true,
  };

  // Show a notification message.
  Office.context.mailbox.item.notificationMessages.replaceAsync("action", message);

  // Be sure to indicate when the add-in command function is complete.
  event.completed();
}

// Register the function with Office.
Office.actions.associate("action", action);
