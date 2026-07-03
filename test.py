"""Test Google Sheet — AI Video Bot service account."""
import gspread

client = gspread.service_account(filename="credentials/google.json")

# Mở sheet CAP theo tên file (hoặc đổi thành open_by_key nếu cần)
sheet = client.open("CAP")
data = sheet.sheet1.get_all_values()

print(data)
