import _ from 'lodash';

function handleInputChange(object, fieldName, value) {
  _.set(object, fieldName, value);
}

function handleInputChangeAndUpdateComponent(object, fieldName, event) {
  handleInputChange(object, fieldName, event.target.value);
  this.forceUpdate();
}

function handleValueChangeAndUpdateComponent(object, fieldName, value) {
  handleInputChange(object, fieldName, value);
  this.forceUpdate();
}

function handleBooleanInputChange(object, fieldName, event) {
  const oldValue = _.result(object, fieldName);
  let newValue = parseStringToBoolen(event.target.value);
  if(oldValue === newValue) newValue = !newValue;
  _.set(object, fieldName, newValue);
}

function parseStringToBoolen(stringValue) {
  if(stringValue === 'true') return true;
  return false;
}

function handleBooleanInputChangeAndUpdateComponent(object, fieldName, event) {
  handleBooleanInputChange(object, fieldName, event);
  this.forceUpdate();
}

function focusInputByRef(component, refName = 'focus') {
  !!component.refs[refName] && component.refs[refName].focus();
}

export {
  handleInputChange,
  handleInputChangeAndUpdateComponent,
  handleValueChangeAndUpdateComponent,
  handleBooleanInputChange,
  handleBooleanInputChangeAndUpdateComponent,
  focusInputByRef
};
