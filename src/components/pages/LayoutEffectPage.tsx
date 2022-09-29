import React from "react";
import {
  LayoutEffect, LayoutEffectWithAnimationFrame, LayoutEffectWithHook
} from "src/components/templates/LayoutEffect";

function LayoutEffectPage() {
  return (
    <div>
      <LayoutEffect />
      <LayoutEffectWithAnimationFrame />
      <LayoutEffectWithHook />
    </div>
  );
}

export default LayoutEffectPage;
