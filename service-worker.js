self.addEventListener("install", function(event) {
  console.log('WORKER: install event in progress.');
      .then(function() {
        console.log('WORKER: install completed');
      })
  );
});
