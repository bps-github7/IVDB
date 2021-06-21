reducer : none

actions : none

effects: 
-generally speaking, there is little unity between entity and firebase. either changes are made to firebase,
or changes are made to entity. never both.
-delete method deletes entity record, but not firebase document.
-create method doesnt create record in firebase (not sure about entity)
-create method needs to not take an id from the component, but get the id from the document and store it when you set it with the payload.