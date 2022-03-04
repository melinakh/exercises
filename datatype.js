const a = Object.freeze({
  INFO: Symbol(),
  ERROR: Symbol(),
});

function log(type, massage) {
  if (type === a.INFO) {
    console.log("a.importent information: 0" + massage);
  } else if (type === a.ERROR) {
    console.log("Housten, we have a problem" + massage);
  } else {
    throw "ERROR";
  }
}
log(a.INFO, "hi");
