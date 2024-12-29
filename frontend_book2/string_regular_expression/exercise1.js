function fmt([label, unit], price) {
    return `${label}${price.toLocaleString().padStart(8)}${unit}`;
}
