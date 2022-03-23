import * as digitalocean from "@pulumi/digitalocean";

const region = "nyc3";

const myBucket = new digitalocean.SpacesBucket("rawkode", {
  region,
});

const index = new digitalocean.SpacesBucketObject("index", {
  region,
  bucket: myBucket.name,
  acl: "private",
  key: "index.html",
  content: "<html><body><p>This page is empty.</p></body></html>",
  contentType: "text/html",
});
