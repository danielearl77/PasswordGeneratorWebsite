<template>
    <div id="integrity">
        <h2>File Integrity</h2>
        <p>If you regularly upload or download files on the internet, then File Integrity should be important to you. If you download files from a website how can you be sure the file hasn't been tampered with to contain malicious code? If you upload files for other people to download how can you help your users be sure that the file they are downloading is the same untampered version you uploaded?</p>
        <p>Generating a file Checksum and displaying it on the site with the uploaded file allows users to check after downloading that the file is the same. After downloading a file, as a user, you can generate a file checksum on your copy of the file and compare it with the one posted on the website.</p>
        <h3>MD5 File Checksum</h3>
        <h4>Windows-based PCs</h4>
        <p>If you are using Windows as your operating system and need to generate a MD5 File Checksum then you can download Microsoft File Checksum Integrity Verifier here for free.</p>
        <h4>Mac or Unix-based PCs</h4>
        <p>If you are using a Mac operating system then you can generate MD5 file checksum using the built in Terminal application. Before you start make sure the file you want to check is in your Mac Downloads folder. Open 'Terminal' and at the prompt type in cd Downloads and press enter. Then type in md5 your_filename.here and press enter. The result will the be displayed. Caution must be exercised when using the Terminal on a Mac. When you are done type exit and press enter, you can now close the Terminal application.</p>
        <p>UNIX-based systems will vary but you should be able to use the MD5 command from the prompt to generate the checksum.</p>
        <h3>SHA1 File Checksum</h3>
        <h4>Windows-based PCs</h4>
        <p>If you are using Windows as your operating system and need to generate a SHA1 File Checksum then you can download Microsoft File Checksum Integrity Verifier here for free.</p>
        <h4>Mac or Unix-based PCs</h4>
        <p>If you are using a Mac operating system then you can generate SHA1 file checksum using the built in Terminal application. Before you start make sure the file you want to check is in your Mac Downloads folder. Open 'Terminal' and at the prompt type in cd Downloads and press enter. Then type in openssl sha1 your_filename.here and press enter. The result will the be displayed. Caution must be exercised when using the Terminal on a Mac. When you are done type exit and press enter, you can now close the Terminal application.</p>
        <p>UNIX-based systems will vary but you should be able to use the SHA1 command from the prompt to generate the checksum.</p>
    </div>
</template>

<script></script>

<style scoped>
  #integrity {
    width: 1080px;
    margin: 100px auto;
  }

  h2 {
    margin-bottom: 10px;
  } 
  
  p {
    text-align: justify;
    margin: 5px 0px;
  }
</style>