class Inspection {
    constructor({ id, address, visitedDate, reportedDamage, overdueMaintenance, technicalInstallations, inventoryModifications, status }) {
      this.id = id;
      this.address = address;
      this.visitedDate = visitedDate;
      this.reportedDamage = reportedDamage;
      this.overdueMaintenance = overdueMaintenance;
      this.technicalInstallations = technicalInstallations;
      this.inventoryModifications = inventoryModifications;
      this.status = status;
      this.inspectionDate = new Date(); // Assuming each inspection should have a date
    }
  
    // Example of a method to format the inspection date
    getFormattedDate() {
      return this.inspectionDate.toLocaleDateString();
    }
  
    // Method to add a photo (this could be expanded based on how photos are handled)
    addPhoto(photoUrl) {
      if (!this.photos) this.photos = [];
      this.photos.push(photoUrl);
    }
  
    // Example method that might be used in the future for calculations or updates
    updateStatus(newStatus) {
      this.status = newStatus;
    }
  }
  
  export default Inspection;