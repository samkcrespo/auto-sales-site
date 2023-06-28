class User < ApplicationRecord
    has_secure_password

    validates :isAdmin, inclusion: { in: [true, false] }
    default :admin, false
end
