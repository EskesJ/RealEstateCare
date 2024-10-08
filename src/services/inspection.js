class Inspection {
  constructor({ id, address, dateToVisit, visitedDate, reportedDamage = [], overdueMaintenance = [], technicalInstallations = [], inventoryModifications = [], status = 'Assigned' }) {
    this.id = id;
    this.address = address;
    this.dateToVisit = dateToVisit || null; // For assigned records
    this.visitedDate = visitedDate || null; // For completed records
    this.reportedDamage = reportedDamage;
    this.reportedDamagePhotos = [];
    this.overdueMaintenance = overdueMaintenance;
    this.overdueMaintenancePhotos = [];
    this.technicalInstallations = technicalInstallations;
    this.technicalInstallationsPhotos = [];
    this.inventoryModifications = inventoryModifications;
    this.inventoryModificationsPhotos = [];
    this.status = status;
  }

  addPhoto(section, photoUrl) {
      switch (section) {
        case 'reportedDamage':
          this.reportedDamagePhotos.push(photoUrl);
          break;
        case 'overdueMaintenance':
          this.overdueMaintenancePhotos.push(photoUrl);
          break;
        case 'technicalInstallations':
          this.technicalInstallationsPhotos.push(photoUrl);
          break;
        case 'inventoryModifications':
          this.inventoryModificationsPhotos.push(photoUrl);
          break;
        default:
          console.error('Invalid section specified');
      }
    }

  updateStatus(newStatus) {
    this.status = newStatus;
  }
}

export default Inspection;