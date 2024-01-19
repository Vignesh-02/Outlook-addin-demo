/*
 * Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
 * See LICENSE in the project root for license information.
 */

/* global Office */

Office.onReady(() => {
  // If needed, Office.js is ready to be called.
});


Outlook.Explorer.explorer = this.Application.ActiveExplorer();
Outlook.Selection.selection = explorer.Selection;

if (selection.Count > 0)   // Check that selection is not empty.
{
    object selectedItem = selection[1];   // Index is one-based.
    Outlook.MailItem mailItem = selectedItem as Outlook.MailItem;

    if (mailItem != null)    // Check that selected item is a message.
    {
        // Process mail item here.
    }
}


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
