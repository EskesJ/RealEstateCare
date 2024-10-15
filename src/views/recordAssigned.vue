<template>
    <v-container v-if="selectedProject">
  
      <v-card class="my-2">
        <v-card-item>
          <v-card-title>Project Details</v-card-title>
        </v-card-item>
        <v-card-text>
          <p class="mx-1"><strong>ID:</strong> {{ selectedProject.id }}</p>
          <p class="mx-1"><strong>Address:</strong> {{ selectedProject.address }}</p>
          <p class="mx-1"><strong>To visit on:</strong> {{ new Date(selectedProject.dateToVisit).toLocaleString() }}</p>
          <p class="mx-1"><strong>Status:</strong> {{ selectedProject.status }}</p>
        </v-card-text>
      </v-card>
  
      <!-- Inspection Form -->
      <v-form @submit.prevent="submitForm()">
  
        <!-- Reported Damage Section -->
        <v-card class="my-4">
          <v-card-title>Reported Damage</v-card-title>
          <v-card-text>
            <v-text-field v-model="reportedDamage.location" aria-label="Location" label="Location" outlined></v-text-field>
            <v-radio-group class="high-contrast-label" v-model="reportedDamage.newDamage" label="New Damage?" aria-label="New Damage?" row>
              <v-radio label="Yes" value="Yes"></v-radio>
              <v-radio label="No" value="No"></v-radio>
            </v-radio-group>
            <v-select
              class="high-contrast-label"
              v-model="reportedDamage.typeOfDamage"
              :items="['Vandalism', 'Wear and Tear', 'Violence', 'Normal Use', 'Calamity', 'Other']"
              label="Type of Damage"
              outlined
            ></v-select>
            <v-text-field
              class="high-contrast-label"
              v-model="reportedDamage.date"
              label="Date of Damage"
              aria-label="Date of Damage"
              prepend-icon="mdi-calendar"
              type="date"
              outlined
            ></v-text-field>
            <v-radio-group v-model="reportedDamage.urgent" label="Urgent?" row class="high-contrast-label">
              <v-radio label="Yes" value="Yes" class="high-contrast-label"></v-radio>
              <v-radio label="No" value="No" class="high-contrast-label"></v-radio>
            </v-radio-group>
            <v-textarea v-model="reportedDamage.description" label="Description" aria-label="Description" outlined></v-textarea>
            <v-file-input class="high-contrast-label" label="Upload Photos" aria-label="Upload Photos" accept="image/*" @change="uploadPhoto('reportedDamage', $event)" prepend-icon="mdi-camera" outlined></v-file-input>
            <div v-if="reportedDamage.photos.length">
              <h4>Uploaded Photos:</h4>
              <img v-for="(photo, i) in reportedDamage.photos" :key="i" :src="photo" alt="Reported Damage Photo" style="max-width: 100px; margin-right: 10px;" />
            </div>
          </v-card-text>
        </v-card>
  
        <!-- Overdue Maintenance Section -->
        <v-card class="my-4">
          <v-card-title>Overdue Maintenance</v-card-title>
          <v-card-text>
            <v-text-field class="high-contrast-label" v-model="overdueMaintenance.location" label="Location" aria-label="Location" outlined></v-text-field>
            <v-select
              class="high-contrast-label"
              v-model="overdueMaintenance.typeOfMaintenance"
              :items="['Painting', 'Wood Rot', 'Electrical', 'Plumbing', 'Glazing']"
              label="Type of Maintenance"
              aria-label="Type of Maintenance"
              outlined
            ></v-select>
            <v-radio-group v-model="overdueMaintenance.urgent" label="Urgent?" row>
              <v-radio label="Yes" value="Yes"></v-radio>
              <v-radio label="No" value="No"></v-radio>
            </v-radio-group>
            <v-select
              class="high-contrast-label"
              v-model="overdueMaintenance.costsIndication"
              :items="['0-500', '500-1,500', '1,500+']"
              aria-label="Costs Indication"
              label="Costs Indication"
              outlined
            ></v-select>
            <v-file-input class="high-contrast-label" label="Upload Photos" aria-label="Upload Photos" accept="image/*" @change="uploadPhoto('overdueMaintenance', $event)" prepend-icon="mdi-camera" outlined></v-file-input>
            <div v-if="overdueMaintenance.photos.length">
              <h4>Uploaded Photos:</h4>
              <img v-for="(photo, i) in overdueMaintenance.photos" :key="i" :src="photo" alt="Overdue Maintenance Photo" style="max-width: 100px; margin-right: 10px;" />
            </div>
          </v-card-text>
        </v-card>
  
        <!-- Technical Installations Section -->
        <v-card class="my-4">
          <v-card-title>Technical Installations</v-card-title>
          <v-card-text>
            <v-text-field class="high-contrast-label" v-model="technicalInstallations.location" label="Location" aria-label="Location" outlined></v-text-field>
            <v-select
              class="high-contrast-label"
              v-model="technicalInstallations.typeOfInstallation"
              :items="['Cooling', 'Heating', 'Ventilation', 'Electrical', 'Security']"
              label="Type of Installation"
              outlined
            ></v-select>
            <v-textarea class="high-contrast-label" v-model="technicalInstallations.reportedMalfunction" label="Reported Malfunction" aria-label="Reported Malfunction"  outlined></v-textarea>
            <v-text-field class="high-contrast-label" v-model="technicalInstallations.testProcedure" label="Test Procedure" aria-label="Test Procedure" outlined></v-text-field>
            <v-radio-group class="high-contrast-label" v-model="technicalInstallations.approved" row aria-labelledby="approvedLabel">
              <v-label id="approvedLabel">Approved?</v-label>
              <v-radio class="high-contrast-label" label="Yes" value="Yes"></v-radio>
              <v-radio class="high-contrast-label" label="No" value="No"></v-radio>
            </v-radio-group>
            <v-textarea class="high-contrast-label" v-model="technicalInstallations.comments" label="Comments" aria-label="Comments" outlined></v-textarea>
            <v-file-input class="high-contrast-label" label="Upload Photos" aria-label="Upload Photos" accept="image/*" @change="uploadPhoto('technicalInstallations', $event)" prepend-icon="mdi-camera" outlined></v-file-input>
            <div v-if="technicalInstallations.photos.length">
              <h4>Uploaded Photos:</h4>
              <img v-for="(photo, i) in technicalInstallations.photos" :key="i" :src="photo" alt="Technical Installation Photo" style="max-width: 100px; margin-right: 10px;" />
            </div>
          </v-card-text>
        </v-card>
  
        <!-- Inventory Modifications Section -->
        <v-card class="my-4">
          <v-card-title>Inventory Modifications</v-card-title>
          <v-card-text>
            <v-textarea class="high-contrast-label" v-model="inventoryModifications.currentModifications" label="Current Modifications" aria-label="Current Modifications" outlined></v-textarea>
            <v-text-field class="high-contrast-label" v-model="inventoryModifications.location" label="Location" aria-label="Location" outlined></v-text-field>
            <v-select
              class="high-contrast-label"
              v-model="inventoryModifications.performedBy"
              :items="['Tenant', 'Contractor', 'Unknown']"
              label="Performed By"
              outlined
            ></v-select>
            <v-textarea class="high-contrast-label" v-model="inventoryModifications.description" label="Description" aria-label="Description" outlined></v-textarea>
            <v-select
              class="high-contrast-label"
              v-model="inventoryModifications.toDo"
              :items="['Accept', 'Inspect and Approve', 'Remove', 'Modify and Approve']"
              label="To Do"
              outlined
            ></v-select>
            <v-textarea class="high-contrast-label" v-model="inventoryModifications.comments" label="Comments" aria-label="Comments" outlined></v-textarea>
            <v-file-input class="high-contrast-label" label="Upload Photos" aria-label="Upload Photos" accept="image/*" @change="uploadPhoto('inventoryModifications', $event)" prepend-icon="mdi-camera" outlined></v-file-input>
            <div v-if="inventoryModifications.photos.length">
              <h4>Uploaded Photos:</h4>
              <img v-for="(photo, i) in inventoryModifications.photos" :key="i" :src="photo" alt="Inventory Modification Photo" style="max-width: 100px; margin-right: 10px;" />
            </div>
          </v-card-text>
        </v-card>
  
        <v-btn type="submit" color="#1E292F" block class="my-4">Submit Inspection</v-btn>
      </v-form>
  
    </v-container>
  </template>
  
  <script>
    import apiService from '@/services/apiService.js'
  
    export default {
      name: 'recordAssigned',
      created() {
        const id = this.$route.params.id;
        this.loadRecord(id);
      },
      data() {
        return {
          records: [],
          selectedProject: null,
          reportedDamage: {
            location: '',
            newDamage: '',
            typeOfDamage: '',
            date: '',
            urgent: '',
            description: '',
            photos: []
          },
          overdueMaintenance: {
            location: '',
            typeOfMaintenance: '',
            urgent: '',
            costsIndication: '',
            photos: []
          },
          technicalInstallations: {
            location: '',
            typeOfInstallation: '',
            reportedMalfunction: '',
            testProcedure: '',
            approved: '',
            comments: '',
            photos: []
          },
          inventoryModifications: {
            currentModifications: '',
            location: '',
            performedBy: '',
            description: '',
            toDo: '',
            comments: '',
            photos: []
          },
        };
      },
      methods: {
        async loadRecord(id) {
          try {
            const data = await apiService.getScheduledTasks();
            this.selectedProject = data.find(record => record.id === parseInt(id));
          } catch (error) {
            console.error('Failed to fetch post:', error);
          }
        },
        uploadPhoto(section, event) {
          const file = event.target.files[0];
          if (file) {
            const photoUrl = URL.createObjectURL(file);
            this[section].photos.push(photoUrl);
          }
        },

        sanitizeInput(input) {
    
    return input.replace(/[^\w\s.,-]/gi, '');
  },

        sanitizeFormFields() {
          
          if (this.reportedDamage.location) {
            this.reportedDamage.location = this.sanitizeInput(this.reportedDamage.location);
          }
          if (this.reportedDamage.description) {
            this.reportedDamage.description = this.sanitizeInput(this.reportedDamage.description);
          }
          if (this.overdueMaintenance.location) {
            this.overdueMaintenance.location = this.sanitizeInput(this.overdueMaintenance.location);
          }
          if (this.technicalInstallations.location) {
            this.technicalInstallations.location = this.sanitizeInput(this.technicalInstallations.location);
          }
          if (this.technicalInstallations.reportedMalfunction) {
            this.technicalInstallations.reportedMalfunction = this.sanitizeInput(this.technicalInstallations.reportedMalfunction);
          }
          if (this.inventoryModifications.location) {
            this.inventoryModifications.location = this.sanitizeInput(this.inventoryModifications.location);
          }
          if (this.inventoryModifications.description) {
            this.inventoryModifications.description = this.sanitizeInput(this.inventoryModifications.description);
          }
        },
        submitForm() {
          this.sanitizeFormFields();
          console.log('Form submitted:', {
            reportedDamage: this.reportedDamage,
            overdueMaintenance: this.overdueMaintenance,
            technicalInstallations: this.technicalInstallations,
            inventoryModifications: this.inventoryModifications
          });
        },
      },
    }
  </script>
  
  <style scoped>
    img {
      max-width: 100px;
      margin-right: 10px;
    }

    .high-contrast-label {
      color: black; 
    }

    .v-label {
      color: black !important;
    }
  </style>
  