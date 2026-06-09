"use client";

import { useState } from "react";
import { AlertCircle, Plus, Save } from "lucide-react";

const initialValues = {
  company: "",
  role: "",
  location: "",
  link: "",
  source: "",
  score: "",
  status: "Saved",
};

const statuses = ["Saved", "Applied", "Interview", "Offer", "Rejected"];

export function AddInternshipForm({ onCreated }) {
  const [values, setValues] = useState(initialValues);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  function updateField(event) {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/internships", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const payload = await response.json();

      if (!response.ok) {
        throw new Error(payload.error || "Unable to save internship.");
      }

      onCreated(payload.data);
      setValues(initialValues);
    } catch (caughtError) {
      setError(caughtError.message || "Unable to save internship.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-lg border border-ink-950/10 bg-white p-5 shadow-soft"
    >
      <div className="mb-5 flex items-center gap-3">
        <span className="grid h-10 w-10 place-items-center rounded-md bg-meadow-100 text-meadow-600">
          <Plus size={20} aria-hidden="true" />
        </span>
        <div>
          <h2 className="text-base font-semibold text-ink-950">Add internship</h2>
          <p className="text-sm text-ink-500">Company and role are required.</p>
        </div>
      </div>

      {error ? (
        <div className="mb-4 flex items-start gap-3 rounded-md border border-coral-500/25 bg-coral-100 p-3 text-sm text-ink-900">
          <AlertCircle className="mt-0.5 shrink-0 text-coral-500" size={17} aria-hidden="true" />
          <p>{error}</p>
        </div>
      ) : null}

      <div className="grid gap-4">
        <Field label="Company" name="company" value={values.company} onChange={updateField} required />
        <Field label="Role" name="role" value={values.role} onChange={updateField} required />
        <Field label="Location" name="location" value={values.location} onChange={updateField} />
        <Field label="Application link" name="link" value={values.link} onChange={updateField} type="url" />
        <Field label="Source" name="source" value={values.source} onChange={updateField} />

        <div className="grid gap-2">
          <label htmlFor="score" className="text-sm font-semibold text-ink-900">
            Score
          </label>
          <input
            id="score"
            name="score"
            type="number"
            min="0"
            max="100"
            value={values.score}
            onChange={updateField}
            className="h-11 rounded-md border border-ink-950/15 bg-paper px-3 text-sm text-ink-950 outline-none transition focus:border-meadow-500 focus:ring-2 focus:ring-meadow-100"
            placeholder="Optional"
          />
        </div>

        <div className="grid gap-2">
          <label htmlFor="status" className="text-sm font-semibold text-ink-900">
            Status
          </label>
          <select
            id="status"
            name="status"
            value={values.status}
            onChange={updateField}
            className="h-11 rounded-md border border-ink-950/15 bg-paper px-3 text-sm text-ink-950 outline-none transition focus:border-meadow-500 focus:ring-2 focus:ring-meadow-100"
          >
            {statuses.map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>
        </div>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-5 inline-flex h-11 w-full items-center justify-center gap-2 rounded-md bg-ink-950 px-4 text-sm font-semibold text-white transition hover:bg-ink-900 disabled:cursor-not-allowed disabled:opacity-70"
      >
        <Save size={17} aria-hidden="true" />
        {isSubmitting ? "Saving..." : "Save internship"}
      </button>
    </form>
  );
}

function Field({ label, name, value, onChange, type = "text", required = false }) {
  return (
    <div className="grid gap-2">
      <label htmlFor={name} className="text-sm font-semibold text-ink-900">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        className="h-11 rounded-md border border-ink-950/15 bg-paper px-3 text-sm text-ink-950 outline-none transition placeholder:text-ink-500 focus:border-meadow-500 focus:ring-2 focus:ring-meadow-100"
        placeholder={label}
      />
    </div>
  );
}
