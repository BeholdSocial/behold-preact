import { render } from "preact"
import BeholdWidget from "../dist/index.js"

render(
  <BeholdWidget
    onLoad={() => console.log("Loaded!")}
    feedId="L7mnQCHvZeMZLbNXmJll"
  />,
  document.getElementById("root")!
)
