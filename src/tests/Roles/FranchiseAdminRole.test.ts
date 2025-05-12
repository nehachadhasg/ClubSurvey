import { test, expect, chromium } from '@playwright/test';
import { FRANCHISE_ADMIN_TAG } from '../../../constants/tags';
import { ClubSurveyLogin } from '../../pages/ClubSurveyLogin';
import fs from 'fs';
import path from 'path';



test(`${FRANCHISE_ADMIN_TAG} Franchise Admin Test`, async ({ page }) => {
    // Franchise Admin-specific test logic
});