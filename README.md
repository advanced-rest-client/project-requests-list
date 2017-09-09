[![Build Status](https://travis-ci.org/advanced-rest-client/project-requests-list.svg?branch=stage)](https://travis-ci.org/advanced-rest-client/project-requests-list)  

# project-requests-list

A list of requests in the project details view.

The list doesn't offer any logic related to data models. Actions peformed by the
user have to be handled by event handlers and performed in hosting application.

Note: **All events fired by this element do not bubbles**.

### Example
```html
<project-requests-list items="[...]"></project-requests-list>
<script>
document.querySelector('project-requests-list')
.addEventListener('list-items-delete', function(e) {
  console.log('Items to delete:', e.detail.items);
});
</script>
```

### Styling

`<project-requests-list>` provides the following custom properties and mixins for styling:

Custom property | Description | Default
----------------|-------------|----------
`--project-requests-list` | Mixin applied to the element | `{}`
`--project-requests-list-item` | Mixin applied to each item on the list | `{}`
`--action-button` | Mixin applied to the main acrion buttons in the table (open, export) | `{}`
`--primary-color` | Color of the secondary action buttons | ``
`--arc-font-body1` | Mixin applied to the labels in the table header | `{}`



### Events
| Name | Description | Params |
| --- | --- | --- |
| list-item-name-changed | Fired when the name of an item has changed in the UI. This event does not bubbles. | item **Object** - Request object with updated name. |
| list-item-open | Fired when the user clicked on an open button on an item. This event does not bubbles. | item **Object** - An object associated with this item. |
| list-items-delete | Fired when the user clicked on a delete button on an item. This event does not bubbles. | items **Array** - A list of items to delete. |
| list-items-export | Dispatched when the user requested to export selected items. This event does not bubbles. | items **Array** - List of request objects requested to be exported. |
