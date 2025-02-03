console.log("Script loaded successfully!");

// Create an array of service objects
let services = [
  {
    name: "Service #1",
    description: "This is service #1's description.",
  },

  {
    name: "Service #2",
    description: "This is service #2's description.",
  },
  {
    name: "Service #3",
    description: "This is service 3's description.",
  },
];

// Initialize a counter for the services
let serviceCount = 1;

// Iterate over all the services to set their default text
services.forEach((service) => {
  // Get the name and description of the service
  const serviceName = service.name;

  const serviceDescription = service.description;

  // Get the elements in the HTML document by selecting them using their ids
  // https://www.w3schools.com/js/js_htmldom_elements.asp - how to select elements by id
  const serviceDocumentTitleElement = document.getElementById(
    `service-title-${serviceCount}`
  );
  const serviceDocumentDescriptionElement = document.getElementById(
    `service-description-${serviceCount}`
  );

  // Set the inner text of the elements
  serviceDocumentTitleElement.innerText = service.name;
  serviceDocumentDescriptionElement.innerText =
    "Click to reveal service information.";

  // then increase the counter
  serviceCount++;
});

function clickToRevealService(serviceNumber) {
  // Grab the description element for the service
  const serviceDocumentDescriptionElement = document.getElementById(
    `service-description-${serviceNumber}`
  );

  // Set the inner text of the description element to the description of the service
  serviceDocumentDescriptionElement.innerText =
    services[serviceNumber - 1].description;
}
