/*
 * Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
 * See LICENSE in the project root for license information.
 */

/* global Office */
let _customProps;

Office.onReady(() => {
  // If needed, Office.js is ready to be called.
  if (info.host === Office.HostType.Outlook) {
    // Office is ready
    fetchEmailContent();
}
});


function fetchEmailContent() {
    // Access the subject of the item
    const subject = item.subject;

    Office.context.mailbox.item.loadCustomPropertiesAsync(function(asyncResult){
        if (asyncResult.status === Office.AsyncResultStatus.Succeeded) {
            var customProps = asyncResult.value;
            customProps.set("emailItem", customProps);
      
            customProps.saveAsync(function(result){
               console.log('save result '+JSON.stringify(result));
            });
            console.log('property = '+JSON.stringify(customProps));
    }
    if (asyncResult.status === Office.AsyncResultStatus.Failed) {
        console.error("Failed to save custom property: " + asyncResult.error.message);
    }
      });
      

   

    // You can also access other properties like sender, to, cc, etc.
}

function customPropsCallback(asyncResult) {
    if (asyncResult.status == Office.AsyncResultStatus.Failed) {
      // Handle the failure.
      console.error("Failed to save custom property: " + asyncResult.error.message);

    }
    else {
      // Successfully loaded custom properties,
      // can get them from the asyncResult argument.
      _customProps = asyncResult.value;
      console.log("Custom property saved successfully.");

    }
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
