<template>
  <div class="uw">

    <button v-on:click="open" id="upload_widget" class="cloudinary-button" v-show="!hasBeenUploaded">
      Upload file
    </button>
    <p>
      <!-- <a
          href="https://cloudinary.com/documentation/upload_widget"
          target="_blank"
          >Upload Widget User Guide</a
        > -->
    </p>
    <p>
      <!-- <a
          href="https://cloudinary.com/documentation/upload_widget_reference"
          target="_blank"
          >Upload Widget Reference</a
        > -->
    </p>
  </div>
</template>
<script>
//   import cloudinary from '@cloudinary/url-gen';
const cloudName = "dq0sxdfsm"; // replace with your own cloud name
const uploadPreset = "ruwkelyx"; // replace with your own upload preset
// Remove the comments from the code below to add
// additional functionality.
// Note that these are only a few examples, to see
// the full list of possible parameters that you
// can add see:
//   https://cloudinary.com/documentation/upload_widget_reference



export default {
  name: "UploadWidget",

  data: () => ({
    hasBeenUploaded: false,
    myWidget: {},


    open: function () {
      this.myWidget.open();
    },
  }),
  props: {
    msg: String,
  },
  created() {
    this.myWidget = cloudinary.createUploadWidget(
      {
        cloudName: cloudName,
        uploadPreset: uploadPreset,
        multiple: false,
        //   cropping: true, //add a cropping step
        //   showAdvancedOptions: true,  //add advanced options (public_id and tag)
        //   sources: [ "local", "url"], // restrict the upload sources to URL and local files
        //   multiple: false,  //restrict upload to a single file
        //   folder: "user_images", //upload files to the specified folder
        //   tags: ["users", "profile"], //add the given tags to the uploaded files
        //   context: {alt: "user_uploaded"}, //add the given context data to the uploaded files
        //   clientAllowedFormats: ["images"], //restrict uploading to image files only
        //   maxImageFileSize: 2000000,  //restrict file size to less than 2MB
        //   maxImageWidth: 2000, //Scales the image down to a width of 2000 pixels before uploading
        //   theme: "purple", //change to a purple theme
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          console.log("Done! Here is the image info: ", result.info);
          this.hasBeenUploaded = true;
          this.$store.commit("SET_CREATE_BAND_HERO_URL", result.info.secure_url);
          // document
          //   .getElementById("uploadedimage")
          //   .setAttribute("src", result.info.secure_url);
        }
      }
    );
  }
};
</script>
