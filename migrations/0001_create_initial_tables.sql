-- Migration number: 0001 	 2026-04-18T21:15:29.742Z
CREATE TABLE IF NOT EXISTS newsletter_subscriptions (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  email TEXT NOT NULL UNIQUE,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS bookings (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  form_type TEXT NOT NULL, -- 'standard' or 'custom'
  org_name TEXT NOT NULL,
  org_type TEXT NOT NULL,
  contact_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  group_size TEXT,
  preferred_dates TEXT,
  duration TEXT,
  accommodation TEXT,
  language TEXT,
  -- Flexible fields stored as JSON
  interests TEXT, 
  special_requirements TEXT,
  dietary_restrictions TEXT,
  budget_range TEXT,
  additional_notes TEXT,
  newsletter_opt_in INTEGER DEFAULT 0,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);