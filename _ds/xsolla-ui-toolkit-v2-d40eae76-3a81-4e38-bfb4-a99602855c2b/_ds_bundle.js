/* @ds-bundle: {"format":4,"namespace":"XsollaUIToolkitV2_d40eae","components":[{"name":"Button","sourcePath":"components/controls/Button.jsx"},{"name":"Checkbox","sourcePath":"components/controls/Checkbox.jsx"},{"name":"IconButton","sourcePath":"components/controls/IconButton.jsx"},{"name":"Input","sourcePath":"components/controls/Input.jsx"},{"name":"Radio","sourcePath":"components/controls/Radio.jsx"},{"name":"RadioGroup","sourcePath":"components/controls/Radio.jsx"},{"name":"Select","sourcePath":"components/controls/Select.jsx"},{"name":"Switch","sourcePath":"components/controls/Switch.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"Avatar","sourcePath":"components/display/Avatar.jsx"},{"name":"Badge","sourcePath":"components/display/Badge.jsx"},{"name":"Divider","sourcePath":"components/display/Divider.jsx"},{"name":"Tag","sourcePath":"components/display/Tag.jsx"},{"name":"Typography","sourcePath":"components/display/Typography.jsx"},{"name":"Notification","sourcePath":"components/feedback/Notification.jsx"},{"name":"ProgressBar","sourcePath":"components/feedback/ProgressBar.jsx"},{"name":"Spinner","sourcePath":"components/feedback/Spinner.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Link","sourcePath":"components/navigation/Link.jsx"},{"name":"Segmented","sourcePath":"components/navigation/Segmented.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"GameCard","sourcePath":"components/storefront/GameCard.jsx"}],"sourceHashes":{"components/controls/Button.jsx":"7d25109ce727","components/controls/Checkbox.jsx":"60540ae711fe","components/controls/IconButton.jsx":"45a6e424e5cd","components/controls/Input.jsx":"a303fb6fd7d9","components/controls/Radio.jsx":"847dbb9a6c78","components/controls/Select.jsx":"cd45e23cb57a","components/controls/Switch.jsx":"e807bd2a4866","components/core/Icon.jsx":"15bfce73cb02","components/display/Avatar.jsx":"ad4e2e0512d9","components/display/Badge.jsx":"16329a311b11","components/display/Divider.jsx":"28aff9d0c94d","components/display/Tag.jsx":"a630c955f9f9","components/display/Typography.jsx":"349d7762d43f","components/feedback/Notification.jsx":"6f0cda9db5bb","components/feedback/ProgressBar.jsx":"332ca6118738","components/feedback/Spinner.jsx":"7f23d6cbfe83","components/feedback/Tooltip.jsx":"eeb85a41b52c","components/navigation/Link.jsx":"22ac612c3f93","components/navigation/Segmented.jsx":"b7c63bdab301","components/navigation/Tabs.jsx":"54b3bd58d317","components/storefront/GameCard.jsx":"997ff2d3d7f2"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.XsollaUIToolkitV2_d40eae = window.XsollaUIToolkitV2_d40eae || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/controls/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
let injected = false;
function ensureStyles() {
  if (injected || typeof document === "undefined") return;
  injected = true;
  const el = document.createElement("style");
  el.id = "xui-button-styles";
  el.textContent = `
.xui-btn{appearance:none;border:1px solid transparent;font-family:var(--xui-font-body);font-weight:500;display:inline-flex;align-items:center;justify-content:center;cursor:pointer;white-space:nowrap;box-sizing:border-box;transition:background-color .18s ease,border-color .18s ease,color .18s ease;text-decoration:none}
.xui-btn:focus-visible{outline:2px solid var(--xui-border-brand);outline-offset:2px}
.xui-btn[aria-disabled=true]{cursor:not-allowed;background:var(--xui-control-brand-primary-bg-disable)!important;border-color:transparent!important;color:var(--xui-control-brand-text-disable)!important}
.xui-btn--full{width:100%}
/* brand */
.xui-btn--brand-primary{background:var(--xui-control-brand-primary-bg);border-color:var(--xui-control-brand-primary-border);color:var(--xui-control-brand-text-primary)}
.xui-btn--brand-primary:hover{background:var(--xui-control-brand-primary-bg-hover);border-color:var(--xui-control-brand-primary-border-hover)}
.xui-btn--brand-primary:active{background:var(--xui-control-brand-primary-bg-press)}
.xui-btn--brand-secondary{background:var(--xui-control-brand-secondary-bg);border-color:var(--xui-control-brand-secondary-border);color:var(--xui-control-brand-text-secondary)}
.xui-btn--brand-secondary:hover{background:var(--xui-control-brand-secondary-bg-hover)}
.xui-btn--brand-tertiary{background:var(--xui-control-brand-tertiary-bg);color:var(--xui-control-brand-text-tertiary)}
.xui-btn--brand-tertiary:hover{background:var(--xui-control-brand-tertiary-bg-hover)}
.xui-btn--brand-ghost{background:var(--xui-control-brand-ghost-bg);border-color:var(--xui-control-brand-ghost-border);color:var(--xui-control-brand-text-ghost)}
.xui-btn--brand-ghost:hover{background:var(--xui-control-brand-ghost-bg-hover);border-color:var(--xui-control-brand-ghost-border-hover)}
/* mono */
.xui-btn--mono-primary{background:var(--xui-control-mono-primary-bg);color:var(--xui-control-mono-text-primary)}
.xui-btn--mono-primary:hover{background:var(--xui-control-mono-primary-bg-hover)}
.xui-btn--mono-secondary{background:var(--xui-control-mono-secondary-bg);border-color:var(--xui-control-mono-secondary-border);color:var(--xui-control-mono-text-secondary)}
.xui-btn--mono-secondary:hover{background:var(--xui-control-mono-secondary-bg-hover)}
.xui-btn--mono-tertiary{background:var(--xui-control-mono-tertiary-bg);color:var(--xui-control-mono-text-tertiary)}
.xui-btn--mono-tertiary:hover{background:var(--xui-control-mono-tertiary-bg-hover)}
.xui-btn--mono-ghost{background:var(--xui-control-mono-ghost-bg);border-color:var(--xui-control-mono-ghost-border);color:var(--xui-control-mono-text-ghost)}
.xui-btn--mono-ghost:hover{background:var(--xui-control-mono-ghost-bg-hover);border-color:var(--xui-control-mono-ghost-border-hover)}
/* brandExtra */
.xui-btn--brandExtra-primary{background:var(--xui-control-brand-extra-primary-bg);color:var(--xui-control-brand-extra-text-primary)}
.xui-btn--brandExtra-primary:hover{background:var(--xui-control-brand-extra-primary-bg-hover)}
.xui-btn--brandExtra-secondary{background:var(--xui-control-brand-extra-secondary-bg);border-color:var(--xui-control-brand-extra-secondary-border);color:var(--xui-control-brand-extra-text-secondary)}
.xui-btn--brandExtra-secondary:hover{background:var(--xui-control-brand-extra-secondary-bg-hover)}
.xui-btn--brandExtra-ghost{background:var(--xui-control-brand-extra-ghost-bg);border-color:var(--xui-control-brand-extra-ghost-border);color:var(--xui-control-brand-extra-text-ghost)}
.xui-btn--brandExtra-ghost:hover{background:var(--xui-control-brand-extra-ghost-bg-hover);border-color:var(--xui-control-brand-extra-ghost-border-hover)}
/* alert */
.xui-btn--alert-primary{background:var(--xui-control-alert-primary-bg);color:var(--xui-control-alert-text-primary)}
.xui-btn--alert-primary:hover{background:var(--xui-control-alert-primary-bg-hover)}
.xui-btn--alert-secondary{background:var(--xui-control-alert-secondary-bg);border-color:var(--xui-control-alert-secondary-border);color:var(--xui-control-alert-text-secondary)}
.xui-btn--alert-secondary:hover{background:var(--xui-control-alert-secondary-bg-hover)}
.xui-btn--alert-ghost{background:var(--xui-control-alert-ghost-bg);border-color:var(--xui-control-alert-ghost-border);color:var(--xui-control-alert-text-ghost)}
.xui-btn--alert-ghost:hover{background:var(--xui-control-alert-ghost-bg-hover);border-color:var(--xui-control-alert-ghost-border-hover)}
`;
  document.head.appendChild(el);
}
const SIZES = {
  xs: {
    h: 32,
    pad: 12,
    fs: 12,
    radius: 4,
    icon: 16,
    gap: 6
  },
  sm: {
    h: 40,
    pad: 14,
    fs: 14,
    radius: 4,
    icon: 20,
    gap: 6
  },
  md: {
    h: 48,
    pad: 16,
    fs: 16,
    radius: 6,
    icon: 24,
    gap: 8
  },
  lg: {
    h: 56,
    pad: 18,
    fs: 18,
    radius: 8,
    icon: 28,
    gap: 8
  },
  xl: {
    h: 64,
    pad: 20,
    fs: 20,
    radius: 8,
    icon: 32,
    gap: 10
  }
};

/**
 * Button — the primary XUI action control. Variants primary/secondary/tertiary/
 * ghost across tones brand/brandExtra/alert/mono, five sizes, loading + disabled.
 */
function Button({
  variant = "primary",
  tone = "brand",
  size = "md",
  disabled = false,
  loading = false,
  fullWidth = false,
  iconLeft,
  iconRight,
  onPress,
  onClick,
  children,
  type = "button",
  style,
  ...rest
}) {
  ensureStyles();
  const s = SIZES[size] || SIZES.md;
  const isDisabled = disabled || loading;
  const handle = e => {
    if (isDisabled) {
      e.preventDefault();
      return;
    }
    (onPress || onClick) && (onPress || onClick)(e);
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    "aria-disabled": isDisabled || undefined,
    "aria-busy": loading || undefined,
    onClick: handle,
    className: `xui-btn xui-btn--${tone}-${variant}${fullWidth ? " xui-btn--full" : ""}`,
    style: {
      height: `${s.h}px`,
      padding: `0 ${s.pad}px`,
      fontSize: `${s.fs}px`,
      gap: `${s.gap}px`,
      borderRadius: `${s.radius}px`,
      ...style
    }
  }, rest), loading && /*#__PURE__*/React.createElement(Spinner, {
    size: s.icon * 0.7
  }), !loading && iconLeft && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      width: s.icon,
      height: s.icon
    }
  }, iconLeft), /*#__PURE__*/React.createElement("span", {
    style: {
      display: loading ? "none" : "inline"
    }
  }, children), !loading && iconRight && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      width: s.icon,
      height: s.icon
    }
  }, iconRight));
}
function Spinner({
  size = 18
}) {
  return /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: size,
      height: size,
      borderRadius: "50%",
      border: "2px solid currentColor",
      borderTopColor: "transparent",
      display: "inline-block",
      animation: "xui-spin .7s linear infinite"
    }
  });
}
if (typeof document !== "undefined" && !document.getElementById("xui-spin-kf")) {
  const k = document.createElement("style");
  k.id = "xui-spin-kf";
  k.textContent = "@keyframes xui-spin{to{transform:rotate(360deg)}}";
  document.head.appendChild(k);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/controls/Button.jsx", error: String((e && e.message) || e) }); }

// components/controls/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useId
} = React;
let injected = false;
function ensureStyles() {
  if (injected || typeof document === "undefined") return;
  injected = true;
  const el = document.createElement("style");
  el.id = "xui-checkbox-styles";
  el.textContent = `
.xui-check{display:inline-flex;align-items:flex-start;gap:8px;font-family:var(--xui-font-body);cursor:pointer;color:var(--xui-content-primary)}
.xui-check--disabled{cursor:not-allowed;opacity:.5}
.xui-check__box{flex:0 0 auto;display:inline-flex;align-items:center;justify-content:center;border:1px solid var(--xui-input-border);background:transparent;border-radius:4px;transition:background-color .15s ease,border-color .15s ease}
.xui-check:hover .xui-check__box{border-color:var(--xui-input-border-hover)}
.xui-check__box--checked{background:var(--xui-control-check-bg);border-color:var(--xui-control-check-border)}
.xui-check:hover .xui-check__box--checked{background:var(--xui-control-check-bg-hover)}
.xui-check__tick{color:var(--xui-control-check-icon)}
.xui-check__label{line-height:1.3}
.xui-check__desc{color:var(--xui-content-tertiary);margin-top:2px}
`;
  document.head.appendChild(el);
}
const SIZES = {
  sm: {
    box: 16,
    fs: 14
  },
  md: {
    box: 18,
    fs: 16
  },
  lg: {
    box: 20,
    fs: 16
  },
  xl: {
    box: 22,
    fs: 18
  }
};

/**
 * Checkbox — label passed as children (Xsolla convention). Fires `onChange(event)`.
 */
function Checkbox({
  checked = false,
  onChange,
  disabled = false,
  size = "md",
  children,
  description,
  id,
  style,
  ...rest
}) {
  ensureStyles();
  const s = SIZES[size] || SIZES.md;
  const autoId = useId();
  const cid = id || autoId;
  const toggle = () => {
    if (!disabled && onChange) onChange({
      target: {
        checked: !checked
      }
    });
  };
  return /*#__PURE__*/React.createElement("label", {
    className: `xui-check${disabled ? " xui-check--disabled" : ""}`,
    htmlFor: cid,
    style: {
      fontSize: `${s.fs}px`,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: cid,
    type: "checkbox",
    checked: checked,
    disabled: disabled,
    onChange: toggle,
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: `xui-check__box${checked ? " xui-check__box--checked" : ""}`,
    style: {
      width: s.box,
      height: s.box,
      marginTop: 1
    },
    "aria-hidden": "true"
  }, checked && /*#__PURE__*/React.createElement("svg", {
    className: "xui-check__tick",
    width: s.box - 4,
    height: s.box - 4,
    viewBox: "0 0 20 20",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M4 10.5L8 14.5L16 6",
    stroke: "currentColor",
    strokeWidth: "2.2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), (children || description) && /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    className: "xui-check__label"
  }, children), description && /*#__PURE__*/React.createElement("span", {
    className: "xui-check__desc",
    style: {
      display: "block",
      fontSize: s.fs - 2
    }
  }, description)));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/controls/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/controls/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  xs: {
    box: 32,
    icon: 16
  },
  sm: {
    box: 40,
    icon: 20
  },
  md: {
    box: 48,
    icon: 24
  },
  lg: {
    box: 56,
    icon: 28
  },
  xl: {
    box: 64,
    icon: 32
  }
};

/**
 * IconButton — a square, icon-only button. Same variants/tones as Button.
 * Always pass `aria-label` for accessibility.
 */
function IconButton({
  icon,
  variant = "secondary",
  tone = "mono",
  size = "md",
  disabled = false,
  onPress,
  onClick,
  "aria-label": ariaLabel,
  style,
  ...rest
}) {
  const s = SIZES[size] || SIZES.md;
  return /*#__PURE__*/React.createElement(__ds_scope.Button, _extends({
    variant: variant,
    tone: tone,
    size: size,
    disabled: disabled,
    onPress: onPress,
    onClick: onClick,
    "aria-label": ariaLabel,
    style: {
      width: `${s.box}px`,
      padding: 0,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      width: s.icon,
      height: s.icon
    }
  }, icon));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/controls/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/controls/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useId
} = React;
let injected = false;
function ensureStyles() {
  if (injected || typeof document === "undefined") return;
  injected = true;
  const el = document.createElement("style");
  el.id = "xui-input-styles";
  el.textContent = `
.xui-field{display:flex;flex-direction:column;gap:6px;font-family:var(--xui-font-body)}
.xui-field__label{font-size:14px;line-height:18px;color:var(--xui-content-secondary);font-weight:500}
.xui-field__req{color:var(--xui-content-alert-primary);margin-left:2px}
.xui-input{display:flex;align-items:center;gap:8px;box-sizing:border-box;background:var(--xui-input-bg);border:1px solid var(--xui-input-border);color:var(--xui-input-text);border-radius:6px;transition:background-color .15s ease,border-color .15s ease}
.xui-input:hover{background:var(--xui-input-bg-hover);border-color:var(--xui-input-border-hover)}
.xui-input--focus{border-color:var(--xui-border-brand)}
.xui-input--error{border-color:var(--xui-border-alert)}
.xui-input__el{flex:1;min-width:0;background:transparent;border:0;outline:0;color:inherit;font:inherit}
.xui-input__el::placeholder{color:var(--xui-input-placeholder)}
.xui-input--disabled{background:var(--xui-input-bg-disable);color:var(--xui-input-text-disable);cursor:not-allowed}
.xui-field__helper{font-size:12px;line-height:16px;color:var(--xui-content-tertiary)}
.xui-field__helper--error{color:var(--xui-content-alert-primary)}
`;
  document.head.appendChild(el);
}
const SIZES = {
  xs: {
    h: 32,
    px: 10,
    fs: 12,
    r: 4
  },
  sm: {
    h: 40,
    px: 10,
    fs: 14,
    r: 4
  },
  md: {
    h: 48,
    px: 12,
    fs: 16,
    r: 6
  },
  lg: {
    h: 56,
    px: 12,
    fs: 18,
    r: 8
  },
  xl: {
    h: 64,
    px: 12,
    fs: 20,
    r: 8
  }
};

/**
 * Input — single-line text field with optional label, leading/trailing icons,
 * helper text and error state. Uses `onChangeText` (value) for native parity.
 */
function Input({
  label,
  value,
  onChangeText,
  onChange,
  placeholder,
  size = "md",
  iconLeft,
  iconRight,
  error,
  helperText,
  disabled = false,
  required = false,
  type = "text",
  id,
  style,
  ...rest
}) {
  ensureStyles();
  const s = SIZES[size] || SIZES.md;
  const [focus, setFocus] = React.useState(false);
  const autoId = useId();
  const inputId = id || autoId;
  const handle = e => {
    onChange && onChange(e);
    onChangeText && onChangeText(e.target.value);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "xui-field",
    style: style
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "xui-field__label",
    htmlFor: inputId
  }, label, required && /*#__PURE__*/React.createElement("span", {
    className: "xui-field__req"
  }, "*")), /*#__PURE__*/React.createElement("div", {
    className: `xui-input${focus ? " xui-input--focus" : ""}${error ? " xui-input--error" : ""}${disabled ? " xui-input--disabled" : ""}`,
    style: {
      height: `${s.h}px`,
      padding: `0 ${s.px}px`,
      borderRadius: `${s.r}px`,
      fontSize: `${s.fs}px`
    }
  }, iconLeft && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      width: 18,
      height: 18,
      color: "var(--xui-content-tertiary)"
    }
  }, iconLeft), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    className: "xui-input__el",
    type: type,
    value: value,
    placeholder: placeholder,
    disabled: disabled,
    required: required,
    "aria-invalid": error || undefined,
    onChange: handle,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false)
  }, rest)), iconRight && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      width: 18,
      height: 18,
      color: "var(--xui-content-tertiary)"
    }
  }, iconRight)), helperText && /*#__PURE__*/React.createElement("span", {
    className: `xui-field__helper${error ? " xui-field__helper--error" : ""}`
  }, helperText));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/controls/Input.jsx", error: String((e && e.message) || e) }); }

// components/controls/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useId
} = React;
let injected = false;
function ensureStyles() {
  if (injected || typeof document === "undefined") return;
  injected = true;
  const el = document.createElement("style");
  el.id = "xui-radio-styles";
  el.textContent = `
.xui-radio{display:inline-flex;align-items:flex-start;gap:8px;font-family:var(--xui-font-body);cursor:pointer;color:var(--xui-content-primary)}
.xui-radio--disabled{cursor:not-allowed;opacity:.5}
.xui-radio__dot{flex:0 0 auto;box-sizing:border-box;display:inline-flex;align-items:center;justify-content:center;border:1px solid var(--xui-input-border);border-radius:999px;background:transparent;transition:border-color .15s ease}
.xui-radio:hover .xui-radio__dot{border-color:var(--xui-input-border-hover)}
.xui-radio__dot--on{border-color:var(--xui-control-check-border);background:var(--xui-control-check-bg)}
.xui-radio__inner{border-radius:999px;background:var(--xui-control-check-icon)}
`;
  document.head.appendChild(el);
}
const SIZES = {
  sm: {
    box: 16,
    dot: 6,
    fs: 14
  },
  md: {
    box: 18,
    dot: 8,
    fs: 16
  },
  lg: {
    box: 20,
    dot: 8,
    fs: 18
  },
  xl: {
    box: 24,
    dot: 10,
    fs: 20
  }
};

/** Radio — single option. Use inside RadioGroup or manage `checked` yourself. */
function Radio({
  checked = false,
  onChange,
  disabled = false,
  size = "md",
  children,
  value,
  name,
  id,
  style,
  ...rest
}) {
  ensureStyles();
  const s = SIZES[size] || SIZES.md;
  const autoId = useId();
  const rid = id || autoId;
  const select = () => {
    if (!disabled && onChange) onChange(value);
  };
  return /*#__PURE__*/React.createElement("label", {
    className: `xui-radio${disabled ? " xui-radio--disabled" : ""}`,
    htmlFor: rid,
    style: {
      fontSize: `${s.fs}px`,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: rid,
    type: "radio",
    name: name,
    checked: checked,
    disabled: disabled,
    onChange: select,
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: `xui-radio__dot${checked ? " xui-radio__dot--on" : ""}`,
    style: {
      width: s.box,
      height: s.box,
      marginTop: 1
    },
    "aria-hidden": "true"
  }, checked && /*#__PURE__*/React.createElement("span", {
    className: "xui-radio__inner",
    style: {
      width: s.dot,
      height: s.dot
    }
  })), children && /*#__PURE__*/React.createElement("span", {
    style: {
      lineHeight: 1.3
    }
  }, children));
}

/** RadioGroup — manages selection across Radio children by `value`. */
function RadioGroup({
  value,
  onChange,
  options = [],
  name,
  size = "md",
  direction = "column",
  gap = 12,
  style
}) {
  const autoName = useId();
  return /*#__PURE__*/React.createElement("div", {
    role: "radiogroup",
    style: {
      display: "flex",
      flexDirection: direction,
      gap,
      ...style
    }
  }, options.map(o => /*#__PURE__*/React.createElement(Radio, {
    key: o.value,
    name: name || autoName,
    value: o.value,
    size: size,
    checked: value === o.value,
    disabled: o.disabled,
    onChange: onChange
  }, o.label)));
}
Object.assign(__ds_scope, { Radio, RadioGroup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/controls/Radio.jsx", error: String((e && e.message) || e) }); }

// components/controls/Select.jsx
try { (() => {
const {
  useId
} = React;
let injected = false;
function ensureStyles() {
  if (injected || typeof document === "undefined") return;
  injected = true;
  const el = document.createElement("style");
  el.id = "xui-select-styles";
  el.textContent = `
.xui-select{position:relative;font-family:var(--xui-font-body)}
.xui-select__trigger{display:flex;align-items:center;justify-content:space-between;gap:8px;width:100%;box-sizing:border-box;background:var(--xui-input-bg);border:1px solid var(--xui-input-border);color:var(--xui-input-text);border-radius:6px;cursor:pointer;transition:background-color .15s ease,border-color .15s ease}
.xui-select__trigger:hover{background:var(--xui-input-bg-hover);border-color:var(--xui-input-border-hover)}
.xui-select__trigger--open{border-color:var(--xui-border-brand)}
.xui-select__placeholder{color:var(--xui-input-placeholder)}
.xui-select__chev{transition:transform .15s ease;color:var(--xui-content-tertiary)}
.xui-select__chev--open{transform:rotate(180deg)}
.xui-select__panel{position:absolute;z-index:40;top:calc(100% + 4px);left:0;right:0;background:var(--xui-bg-primary);border:1px solid var(--xui-border-secondary);border-radius:8px;box-shadow:var(--xui-shadow-popover);padding:4px;max-height:260px;overflow:auto}
.xui-select__opt{display:flex;align-items:center;justify-content:space-between;padding:9px 12px;border-radius:6px;cursor:pointer;color:var(--xui-content-primary)}
.xui-select__opt:hover{background:var(--xui-overlay-mono)}
.xui-select__opt--sel{color:var(--xui-content-brand-primary)}
`;
  document.head.appendChild(el);
}
const SIZES = {
  sm: {
    h: 40,
    px: 10,
    fs: 14
  },
  md: {
    h: 48,
    px: 12,
    fs: 16
  },
  lg: {
    h: 56,
    px: 12,
    fs: 18
  }
};

/** Select — dropdown with a controlled `value`; fires `onChange(value)`. */
function Select({
  options = [],
  value,
  onChange,
  placeholder = "Select…",
  size = "md",
  label,
  disabled = false,
  style
}) {
  ensureStyles();
  const s = SIZES[size] || SIZES.md;
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef(null);
  const autoId = useId();
  React.useEffect(() => {
    const h = e => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, []);
  const sel = options.find(o => o.value === value);
  return /*#__PURE__*/React.createElement("div", {
    style: style
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: autoId,
    style: {
      display: "block",
      fontSize: 14,
      color: "var(--xui-content-secondary)",
      fontWeight: 500,
      marginBottom: 6,
      fontFamily: "var(--xui-font-body)"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    className: "xui-select",
    ref: ref
  }, /*#__PURE__*/React.createElement("button", {
    id: autoId,
    type: "button",
    disabled: disabled,
    "aria-haspopup": "listbox",
    "aria-expanded": open,
    className: `xui-select__trigger${open ? " xui-select__trigger--open" : ""}`,
    style: {
      height: s.h,
      padding: `0 ${s.px}px`,
      fontSize: s.fs,
      opacity: disabled ? 0.5 : 1
    },
    onClick: () => !disabled && setOpen(o => !o)
  }, /*#__PURE__*/React.createElement("span", {
    className: sel ? "" : "xui-select__placeholder"
  }, sel ? sel.label : placeholder), /*#__PURE__*/React.createElement("svg", {
    className: `xui-select__chev${open ? " xui-select__chev--open" : ""}`,
    width: "18",
    height: "18",
    viewBox: "0 0 20 20",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 7.5L10 12.5L15 7.5",
    stroke: "currentColor",
    strokeWidth: "1.6",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), open && /*#__PURE__*/React.createElement("div", {
    className: "xui-select__panel",
    role: "listbox",
    style: {
      fontSize: s.fs
    }
  }, options.map(o => /*#__PURE__*/React.createElement("div", {
    key: o.value,
    role: "option",
    "aria-selected": o.value === value,
    className: `xui-select__opt${o.value === value ? " xui-select__opt--sel" : ""}`,
    onClick: () => {
      onChange && onChange(o.value);
      setOpen(false);
    }
  }, /*#__PURE__*/React.createElement("span", null, o.label), o.value === value && /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 20 20",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M4 10.5L8 14.5L16 6",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })))))));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/controls/Select.jsx", error: String((e && e.message) || e) }); }

// components/controls/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useId
} = React;
let injected = false;
function ensureStyles() {
  if (injected || typeof document === "undefined") return;
  injected = true;
  const el = document.createElement("style");
  el.id = "xui-switch-styles";
  el.textContent = `
.xui-switch{display:inline-flex;align-items:center;gap:8px;font-family:var(--xui-font-body);cursor:pointer;color:var(--xui-content-primary)}
.xui-switch--disabled{cursor:not-allowed;opacity:.5}
.xui-switch__track{flex:0 0 auto;box-sizing:border-box;border:1px solid transparent;border-radius:999px;background:var(--xui-input-bg);transition:background-color .18s ease;position:relative}
.xui-switch__track--on{background:var(--xui-control-switch-bg);border-color:var(--xui-control-switch-border)}
.xui-switch:hover .xui-switch__track--on{background:var(--xui-control-switch-bg-hover)}
.xui-switch__knob{position:absolute;top:50%;transform:translateY(-50%);border-radius:2px;background:var(--xui-control-knob-bg-inactive);transition:left .18s ease,background-color .18s ease}
.xui-switch__knob--on{background:var(--xui-control-knob-bg-active)}
`;
  document.head.appendChild(el);
}
const SIZES = {
  sm: {
    w: 28,
    h: 16,
    knob: 12,
    fs: 14
  },
  md: {
    w: 32,
    h: 18,
    knob: 14,
    fs: 16
  },
  lg: {
    w: 36,
    h: 20,
    knob: 16,
    fs: 18
  },
  xl: {
    w: 40,
    h: 22,
    knob: 18,
    fs: 20
  }
};

/**
 * Switch — on/off toggle. Fires `onValueChange(boolean)`. Optional inline label.
 */
function Switch({
  checked = false,
  onValueChange,
  disabled = false,
  size = "md",
  label,
  id,
  style,
  ...rest
}) {
  ensureStyles();
  const s = SIZES[size] || SIZES.md;
  const autoId = useId();
  const sid = id || autoId;
  const toggle = () => {
    if (!disabled && onValueChange) onValueChange(!checked);
  };
  const off = (s.h - s.knob) / 2;
  return /*#__PURE__*/React.createElement("label", {
    className: `xui-switch${disabled ? " xui-switch--disabled" : ""}`,
    htmlFor: sid,
    style: {
      fontSize: `${s.fs}px`,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: sid,
    type: "checkbox",
    role: "switch",
    checked: checked,
    disabled: disabled,
    onChange: toggle,
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: `xui-switch__track${checked ? " xui-switch__track--on" : ""}`,
    style: {
      width: s.w,
      height: s.h
    },
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("span", {
    className: `xui-switch__knob${checked ? " xui-switch__knob--on" : ""}`,
    style: {
      width: s.knob,
      height: s.knob,
      left: checked ? `${s.w - s.knob - off}px` : `${off}px`
    }
  })), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/controls/Switch.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Icon — renders a monochrome Xsolla base icon that inherits the current text
 * color. SVGs are drawn as CSS masks so `color` (default `currentColor`) tints
 * them. Point `base` at the icons folder relative to the page when needed.
 */
function Icon({
  name,
  src,
  size = 24,
  color = "currentColor",
  base = "assets/icons",
  style,
  className,
  ...rest
}) {
  const url = src || `${base}/${name}.svg`;
  return /*#__PURE__*/React.createElement("span", _extends({
    role: "img",
    "aria-hidden": "true",
    className: className,
    style: {
      display: "inline-block",
      flex: "0 0 auto",
      width: typeof size === "number" ? `${size}px` : size,
      height: typeof size === "number" ? `${size}px` : size,
      backgroundColor: color,
      WebkitMaskImage: `url("${url}")`,
      maskImage: `url("${url}")`,
      WebkitMaskRepeat: "no-repeat",
      maskRepeat: "no-repeat",
      WebkitMaskPosition: "center",
      maskPosition: "center",
      WebkitMaskSize: "contain",
      maskSize: "contain",
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/display/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  brand: "var(--xui-bg-brand-primary)",
  alert: "var(--xui-bg-alert-primary)",
  success: "var(--xui-bg-success-primary)",
  warning: "var(--xui-bg-warning-primary)",
  neutral: "var(--xui-bg-neutral-primary)",
  brandExtra: "var(--xui-bg-brand-extra-primary)"
};

/**
 * Badge — small count / status indicator. Numeric `count` (dot when omitted),
 * colored by `tone`. Sits on avatars, nav items, tabs.
 */
function Badge({
  count,
  tone = "alert",
  size = "md",
  dot = false,
  max = 99,
  style,
  ...rest
}) {
  const dim = {
    sm: 8,
    md: 12,
    lg: 16,
    xl: 20
  }[size] || 12;
  const fs = {
    sm: 8,
    md: 10,
    lg: 10,
    xl: 12
  }[size] || 10;
  const isDot = dot || count == null;
  const label = typeof count === "number" && count > max ? `${max}+` : count;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      minWidth: isDot ? dim : dim + 6,
      height: isDot ? dim : dim + 6,
      padding: isDot ? 0 : "0 4px",
      background: TONES[tone] || TONES.alert,
      color: "var(--xui-content-on-alert)",
      borderRadius: 999,
      fontFamily: "var(--xui-font-body)",
      fontSize: fs,
      fontWeight: 600,
      lineHeight: 1,
      boxSizing: "border-box",
      ...style
    }
  }, rest), !isDot && label);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/display/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  xxs: 24,
  xs: 32,
  sm: 40,
  md: 48,
  lg: 56,
  xl: 64
};

/**
 * Avatar — user image, initials fallback, or icon. Circle by default; `shape="square"`
 * for rounded-square. Optional status `badge` tone in the corner.
 */
function Avatar({
  src,
  name,
  icon,
  size = "md",
  shape = "circle",
  badge,
  style,
  ...rest
}) {
  const dim = SIZES[size] || 48;
  const radius = shape === "square" ? dim >= 56 ? 8 : dim >= 40 ? 6 : 4 : 999;
  const initials = name ? name.trim().split(/\s+/).slice(0, 2).map(w => w[0]).join("").toUpperCase() : "";
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      position: "relative",
      display: "inline-flex",
      flex: "0 0 auto",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      width: dim,
      height: dim,
      borderRadius: radius,
      overflow: "hidden",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      background: "var(--xui-bg-neutral-secondary)",
      color: "var(--xui-content-primary)",
      fontFamily: "var(--xui-font-body)",
      fontWeight: 600,
      fontSize: dim * 0.38,
      border: "1px solid var(--xui-border-secondary)",
      boxSizing: "border-box"
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name || "",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }) : icon ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      width: dim * 0.5,
      height: dim * 0.5
    }
  }, icon) : initials), badge && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      right: shape === "square" ? -3 : -1,
      top: shape === "square" ? -3 : -1
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    dot: true,
    tone: badge,
    size: size === "xl" || size === "lg" ? "md" : "sm"
  })));
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/display/Divider.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Divider — thin rule for separating content. Horizontal or vertical; optional centered label. */
function Divider({
  orientation = "horizontal",
  label,
  style,
  ...rest
}) {
  if (orientation === "vertical") {
    return /*#__PURE__*/React.createElement("span", _extends({
      role: "separator",
      "aria-orientation": "vertical",
      style: {
        display: "inline-block",
        width: 1,
        alignSelf: "stretch",
        background: "var(--xui-border-secondary)",
        ...style
      }
    }, rest));
  }
  if (label) {
    return /*#__PURE__*/React.createElement("div", _extends({
      role: "separator",
      style: {
        display: "flex",
        alignItems: "center",
        gap: 12,
        ...style
      }
    }, rest), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        height: 1,
        background: "var(--xui-border-secondary)"
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--xui-font-body)",
        fontSize: 12,
        color: "var(--xui-content-tertiary)",
        whiteSpace: "nowrap"
      }
    }, label), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        height: 1,
        background: "var(--xui-border-secondary)"
      }
    }));
  }
  return /*#__PURE__*/React.createElement("hr", _extends({
    role: "separator",
    style: {
      border: 0,
      height: 1,
      background: "var(--xui-border-secondary)",
      margin: 0,
      width: "100%",
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Divider.jsx", error: String((e && e.message) || e) }); }

// components/display/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  xs: {
    h: 20,
    px: 6,
    fs: 12,
    gap: 4,
    r: "var(--xui-radius-50)"
  },
  sm: {
    h: 24,
    px: 8,
    fs: 14,
    gap: 4,
    r: "var(--xui-radius-50)"
  },
  md: {
    h: 32,
    px: 10,
    fs: 16,
    gap: 4,
    r: "var(--xui-radius-75)"
  },
  lg: {
    h: 40,
    px: 12,
    fs: 18,
    gap: 6,
    r: "var(--xui-radius-100)"
  },
  xl: {
    h: 48,
    px: 14,
    fs: 20,
    gap: 6,
    r: "var(--xui-radius-100)"
  }
};
const TONES = {
  neutral: {
    bg: "var(--xui-overlay-neutral)",
    fg: "var(--xui-content-primary)",
    bd: "var(--xui-border-secondary)"
  },
  brand: {
    bg: "var(--xui-overlay-brand)",
    fg: "var(--xui-content-brand-primary)",
    bd: "var(--xui-border-brand)"
  },
  brandExtra: {
    bg: "var(--xui-overlay-brand-extra)",
    fg: "var(--xui-content-brand-extra-primary)",
    bd: "var(--xui-border-brand-extra)"
  },
  success: {
    bg: "var(--xui-overlay-success)",
    fg: "var(--xui-content-success-primary)",
    bd: "var(--xui-border-success)"
  },
  warning: {
    bg: "var(--xui-overlay-warning)",
    fg: "var(--xui-content-warning-primary)",
    bd: "var(--xui-border-warning)"
  },
  alert: {
    bg: "var(--xui-overlay-alert)",
    fg: "var(--xui-content-alert-primary)",
    bd: "var(--xui-border-alert)"
  }
};

/** Tag — compact metadata pill. Tones map to semantic overlay colors; optional border/icons. */
function Tag({
  children,
  tone = "neutral",
  size = "md",
  iconLeft,
  iconRight,
  outlined = false,
  onRemove,
  style,
  ...rest
}) {
  const s = SIZES[size] || SIZES.md;
  const t = TONES[tone] || TONES.neutral;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: s.gap,
      height: s.h,
      padding: `0 ${s.px}px`,
      fontFamily: "var(--xui-font-body)",
      fontSize: s.fs,
      fontWeight: 500,
      color: t.fg,
      background: outlined ? "transparent" : t.bg,
      border: `1px solid ${outlined ? t.bd : "transparent"}`,
      borderRadius: s.r,
      whiteSpace: "nowrap",
      boxSizing: "border-box",
      ...style
    }
  }, rest), iconLeft && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      width: s.fs,
      height: s.fs
    }
  }, iconLeft), children, iconRight && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      width: s.fs,
      height: s.fs
    }
  }, iconRight), onRemove && /*#__PURE__*/React.createElement("button", {
    onClick: onRemove,
    "aria-label": "Remove",
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      background: "none",
      border: 0,
      padding: 0,
      cursor: "pointer",
      color: "inherit",
      opacity: 0.7
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: s.fs - 2,
    height: s.fs - 2,
    viewBox: "0 0 20 20",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 5L15 15M15 5L5 15",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round"
  }))));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Tag.jsx", error: String((e && e.message) || e) }); }

// components/display/Typography.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const VARIANTS = {
  display: {
    size: "var(--xui-display-size)",
    lh: "var(--xui-display-lh)",
    weight: "var(--xui-display-weight)",
    family: "var(--xui-font-heading)"
  },
  h1: {
    size: "var(--xui-h1-size)",
    lh: "var(--xui-h1-lh)",
    weight: "var(--xui-h1-weight)",
    family: "var(--xui-font-heading)"
  },
  h2: {
    size: "var(--xui-h2-size)",
    lh: "var(--xui-h2-lh)",
    weight: "var(--xui-h2-weight)",
    family: "var(--xui-font-heading)"
  },
  h3: {
    size: "var(--xui-h3-size)",
    lh: "var(--xui-h3-lh)",
    weight: "var(--xui-h3-weight)",
    family: "var(--xui-font-heading)"
  },
  h4: {
    size: "var(--xui-h4-size)",
    lh: "var(--xui-h4-lh)",
    weight: "var(--xui-h4-weight)",
    family: "var(--xui-font-heading)"
  },
  h5: {
    size: "var(--xui-h5-size)",
    lh: "var(--xui-h5-lh)",
    weight: "var(--xui-h5-weight)",
    family: "var(--xui-font-heading)"
  },
  bodyLg: {
    size: "var(--xui-body-lg-size)",
    lh: "var(--xui-body-lg-lh)",
    weight: 400,
    family: "var(--xui-font-body)"
  },
  bodyMd: {
    size: "var(--xui-body-md-size)",
    lh: "var(--xui-body-md-lh)",
    weight: 400,
    family: "var(--xui-font-body)"
  },
  bodySm: {
    size: "var(--xui-body-sm-size)",
    lh: "var(--xui-body-sm-lh)",
    weight: 400,
    family: "var(--xui-font-body)"
  },
  bodyXs: {
    size: "var(--xui-body-xs-size)",
    lh: "var(--xui-body-xs-lh)",
    weight: 400,
    family: "var(--xui-font-body)"
  },
  bodyXxs: {
    size: "var(--xui-body-xxs-size)",
    lh: "var(--xui-body-xxs-lh)",
    weight: 400,
    family: "var(--xui-font-body)"
  }
};
const DEFAULT_TAG = {
  display: "h1",
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  bodyLg: "p",
  bodyMd: "p",
  bodySm: "p",
  bodyXs: "p",
  bodyXxs: "span"
};

/**
 * Typography — renders text at any XUI type-scale variant (B2C context).
 * `accent` bumps body weight to 500; `paragraph` uses looser line-height.
 */
function Typography({
  variant = "bodyMd",
  as,
  accent = false,
  paragraph = false,
  color = "var(--xui-content-primary)",
  children,
  style,
  ...rest
}) {
  const v = VARIANTS[variant] || VARIANTS.bodyMd;
  const Tag = as || DEFAULT_TAG[variant] || "span";
  const isBody = variant.startsWith("body");
  const lhPara = paragraph && isBody ? `var(--xui-body-${variant.replace("body", "").toLowerCase()}-lh-para)` : null;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: {
      margin: 0,
      fontFamily: v.family,
      fontSize: v.size,
      lineHeight: lhPara || v.lh,
      fontWeight: accent && isBody ? 500 : v.weight,
      color,
      textWrap: "pretty",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Typography });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Typography.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Notification.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  brand: {
    fg: "var(--xui-content-brand-primary)",
    bd: "var(--xui-border-brand)"
  },
  success: {
    fg: "var(--xui-content-success-primary)",
    bd: "var(--xui-border-success)"
  },
  warning: {
    fg: "var(--xui-content-warning-primary)",
    bd: "var(--xui-border-warning)"
  },
  alert: {
    fg: "var(--xui-content-alert-primary)",
    bd: "var(--xui-border-alert)"
  },
  neutral: {
    fg: "var(--xui-content-primary)",
    bd: "var(--xui-border-secondary)"
  }
};
const ICONS = {
  success: "M4 10.5L8 14.5L16 6",
  warning: "M10 5V11 M10 14.5V15",
  alert: "M6 6L14 14 M14 6L6 14",
  brand: "M10 5V11 M10 14.5V15",
  neutral: "M10 5V11 M10 14.5V15"
};

/**
 * Notification — inline or toast message with tone, title, message and optional action.
 * `type="toast"` is fixed-width; `type="inline"` fills its container.
 */
function Notification({
  tone = "brand",
  type = "inline",
  title,
  message,
  onClose,
  action,
  style,
  ...rest
}) {
  const t = TONES[tone] || TONES.brand;
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "status",
    style: {
      display: "flex",
      gap: 12,
      alignItems: "flex-start",
      boxSizing: "border-box",
      width: type === "toast" ? 400 : "100%",
      maxWidth: "100%",
      padding: 16,
      background: "var(--xui-bg-primary)",
      border: `1px solid ${t.bd}`,
      borderRadius: type === "toast" ? "var(--xui-radius-50)" : "var(--xui-radius-100)",
      boxShadow: type === "toast" ? "var(--xui-shadow-popover)" : "none",
      fontFamily: "var(--xui-font-body)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: "0 0 auto",
      width: 32,
      height: 32,
      borderRadius: 999,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      background: "var(--xui-overlay-mono)",
      color: t.fg
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 20 20",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: ICONS[tone] || ICONS.brand,
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 15,
      color: "var(--xui-content-primary)",
      marginBottom: message ? 2 : 0
    }
  }, title), message && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: "var(--xui-content-secondary)",
      lineHeight: 1.4
    }
  }, message), action && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12
    }
  }, action)), onClose && /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Dismiss",
    style: {
      flex: "0 0 auto",
      background: "none",
      border: 0,
      cursor: "pointer",
      color: "var(--xui-content-tertiary)",
      padding: 2,
      display: "inline-flex"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 20 20",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 5L15 15M15 5L5 15",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round"
  }))));
}
Object.assign(__ds_scope, { Notification });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Notification.jsx", error: String((e && e.message) || e) }); }

// components/feedback/ProgressBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  brand: "var(--xui-bg-brand-primary)",
  success: "var(--xui-bg-success-primary)",
  warning: "var(--xui-bg-warning-primary)",
  alert: "var(--xui-bg-alert-primary)",
  neutral: "var(--xui-content-primary)",
  brandExtra: "var(--xui-bg-brand-extra-primary)"
};
const HEIGHTS = {
  xs: 2,
  sm: 4,
  md: 6,
  lg: 8,
  xl: 10
};

/** ProgressBar — determinate track (0–100). Optional label + value readout. */
function ProgressBar({
  value = 0,
  tone = "brand",
  size = "md",
  label,
  showValue = false,
  style,
  ...rest
}) {
  const h = HEIGHTS[size] || 6;
  const pct = Math.max(0, Math.min(100, value));
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      fontFamily: "var(--xui-font-body)",
      ...style
    }
  }, rest), (label || showValue) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: 6,
      fontSize: 13,
      color: "var(--xui-content-secondary)"
    }
  }, /*#__PURE__*/React.createElement("span", null, label), showValue && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--xui-content-primary)",
      fontWeight: 500
    }
  }, Math.round(pct), "%")), /*#__PURE__*/React.createElement("div", {
    role: "progressbar",
    "aria-valuenow": pct,
    "aria-valuemin": 0,
    "aria-valuemax": 100,
    style: {
      width: "100%",
      height: h,
      borderRadius: 999,
      background: "var(--xui-overlay-neutral)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: `${pct}%`,
      height: "100%",
      borderRadius: 999,
      background: TONES[tone] || TONES.brand,
      transition: "width .3s ease"
    }
  })));
}
Object.assign(__ds_scope, { ProgressBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/ProgressBar.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Spinner.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  xs: 8,
  sm: 16,
  md: 24,
  lg: 48,
  xl: 96
};
const STROKES = {
  xs: 1,
  sm: 2,
  md: 2,
  lg: 5,
  xl: 10
};

/** Spinner — indeterminate loading indicator, sized xs–xl, inherits `color`. */
function Spinner({
  size = "md",
  color = "var(--xui-content-brand-primary)",
  style,
  ...rest
}) {
  const dim = typeof size === "number" ? size : SIZES[size] || 24;
  const sw = typeof size === "number" ? Math.max(2, size / 12) : STROKES[size] || 2;
  if (typeof document !== "undefined" && !document.getElementById("xui-spin-kf")) {
    const k = document.createElement("style");
    k.id = "xui-spin-kf";
    k.textContent = "@keyframes xui-spin{to{transform:rotate(360deg)}}";
    document.head.appendChild(k);
  }
  return /*#__PURE__*/React.createElement("span", _extends({
    role: "status",
    "aria-label": "Loading",
    style: {
      display: "inline-block",
      width: dim,
      height: dim,
      borderRadius: "50%",
      border: `${sw}px solid var(--xui-overlay-neutral)`,
      borderTopColor: color,
      animation: "xui-spin .7s linear infinite",
      boxSizing: "border-box",
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Spinner });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Spinner.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Tooltip — hover/focus label positioned around its child trigger. */
function Tooltip({
  label,
  side = "top",
  children,
  style,
  ...rest
}) {
  const [show, setShow] = React.useState(false);
  const pos = {
    top: {
      bottom: "calc(100% + 8px)",
      left: "50%",
      transform: "translateX(-50%)"
    },
    bottom: {
      top: "calc(100% + 8px)",
      left: "50%",
      transform: "translateX(-50%)"
    },
    left: {
      right: "calc(100% + 8px)",
      top: "50%",
      transform: "translateY(-50%)"
    },
    right: {
      left: "calc(100% + 8px)",
      top: "50%",
      transform: "translateY(-50%)"
    }
  }[side];
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      position: "relative",
      display: "inline-flex"
    },
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false),
    onFocus: () => setShow(true),
    onBlur: () => setShow(false)
  }, rest), children, show && label && /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: "absolute",
      zIndex: 60,
      ...pos,
      whiteSpace: "nowrap",
      background: "var(--xui-content-primary)",
      color: "var(--xui-bg-primary)",
      fontFamily: "var(--xui-font-body)",
      fontSize: 12,
      fontWeight: 500,
      padding: "6px 8px",
      borderRadius: 6,
      boxShadow: "var(--xui-shadow-popover)",
      pointerEvents: "none",
      ...style
    }
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Link.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
let injected = false;
function ensureStyles() {
  if (injected || typeof document === "undefined") return;
  injected = true;
  const el = document.createElement("style");
  el.id = "xui-link-styles";
  el.textContent = `
.xui-link{font-family:var(--xui-font-body);cursor:pointer;text-decoration:none;display:inline-flex;align-items:center;gap:4px;transition:color .15s ease}
.xui-link--brand{color:var(--xui-link-primary)}
.xui-link--brand:hover{color:var(--xui-link-primary-hover);text-decoration:underline}
.xui-link--brandExtra{color:var(--xui-link-secondary)}
.xui-link--brandExtra:hover{color:var(--xui-link-secondary-hover);text-decoration:underline}
.xui-link--mono{color:var(--xui-content-primary)}
.xui-link--mono:hover{text-decoration:underline}
`;
  document.head.appendChild(el);
}

/** Link — inline text link. Tones brand (default) / brandExtra / mono. */
function Link({
  tone = "brand",
  href = "#",
  children,
  iconRight,
  style,
  ...rest
}) {
  ensureStyles();
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    className: `xui-link xui-link--${tone}`,
    style: style
  }, rest), children, iconRight && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      width: 16,
      height: 16
    }
  }, iconRight));
}
Object.assign(__ds_scope, { Link });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Link.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Segmented.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: {
    h: 40,
    ih: 32,
    fs: 14,
    px: 12
  },
  md: {
    h: 48,
    ih: 40,
    fs: 16,
    px: 16
  },
  lg: {
    h: 56,
    ih: 48,
    fs: 18,
    px: 20
  },
  xl: {
    h: 64,
    ih: 56,
    fs: 20,
    px: 20
  }
};

/**
 * Segmented — pill-shaped single-select control (radio-group replacement).
 * `items` = [{value,label,icon}]; controlled via `value`/`onChange`.
 */
function Segmented({
  items = [],
  value,
  onChange,
  size = "md",
  fullWidth = false,
  style,
  ...rest
}) {
  const s = SIZES[size] || SIZES.md;
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist",
    style: {
      display: "inline-flex",
      gap: 4,
      padding: 4,
      boxSizing: "border-box",
      background: "var(--xui-control-segmented-bg)",
      border: "1px solid var(--xui-control-segmented-border)",
      borderRadius: s.h >= 48 ? 8 : 4,
      height: s.h,
      width: fullWidth ? "100%" : undefined,
      fontFamily: "var(--xui-font-body)",
      ...style
    }
  }, rest), items.map(it => {
    const active = value === it.value;
    return /*#__PURE__*/React.createElement("button", {
      key: it.value,
      role: "tab",
      "aria-selected": active,
      onClick: () => onChange && onChange(it.value),
      style: {
        appearance: "none",
        border: 0,
        cursor: "pointer",
        flex: fullWidth ? 1 : undefined,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 6,
        height: s.ih,
        padding: `0 ${s.px}px`,
        fontSize: s.fs,
        fontWeight: 500,
        borderRadius: s.ih >= 40 ? 4 : 2,
        background: active ? "var(--xui-control-segmented-bg-active)" : "transparent",
        color: active ? "var(--xui-content-primary)" : "var(--xui-content-secondary)",
        boxShadow: active ? "var(--xui-shadow-active)" : "none",
        transition: "background .15s ease,color .15s ease"
      }
    }, it.icon && /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        width: s.fs,
        height: s.fs
      }
    }, it.icon), it.label);
  }));
}
Object.assign(__ds_scope, { Segmented });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Segmented.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
let injected = false;
function ensureStyles() {
  if (injected || typeof document === "undefined") return;
  injected = true;
  const el = document.createElement("style");
  el.id = "xui-tabs-styles";
  el.textContent = `
.xui-tabs{display:flex;gap:0;font-family:var(--xui-font-body);border-bottom:1px solid var(--xui-border-secondary)}
.xui-tab{appearance:none;background:none;border:0;cursor:pointer;color:var(--xui-content-secondary);font-weight:500;position:relative;display:inline-flex;align-items:center;gap:6px;transition:color .15s ease}
.xui-tab:hover{color:var(--xui-content-primary)}
.xui-tab--active{color:var(--xui-content-primary)}
.xui-tab--active::after{content:"";position:absolute;left:0;right:0;bottom:-1px;height:2px;background:var(--xui-content-brand-primary);border-radius:2px}
`;
  document.head.appendChild(el);
}
const SIZES = {
  sm: {
    h: 40,
    fs: 14,
    px: 16
  },
  md: {
    h: 48,
    fs: 16,
    px: 20
  },
  lg: {
    h: 56,
    fs: 18,
    px: 20
  },
  xl: {
    h: 64,
    fs: 20,
    px: 20
  }
};

/** Tabs — underline tab bar. `items` = [{value,label,icon}]; controlled via `value`/`onChange`. */
function Tabs({
  items = [],
  value,
  onChange,
  size = "md",
  style,
  ...rest
}) {
  ensureStyles();
  const s = SIZES[size] || SIZES.md;
  return /*#__PURE__*/React.createElement("div", _extends({
    className: "xui-tabs",
    role: "tablist",
    style: style
  }, rest), items.map(it => /*#__PURE__*/React.createElement("button", {
    key: it.value,
    role: "tab",
    "aria-selected": value === it.value,
    className: `xui-tab${value === it.value ? " xui-tab--active" : ""}`,
    style: {
      height: s.h,
      fontSize: s.fs,
      padding: `0 ${s.px}px`
    },
    onClick: () => onChange && onChange(it.value)
  }, it.icon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      width: s.fs,
      height: s.fs
    }
  }, it.icon), it.label)));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/storefront/GameCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const RATIOS = {
  "16:9": 16 / 9,
  "1:1": 1,
  "2:3": 2 / 3,
  "3:2": 3 / 2,
  "4:3": 4 / 3,
  "9:16": 9 / 16
};

/**
 * GameCard — B2C storefront card: cover artwork with four overlay tag zones,
 * a title/subtitle footer, and an optional action button. Mirrors @xsolla/xui-game-card.
 */
function GameCard({
  image,
  imageAlt,
  title,
  subtitle,
  imageRatio = "2:3",
  platform = "mobile",
  buttonText,
  onButtonPress,
  topLeft,
  topRight,
  bottomLeft,
  bottomRight,
  style,
  ...rest
}) {
  const ratio = RATIOS[imageRatio] || RATIOS["2:3"];
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      flexDirection: "column",
      background: "var(--xui-bg-primary)",
      borderRadius: "var(--xui-radius-card)",
      overflow: "hidden",
      border: "1px solid var(--xui-border-secondary)",
      boxShadow: "var(--xui-shadow-surface)",
      fontFamily: "var(--xui-font-body)",
      width: "100%",
      boxSizing: "border-box",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: "100%",
      aspectRatio: String(ratio),
      background: "var(--xui-bg-neutral-secondary)"
    }
  }, image ? /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: imageAlt || title || "",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "var(--xui-content-tertiary)",
      fontSize: 12
    }
  }, "No artwork"), topLeft && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 8,
      left: 8
    }
  }, topLeft), topRight && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 8,
      right: 8
    }
  }, topRight), bottomLeft && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      bottom: 8,
      left: 8
    }
  }, bottomLeft), bottomRight && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      bottom: 8,
      right: 8
    }
  }, bottomRight)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: platform === "desktop" ? 16 : 12,
      display: "flex",
      flexDirection: "column",
      gap: buttonText ? 12 : 2
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--xui-font-heading)",
      fontWeight: 700,
      fontSize: 16,
      color: "var(--xui-content-primary)",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis"
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--xui-content-tertiary)",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      marginTop: 2
    }
  }, subtitle)), buttonText && /*#__PURE__*/React.createElement("button", {
    onClick: onButtonPress,
    style: {
      appearance: "none",
      border: 0,
      cursor: "pointer",
      width: "100%",
      height: 40,
      borderRadius: "var(--xui-radius-button)",
      background: "var(--xui-control-brand-primary-bg)",
      color: "var(--xui-control-brand-text-primary)",
      fontFamily: "var(--xui-font-body)",
      fontWeight: 500,
      fontSize: 14
    }
  }, buttonText)));
}
Object.assign(__ds_scope, { GameCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/storefront/GameCard.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.RadioGroup = __ds_scope.RadioGroup;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Divider = __ds_scope.Divider;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Typography = __ds_scope.Typography;

__ds_ns.Notification = __ds_scope.Notification;

__ds_ns.ProgressBar = __ds_scope.ProgressBar;

__ds_ns.Spinner = __ds_scope.Spinner;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Link = __ds_scope.Link;

__ds_ns.Segmented = __ds_scope.Segmented;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.GameCard = __ds_scope.GameCard;

})();
