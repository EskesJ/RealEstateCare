<template>
  <v-container>

    <v-card class="my-2">
      <v-card-item>
        <v-card-title>Project Details</v-card-title>
      </v-card-item>
      <v-card-text>
        <p class="mx-1"><strong>ID:</strong> {{ selectedProject.id }}</p>
        <p class="mx-1"><strong>Address:</strong> {{ selectedProject.address }}</p>
        <p class="mx-1"><strong>Visited on:</strong> {{ new Date(selectedProject.visitedDate).toLocaleString() }}</p>
        <p class="mx-1"><strong>Status:</strong> {{ selectedProject.status }}</p>
      </v-card-text>
    </v-card>

    <v-card class="my-2">
      <v-card-item>
        <v-card-title>Reported Damages</v-card-title>
      </v-card-item>
      <v-card-text>
        <ul v-if="selectedProject.reportedDamage.length">
          <li v-for="(damage, index) in selectedProject.reportedDamage" :key="index">
            <p class="mx-1"><strong>Location:</strong> {{ damage.location }}</p>
            <p class="mx-1"><strong>New Damage:</strong> {{ damage.newDamage }}</p>
            <p class="mx-1"><strong>Type of Damage:</strong> {{ damage.typeOfDamage }}</p>
            <p class="mx-1"><strong>Date:</strong> {{ new Date(damage.date).toLocaleString() }}</p>
            <p class="mx-1"><strong>Urgency:</strong> {{ damage.urgency }}</p>
            <p class="mx-1"><strong>Description:</strong> {{ damage.description }}</p>
          </li>
        </ul>
        <v-file-input 
          class="my-2"
          accept="image/*"
          label="Upload Photos"
          @change="uploadPhoto('reportedDamage', $event)"
          prepend-icon="mdi-camera"
        ></v-file-input>
        <div v-if="selectedProject.reportedDamagePhotos.length">
          <h4>Uploaded Photos:</h4>
          <img v-for="(photo, i) in selectedProject.reportedDamagePhotos" :key="i" :src="photo" alt="Reported Damage Photo" />
        </div>
      </v-card-text>
    </v-card>

    <v-card class="my-2">
      <v-card-item>
        <v-card-title>Overdue Maintenance</v-card-title>
      </v-card-item>
      <v-card-text>
        <ul v-if="selectedProject.overdueMaintenance.length">
          <li v-for="(maintenance, index) in selectedProject.overdueMaintenance" :key="index">
            <p class="mx-1"><strong>Location:</strong> {{ maintenance.location }}</p>
            <p class="mx-1"><strong>Type of Maintenance:</strong> {{ maintenance.typeOfMaintenance }}</p>
            <p class="mx-1"><strong>Urgency:</strong> {{ maintenance.urgency }}</p>
            <p class="mx-1"><strong>Cost Indication:</strong> {{ maintenance.costsIndication }}</p>
          </li>
        </ul>
        <v-file-input
          class="my-2"
          accept="image/*"
          label="Upload Photos"
          @change="uploadPhoto('overdueMaintenance', $event)"
          prepend-icon="mdi-camera"
        ></v-file-input>
        <div v-if="selectedProject.overdueMaintenancePhotos.length">
          <h4>Uploaded Photos:</h4>
          <img v-for="(photo, i) in selectedProject.overdueMaintenancePhotos" :key="i" :src="photo" alt="Overdue Maintenance Photo" />
        </div>
      </v-card-text>
    </v-card>

    <v-card class="my-2">
      <v-card-item>
        <v-card-title>Technical Installations</v-card-title>
      </v-card-item>
      <v-card-text>
        <ul v-if="selectedProject.technicalInstallations.length">
          <li v-for="(installation, index) in selectedProject.technicalInstallations" :key="index">
            <p class="mx-1"><strong>Location:</strong> {{ installation.location }}</p>
            <p class="mx-1"><strong>Type of Installation:</strong> {{ installation.typeOfInstallation }}</p>
            <p class="mx-1"><strong>Reported Malfunction:</strong> {{ installation.reportedMalfunction }}</p>
            <p class="mx-1"><strong>Test Procedure:</strong> {{ installation.testProcedure }}</p>
            <p class="mx-1"><strong>Approved:</strong> {{ installation.approved }}</p>
            <p class="mx-1"><strong>Comments:</strong> {{ installation.comments }}</p>
          </li>
        </ul>
        <v-file-input
          class="my-2"
          accept="image/*"
          label="Upload Photos"
          @change="uploadPhoto('technicalInstallations', $event)"
          prepend-icon="mdi-camera"
        ></v-file-input>
        <div v-if="selectedProject.technicalInstallationsPhotos.length">
          <h4>Uploaded Photos:</h4>
          <img v-for="(photo, i) in selectedProject.technicalInstallationsPhotos" :key="i" :src="photo" alt="Technical Installation Photo" />
        </div>
      </v-card-text>
    </v-card>

    <v-card class="my-2">
      <v-card-item>
        <v-card-title>Inventory Modifications</v-card-title>
      </v-card-item>
      <v-card-text>
        <ul v-if="selectedProject.inventoryModifications.length">
          <li v-for="(modification, index) in selectedProject.inventoryModifications" :key="index">
            <p class="mx-1"><strong>Current Modifications:</strong> {{ modification.currentModifications }}</p>
            <p class="mx-1"><strong>Location:</strong> {{ modification.location }}</p>
            <p class="mx-1"><strong>Performed By:</strong> {{ modification.performedBy }}</p>
            <p class="mx-1"><strong>Description:</strong> {{ modification.description }}</p>
            <p class="mx-1"><strong>To Do:</strong> {{ modification.toDo }}</p>
            <p class="mx-1"><strong>Comments:</strong> {{ modification.comments }}</p>
          </li>
        </ul>
        <v-file-input
          class="my-2"
          accept="image/*"
          label="Upload Photos"
          @change="uploadPhoto('inventoryModifications', $event)"
          prepend-icon="mdi-camera"
        ></v-file-input>
        <div v-if="selectedProject.inventoryModificationsPhotos.length">
          <h4>Uploaded Photos:</h4>
          <img v-for="(photo, i) in selectedProject.inventoryModificationsPhotos" :key="i" :src="photo" alt="Inventory Modification Photo" />
        </div>
      </v-card-text>
    </v-card>
  </v-container>
</template>
  
  <script>
  export default {
    name: 'recordDetail',
    props: ['selectedProject'],
    methods: {
      uploadPhoto(section, event) {
        const file = event.target.files[0];
        if (file) {
          const photoUrl = URL.createObjectURL(file); // Generate a URL for the file
          this.selectedProject[`${section}Photos`].push(photoUrl); // Push the photo URL to the correct section
        }
      },
    },
  }
  </script>
  
  <style scoped>
  ul {
    list-style: none;
    padding: 0;
  }
  img {
    max-inline-size: 100%;
  }
  </style>