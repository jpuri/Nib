/**
 * TODO:review
 * improve code in all components
 */

import React, { PureComponent } from "react";
import Editor from "nib-core";
import AdvanceImagePlugin from "nib-advance-image";
import TablePlugin from "nib-table";
import VideoPlugin from "nib-video";
import SourceEditPlugin from "nib-sourceedit";

import uploadCallback from "../common/uploadCallback";
import data from "./data";

const theme = {
  editor: () => ({
    height: "440px",
  }),
};

class TopBar extends PureComponent {
  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          margin: "32px 0",
        }}
      >
        <div>
          <Editor
            licenseKey="c1ba076f-6793-45d4-a66d-02d4204b6297"
            config={{
              plugins: {
                options: "block inline color link blockquote list history help",
              },
              toolbar: {
                options: "top",
                top: {
                  options:
                    "block inline color link blockquote list advance-image video table sourceedit history help",
                },
              },
            }}
            defaultValue={data}
            styleConfig={theme}
            addons={[
              new AdvanceImagePlugin(uploadCallback),
              TablePlugin,
              VideoPlugin,
              SourceEditPlugin,
            ]}
          />
        </div>
      </div>
    );
  }
}

export default TopBar;

/**
 * todo:
 * 1. props link to open in new window.
 * 2. add point mobile frendliness
 */
