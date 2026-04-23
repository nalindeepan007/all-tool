import test from "node:test";
import assert from "node:assert/strict";
import { triggerVideoDownload } from "../lib/download.ts";

test("triggerVideoDownload creates, clicks, and removes an anchor", () => {
  let appended = false;
  let removed = false;
  let clicked = false;

  const anchor = {
    href: "",
    attributes: new Map<string, string>(),
    setAttribute(name: string, value: string) {
      this.attributes.set(name, value);
    },
    click() {
      clicked = true;
    },
  };

  const doc = {
    createElement(tag: string) {
      assert.equal(tag, "a");
      return anchor;
    },
    body: {
      appendChild(node: unknown) {
        assert.equal(node, anchor);
        appended = true;
      },
      removeChild(node: unknown) {
        assert.equal(node, anchor);
        removed = true;
      },
    },
  } as unknown as Document;

  triggerVideoDownload("https://example.com/video", "demo-title", doc);

  assert.equal(anchor.href, "https://example.com/video");
  assert.equal(anchor.attributes.get("download"), "demo-title.mp4");
  assert.equal(anchor.attributes.get("target"), "_blank");
  assert.equal(appended, true);
  assert.equal(clicked, true);
  assert.equal(removed, true);
});
