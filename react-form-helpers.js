import _ from 'lodash';

function handleValueChange(object, fieldName, value) {
  _.set(object, fieldName, value);
}

function handleInputChange(object, fieldName, event) {
  _.set(object, fieldName, event.target.value);
}

function handleValueChangeAndUpdateComponent(object, fieldName, value) {
  handleValueChange(object, fieldName, value);
  this.forceUpdate();
}

function handleInputChangeAndUpdateComponent(object, fieldName, event) {
  handleValueChangeAndUpdateComponent.bind(this)(object, fieldName, event.target.value);
}

function handleChangeAndUpdateComponent(object, fieldName, data) {
  if(_.isString(data) || _.isDate(data)) return handleValueChangeAndUpdateComponent.bind(this)(object, fieldName, data);
  if(_.isObject(data)) return handleInputChangeAndUpdateComponent.bind(this)(object, fieldName, data);
}

function handleChange(object, fieldName, data) {
  if(_.isObject(data)) handleInputChange(object, fieldName, data);
  handleValueChange(object, fieldName, data);
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

function getChangeHandler(object, fieldName, component) {
  if(!component) console.warn('[REACT FORM HELPERS] Component must be passed to change handler');
  return handleChangeAndUpdateComponent.bind(component, object, fieldName);
}

function getStateChangeHandler(component, fieldName) {
  return getChangeHandler(component.state, fieldName, component);
}

export {
  handleChange,
  handleChangeAndUpdateComponent,
  handleInputChangeAndUpdateComponent,
  handleValueChangeAndUpdateComponent,
  handleBooleanInputChange,
  handleBooleanInputChangeAndUpdateComponent,
  focusInputByRef,
  getChangeHandler,
  getStateChangeHandler
};
